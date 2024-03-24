type EmailAddress = {
    email_address: string;
    id: string;
    linked_to: any;
    object: string;
    verification: {
      status: string;
      strategy: string;
    }
}

export type PayloadUser = {
    data: {
        backup_code_enabled: boolean;
        banned: boolean;
        create_organization_enabled: boolean;
        created_at: number;
        delete_self_enabled: boolean;
        email_addresses: EmailAddress[],
        external_accounts: any;
        external_id?: any;
        first_name: string;
        has_image: boolean;
        id: string;
        image_url: string;
        last_active_at: number;
        last_name: string;
        last_sign_in_at: any;
        locked: boolean;
        lockout_expires_in_seconds: any;
        object: string;
        passkeys: any;
        password_enabled: boolean;
        phone_numbers: any;
        primary_email_address_id: string;
        primary_phone_number_id?: any;
        primary_web3_wallet_id?: any;
        private_metadata: any;
        profile_image_url: string;
        public_metadata: any;
        saml_accounts: any;
        totp_enabled: boolean;
        two_factor_enabled: boolean;
        unsafe_metadata: any;
        updated_at: number;
        username?: any;
        verification_attempts_remaining: number;
        web3_wallets: any;
    },
    object: string;
    type: string;
}