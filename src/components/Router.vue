<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRouteDataStore } from '@/stores/routeDataStore';
import { defineAsyncComponent, type Component } from 'vue';
import type SAFDForm1 from './SAFDForm1.vue';

const routeData = useRouteDataStore();
const { route } = storeToRefs(routeData);

interface RouterObj {
  component: string;
  requiresData: boolean;
}

const router: Record<string, RouterObj> = {
  form1: { component: 'Form1', requiresData: false },
  form2: { component: 'Form2', requiresData: true },
  form3: { component: 'Form3', requiresData: true },
  SAFDForm1: { component: 'SAFDForm1', requiresData: true },
  SAFDForm2: { component: 'SAFDForm2', requiresData: true },
  SAFDForm3: { component: 'SAFDForm3', requiresData: true },
  trasladosform: { component: 'TrasladosForm', requiresData: true },
  index: { component: 'Home', requiresData: false },
};

const routeComponentObj = getRouteComponent();

const RouteComponent = defineAsyncComponent<Component>(() =>
  import(/* @vite-ignore */ `./${routeComponentObj.component}.vue`)
);

function getRouteComponent() {
  const currentRoute = route.value;
  if (!currentRoute || !router[currentRoute]) return router.index;
  return router[currentRoute];
}
</script>

<template>
  <RouteComponent />
</template>
