import express from "express";
import { sessionTime } from "../controllers/session.controller.js";

const router = express.Router();

router.get("/time", sessionTime);

export default router;
