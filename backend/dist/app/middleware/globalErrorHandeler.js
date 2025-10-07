import httpStatus from "http-status-codes";
import { check } from "zod";
function GlobalErrorHandler(err, req, res, next) {
    const statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    const reponseError = {
        status: "error",
        message: "",
        error: {}
    };
    // zod error check
    if (err.name == "ZodError") {
        const updateError = JSON.parse(err.message).map((error) => {
            return {
                path: error.path[0],
                message: error.message
            };
        });
        reponseError.message = err.name,
            reponseError.error = updateError;
    }
    res.status(statusCode).json({
        error: reponseError,
    });
}
export default GlobalErrorHandler;
//# sourceMappingURL=globalErrorHandeler.js.map