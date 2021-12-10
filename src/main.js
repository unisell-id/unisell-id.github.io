import { ViteSSG } from 'vite-ssg';
import { createWebHistory } from 'vue-router';
import { routes } from './routes';
import App from './App.vue';
import 'tailwindcss/tailwind.css';

export const createApp = ViteSSG(
  App,
  {
    routes,
    history: createWebHistory(),
  },
);

