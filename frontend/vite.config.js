import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { qrcode } from 'vite-plugin-qrcode';


// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/api": "http://localhost:5000",
    }, 
  },
  plugins: [react()],
})



