import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import router from "./routes/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const API_BASE = "/api/v1";

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.originalUrl} - ${req.ip}`);
//   next();
// });


app.use(express.json());
app.set("trust proxy", true);

app.use(cors());

app.use(`${API_BASE}/`, router);
app.use(express.static(path.join(__dirname, "..", "static")));

export default app;
