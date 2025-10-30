import { User } from "./user.model.js";
import { encryptPassword } from "../../utils/password.js";
import { sslCommerze } from "../../utils/sslcommerze/sslCommerze.js";
const createUser = async (req, res) => {
    const createdUser = await User.insertOne({
        ...req.body,
        password: await encryptPassword(req.body.password)
    });
    // console.log(createdUser);
    const payment = await sslCommerze({
        name: createdUser.name,
        email: createdUser.email,
    });
    return {
        user: createdUser,
        payment: {
            status: payment.status,
            GatewayPageURL: payment.GatewayPageURL,
        }
    };
};
export const UserServices = {
    createUser
};
//# sourceMappingURL=user.services.js.map