import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
export const AuthCheck = (req: Request, res: Response, next: NextFunction) => {

    const accessToken = req.cookies?.accesstoken

    if (!accessToken) {
        res.status(400).json(
            {
                status: "error",
                message: 'token not found'
            }
        )
    }

    const checkToken = jwt.verify(accessToken, "secret")

    console.log(checkToken);


    next()

}