import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import db from '@/lib/db'
import { PayloadUser } from '@/types/clerkPayload'

export async function POST(req: Request) {

    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

    if (!WEBHOOK_SECRET) {
        throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
    }

    // Get the headers
    const headerPayload = headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error occured -- no svix headers', {
            status: 400
        })
    }

    // Get the body
    const payload = await req.json()
    const body = JSON.stringify(payload);
    const user: PayloadUser = payload;
    // Create a new Svix instance with your secret.
    const wh = new Webhook(WEBHOOK_SECRET);

    let evt: WebhookEvent

    // Verify the payload with the headers
    try {
        evt = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        }) as WebhookEvent
    } catch (err) {
        console.error('Error verifying webhook:', err);
        return new Response('Error occured', {
            status: 400
        })
    }

    const eventType = evt;

    await HandleAuthEvents(eventType, user);

    // if (eventType === "user.created") {
    //     const data = {
    //         email: user.data.email_addresses[0].email_address,
    //         name: `${user.data.first_name} ${user.data.last_name}`,
    //         userId: user.data.id,
    //         profileImage: user.data.profile_image_url,
    //         userName: user.data.username
    //     }

    //     await db.user.create({
    //         data,
    //     });
    // }

    // if(eventType === "user.deleted") {
    //     await db.user.delete({
    //         where: {
    //             userId: user.data.id
    //         }
    //     });
    // }

    // if(eventType === "user.updated") {
    //     const currentUser = await db.user.findUnique({
    //         where: {
    //             id: user.data.id
    //         }
    //     });

    //     if(!currentUser) {
    //         return new Response("Usuário não encontrado", { status: 404 });
    //     }

    //     await db.user.update({
    //         where: {
    //             userId: user.data.id
    //         },
    //         data: {
    //             userName: user.data.username,
    //             profileImage: user.data.profile_image_url,
    //         }
    //     });
    // }

    return new Response('OK', { status: 200 })
}


async function HandleAuthEvents(eventType: WebhookEvent, user: PayloadUser) {
    const event = eventType.type;

    if (event === "user.created") {
        const data = {
            email: user.data.email_addresses[0].email_address,
            name: `${user.data.first_name} ${user.data.last_name}`,
            userId: user.data.id,
            profileImage: user.data.profile_image_url,
            userName: user.data.username
        }

        await db.user.create({
            data,
        });
    }

    if(event === "user.deleted") {
        await db.user.delete({
            where: {
                userId: user.data.id
            }
        });
    }

    if(event === "user.updated") {
        const currentUser = await db.user.findUnique({
            where: {
                id: user.data.id
            }
        });

        if(!currentUser) {
            return new Response("Usuário não encontrado", { status: 404 });
        }

        await db.user.update({
            where: {
                userId: user.data.id
            },
            data: {
                userName: user.data.username,
                profileImage: user.data.profile_image_url,
            }
        });
    }
}