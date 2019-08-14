interface AuthConfig {
    authClientId: string;
    authDomain: string;
}

export interface AppConfig {
    environment: string;
    production: boolean;
    auth: AuthConfig;
}
