import { defineStore } from 'pinia';

interface RouteData {
  route: string | undefined;
  componentName: string;
}

interface RouterObj {
  component: string;
  requiresData: boolean;
  componentName: string;
}

const route = window.location.pathname.split('/')?.at(-1)?.slice(0, -5); // NoSonar getting the current filename without the "html" ending
const defaultRoute = 'index'; // Fallback route if no match is found
const router: Record<string, RouterObj> = {
  form1: { component: 'Form1', requiresData: false, componentName: 'Formulario SAMS 1' },
  form2: { component: 'Form2', requiresData: true, componentName: 'Formulario SAMS 2' },
  form3: { component: 'Form3', requiresData: true, componentName: 'Formulario SAMS 3' },
  safdform1: { component: 'SAFDForm1', requiresData: true, componentName: 'Formulario SAFD 1' },
  safdform2: { component: 'SAFDForm2', requiresData: true, componentName: 'Formulario SAFD 2' },
  safdform3: { component: 'SAFDForm3', requiresData: true, componentName: 'Formulario SAFD 3' },
  trasladosform: { component: 'TrasladosForm', requiresData: true, componentName: 'Formulario Traslado' },
  index: { component: 'Home', requiresData: false, componentName: 'Index' },
};

export const useRouteDataStore = defineStore('routeData', {
  state: (): RouteData => ({
    route,
    componentName: router[route || defaultRoute]?.componentName || 'Index',
  }),

  getters: {
    isFormRoute: (state) => state.route === 'form',
  },
});
