import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import Lenis from "lenis";

const lenis = new Lenis({
  duration: 1.2,
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const app = createApp(App)
app.mount('#app')