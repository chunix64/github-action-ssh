import { spawn } from "node:child_process";
import os from "node:os";
import si from "systeminformation";

export async function getCpuInfo() {
  const cpuLoad = await si.currentLoad();

  return {
    cores: cpuLoad.cpus.length,
    averageUsage: cpuLoad.currentLoad,
    perCore: cpuLoad.cpus.map((c) => ({
      usage: c.load,
    })),
  };
}

export async function getMemoryInfo() {
  const mem = await si.mem();

  return {
    ram: {
      total: mem.total,
      used: mem.active,
      free: mem.available,
      percent: (mem.active / mem.total) * 100,
    },
    swap: {
      total: mem.swaptotal,
      used: mem.swapused,
      free: mem.swapfree,
      percent: mem.swaptotal ? (mem.swapused / mem.swaptotal) * 100 : 0,
    },
  };
}

export async function getDiskInfo() {
  const disks = await si.fsSize();

  const rootDisk = disks.find((d) => d.mount === "/") || disks[0];

  return {
    total: rootDisk.size,
    used: rootDisk.used,
    free: rootDisk.size - rootDisk.used,
    percent: rootDisk.use,
  };
}

export async function isServiceRunning(name, strict = false) {
  const isWindows = os.platform() === "win32";

  let cmd;
  let args;

  if (isWindows) {
    cmd = "tasklist";
    args = [];
  } else {
    cmd = "pgrep";
    args = strict ? ["-x", name] : [name];
  }

  const output = await new Promise((resolve, reject) => {
    const p = spawn(cmd, args);

    let data = "";

    p.stdout.on("data", (chunk) => (data += chunk));
    p.on("error", reject);
    p.on("close", () => resolve(data));
  });

  if (isWindows) {
    return output.toLowerCase().includes(name.toLowerCase());
  }

  return output.trim().length > 0;
}
