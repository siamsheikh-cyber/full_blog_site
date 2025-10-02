import httpstatus from "http-status-codes";
const getUser = (req, res, next) => {
    res.status(httpstatus.OK).json({
        status: "success",
        message: "all user retrisvet successfully"
    });
};
export const userControler = {
    getUser
};
//# sourceMappingURL=user.controler.js.map