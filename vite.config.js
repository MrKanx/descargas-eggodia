import { defineConfig } from "vite";

export default defineConfig({
  build: {
    // No incrustar imágenes chicas como base64 dentro del HTML: se repetirían en cada uso
    // y harían el documento más pesado (y más lento de descargar) que pedirlas por separado.
    assetsInlineLimit: 0,
  },
});
