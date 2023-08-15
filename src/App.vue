<script setup lang="ts">
import { ref } from 'vue';
import UserTable from './components/UserTable.vue';

const filter = ref<string>('');
</script>

<template>
  <header>
    <h1 class="title">EisHub Census Renewal</h1>
  </header>

  <main>
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
</style>
