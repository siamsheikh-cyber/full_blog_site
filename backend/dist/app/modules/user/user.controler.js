import httpstatus from "http-status-codes";
import { User } from "./user.model.js";
const getUser = (req, res, next) => {
    res.status(httpstatus.OK).json({
        status: "success",
        message: "all user retrisvet successfully"
    });
};
const createUser = async (req, res, next) => {
    try {
        await User.insertOne(req.body);
    }
    catch (error) {
        console.log(error);
        // next(error)
    }
    res.status(httpstatus.CREATED).json({
        status: "success",
        message: " user create successfull"
    });
};
export const userControler = {
    getUser,
    createUser,
};
//# sourceMappingURL=user.controler.js.map