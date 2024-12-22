import { getRouteComponent, getCurrentRoute } from '@/types/router';

export const router: Record<string, string> = {
  form1: 'Form1',
  form2: 'Form2',
  form3: 'Form3',
  trasladosform: 'TrasladosForm',
};

export const route = getCurrentRoute();
export const componentName = getRouteComponent();

let exportName;

switch (route) {
  case 'form1':
    exportName = 'Formulario SAMS 1';
    break;
  case 'form2':
    exportName = 'Formulario SAMS 2';
    break;
  case 'form3':
    exportName = 'Formulario SAMS 3';
    break;
  case 'trasladosform':
    exportName = 'Formulario Traslados SAED';
    break;
  case '':
    exportName = 'Home';
    break;
  default:
    exportName = 'Desconocido';
    break;
}

export const pageformattedName = exportName;
