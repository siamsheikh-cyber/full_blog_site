import catchAsync from "../../utils/catchAsync.js";
import { User } from "../user/user.model.js";
import httpStatus from "http-status-codes";
import { AuthServices } from "./auth.services.js";
const login = catchAsync(async (req, res, next) => {
    const data = await AuthServices.login(req.body, res);
    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "user logged in succsesfully",
        data,
    });
});
export const AuthController = {
    login
};
//# sourceMappingURL=auth.controller.js.map