<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { defineAsyncComponent, type Component } from 'vue';
const missingWebhook = !import.meta.env.VITE_DISCORD_WEBHOOK;
import { componentName, pageformattedName } from '@/types/route';
import Router from './components/Router.vue';
import './css/style.scss';
// import ImageCarousel from './components/ImageCarousel.vue';

const RouteComponent = defineAsyncComponent<Component>({
  loader: () => import(`./components/${componentName}.vue`),
});

const isDark = ref(false);

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    isDark.value = savedTheme === 'dark';
  } else {
    isDark.value = true;
    localStorage.setItem('theme', 'dark');
  }
  document.body.classList.toggle('dark', isDark.value);
});

function toggleTheme() {
  isDark.value = !isDark.value;
  document.body.classList.toggle('dark', isDark.value);
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
}
</script>

<template>
  <header>
    <nav class="navbar">
      <ul>
        <li><a href="https://muhaddil.github.io/simple-link-randomizer/">Página Principal</a></li>
        <li><a href="https://muhaddil.github.io/simple-link-randomizer/faq.html">FAQs</a></li>
        <li><a href="https://muhaddil.github.io/simple-link-randomizer/ascensos.html">Ascensos</a></li>
        <li>
          <button class="theme-toggle" @click="toggleTheme">
            Cambiar a {{ isDark ? 'Claro' : 'Oscuro' }}
          </button>
        </li>
      </ul>
    </nav>
    <h1 class="title">{{ pageformattedName === 'Home' ? '' : `${pageformattedName}` }}</h1>
    <div class="logo-container">
      <a href="https://discord.gg/5a2PCNN9gy">
        <img src="https://raw.githubusercontent.com/Muhaddil/simple-link-randomizer/refs/heads/main/images/SAEDLogo.png" alt="Logo SAED" class="saed-logo" />
      </a>
    </div>
  </header>

  <main>
    <p v-if="missingWebhook" class="warning">
      No se encontró ninguna URL de algún webhook, ¡no se enviará ningún mensaje!
    </p>
    <Router />
    <RouteComponent />
  </main>
</template>
