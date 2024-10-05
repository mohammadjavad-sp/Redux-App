import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Redux-App",
  server: {
    host: true,
    port: 5173,
  },
  optimizeDeps: {
    include: ["swiper", "swiper/react"],
  },
});
