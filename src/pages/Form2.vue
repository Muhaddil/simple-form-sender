<script setup lang="ts">
import { ref, computed } from 'vue';

const webhook = atob(import.meta.env.VITE_DISCORD_WEBHOOK ?? '');

const currentStep = ref(1);
const totalSteps = 5;

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
const isSubmitting = ref(false);

const fields = [
  name,
  ageIC,
  ageOOC,
  discordId,
  steamUrl,
  dailyTime,
  emsRoleKnowledge,
  previousExperiences,
  exampleMe,
  exampleDo,
  treatmentForInjury,
  defineEnvironment,
  canUseVoiceMods,
  defineFairPlay,
  pseudoICTerm,
];

const progressPercentage = computed(() => {
  const filled = fields.filter((field) => field.value.trim() !== '').length;
  return (filled / fields.length) * 100;
});

function nextStep() {
  if (currentStep.value < totalSteps) currentStep.value++;
}
function previousStep() {
  if (currentStep.value > 1) currentStep.value--;
}
function goToStep(step: number) {
  if (step >= 1 && step <= totalSteps) currentStep.value = step;
}

async function handleSubmit() {
  if (isSubmitting.value) return;
  isSubmitting.value = true;

  const payloadSections = [
    `- **Nombre y Apellidos IC:** ${name.value}`,
    `- **Edad IC:** ${ageIC.value}`,
    `- **Edad OOC:** ${ageOOC.value}`,
    `- **ID de Discord:** ${discordId.value}`,
    `- **URL de Steam:** ${steamUrl.value}`,
    `- **Tiempo Disponible Diario:** ${dailyTime.value}`,
    `- **Conocimiento del Rol de EMS:** ${emsRoleKnowledge.value}`,
    `- **Experiencias en Otras Ciudades:** ${previousExperiences.value}`,
    `- **Ejemplo de /me:** ${exampleMe.value}`,
    `- **Ejemplo de /do:** ${exampleDo.value}`,
    `- **¿Qué usarías para tratar un golpe?:** ${treatmentForInjury.value}`,
    `- **Define el /entorno:** ${defineEnvironment.value}`,
    `- **¿Se pueden usar moduladores de voz?:** ${canUseVoiceMods.value}`,
    `- **Define Fairplay:** ${defineFairPlay.value}`,
    `- **Término de Pseudo IC:** ${pseudoICTerm.value}`,
  ];

  try {
    await sendToDiscord(payloadSections);
    successMessage.value = 'Aplicación enviada con éxito';
    errorMessage.value = '';
    setTimeout(() => (successMessage.value = ''), 5000);
    resetForm();
  } catch (error) {
    errorMessage.value = 'Error al enviar la aplicación.';
    setTimeout(() => (errorMessage.value = ''), 5000);
    console.error(error);
  } finally {
    isSubmitting.value = false;
  }
}

async function sendToDiscord(sections: string[]) {
  const maxMessageLength = 2000;
  let messageBuffer = '# Nueva Respuesta Formulario SAMS 2:\n';
  const username = 'Muhaddil Form Sender';
  const avatar_url = 'https://github.com/Muhaddil/simple-form-sender/blob/main/src/images/muha2.png?raw=true';

  for (const section of sections) {
    if (messageBuffer.length + section.length + 1 > maxMessageLength) {
      await sendMessageToWebhook(messageBuffer.trim(), username, avatar_url);
      messageBuffer = section + '\n';
    } else {
      messageBuffer += section + '\n';
    }
  }

  if (messageBuffer.trim().length > 0) {
    await sendMessageToWebhook(messageBuffer.trim(), username, avatar_url);
  }
}

async function sendMessageToWebhook(content: string, username: string, avatar_url: string) {
  if (!webhook || webhook.trim() === '') throw new Error('El webhook de Discord no está configurado.');
  if (!content.trim()) throw new Error('El contenido del mensaje está vacío.');

  const payload = { username, avatar_url, content };
  const response = await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) throw new Error(`Error en Discord: ${response.status} - ${await response.text()}`);
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
  currentStep.value = 1;
}
</script>

