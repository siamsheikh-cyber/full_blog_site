import dotenv from "dotenv"

dotenv.config()




const EnvFn = () => {
    const requireEnv = [
        "PORT"
    ]

    requireEnv.forEach((test: string) => {
        if (!process.env[test])
            throw new Error(`Your ${test} is missing`)
    })

    return {
        PORT: process.env.PORT
    }
}


export const setenv = EnvFn()