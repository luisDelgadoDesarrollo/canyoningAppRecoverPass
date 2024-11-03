// router.js

import { createRouter, createWebHistory } from 'vue-router';
import RecuperarContrasena from './App.vue'; // Ajusta la ruta según tu estructura de archivos

const routes = [
    {
        path: '/:email&:token',
        name: 'RecuperarContrasena',
        component: RecuperarContrasena,
        props: route => ({
          email: route.params.email,
          token: route.params.token,
        }),
      },
  // Puedes añadir más rutas aquí según las necesidades de tu aplicación
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