<template>
  <div class="container">
    <header>
      <div class="logo-container">
        <img
          src="https://raw.githubusercontent.com/Muhaddil/simple-link-randomizer/refs/heads/main/images/SAEDLogo.png"
          alt="Logo SAED"
          class="saed-logo"
        />
        <div
          class="particle"
          v-for="i in 6"
          :key="i"
          :style="{ '--delay': i * 0.5 + 's' }"
        ></div>
      </div>
      <h1 class="title">Formulario SAMS — 2</h1>
      <p class="subtitle">Completa tu aplicación respondiendo las siguientes preguntas</p>

      <div class="progress-container">
        <div class="progress-bar">
          <div
            class="progress-fill"
            :style="{ width: progressPercentage + '%' }"
          ></div>
        </div>
        <span class="progress-text">{{ Math.round(progressPercentage) }}% completado</span>
      </div>
    </header>

    <div class="form-container">
      <div class="step-indicators">
        <div
          v-for="step in totalSteps"
          :key="step"
          class="step-dot"
          :class="{ active: step === currentStep, completed: step < currentStep }"
          @click="goToStep(step)"
        >
          <i
            v-if="step < currentStep"
            class="fas fa-check"
          ></i>
          <span v-else>{{ step }}</span>
        </div>
      </div>

      <form
        @submit.prevent="handleSubmit"
        class="form"
      >
        <transition
          name="slide"
          mode="out-in"
        >
          <!-- Paso 1 -->
          <div
            v-if="currentStep === 1"
            key="step1"
            class="form-section"
          >
            <h3 class="section-title"><i class="fas fa-user"></i> Información Personal</h3>
            <div class="form-field">
              <label for="name">Nombre y Apellidos IC</label>
              <input
                id="name"
                type="text"
                v-model="name"
                required
              />
            </div>
            <div class="form-row">
              <div class="form-field">
                <label for="ageIC">Edad IC</label>
                <input
                  id="ageIC"
                  type="text"
                  maxlength="2"
                  v-model="ageIC"
                  required
                />
              </div>
              <div class="form-field">
                <label for="ageOOC">Edad OOC</label>
                <input
                  id="ageOOC"
                  type="text"
                  maxlength="2"
                  v-model="ageOOC"
                  required
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label for="discordId">ID de Discord</label>
                <input
                  id="discordId"
                  type="text"
                  v-model="discordId"
                  required
                />
              </div>
              <div class="form-field">
                <label for="steamUrl">URL de Steam</label>
                <input
                  id="steamUrl"
                  type="url"
                  v-model="steamUrl"
                  required
                />
              </div>
            </div>
            <div class="form-field">
              <label for="dailyTime">Tiempo Disponible Diario</label>
              <input
                id="dailyTime"
                type="text"
                v-model="dailyTime"
                required
              />
            </div>
          </div>

          <!-- Paso 2 -->
          <div
            v-else-if="currentStep === 2"
            key="step2"
            class="form-section"
          >
            <h3 class="section-title"><i class="fas fa-brain"></i> Experiencia</h3>
            <div class="form-field">
              <label for="emsRoleKnowledge">Conocimiento del Rol de EMS</label>
              <textarea
                id="emsRoleKnowledge"
                v-model="emsRoleKnowledge"
                required
              ></textarea>
            </div>
            <div class="form-field">
              <label for="previousExperiences">Experiencias en Otras Ciudades</label>
              <textarea
                id="previousExperiences"
                v-model="previousExperiences"
                required
              ></textarea>
            </div>
          </div>

          <!-- Paso 3 -->
          <div
            v-else-if="currentStep === 3"
            key="step3"
            class="form-section"
          >
            <h3 class="section-title"><i class="fas fa-theater-masks"></i> Ejemplos de Roleplay</h3>
            <div class="form-field">
              <label for="exampleMe">Ejemplo de /me</label>
              <textarea
                id="exampleMe"
                v-model="exampleMe"
                required
              ></textarea>
            </div>
            <div class="form-field">
              <label for="exampleDo">Ejemplo de /do</label>
              <textarea
                id="exampleDo"
                v-model="exampleDo"
                required
              ></textarea>
            </div>
          </div>

          <!-- Paso 4 -->
          <div
            v-else-if="currentStep === 4"
            key="step4"
            class="form-section"
          >
            <h3 class="section-title"><i class="fas fa-stethoscope"></i> Conocimientos Médicos</h3>
            <div class="form-field">
              <label for="treatmentForInjury">¿Qué usarías para tratar un golpe?</label>
              <textarea
                id="treatmentForInjury"
                v-model="treatmentForInjury"
                required
              ></textarea>
            </div>
          </div>

          <!-- Paso 5 -->
          <div
            v-else-if="currentStep === 5"
            key="step5"
            class="form-section"
          >
            <h3 class="section-title"><i class="fas fa-book"></i> Definiciones</h3>
            <div class="form-field">
              <label for="defineEnvironment">Define el /entorno</label>
              <textarea
                id="defineEnvironment"
                v-model="defineEnvironment"
                required
              ></textarea>
            </div>
            <div class="form-field">
              <label for="canUseVoiceMods">¿Se pueden usar moduladores de voz?</label>
              <textarea
                id="canUseVoiceMods"
                v-model="canUseVoiceMods"
                required
              ></textarea>
            </div>
            <div class="form-field">
              <label for="defineFairPlay">Define Fairplay</label>
              <textarea
                id="defineFairPlay"
                v-model="defineFairPlay"
                required
              ></textarea>
            </div>
            <div class="form-field">
              <label for="pseudoICTerm">Término de Pseudo IC</label>
              <textarea
                id="pseudoICTerm"
                v-model="pseudoICTerm"
                required
              ></textarea>
            </div>
          </div>
        </transition>

        <div class="navigation-buttons">
          <button
            v-if="currentStep > 1"
            type="button"
            class="nav-button secondary"
            @click="previousStep"
          >
            <i class="fas fa-arrow-left"></i> Anterior
          </button>
          <button
            type="button"
            class="nav-button secondary"
            @click="resetForm"
          >
            <i class="fas fa-undo"></i> Limpiar
          </button>
          <button
            v-if="currentStep < totalSteps"
            type="button"
            class="nav-button primary"
            @click="nextStep"
          >
            Siguiente <i class="fas fa-arrow-right"></i>
          </button>
          <button
            v-else
            type="submit"
            class="nav-button primary submit-button"
            :disabled="isSubmitting"
          >
            <i class="fas fa-paper-plane"></i> {{ isSubmitting ? 'Enviando...' : 'Enviar Aplicación' }}
          </button>
        </div>
      </form>
    </div>

    <transition name="toast">
      <div
        v-if="successMessage"
        class="toast success"
      >
        <i class="fas fa-check-circle"></i> {{ successMessage }}
      </div>
    </transition>
    <transition name="toast">
      <div
        v-if="errorMessage"
        class="toast error"
      >
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>
    </transition>
  </div>
