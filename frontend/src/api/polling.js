import { getCpuInfo, getMemoryInfo, getDiskInfo } from "@/api/system.js"
import config from "@/config"

let cache = null;
let lastFetch = 0;

export async function getSystemInfo() {
  const now = Date.now();

  if (!cache || now - lastFetch > config.app.system_info_interval) {
    const res = {};
    res.cpu = await getCpuInfo();
    res.memory = await getMemoryInfo();
    res.disk = await getDiskInfo();
    cache = await res;
    lastFetch = now;
  }

  return cache;
}
