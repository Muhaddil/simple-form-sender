<script setup lang="ts">
import { computed, ref } from 'vue';
import ConfirmDialog from './ConfirmDialog.vue';
import { type QueryEntry } from '@/types/query';

const props = defineProps<{
  userObject: QueryEntry;
}>();

const webhook = atob(import.meta.env.VITE_DISCORD_WEBHOOK);
const wikiLink = 'https://nomanssky.fandom.com/wiki/Special:EditPage/';
const userName = computed(() => props.userObject.title.CensusPlayer);

const confirmDialog = ref<InstanceType<typeof ConfirmDialog> | null>(null);
const renewText = computed(() => {
  if (renewRequested.value) return 'Renewal Requested';
  if (renewed.value) return 'Already Renewed';
  return 'Request Renewal';
});

const renewed = computed(() => props.userObject.title.CensusRenewal === new Date().getFullYear().toString());

const renewRequested = ref<boolean>(false);

async function requestRenewal() {
  renewRequested.value = true;
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
