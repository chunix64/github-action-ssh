import express from "express";
import {
  cpuInfo,
  memoryInfo,
  diskInfo
} from "../controllers/system.controller.js";

const router = express.Router();

router.get("/cpu", cpuInfo);
router.get("/memory", memoryInfo);
router.get("/disk", diskInfo);

export default router;
