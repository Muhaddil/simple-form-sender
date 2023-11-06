<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import UserRow from './UserRow.vue';
import { type QueryEntry } from '@/types/query';

const props = defineProps<{
  filter: string;
}>();

const apiPath = 'https://nomanssky.fandom.com/api.php';
const action = 'cargoquery';
const format = 'json';
const origin = '*';
const limit = '500';
const tables = 'Bases';
const fields = ['Name', 'CensusPlayer', 'CensusRenewal'];
const civilized = 'Eisvana';
const where = `CensusShow IS NOT NULL AND Civilized="${civilized}"`;
const orderBy = 'CensusRenewal';

const censusQuery = `${apiPath}?action=${action}&format=${format}&origin=${origin}&limit=${limit}&tables=${tables}&fields=${fields.join(
  '%2C%20'
)}&where=${where}&order_by=${orderBy}`;

const censusData = ref<QueryEntry[]>([]);
const requestFailed = ref<boolean>(false);

onMounted(async () => {
  try {
    const res = await fetch(censusQuery);
    const data = await res.json();
    censusData.value = data.cargoquery;
  } catch (e) {
    console.warn(e);
    requestFailed.value = true;
  }
});

const filteredCensusData = computed(() =>
  censusData.value.filter((item) => item.title.CensusPlayer.toLowerCase().includes(props.filter.toLowerCase()))
);
</script>

<template>
  <div
    v-if="censusData.length"
    class="table"
  >
    <UserRow
      v-for="dataObj in filteredCensusData"
      :user-object="dataObj"
    />
  </div>

  <div
    v-else-if="!requestFailed"
    aria-busy="true"
  ></div>

  <div v-else>Something went wrong :/</div>
</template>

<style lang="scss">
.table {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
}
</style>
