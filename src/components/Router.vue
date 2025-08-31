<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRouteDataStore } from '@/stores/routeDataStore';
import { defineAsyncComponent } from 'vue';

const routeData = useRouteDataStore();
const { route } = storeToRefs(routeData);

interface RouterObj {
  component: string;
  requiresData: boolean;
}

const router: Record<string, RouterObj> = {
  form1: { component: 'Form1', requiresData: false },
  form2: { component: 'Form2', requiresData: false },
  form3: { component: 'Form3', requiresData: false },
  safdform1: { component: 'SAFDForm1', requiresData: false },
  safdform2: { component: 'SAFDForm2', requiresData: false },
  safdform3: { component: 'SAFDForm3', requiresData: false },
  trasladosform: { component: 'TrasladosForm', requiresData: false },
  index: { component: 'Home', requiresData: false },
};

const routeComponentObj = getRouteComponent();

if (!routeComponentObj) {
  throw new Error("No route component available");
}

const RouteComponent = defineAsyncComponent({
  loader: () => import(`@/pages/${routeComponentObj.component}.vue`),
});

function getRouteComponent() {
  const currentRoute = route.value?.toLowerCase();
  if (!currentRoute || !router[currentRoute]) return router.index;
  return router[currentRoute];
}
</script>

<template>
  <RouteComponent />
</template>