</template>

<style scoped>
:root {
  --dark-bg: #0d1117;
  --dark-card: #161b22;
  --dark-card-hover: #1f2937;
  --dark-border: #30363d;
  --dark-text: #e6edf3;
  --dark-text-secondary: #8b949e;
  --primary: #58a6ff;
  --primary-hover: #388bfd;
  --success: #238636;
  --error: #da3633;
  --warning: #d29922;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --border-radius: 12px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: linear-gradient(135deg, var(--dark-bg) 0%, #1a1f2e 100%);
  color: var(--dark-text);
  font-family:
    'Segoe UI',
    system-ui,
    -apple-system,
    sans-serif;
  line-height: 1.6;
  min-height: 100vh;
  padding: 1rem;
}

.container {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
}

header {
  text-align: center;
  padding: 2rem 0;
  margin-bottom: 2rem;
}

.logo-container {
  position: relative;
  margin: 0 auto 2rem;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), #7c3aed);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 8px 32px rgba(88, 166, 255, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  animation: logoFloat 6s ease-in-out infinite;
  transition: var(--transition);
}

.logo-container:hover {
  transform: scale(1.02) rotate(5deg);
  box-shadow:
    0 12px 40px rgba(88, 166, 255, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.2);
}

.saed-logo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  filter: brightness(1.1) contrast(1.1);
  transition: var(--transition);
}

.logo-container:hover .saed-logo {
  filter: brightness(1.2) contrast(1.2);
}

@keyframes logoFloat {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-10px) rotate(2deg);
  }
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--primary);
  border-radius: 50%;
  animation: particleFloat 4s ease-in-out infinite;
  animation-delay: var(--delay);
  opacity: 0.7;
}

.particle:nth-child(2) {
  top: 20%;
  right: 20%;
}

.particle:nth-child(3) {
  top: 50%;
  right: 10%;
}

.particle:nth-child(4) {
  bottom: 20%;
  right: 20%;
}

.particle:nth-child(5) {
  bottom: 20%;
  left: 20%;
}

