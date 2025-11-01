import { Router } from "express";
import { CategoryController } from "./category.controller.js";
const router = Router();
router.post("/create", CategoryController.create);
router.get("/all-categories", CategoryController.allCategories);
export const CategoryRoute = router;
//# sourceMappingURL=category.route.js.map