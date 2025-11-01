import httpStatus from "http-status-codes";
import catchAsync from "../../utils/catchAsync.js";
import { PaymentService } from "./payment.service.js";
const success = catchAsync(async (req, res, next) => {
    console.log(req.query);
    const email = req.query.email;
    const updateUserInfo = await PaymentService.success(email);
    res.status(httpStatus.OK).json(updateUserInfo);
});
export const paymentController = {
    success,
};
//# sourceMappingURL=payment.controller.js.map