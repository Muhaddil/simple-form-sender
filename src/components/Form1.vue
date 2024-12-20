<script setup lang="ts">
import { ref } from 'vue';

const webhook = atob(import.meta.env.VITE_DISCORD_WEBHOOK ?? '');

const name = ref('');
const ageIC = ref('');
const ageOOC = ref('');
const discordId = ref('');
const steamUrl = ref('');
const dailyTime = ref('');
const emsRoleKnowledge = ref('');
const previousExperiences = ref('');
const whyChooseMe = ref('');
const exampleMe = ref('');
const exampleDo = ref('');
const medicationForInfection = ref('');
const defineDM = ref('');
const definePG = ref('');
const defineCarjack = ref('');
const successMessage = ref('');
const errorMessage = ref('');

async function handleSubmit() {
  const payload = {
    content: `# Nueva Respuesta Formulario SAMS 1:

    - **Nombre y Apellidos IC:** ${name.value}
    - **Edad IC:** ${ageIC.value}
    - **Edad OOC:** ${ageOOC.value}
    - **ID de Discord:** ${discordId.value}
    - **URL de Steam:** ${steamUrl.value}
    - **Tiempo Disponible Diario:** ${dailyTime.value}
    - **Conocimiento del Rol de EMS:** ${emsRoleKnowledge.value}
    - **Experiencias en Otras Ciudades:** ${previousExperiences.value}
    - **¿Por qué deberíamos elegirte?:** ${whyChooseMe.value}
    - **Ejemplo de /me:** ${exampleMe.value}
    - **Ejemplo de /do:** ${exampleDo.value}
    - **¿Qué medicamentos usarías para una infección?:** ${medicationForInfection.value}
    - **Define DM:** ${defineDM.value}
    - **Define PG:** ${definePG.value}
    - **Define Carjack:** ${defineCarjack.value}`,
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
  whyChooseMe.value = '';
  exampleMe.value = '';
  exampleDo.value = '';
  medicationForInfection.value = '';
  defineDM.value = '';
  definePG.value = '';
  defineCarjack.value = '';
}
</script>

<template>
  <div class="form-container">
    <!-- <h1>Formulario SAMS 1</h1> -->
    <form @submit.prevent="handleSubmit">
      <div class="form-field">
        <label for="name">Nombre y Apellidos IC</label>
        <input v-model="name" type="text" id="name" name="name" placeholder="Ingresa tu nombre y apellidos IC" required />
      </div>
      <div class="form-field">
        <label for="ageIC">Edad IC</label>
        <input v-model="ageIC" type="number" id="ageIC" name="ageIC" placeholder="Ingresa tu edad IC" required />
      </div>
      <div class="form-field">
        <label for="ageOOC">Edad OOC</label>
        <input v-model="ageOOC" type="number" id="ageOOC" name="ageOOC" placeholder="Ingresa tu edad OOC" required />
      </div>
      <div class="form-field">
        <label for="discordId">ID de Discord</label>
        <input v-model="discordId" type="text" id="discordId" name="discordId" placeholder="Ingresa tu ID de Discord" required />
      </div>
      <div class="form-field">
        <label for="steamUrl">URL de Steam</label>
        <input v-model="steamUrl" type="url" id="steamUrl" name="steamUrl" placeholder="Ingresa tu URL de Steam" required />
      </div>
      <div class="form-field">
        <label for="dailyTime">Tiempo Disponible Diario</label>
        <input v-model="dailyTime" type="text" id="dailyTime" name="dailyTime" placeholder="Ejemplo: 2 horas diarias" required />
      </div>
      <div class="form-field">
        <label for="emsRoleKnowledge">Conocimiento del Rol de EMS</label>
        <textarea v-model="emsRoleKnowledge" id="emsRoleKnowledge" name="emsRoleKnowledge" placeholder="Describe tu conocimiento sobre el rol de EMS" required></textarea>
      </div>
      <div class="form-field">
        <label for="previousExperiences">Experiencias en Otras Ciudades</label>
        <textarea v-model="previousExperiences" id="previousExperiences" name="previousExperiences" placeholder="Describe tus experiencias previas" required></textarea>
      </div>
      <div class="form-field">
        <label for="whyChooseMe">¿Por qué deberíamos elegirte?</label>
        <textarea v-model="whyChooseMe" id="whyChooseMe" name="whyChooseMe" placeholder="Explica por qué deberíamos elegirte" required></textarea>
      </div>
      <div class="form-field">
        <label for="exampleMe">Ejemplo de /me</label>
        <textarea v-model="exampleMe" id="exampleMe" name="exampleMe" placeholder="Proporciona un ejemplo de /me" required></textarea>
      </div>
      <div class="form-field">
        <label for="exampleDo">Ejemplo de /do</label>
        <textarea v-model="exampleDo" id="exampleDo" name="exampleDo" placeholder="Proporciona un ejemplo de /do" required></textarea>
      </div>
      <div class="form-field">
        <label for="medicationForInfection">¿Qué medicamentos usarías para una infección?</label>
        <textarea v-model="medicationForInfection" id="medicationForInfection" name="medicationForInfection" placeholder="Describe los medicamentos que usarías" required></textarea>
      </div>
      <div class="form-field">
        <label for="defineDM">Define DM</label>
        <textarea v-model="defineDM" id="defineDM" name="defineDM" placeholder="Define DM con tus palabras" required></textarea>
      </div>
      <div class="form-field">
        <label for="definePG">Define PG</label>
        <textarea v-model="definePG" id="definePG" name="definePG" placeholder="Define PG con tus palabras" required></textarea>
      </div>
      <div class="form-field">
        <label for="defineCarjack">Define Carjack</label>
        <textarea v-model="defineCarjack" id="defineCarjack" name="defineCarjack" placeholder="Define Carjack con tus palabras" required></textarea>
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
