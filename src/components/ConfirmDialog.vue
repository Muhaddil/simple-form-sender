<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  userName: string;
}>();

const dialogElement = ref<HTMLDialogElement | null>(null);
const toggleModal = () => dialogElement.value?.showModal();

defineExpose({
  toggleModal,
});
</script>

<template>
  <dialog ref="dialogElement">
    <article>
      <header>
        <a
          href="#close"
          aria-label="Close"
          class="close"
        ></a>
        Confirm renewal of {{ userName }}?
      </header>
      <form
        method="dialog"
        class="confirm-options"
      >
        <button @click="$emit('confirm')">Yes</button>
        <button class="secondary">No</button>
      </form>
    </article>
  </dialog>
</template>

<style lang="scss">
.confirm-options {
  display: flex;
  gap: 1rem;
  margin-bottom: 0;

  & button {
    margin-bottom: 0;
  }
}
</style>
