import type { NextFunction, Request, Response } from "express"
import httpstatus from "http-status-codes"
const getUser = (req: Request, res: Response, next: NextFunction) => {
    res.status(httpstatus.OK).json(
        {
            status: "success",
            message: "all user retrisvet successfully"
        }
    )
}


export const userControler = {
    getUser
}