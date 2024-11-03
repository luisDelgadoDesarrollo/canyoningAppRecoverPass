import { fileURLToPath, URL } from 'node:url'
import fs from 'fs'; 
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  // server: {
  //   host: true, // Escuchar en todas las interfaces de red
  //   port: 5173, // Establecer el puerto a 5173
  // },
  server: {
    https: {
      key: fs.readFileSync('/etc/letsencrypt/live/misbarrancosbdesarrollo.com/privkey.pem'),
      cert: fs.readFileSync('/etc/letsencrypt/live/misbarrancosbdesarrollo.com/fullchain.pem'),
    },
    host: '0.0.0.0',  // Permite acceso desde la red
    port: 443,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
