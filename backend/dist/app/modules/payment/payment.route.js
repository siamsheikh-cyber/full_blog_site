import { Router } from "express";
import { paymentController } from "./payment.controller.js";
const router = Router();
router.post('/success', paymentController.success);
export const paymentRoute = router;
//# sourceMappingURL=payment.route.js.map