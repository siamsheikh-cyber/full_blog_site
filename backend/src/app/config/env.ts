import dotenv from "dotenv"

dotenv.config()

type envType = {
    PORT: string,
    DB_URI: string
}


const EnvFn = (): envType => {
    const requireEnv = [
        "PORT",
        "DB_URI"
    ]

    requireEnv.forEach((test: string) => {
        if (!process.env[test])
            throw new Error(`Your ${test} is missing`)
    })

    return {
        PORT: process.env.PORT as string,
        DB_URI: process.env.DB_URI as string
    }
}


export const envVars = EnvFn()