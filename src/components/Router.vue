<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRouteDataStore } from '@/stores/routeDataStore';
import { defineAsyncComponent, type Component } from 'vue';

// Obtén los datos de la tienda
const routeData = useRouteDataStore();
const { route } = storeToRefs(routeData);

// Define el objeto de rutas
interface RouterObj {
  component: string;
  requiresData: boolean;
  componentName: string;
}

const router: Record<string, RouterObj> = {
  form1: { component: 'Form1', requiresData: false, componentName: 'Formulario SAMS 1' },
  form2: { component: 'Form2', requiresData: true, componentName: 'Formulario SAMS 2'},
  form3: { component: 'Form3', requiresData: true, componentName: 'Formulario SAMS 3' },
  SAFDForm1: { component: 'SAFDForm1', requiresData: true, componentName: 'Formulario SAFD 1' },
  SAFDForm2: { component: 'SAFDForm2', requiresData: true, componentName: 'Formulario SAFD 2' },
  SAFDForm3: { component: 'SAFDForm3', requiresData: true, componentName: 'Formulario SAFD 3' },
  trasladosform: { component: 'TrasladosForm', requiresData: true, componentName: 'Formulario Traslado' },
  index: { component: 'Home', requiresData: false, componentName: 'Index' },
};

// Valida la ruta actual y selecciona un componente
const currentRoute = route.value || 'index';
const routeComponent = router[currentRoute]?.component || 'Home';

// Importación dinámica del componente basado en la ruta
const RouteComponent = defineAsyncComponent<Component>(() =>
  import(`./${routeComponent}.vue`)
);
</script>

<template>
  <RouteComponent />
</template>
