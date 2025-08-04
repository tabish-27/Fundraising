// routes/userRoutes.js

import express from "express";
import { getUserData, getRewards } from "../controllers/userController.js";

const router = express.Router();

router.get("/user", getUserData);
router.get("/rewards", getRewards);

export default router;
