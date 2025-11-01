type EnvType = {
    PORT: string;
    DB_URI: string;
    EMAIL: {
        SMPT_HOST: string;
        SMPT_PORT: string;
        SMPT_USERNAME: string;
        SMPT_PASS: string;
    };
    PAYMENT: {
        PAYMENT_BACKEND_SUCCESS_URL: string;
        PAYMENT_BACKEND_FAIL_URL: string;
        PAYMENT_BACKEND_CANCEL_URL: string;
    };
};
export declare const envVars: EnvType;
export {};
//# sourceMappingURL=env.d.ts.map