<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import UserRow from './UserRow.vue';
import { type QueryEntry } from '@/types/query';

const props = defineProps<{
  filter: string;
}>();

const censusQuery =
  'https://nomanssky.fandom.com/api.php?action=cargoquery&format=json&origin=*&limit=500&tables=Bases&fields=Name%2C%20Builder%2C%20Builderlink&where=CensusShow%20IS%20NOT%20NULL%20AND%20Civilized%3D%22Galactic%20Hub%20Eissentam%22%20AND%20CensusRenewal%20!%3D%20Year(Now())';

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
    .finally(() => console.log('received!'))
);

const filteredCensusData = computed(() =>
  censusData.value.filter(
    (item) =>
      item.title.Builder?.toLowerCase().includes(props.filter.toLowerCase()) || // NoSonar this must be an OR
      item.title.Builderlink?.toLowerCase().includes(props.filter.toLowerCase())
  )
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
</template>

<style lang="scss">
.table {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 1rem;
  align-items: center;
}
</style>
