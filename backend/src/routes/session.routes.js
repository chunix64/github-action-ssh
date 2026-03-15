import express from "express";
import {
	createTunnel,
  getTunnels,
  sessionTime,
} from "../controllers/session.controller.js";

const router = express.Router();

router.get("/time", sessionTime);
router.get("/tunnels", getTunnels);
router.post("/tunnels", createTunnel);

export default router;
