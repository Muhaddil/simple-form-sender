<script setup lang="ts">
import { ref } from 'vue';
import UserTable from './components/UserTable.vue';

const filter = ref<string>('');

const missingWebhook = !import.meta.env.VITE_DISCORD_WEBHOOK;

const tooManyTries = ref(false);
</script>

<template>
  <header>
    <h1 class="title">Eisvana Census Renewal</h1>
  </header>

  <main>
    <p
      v-if="missingWebhook"
      class="warning"
    >
      No Webhook URL found, no message will be sent!
    </p>
    <input
      v-if="!tooManyTries"
      id="searchBar"
      name="searchBar"
      placeholder="Search Name"
      type="text"
      v-model="filter"
    />
    <UserTable
      :filter="filter"
      @exceeded="tooManyTries = true"
    />
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
