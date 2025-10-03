import { Router } from "express";
import { userControler } from "./user.controler.js";
const router = Router();
router.get("/allUser", userControler.getUser);
router.post("/createUser", userControler.createUser);
export const userRoute = router;
//# sourceMappingURL=user.route.js.map