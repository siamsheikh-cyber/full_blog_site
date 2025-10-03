import dotenv from "dotenv";
dotenv.config();
const EnvFn = () => {
    const requireEnv = [
        "PORT",
        "DB_URI"
    ];
    requireEnv.forEach((test) => {
        if (!process.env[test])
            throw new Error(`Your ${test} is missing`);
    });
    return {
        PORT: process.env.PORT,
        DB_URI: process.env.DB_URI
    };
};
export const envVars = EnvFn();
//# sourceMappingURL=env.js.map