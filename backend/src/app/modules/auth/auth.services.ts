import type { Response } from "express"
import { User } from "../user/user.model.js"
import type { IAuth } from "./auth.interface.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
const login = async (payload: IAuth, res: Response) => {

    const { email, password } = payload

    const isUserExist = await User.findOne({ email })

    if (!isUserExist) {
        res.status(400).json(
            {
                status: "error",
                message: "email dosen't match"
            }
        )
    }

    const isPasswordMatch = await bcrypt.compare(password, (isUserExist?.password as string));


    if (!isPasswordMatch) {
        res.status(400).json(
            {
                status: "error",
                message: "password dosen't match"
            }
        )
    }


    const tokenPayload = {
        name: isUserExist?.name,
        email: isUserExist?.email,
        avater: isUserExist?.avatar,
        isVerified: isUserExist?.isVerified,
        isPremium: isUserExist?.isPremium
    }



    const accessToken = jwt.sign(tokenPayload, "secret", {
        expiresIn: "1h"
    })

    res.cookie("accesstoken", accessToken)





    return {
        accessToken,
    }

}



export const AuthServices = {
    login
}