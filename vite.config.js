import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    proxy: {
      "/api": {
        target: "https://api.centrl.ng",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  // server: {
  //   port: 3000,

  //   "/api.centrl.ng": {
  //     target: "https://api.centrl.ng",
  //     changeOrigin: true,
  //     rewrite: (path) => path.replace(/^\/api/, ""),
  //   },
  // },
});
