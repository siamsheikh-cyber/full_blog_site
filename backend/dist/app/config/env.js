import dotenv from "dotenv";
dotenv.config();
const envVarsFn = () => {
    const requiredEnvVariables = [
        "PORT",
        "DB_URI"
    ];
    requiredEnvVariables.forEach((key) => {
        if (!process.env[key]) {
            throw new Error(`Missing required environment variable ${key}`);
        }
    });
    return {
        PORT: process.env.PORT,
        DB_URI: process.env.DB_URI,
        EMAIL: {
            SMPT_HOST: process.env.SMPT_HOST,
            SMPT_PORT: process.env.SMPT_PORT,
            SMPT_USERNAME: process.env.SMPT_USERNAME,
            SMPT_PASS: process.env.SMPT_PASS,
        }
    };
};
export const envVars = envVarsFn();
//# sourceMappingURL=env.js.map