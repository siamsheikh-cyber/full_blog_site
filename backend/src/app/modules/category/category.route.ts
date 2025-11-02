import { Router } from "express";
import { CategoryController } from "./category.controller.js";

const router = Router();

router.post("/create", CategoryController.create)
router.get("/all-categories", CategoryController.allCategories)
router.get("/vew-category/:id", CategoryController.vewCategory)

export const CategoryRoute = router;