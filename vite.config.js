import {
  defineConfig,
} from "vite"

import react from "@vitejs/plugin-react"

import {
  resolve,
} from "node:path"

export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
      },
    },
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(
          process.cwd(),
          "index.html"
        ),

        es: resolve(
          process.cwd(),
          "es/index.html"
        ),

        pressKit: resolve(
          process.cwd(),
          "press-kit/index.html"
        ),

        esPressKit: resolve(
          process.cwd(),
          "es/press-kit/index.html"
        ),
      },
    },
  },
})