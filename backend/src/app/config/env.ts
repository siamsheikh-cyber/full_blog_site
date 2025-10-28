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
    }
}

const envVarsFn = (): EnvType => {
    const requiredEnvVariables: string[] = [
        "PORT",
        "DB_URI"
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
        }
    };
}


export const envVars = envVarsFn();

