import { apiFetch } from "@/api/client";

export function getCpuInfo() {
  return apiFetch("/request/cpuInfo");
}

export function getRamInfo() {
  return apiFetch("/request/ramInfo");
}

export function getDiskInfo() {
  return apiFetch("/request/diskInfo");
}

