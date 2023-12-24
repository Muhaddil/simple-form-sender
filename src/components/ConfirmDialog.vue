<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  userName: string;
}>();

const dialogElement = ref<HTMLDialogElement | null>(null);
const toggleModal = () => {
  dialogElement.value?.showModal();
  (document.activeElement as HTMLElement | null)?.blur();
};

defineExpose({
  toggleModal,
});
</script>

<template>
  <dialog ref="dialogElement">
    <article>
      <header>
        <form
          method="dialog"
          class="close-button-wrapper"
        >
          <button
            aria-label="Close"
            class="close"
          ></button>
        </form>
        ¿Confirmar la renovación de {{ userName }}?
      </header>
      <form
        method="dialog"
        class="confirm-options"
      >
        <button @click="$emit('confirm')">Si</button>
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

.close-button-wrapper {
  display: inline;
  margin-bottom: 0;

  .close {
    background-color: transparent;
    border: none;

    &:active {
      box-shadow: none;
    }
  }
}
</style>
