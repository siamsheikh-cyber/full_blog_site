import type { Request, Response } from "express";
import { User } from "./user.model.js";
import { encryptPassword } from "../../utils/password.js";
import { sslCommerze } from "../../utils/sslcommerze/sslCommerze.js";

const createUser = async (req: Request, res: Response) => {

    const createdUser = await User.insertOne({
        ...req.body,
        password: await encryptPassword(req.body.password)
    });

    // console.log(createdUser);

    const payment = await sslCommerze()

    console.log(payment);



    return createdUser;
}


export const UserServices = {
    createUser
}