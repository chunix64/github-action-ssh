import express from "express";
import {
  cpuInfo,
  memoryInfo,
  diskInfo,
  isMiniserveRunning,
} from "../controllers/system.controller.js";

const router = express.Router();

router.get("/cpu", cpuInfo);
router.get("/memory", memoryInfo);
router.get("/disk", diskInfo);

// TODO: more status values
router.get("/check/miniserve", isMiniserveRunning);

export default router;
