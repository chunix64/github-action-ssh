import {
  getCpuInfo,
  getMemoryInfo,
  getDiskInfo,
  getMiniserveStatus,
} from "@/api/system.js";
import config from "@/config";

let cache = null;
let lastFetch = 0;
let system_info_interval = config?.app?.system_info_interval ?? 0;

export async function getSystemInfo() {
  const now = Date.now();

  if (!cache || now - lastFetch > system_info_interval) {
    const res = {};
    res.cpu = await getCpuInfo();
    res.memory = await getMemoryInfo();
    res.disk = await getDiskInfo();
    res.miniserve = (await getMiniserveStatus()) ?? -1;
    cache = res;
    lastFetch = now;
  }

  return cache;
}
