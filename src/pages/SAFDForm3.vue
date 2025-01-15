<script setup lang="ts">
import { ref } from 'vue';
import FormField from '@/components/FormField.vue';
import FormTextarea from '@/components/FormTextarea.vue';
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

async function handleSubmit() {
  const payload = {
    username: 'Muhaddil Form Sender',
    avatar_url:
      'https://github.com/Muhaddil/RSSWikiPageCreator/blob/main/public/assets/other/MuhaddilOG.png?raw=true',
    content: `# Nueva Respuesta Formulario SAFD 3:

    - **Nombre y Apellidos IC:** ${name.value}
    - **Edad IC:** ${ageIC.value}
    - **Edad OOC:** ${ageOOC.value}
    - **ID de Discord:** ${discordId.value}
    - **URL de Steam:** ${steamUrl.value}
    - **Tiempo Disponible Diario:** ${dailyTime.value}
    - **Conocimiento del rol de SAFD:** ${emsRoleKnowledge.value}
    - **Experiencias en Otras Ciudades:** ${previousExperiences.value}
    - **Ejemplo de /me:** ${exampleMe.value}
    - **Ejemplo de /do:** ${exampleDo.value}
    - **¿Qué usarías para tratar una incisión leve?:** ${treatmentForInjury.value}
    - **Define con tus palabras un PKT:** ${defineEnvironment.value}
    - **Define con tus palabras un CK:** ${canUseVoiceMods.value}
    - **¿Puedes robar aeronaves?:** ${defineFairPlay.value}
    - **¿Cuál es el triaje que un SAMS debe seguir a la hora de atender pacientes?:** ${pseudoICTerm.value}`,
  };

  try {
    await sendToDiscord(payload);
    successMessage.value = 'Mensaje enviado con éxito';
    errorMessage.value = '';
    setTimeout(() => {
      successMessage.value = '';
    }, 5000);
    resetForm();
  } catch (error) {
    successMessage.value = '';
    errorMessage.value = 'Error al enviar el mensaje.';
    setTimeout(() => {
      errorMessage.value = '';
    }, 5000);
    console.error(error);
  }
}

async function sendToDiscord(payload: { username: string; avatar_url: string; content: string }) {
  const maxMessageLength = 2000;
  const chunks = payload.content.match(new RegExp(`.{1,${maxMessageLength}}`, 'g')) || [];

  for (const chunk of chunks) {
    const response = await fetch(webhook, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...payload, content: chunk }),
    });

    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor.');
    }
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
      <FormField id="name" label="Nombre y Apellidos IC" type="text" placeholder="Ingresa tu nombre y apellidos IC" v-model="name" required />
      <FormField id="ageIC" label="Edad IC" type="text" placeholder="Ingresa tu edad IC" v-model="ageIC" required :maxlength="2" />
      <FormField id="ageOOC" label="Edad OOC" type="text" placeholder="Ingresa tu edad OOC" v-model="ageOOC" required :maxlength="2" />
      <FormField id="discordId" label="ID de Discord" type="text" placeholder="Ingresa tu ID de Discord" v-model="discordId" required />
      <FormField id="steamUrl" label="URL de Steam" type="url" placeholder="Ingresa tu URL de Steam" v-model="steamUrl" required />
      <FormField id="dailyTime" label="Tiempo Disponible Diario" type="text" placeholder="Ejemplo: 2 horas diarias" v-model="dailyTime" required />
      <FormTextarea id="emsRoleKnowledge" label="Conocimiento del rol de SAFD" placeholder="Describe tu conocimiento sobre el rol de SAFD" v-model="emsRoleKnowledge" required />
      <FormTextarea id="previousExperiences" label="Experiencias en Otras Ciudades" placeholder="Describe tus experiencias previas" v-model="previousExperiences" required />
      <FormTextarea id="exampleMe" label="Ejemplo de /me" placeholder="Proporciona un ejemplo de /me" v-model="exampleMe" required />
      <FormTextarea id="exampleDo" label="Ejemplo de /do" placeholder="Proporciona un ejemplo de /do" v-model="exampleDo" required />
      <FormTextarea id="treatmentForInjury" label="¿Qué usarías para tratar una incisión leve?" placeholder="Describe qué usarías para tratar una incisión leve" v-model="treatmentForInjury" required />
      <FormTextarea id="defineEnvironment" label="Define con tus palabras un PKT" placeholder="Define con tus palabras un PKT" v-model="defineEnvironment" required />
      <FormTextarea id="canUseVoiceMods" label="Define con tus palabras un CK" placeholder="Define con tus palabras un CK" v-model="canUseVoiceMods" required />
      <FormTextarea id="defineFairPlay" label="¿Puedes robar aeronaves?" placeholder="Indica si puedes robar aeronaves" v-model="defineFairPlay" required />
      <FormTextarea id="pseudoICTerm" label="¿Cuál es el triaje que un SAMS debe seguir a la hora de atender pacientes?" placeholder="Describe el triaje que un SAMS debe seguir" v-model="pseudoICTerm" required />
      <button type="submit">Enviar</button>
    </form>
    <div v-if="successMessage" class="toast success">
      {{ successMessage }}
    </div>
    <div v-if="errorMessage" class="toast error">
      {{ errorMessage }}
    </div>
  </div>
</template>
