import si from "systeminformation";

export async function getCpuInfo() {
  const cpuLoad = await si.currentLoad();

  return {
    cores: cpuLoad.cpus.length,
    averageUsage: cpuLoad.currentLoad,
    perCore: cpuLoad.cpus.map(c => ({
      usage: c.load
    }))
  };
}

export async function getRamInfo() {
  const mem = await si.mem();

  return {
    ram: {
      total: mem.total,
      used: mem.active,
      free: mem.available,
      percent: (mem.active / mem.total) * 100
    },
    swap: {
      total: mem.swaptotal,
      used: mem.swapused,
      free: mem.swapfree,
      percent: mem.swaptotal
        ? (mem.swapused / mem.swaptotal) * 100
        : 0
    }
  };
}

export async function getDiskInfo() {
  const disks = await si.fsSize();

  const rootDisk = disks.find(d => d.mount === "/") || disks[0];

  return {
    total: rootDisk.size,
    used: rootDisk.used,
    free: rootDisk.size - rootDisk.used,
    percent: rootDisk.use
  };
}
