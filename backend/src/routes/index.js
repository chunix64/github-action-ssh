import express from "express";

import sessionRoutes from "../routes/session.routes.js";
import systemRoutes from "../routes/system.routes.js";

const router = express.Router();

router.use("/system", systemRoutes);
router.use("/session", sessionRoutes);

export default router;
