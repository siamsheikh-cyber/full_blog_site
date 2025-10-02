import { Router } from "express";
import { userControler } from "./user.controler.js";



const router = Router()



router.get("/allUser", userControler.getUser)


export const userRoute = router
