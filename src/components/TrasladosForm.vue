<script setup lang="ts">
import { ref } from 'vue';
import FormField from './FormField.vue';
import FormTextarea from './FormTextarea.vue';
import '../css/style.scss';

const webhook = atob(import.meta.env.VITE_DISCORD_WEBHOOK ?? '');

const name = ref('');
const ageIC = ref('');
const ageOOC = ref('');
const discordId = ref('');
const steamUrl = ref('');
const dailyTime = ref('');
const emsRoleKnowledge = ref('');
const previousExperiences = ref('');
const exampleMe = ref('');
const exampleDo = ref('');
const treatmentForInjury = ref('');
const defineEnvironment = ref('');
const canUseVoiceMods = ref('');
const defineFairPlay = ref('');
const pseudoICTerm = ref('');
const successMessage = ref('');
const errorMessage = ref('');
const faction = ref('');

async function handleSubmit() {
  const payload = {
    username: 'Muhaddil Form Sender',
    avatar_url: 'https://github.com/Muhaddil/RSSWikiPageCreator/blob/main/public/assets/other/MuhaddilOG.png?raw=true',
    content: `# Nueva Respuesta Formulario Traslados SAED:

    - **Nombre de Discord:** ${name.value}
    - **ID de Discord:** ${discordId.value}
    - **URL de Steam:** ${steamUrl.value}
    - **Edad OOC:** ${ageOOC.value}
    - **Facción:** ${faction.value}



    - **Edad IC:** ${ageIC.value}
    - **Tiempo Disponible Diario:** ${dailyTime.value}
    - **Conocimiento del Rol de EMS:** ${emsRoleKnowledge.value}
    - **Experiencias en Otras Ciudades:** ${previousExperiences.value}
    - **Ejemplo de /me:** ${exampleMe.value}
    - **Ejemplo de /do:** ${exampleDo.value}
    - **¿Qué usarías para tratar un golpe?:** ${treatmentForInjury.value}
    - **Define el /entorno:** ${defineEnvironment.value}
    - **¿Se pueden usar moduladores de voz?:** ${canUseVoiceMods.value}
    - **Define Fairplay:** ${defineFairPlay.value}
    - **Término de Pseudo IC:** ${pseudoICTerm.value}`,
  };

  try {
    const response = await fetch(webhook, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      successMessage.value = 'Mensaje enviado con éxito';
      errorMessage.value = '';
      setTimeout(() => {
        successMessage.value = '';
      }, 5000);
      resetForm();
    } else {
      throw new Error('Error en la respuesta del servidor.');
    }
  } catch (error) {
    successMessage.value = '';
    errorMessage.value = 'Error al enviar el mensaje.';
    setTimeout(() => {
      errorMessage.value = '';
    }, 5000);
    console.error(error);
  }
}

function resetForm() {
  name.value = '';
  ageIC.value = '';
  ageOOC.value = '';
  discordId.value = '';
  steamUrl.value = '';
  dailyTime.value = '';
  emsRoleKnowledge.value = '';
  previousExperiences.value = '';
  exampleMe.value = '';
  exampleDo.value = '';
  treatmentForInjury.value = '';
  defineEnvironment.value = '';
  canUseVoiceMods.value = '';
  defineFairPlay.value = '';
  pseudoICTerm.value = '';
}
</script>

<template>
  <div class="form-container">
    <form @submit.prevent="handleSubmit">
      <FormField
        id="name"
        label="Nombre y Apellidos IC"
        type="text"
        placeholder="Ingresa tu nombre y apellidos IC"
        v-model="name"
        required
      />
      <FormField
        id="ageIC"
        label="Edad IC"
        type="text"
        placeholder="Ingresa tu edad IC"
        v-model="ageIC"
        required
        :maxlength="2"
      />
      <FormField
        id="ageOOC"
        label="Edad OOC"
        type="text"
        placeholder="Ingresa tu edad OOC"
        v-model="ageOOC"
        required
        :maxlength="2"
      />
      <FormField
        id="discordId"
        label="ID de Discord"
        type="text"
        placeholder="Ingresa tu ID de Discord"
        v-model="discordId"
        required
      />
      <FormField
        id="steamUrl"
        label="URL de Steam"
        type="url"
        placeholder="Ingresa tu URL de Steam"
        v-model="steamUrl"
        required
      />
      <FormField
        id="dailyTime"
        label="Tiempo Disponible Diario"
        type="text"
        placeholder="Ejemplo: 2 horas diarias"
        v-model="dailyTime"
        required
      />
      <FormTextarea
        id="emsRoleKnowledge"
        label="Conocimiento del Rol de EMS"
        placeholder="Describe tu conocimiento sobre el rol de EMS"
        v-model="emsRoleKnowledge"
        required
      />
      <FormTextarea
        id="previousExperiences"
        label="Experiencias en Otras Ciudades"
        placeholder="Describe tus experiencias previas"
        v-model="previousExperiences"
        required
      />
      <FormTextarea
        id="exampleMe"
        label="Ejemplo de /me"
        placeholder="Proporciona un ejemplo de /me"
        v-model="exampleMe"
        required
      />
      <FormTextarea
        id="exampleDo"
        label="Ejemplo de /do"
        placeholder="Proporciona un ejemplo de /do"
        v-model="exampleDo"
        required
      />
      <FormTextarea
        id="treatmentForInjury"
        label="¿Qué usarías para tratar un golpe?"
        placeholder="Describe qué usarías para tratar un golpe"
        v-model="treatmentForInjury"
        required
      />
      <FormTextarea
        id="defineEnvironment"
        label="Define el /entorno"
        placeholder="Define el /entorno con tus palabras"
        v-model="defineEnvironment"
        required
      />
      <FormTextarea
        id="canUseVoiceMods"
        label="¿Se pueden usar moduladores de voz?"
        placeholder="Indica si se pueden usar moduladores de voz"
        v-model="canUseVoiceMods"
        required
      />
      <FormTextarea
        id="defineFairPlay"
        label="Define Fairplay"
        placeholder="Define Fairplay con tus palabras"
        v-model="defineFairPlay"
        required
      />
      <FormTextarea
        id="pseudoICTerm"
        label="Término de Pseudo IC"
        placeholder="Proporciona un término de Pseudo IC"
        v-model="pseudoICTerm"
        required
      />
      <button type="submit">Enviar</button>
    </form>
    <div
      v-if="successMessage"
      class="toast success"
    >
      {{ successMessage }}
    </div>
    <div
      v-if="errorMessage"
      class="toast error"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>
