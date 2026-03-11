import { apiFetch } from "@/api/client";

export async function getCpuInfo() {
  return await apiFetch("/system/cpu");
}

export async function getMemoryInfo() {
  return await apiFetch("/system/memory");
}

export async function getDiskInfo() {
  return await apiFetch("/system/disk");
}

