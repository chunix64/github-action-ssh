const app = {
  system_info_interval: 2000,
  api_base: "/api/v1",
  api_host: import.meta.env.VITE_API_HOST ?? null,
  api_port: import.meta.env.VITE_API_PORT ?? 80,
};

export default app;
