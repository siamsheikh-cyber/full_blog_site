import { Router } from "express";
import { UserRoute } from "../modules/user/user.route.js";
import { AuthRoute } from "../modules/auth/auth.route.js";
import { paymentRoute } from "../modules/payment/payment.route.js";

const router = Router();

interface IRoute {
    path: string;
    route: Router;
}

const routeList: IRoute[] = [
    {
        path: "/user",
        route: UserRoute,
    },
    {
        path: "/auth",
        route: AuthRoute,
    },
    {
        path: "/payment",
        route: paymentRoute,
    }
];


routeList.forEach(route => {
    router.use(route.path, route.route)
})

export default router;
