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

.subpage-nav {
  justify-content: center;
  gap: 2rem;
  font-size: larger;
  margin-block-end: 1rem;
  flex-wrap: wrap;

  a.router-link-exact-active {
    color: inherit;
    pointer-events: none;
  }
}
</style>
