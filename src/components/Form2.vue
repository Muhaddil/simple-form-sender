<script setup lang="ts">
import { ref } from 'vue';

const webhook = import.meta.env.VITE_DISCORD_WEBHOOK ?? '';

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
    content: `# Nuevo mensaje del formulario:

    - **Nombre y Apellidos IC:** ${name.value}
    - **Edad IC:** ${ageIC.value}
    - **Edad OOC:** ${ageOOC.value}
    - **ID de Discord:** ${discordId.value}
    - **URL de Steam:** ${steamUrl.value}
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
    <!-- <h1>Formulario SAMS 2</h1> -->
    <form @submit.prevent="handleSubmit">
      <div class="form-field">
        <label for="name">Nombre y Apellidos IC</label>
        <input v-model="name" type="text" id="name" name="name" placeholder="Ingresa tu nombre y apellidos IC"
          required />
      </div>
      <div class="form-field">
        <label for="ageIC">Edad IC</label>
        <input v-model="ageIC" type="text" id="ageIC" name="ageIC" placeholder="Ingresa tu edad IC" required
          :maxlength="2" pattern="\d*" />
      </div>
      <div class="form-field">
        <label for="ageOOC">Edad OOC</label>
        <input v-model="ageOOC" type="text" id="ageOOC" name="ageOOC" placeholder="Ingresa tu edad OOC" required
          :maxlength="2" pattern="\d*" />
      </div>
      <div class="form-field">
        <label for="discordId">ID de Discord</label>
        <input v-model="discordId" type="text" id="discordId" name="discordId" placeholder="Ingresa tu ID de Discord"
          required />
      </div>
      <div class="form-field">
        <label for="steamUrl">URL de Steam</label>
        <input v-model="steamUrl" type="url" id="steamUrl" name="steamUrl" placeholder="Ingresa tu URL de Steam"
          required />
      </div>
      <div class="form-field">
        <label for="dailyTime">Tiempo Disponible Diario</label>
        <input v-model="dailyTime" type="text" id="dailyTime" name="dailyTime" placeholder="Ejemplo: 2 horas diarias"
          required />
      </div>
      <div class="form-field">
        <label for="emsRoleKnowledge">Conocimiento del Rol de EMS</label>
        <textarea v-model="emsRoleKnowledge" id="emsRoleKnowledge" name="emsRoleKnowledge"
          placeholder="Describe tu conocimiento sobre el rol de EMS" required></textarea>
      </div>
      <div class="form-field">
        <label for="previousExperiences">Experiencias en Otras Ciudades</label>
        <textarea v-model="previousExperiences" id="previousExperiences" name="previousExperiences"
          placeholder="Describe tus experiencias previas" required></textarea>
      </div>
      <div class="form-field">
        <label for="exampleMe">Ejemplo de /me</label>
        <textarea v-model="exampleMe" id="exampleMe" name="exampleMe" placeholder="Proporciona un ejemplo de /me"
          required></textarea>
      </div>
      <div class="form-field">
        <label for="exampleDo">Ejemplo de /do</label>
        <textarea v-model="exampleDo" id="exampleDo" name="exampleDo" placeholder="Proporciona un ejemplo de /do"
          required></textarea>
      </div>
      <div class="form-field">
        <label for="treatmentForInjury">¿Qué usarías para tratar un golpe?</label>
        <textarea v-model="treatmentForInjury" id="treatmentForInjury" name="treatmentForInjury"
          placeholder="Describe qué usarías para tratar un golpe" required></textarea>
      </div>
      <div class="form-field">
        <label for="defineEnvironment">Define el /entorno</label>
        <textarea v-model="defineEnvironment" id="defineEnvironment" name="defineEnvironment"
          placeholder="Define el /entorno con tus palabras" required></textarea>
      </div>
      <div class="form-field">
        <label for="canUseVoiceMods">¿Se pueden usar moduladores de voz?</label>
        <textarea v-model="canUseVoiceMods" id="canUseVoiceMods" name="canUseVoiceMods"
          placeholder="Indica si se pueden usar moduladores de voz" required></textarea>
      </div>
      <div class="form-field">
        <label for="defineFairPlay">Define Fairplay</label>
        <textarea v-model="defineFairPlay" id="defineFairPlay" name="defineFairPlay"
          placeholder="Define Fairplay con tus palabras" required></textarea>
      </div>
      <div class="form-field">
        <label for="pseudoICTerm">Término de Pseudo IC</label>
        <textarea v-model="pseudoICTerm" id="pseudoICTerm" name="pseudoICTerm"
          placeholder="Proporciona un término de Pseudo IC" required></textarea>
      </div>
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

<style scoped>
.toast {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 15px;
  background-color: #333;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  opacity: 0;
  animation: fadeInOut 5s forwards;
}

.toast.success {
  background-color: green;
}

.toast.error {
  background-color: red;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
