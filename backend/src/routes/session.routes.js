import express from "express";
import { sessionTime, getTunnels, createTunnel } from "../controllers/session.controller.js";

const router = express.Router();

router.get("/time", sessionTime);
router.get("/tunnels", getTunnels);
router.post("/tunnels", createTunnel);

export default router;
