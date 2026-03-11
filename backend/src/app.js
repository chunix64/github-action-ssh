import express from "express";
import cors from "cors";
import path from "path";

import router from "./routes/index.js"

const app = express();
const frontend = express();
const API_BASE = "/api/v1";

app.use(cors());
frontend.use(cors());

app.use(`${API_BASE}/`, router);
frontend.use(express.static(path.resolve("static")));

app.frontend = frontend;

export default app;
