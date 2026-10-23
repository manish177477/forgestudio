import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'

function copySourceImages() {
  return {
    name: 'copy-source-images',
    apply: 'build',
    closeBundle() {
      const sourceDir = resolve('assets')
      if (!existsSync(sourceDir)) return

      const outputDir = resolve('dist/assets')
      mkdirSync(outputDir, { recursive: true })
      for (const file of readdirSync(sourceDir)) {
        if (/\.(?:jpe?g|png|webp|svg)$/i.test(file)) {
          copyFileSync(resolve(sourceDir, file), resolve(outputDir, file))
        }
      }
    },
  }
}

export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react(), tailwindcss(), copySourceImages()],
})
