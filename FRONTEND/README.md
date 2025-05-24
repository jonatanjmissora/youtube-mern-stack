npm create vite@latest
bun add react-router react-hot-toast
tailwindcss 4
=========================
npm install tailwindcss @tailwindcss/vite
en vite.config.ts
  import { defineConfig } from 'vite'
  import tailwindcss from '@tailwindcss/vite'
  export default defineConfig({  plugins: [    tailwindcss(),  ],})

en index.css    @import "tailwindcss";
===========================
crear las rutas en App.tsx y en main.tsx