.particle:nth-child(6) {
  top: 20%;
  left: 20%;
}

.particle:nth-child(7) {
  top: 50%;
  left: 10%;
}

@keyframes particleFloat {
  0%,
  100% {
    transform: translateY(0px) scale(1);
    opacity: 0.7;
  }

  50% {
    transform: translateY(-20px) scale(1.2);
    opacity: 1;
  }
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, var(--primary), #7c3aed, var(--dark-text));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: titleGlow 3s ease-in-out infinite alternate;
}

@keyframes titleGlow {
  0% {
    filter: brightness(1);
  }

  100% {
    filter: brightness(1.1);
  }
}

.subtitle {
  font-size: 1.1rem;
  color: var(--dark-text-secondary);
  max-width: 600px;
  margin: 0 auto 2rem;
}

.progress-container {
  max-width: 400px;
  margin: 0 auto;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: var(--dark-border);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), #7c3aed);
  border-radius: 4px;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: progressShimmer 2s infinite;
}

@keyframes progressShimmer {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

.progress-text {
  font-size: 0.9rem;
  color: var(--dark-text-secondary);
  font-weight: 500;
}

.step-indicators {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.step-dot {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--dark-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: var(--transition);
  position: relative;
}

.step-dot.active {
  background: var(--primary);
  color: white;
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(88, 166, 255, 0.5);
}

.step-dot.completed {
  background: var(--success);
  color: white;
}

.step-dot:hover:not(.active) {
  background: var(--dark-card-hover);
  transform: scale(1.05);
}

.form-container {
  background: var(--dark-card);
  border-radius: var(--border-radius);
  padding: 2.5rem;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.form-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
}

.form-section {
  min-height: 400px;
}

.active-section {
  animation: sectionFadeIn 0.5s ease-out;
}

@keyframes sectionFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.section-title i {
  font-size: 1.2rem;
}

.form-field {
  margin-bottom: 1.5rem;
  animation: fieldSlideIn 0.3s ease-out;
  animation-fill-mode: both;
}

.form-field:nth-child(2) {
  animation-delay: 0.1s;
}

.form-field:nth-child(3) {
  animation-delay: 0.2s;
}

.form-field:nth-child(4) {
  animation-delay: 0.3s;
}

@keyframes fieldSlideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 0.95rem;
  color: white;
}

input,
textarea,
select {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: 2px solid var(--dark-border);
  border-radius: var(--border-radius);
  background: rgba(255, 255, 255, 0.05);
  color: var(--dark-text);
  transition: var(--transition);
  font-family: inherit;
}

input:focus,
textarea:focus,
select:focus {
  border-color: var(--primary);
  outline: none;
  box-shadow: 0 0 0 4px rgba(88, 166, 255, 0.2);
  background: rgba(255, 255, 255, 0.08);
}

.form-row {
  display: flex;
  gap: 1.5rem;
}

.form-row .form-field {
  flex: 1;
}

.navigation-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: space-between;
  align-items: center;
}

.nav-button {
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
}

.nav-button.primary {
  background: linear-gradient(135deg, var(--primary), #7c3aed);
  color: white;
}

.nav-button.primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(88, 166, 255, 0.4);
}

.nav-button.secondary {
  background: transparent;
  border: 2px solid var(--dark-border);
  color: var(--dark-text-secondary);
}

.nav-button.secondary:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--primary);
  color: var(--dark-text);
}

.nav-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-button {
  background: linear-gradient(135deg, var(--success), #16a34a);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.toast {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem 1.5rem;
  border-radius: var(--border-radius);
  font-size: 0.95rem;
  font-weight: 500;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

.toast.success {
  background: linear-gradient(135deg, var(--success), #16a34a);
  color: white;
}

.toast.error {
  background: linear-gradient(135deg, var(--error), #dc2626);
  color: white;
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(20px) scale(0.9);
}

@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
    gap: 0;
  }

  .navigation-buttons {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-button {
    width: 100%;
    justify-content: center;
  }

  .step-indicators {
    gap: 0.5rem;
  }

  .step-dot {
    width: 35px;
    height: 35px;
    font-size: 0.8rem;
  }

  .title {
    font-size: 2rem;
  }

  .logo-container {
    width: 140px;
    height: 140px;
  }

  .saed-logo {
    width: 100px;
    height: 100px;
  }
}
</style>
