import express from "express";
import cors from "cors";
import { fileURLToPath } from 'url';
import path from 'path';
import { getCpuInfo, getMemoryInfo, getDiskInfo } from "./systeminformation.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const frontendApp = express();

const port = 13636;
const frontendPort = 80;
const apiPath = "/api/v1";

app.use(cors());
frontendApp.use(cors()); 

app.get(`${apiPath}/request/cpuInfo`, async (req, res) => {
  try {
    const cpu = await getCpuInfo();
    res.json(cpu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get(`${apiPath}/request/memoryInfo`, async (req, res) => {
  try {
    const memory = await getMemoryInfo();
    res.json(memory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get(`${apiPath}/request/diskInfo`, async (req, res) => {
  try {
    const disk = await getDiskInfo();
    res.json(disk);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

frontendApp.use(express.static(path.join(__dirname, '..', 'public'))); 

app.listen(port, () => {
  console.log(`github-action-ssh-backend listening on port ${port}`);
});

frontendApp.listen(frontendPort, () => {
  console.log(`github-action-ssh-webui listening on port ${frontendPort}`);
});
