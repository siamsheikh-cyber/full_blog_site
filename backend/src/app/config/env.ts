import dotenv from "dotenv";

dotenv.config();

type EnvType = {
    PORT: string;
    DB_URI: string;
    EMAIL: {
        SMPT_HOST: string;
        SMPT_PORT: string;
        SMPT_USERNAME: string;
        SMPT_PASS: string;
    },
    PAYMENT: {
        PAYMENT_BACKEND_SUCCESS_URL: string;
        PAYMENT_BACKEND_FAIL_URL: string;
        PAYMENT_BACKEND_CANCEL_URL: string;
    }
}

const envVarsFn = (): EnvType => {
    const requiredEnvVariables: string[] = [
        "PORT",
        "DB_URI",
        "SMPT_USERNAME",
        "SMPT_PASS",
        "PAYMENT_BACKEND_CANCEL_URL",
        "PAYMENT_BACKEND_FAIL_URL",
        "PAYMENT_BACKEND_SUCCESS_URL",
    ];

    requiredEnvVariables.forEach((key: string) => {
        if (!process.env[key]) {
            throw new Error(`Missing required environment variable ${key}`);
        }
    })

    return {
        PORT: process.env.PORT as string,
        DB_URI: process.env.DB_URI as string,
        EMAIL: {
            SMPT_HOST: process.env.SMPT_HOST as string,
            SMPT_PORT: process.env.SMPT_PORT as string,
            SMPT_USERNAME: process.env.SMPT_USERNAME as string,
            SMPT_PASS: process.env.SMPT_PASS as string,
        },
        PAYMENT: {
            PAYMENT_BACKEND_SUCCESS_URL: process.env.PAYMENT_BACKEND_SUCCESS_URL as string,
            PAYMENT_BACKEND_FAIL_URL: process.env.PAYMENT_BACKEND_FAIL_URL as string,
            PAYMENT_BACKEND_CANCEL_URL: process.env.PAYMENT_BACKEND_CANCEL_URL as string,
        }
    };
}


export const envVars = envVarsFn();

