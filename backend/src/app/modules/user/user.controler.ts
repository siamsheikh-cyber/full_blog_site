import type { NextFunction, Request, Response } from "express"
import httpstatus from "http-status-codes"
import { User } from "./user.model.js"








const getUser = (req: Request, res: Response, next: NextFunction) => {
    res.status(httpstatus.OK).json(
        {
            status: "success",
            message: "all user retrisvet successfully"
        }
    )
}



const createUser = async (req: Request, res: Response, next: NextFunction) => {

    try {
        await User.insertOne(req.body)
    } catch (error) {
        console.log(error);
        // next(error)

    }




    res.status(httpstatus.CREATED).json(
        {
            status: "success",
            message: " user create successfull"
        }
    )
}


export const userControler = {
    getUser,
    createUser,
}