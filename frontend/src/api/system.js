import { apiFetch } from "@/api/client";

export async function getCpuInfo() {
  return await apiFetch("/request/cpuInfo");
}

export async function getMemoryInfo() {
  return await apiFetch("/request/memoryInfo");
}

export async function getDiskInfo() {
  return await apiFetch("/request/diskInfo");
}

