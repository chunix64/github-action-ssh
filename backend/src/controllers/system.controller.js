import {
  getCpuInfo,
  getMemoryInfo,
  getDiskInfo,
  isServiceRunning
} from "../services/system.service.js";

export async function cpuInfo(req, res) {
  try {
    res.json(await getCpuInfo());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function memoryInfo(req, res) {
  try {
    res.json(await getMemoryInfo());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function diskInfo(req, res) {
  try {
    res.json(await getDiskInfo());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function isMiniserveRunning(req, res) {
  try {
    res.json(await isServiceRunning("miniserve"));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
