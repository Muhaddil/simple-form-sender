<script setup lang="ts">
import { defineAsyncComponent, type Component } from 'vue';
const missingWebhook = !import.meta.env.VITE_DISCORD_WEBHOOK;
import { componentName, pageformattedName } from '@/types/route';
import Router from './components/Router.vue';
// import ImageCarousel from './components/ImageCarousel.vue';

const RouteComponent = defineAsyncComponent<Component>({
  loader: () => import(`./components/${componentName}.vue`),
});
</script>

<template>
  <header>
    <nav class="navbar">
      <ul>
        <li><a href="https://muhaddil.github.io/simple-link-randomizer/">Página Principal</a></li>
        <li><a href="https://muhaddil.github.io/simple-link-randomizer/faq.html">FAQs</a></li>
        <li><a href="https://muhaddil.github.io/simple-link-randomizer/ascensos.html">Ascensos</a></li>
      </ul>
    </nav>
  </br>
  <h1 class="title">{{ pageformattedName === 'Home' ? '' : `${pageformattedName}` }}</h1>
    <!-- <h1 class="title">Página Auxiliar del SAED</h1>
    <p class="subtitle">Esta página es una herramienta auxiliar de la página oficial del SAED, diseñada para enviar formularios de oposición al SAED.</p> -->
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
    <!-- <ImageCarousel /> -->
  </main>
</template>

<style scoped lang="scss">
.navbar {
  background-color: #4141414f;
  overflow: hidden;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;

    li {
      a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 20px;
        text-decoration: none;

        &:hover {
          background-color: #ddd;
          color: black;
        }
      }
    }
  }
}

.title {
  font-family: 'Times New Roman', Times, serif;
  margin-block-end: 1rem;
  text-align: center;
  font-size: 2rem;
  color: #ffffff;
}

.subtitle {
  font-family: Arial, sans-serif;
  margin-block-end: 2rem;
  text-align: center;
  font-size: 1rem;
  color: #ffffff;
}

.warning {
  background-color: red;
  color: white;
  border-radius: var(--border-radius);
  padding: 0.5rem;
  text-align: center;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 0;
}

.logo-container {
  margin-top: 15px;
  text-align: center;
  margin-bottom: 30px;
  animation: pulse 2s infinite ease-in-out;
}

.saed-logo {
  width: 20%;
  height: 20%;
  transition: transform 0.3s ease-in-out;
}

.saed-logo:hover {
  transform: scale(1.1);
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
