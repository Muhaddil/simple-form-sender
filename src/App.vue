<script setup lang="ts">
import { defineAsyncComponent, type Component } from 'vue';
const missingWebhook = !import.meta.env.VITE_DISCORD_WEBHOOK;
import { componentName, pageformattedName } from '@/types/route';

const RouteComponent = defineAsyncComponent<Component>({
  loader: () => import(`./components/${componentName}.vue`),
});

</script>

<template>
  <header>
    <h1 class="title">{{ pageformattedName === 'Home' ? '' : `${pageformattedName}` }}</h1>
  </header>

  <main>
    <p v-if="missingWebhook" class="warning">
      No se encontró ninguna URL de algún webhook, ¡no se enviará ningún mensaje!
    </p>

    <RouteComponent />
  </main>
</template>

<style scoped lang="scss">
.title {
  margin-block-end: 2rem;
  text-align: center;
}

.warning {
  background-color: red;
  color: white;
  border-radius: var(--border-radius);
  padding: 0.5rem;
}
</style>
