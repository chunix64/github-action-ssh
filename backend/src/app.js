import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';

import router from "./routes/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const frontend = express();
const API_BASE = "/api/v1";

app.use(cors());
frontend.use(cors());

app.use(`${API_BASE}/`, router);
frontend.use(express.static(path.join(__dirname, '..', 'static')));

app.frontend = frontend;

export default app;
