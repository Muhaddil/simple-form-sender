<script setup lang="ts">
import { ref } from 'vue';
import UserTable from './components/UserTable.vue';

const filter = ref<string>('');

const missingWebhook = !import.meta.env.VITE_DISCORD_WEBHOOK;
</script>

<template>
  <header>
    <h1 class="title">Eisvana Census Renewal</h1>
  </header>

  <main>
    <p v-if="missingWebhook" class="warning">No Webhook URL found, no message will be sent!</p>
    <input
      placeholder="Search Name"
      type="text"
      name="searchBar"
      id="searchBar"
      v-model="filter"
    />
    <UserTable :filter="filter" />
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
  padding: .5rem;
}
</style>
