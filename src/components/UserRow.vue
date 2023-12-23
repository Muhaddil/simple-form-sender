<script setup lang="ts">
import { computed, ref } from 'vue';
import ConfirmDialog from './ConfirmDialog.vue';
import { type QueryEntry } from '@/types/query';

const props = defineProps<{
  userObject: QueryEntry;
}>();

const webhook = atob(import.meta.env.VITE_DISCORD_WEBHOOK || '');
const wikiLink = 'https://nomanssky.fandom.com/wiki/Special:EditPage/';
const userName = computed(() => props.userObject.title.CensusPlayer);

const currentYear = new Date().getFullYear().toString();

const confirmDialog = ref<InstanceType<typeof ConfirmDialog> | null>(null);

function getLocalStorageSet(): Set<string> {
  const localStorageDataString = localStorage.getItem(currentYear) ?? '[]';
  const localStorageData: string[] = JSON.parse(localStorageDataString);
  if (!Array.isArray(localStorageData)) return new Set();
  return new Set(localStorageData);
}

const renewed = computed(() => props.userObject.title.CensusRenewal === currentYear);
const renewRequested = ref<boolean>(getLocalStorageSet().has(userName.value));

const renewText = computed(() => {
  if (renewed.value) return 'Already Renewed';
  if (renewRequested.value) return 'Renewal Requested';
  return 'Request Renewal';
});

async function requestRenewal() {
  const localStorageData = getLocalStorageSet();
  localStorageData.add(userName.value);
  const localStorageArray = Array.from(localStorageData);
  const localStorageDataString = JSON.stringify(localStorageArray);
  localStorage.setItem(currentYear, localStorageDataString)
  renewRequested.value = true;
  if (!webhook) return;
  await fetch(webhook, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: `${userName.value} requested renewal.\n<${new URL(wikiLink + props.userObject.title.Name)}>`,
    }),
  });
}

const openDialog = () => confirmDialog.value?.toggleModal();
</script>

<template>
  <ConfirmDialog
    :user-name="userName"
    ref="confirmDialog"
    @confirm="requestRenewal"
  />
  <div>{{ userName }}</div>
  <button
    ref="renewButton"
    type="button"
    @click="openDialog"
    :disabled="renewed || renewRequested"
  >
    {{ renewText }}
  </button>
</template>
