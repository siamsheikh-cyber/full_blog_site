import { Router } from "express";
import { userRoute } from "../modules/user/user.route.js";
const router = Router();
const routeList = [
    {
        path: "/user",
        route: userRoute
    }
];
routeList.forEach((route) => {
    router.use(route.path, route.route);
});
export default router;
//# sourceMappingURL=indes.js.map