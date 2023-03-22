import express from "express";
import { create, get, getAll, remove, update } from "../controllers/product";
const router = express.Router()
router.get("/product", getAll)
router.get("/product/:id", get)
router.delete("/product/:id", remove)
router.post("/product", create)
router.put("/product/:id", update)
export default router