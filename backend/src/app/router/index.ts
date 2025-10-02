import { Router } from "express"
import { userRoute } from "../modules/user/user.route.js";


const router = Router()


interface Iroute {
    path: string;
    route: Router;
}

const routeList: Iroute[] = [
    {
        path: "/user",
        route: userRoute
    }
]


routeList.forEach((route) => {
    router.use(route.path, route.route)
})


export default router