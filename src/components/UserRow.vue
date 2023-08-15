<script setup lang="ts">
import { computed, ref } from 'vue';
import ConfirmDialog from './ConfirmDialog.vue';

const props = defineProps<{
  userObject: {
    title: {
      Name: string;
      Builder: string | null;
      Builderlink: string | null;
    };
  };
}>();

const webhook = atob(import.meta.env.VITE_DISCORD_WEBHOOK);
const wikiLink = 'https://nomanssky.fandom.com/wiki/Special:EditPage/';

const confirmDialog = ref<InstanceType<typeof ConfirmDialog> | null>(null);
const renewText = ref<string>('Request Renewal');
const renewed = ref<boolean>(false);

const userName = computed(() => {
  const userObj = props.userObject.title;
  return (
    userObj.Builderlink ??
    (userObj.Builder?.startsWith('[http')
      ? userObj.Builder?.slice(0, -1).split(' ').slice(1).join('')
      : userObj.Builder) ??
    ''
  );
});

async function requestRenewal() {
  renewText.value = 'Renewal Requested';
  renewed.value = true;
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
    :disabled="renewed"
  >
    {{ renewText }}
  </button>
</template>
