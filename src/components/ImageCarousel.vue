<!-- TEST -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const images = ref(['/images/image.png', '/images/imagen2.jpg', '/images/imagen3.jpg']);

const currentImageIndex = ref(0);
const currentSide = ref('left');

let intervalId: number | undefined;

function nextImage() {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length;
  currentSide.value = currentSide.value === 'left' ? 'right' : 'left';
}

onMounted(() => {
  intervalId = setInterval(nextImage, 3000);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<template>
  <div class="image-container">
    <transition
      name="slide"
      mode="out-in"
      :enter-class="'slide-enter-' + currentSide"
      :enter-active-class="'slide-enter-active-' + currentSide"
      :leave-class="'slide-leave-' + currentSide"
      :leave-active-class="'slide-leave-active-' + currentSide"
    >
      <img
        :key="images[currentImageIndex]"
        :src="images[currentImageIndex]"
        class="image"
        alt="Imagen del Carrusel"
      />
    </transition>
  </div>
</template>

<style scoped>
.image-container {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 9999;
}

.image {
  position: absolute;
  max-width: 150px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.slide-enter-left {
  transform: translateX(-100vw);
  opacity: 0;
}
.slide-enter-active-left {
  transform: translateX(50px);
  opacity: 1;
  transition:
    transform 1s ease,
    opacity 0.5s ease;
}
.slide-leave-left {
  transform: translateX(50px);
  opacity: 1;
}
.slide-leave-active-left {
  transform: translateX(-100vw);
  opacity: 0;
  transition:
    transform 1s ease,
    opacity 0.5s ease;
}

.slide-enter-right {
  transform: translateX(100vw);
  opacity: 0;
}
.slide-enter-active-right {
  transform: translateX(-50px);
  opacity: 1;
  transition:
    transform 1s ease,
    opacity 0.5s ease;
}
.slide-leave-right {
  transform: translateX(-50px);
  opacity: 1;
}
.slide-leave-active-right {
  transform: translateX(100vw);
  opacity: 0;
  transition:
    transform 1s ease,
    opacity 0.5s ease;
}
</style>
