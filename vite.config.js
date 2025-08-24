import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'unplugin-imagemin/vite'  // ⬅️ nouveau plugin

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
        progressive: true,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      webp: {
        quality: 80,
      },
      avif: {
        quality: 60,
      },
      svgo: {
        plugins: [
          { name: 'removeViewBox' },
          { name: 'removeEmptyAttrs', active: false },
        ],
      },
      // Optionnel: meilleure perf
      // cache: true,
      // exclude: [/\.inline\./], // exemple pour exclure certains fichiers
    }, { 
      // 👉 n’active l’optimisation qu’en build
      apply: 'build'
    }),
  ],
  base: '/',
  build: {
    outDir: 'dist',
    esbuildOptions: {
      target: 'esnext',
    },
  },
  assetsInclude: ['**/*.PNG', '**/*.png', '**/*qualité*'],
}))
