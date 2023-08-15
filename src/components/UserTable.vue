<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import UserRow from './UserRow.vue';
import { type QueryEntry } from '@/types/query';

const props = defineProps<{
  filter: string;
}>();

const censusQuery =
  'https://nomanssky.fandom.com/api.php?action=cargoquery&format=json&origin=*&limit=500&tables=Bases&fields=Name%2C%20CensusPlayer%2C%20CensusRenewal&where=CensusShow%20IS%20NOT%20NULL%20AND%20Civilized%3D%22Galactic%20Hub%20Eissentam%22&order_by=CensusRenewal';

const censusData = ref<QueryEntry[]>([]);
const requestFailed = ref<boolean>(false);

onMounted(() =>
  fetch(censusQuery)
    .then((r) => r.json())
    .then((j) => (censusData.value = j.cargoquery))
    .catch((e) => {
      console.warn(e);
      requestFailed.value = true;
    })
);

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
