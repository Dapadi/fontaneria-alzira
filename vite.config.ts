import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        servicios: resolve(__dirname, 'servicios/index.html'),
        'servicios-reparacion-fugas': resolve(__dirname, 'servicios/reparacion-fugas/index.html'),
        'servicios-desatascos': resolve(__dirname, 'servicios/desatascos/index.html'),
        'servicios-instalaciones-fontaneria': resolve(__dirname, 'servicios/instalaciones-fontaneria/index.html'),
        'servicios-reformas-banos': resolve(__dirname, 'servicios/reformas-banos/index.html'),
        'servicios-mantenimiento': resolve(__dirname, 'servicios/mantenimiento/index.html'),
        zonas: resolve(__dirname, 'zonas/index.html'),
        'zonas-alzira': resolve(__dirname, 'zonas/alzira/index.html'),
        'zonas-carcaixent': resolve(__dirname, 'zonas/carcaixent/index.html'),
        'zonas-algemesi': resolve(__dirname, 'zonas/algemesi/index.html'),
        'zonas-alberic': resolve(__dirname, 'zonas/alberic/index.html'),
        trabajos: resolve(__dirname, 'trabajos/index.html'),
        'sobre-nosotros': resolve(__dirname, 'sobre-nosotros/index.html'),
        contacto: resolve(__dirname, 'contacto/index.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        'aviso-legal': resolve(__dirname, 'aviso-legal/index.html'),
        privacidad: resolve(__dirname, 'privacidad/index.html'),
        cookies: resolve(__dirname, 'cookies/index.html')
      }
    }
  }
});
