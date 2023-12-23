<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import UserRow from './UserRow.vue';
import { type QueryEntry } from '@/types/query';

const props = defineProps<{
  filter: string;
}>();

const emit = defineEmits(['exceeded']);

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

const currentYear = new Date().getFullYear().toString();
const censusData = ref<QueryEntry[]>([]);
const requestFailed = ref<boolean>(false);
const tries = ref(getLocalStorageAmount());

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

function getLocalStorageData(): { requested: string[]; amount: number } {
  const localStorageDataString = localStorage.getItem(currentYear) ?? '{"requested": [], "amount": 0}';
  return JSON.parse(localStorageDataString);
}

function getLocalStorageSet(): Set<string> {
  const localStorageData = getLocalStorageData();
  if (!Array.isArray(localStorageData.requested)) return new Set();
  return new Set(localStorageData.requested);
}

function getLocalStorageAmount(): number {
  const localStorageData = getLocalStorageData();
  return typeof localStorageData.amount === 'number' ? localStorageData.amount : 0;
}

function incrementData(userName: string) {
  tries.value++;
  const localStorageData = getLocalStorageData();
  const localStorageDataSet = getLocalStorageSet();
  localStorageDataSet.add(userName);
  const localStorageArray = Array.from(localStorageDataSet);
  localStorageData.requested = localStorageArray;
  localStorageData.amount = tries.value;
  const localStorageDataString = JSON.stringify(localStorageData);
  localStorage.setItem(currentYear, localStorageDataString);
}
</script>

<template>
  <template v-if="tries < 3">
    <div
      v-if="censusData.length"
      class="table"
    >
      <UserRow
        v-for="dataObj in filteredCensusData"
        :key="dataObj.title.CensusPlayer"
        :user-object="dataObj"
        :tries="tries"
        :current-year="currentYear"
        :already-requested="getLocalStorageSet().has(dataObj.title.CensusPlayer)"
        @renew="incrementData"
      />
    </div>

    <div
      v-else-if="!requestFailed"
      aria-busy="true"
    ></div>

    <div v-else>Something went wrong :/</div>
  </template>

  <p v-else>You have requested too many renewals. Please contact Lenni for help.</p>
</template>

<style lang="scss">
.table {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
}
</style>
