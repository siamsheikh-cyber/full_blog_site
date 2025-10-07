import type { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync.js";
import { User } from "../user/user.model.js";
import httpStatus from "http-status-codes"
import { AuthServices } from "./auth.services.js";




const login = catchAsync(async (req: Request, res: Response, next: NextFunction) => {


    const user = await AuthServices.login(req.body, res)



    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "user logged in succsesfully",
        user: user,
    })
})





export const AuthController = {
    login
}