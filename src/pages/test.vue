<template>
  <div class="container">
    <!-- Progress Bar -->
    <div class="progress-container">
      <div class="progress-bar">
        <div
          class="progress-fill"
          :style="{ width: `${formProgress}%` }"
        ></div>
      </div>
      <span class="progress-text">{{ Math.round(formProgress) }}% Completado</span>
    </div>

    <header class="header-animated">
      <div
        class="logo-container"
        :class="{ 'logo-pulse': isSubmitting }"
      >
        <div class="logo-glow"></div>
        <img
          src="https://raw.githubusercontent.com/Muhaddil/simple-link-randomizer/refs/heads/main/images/SAEDLogo.png"
          alt="Logo SAED"
          class="saed-logo"
        />
      </div>
      <h1 class="title">
        <span
          v-for="(char, index) in titleChars"
          :key="index"
          class="title-char"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          {{ char === ' ' ? '\u00A0' : char }}
        </span>
      </h1>
      <p class="subtitle">Completa tu aplicación para unirte al equipo de servicios médicos de emergencia</p>
    </header>

    <div class="form-container">
      <form
        @submit.prevent="handleSubmit"
        class="form"
      >
        <!-- Información Personal -->
        <div
          class="form-section"
          :class="{ 'section-active': activeSection === 0 }"
          @click="setActiveSection(0)"
        >
          <h3 class="section-title">
            <i class="fas fa-user section-icon"></i>
            Información Personal
            <div class="section-progress">
              <div
                class="section-progress-fill"
                :style="{ width: `${getSectionProgress(0)}%` }"
              ></div>
            </div>
          </h3>

          <div
            class="form-fields"
            v-show="activeSection === 0 || showAllSections"
          >
            <div class="form-row">
              <div
                class="form-field"
                :class="{ 'field-filled': name }"
              >
                <label for="name">Nombre y Apellidos IC</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Ingresa tu nombre y apellidos IC"
                  v-model="name"
                  required
                  @focus="focusedField = 'name'"
                  @blur="focusedField = ''"
                />
                <div
                  class="field-underline"
                  :class="{ active: focusedField === 'name' }"
                ></div>
              </div>
            </div>

            <div class="form-row">
              <div
                class="form-field"
                :class="{ 'field-filled': ageIC }"
              >
                <label for="ageIC">Edad IC</label>
                <input
                  id="ageIC"
                  type="text"
                  placeholder="Edad IC"
                  v-model="ageIC"
                  maxlength="2"
                  required
                  @focus="focusedField = 'ageIC'"
                  @blur="focusedField = ''"
                />
                <div
                  class="field-underline"
                  :class="{ active: focusedField === 'ageIC' }"
                ></div>
              </div>
              <div
                class="form-field"
                :class="{ 'field-filled': ageOOC }"
              >
                <label for="ageOOC">Edad OOC</label>
                <input
                  id="ageOOC"
                  type="text"
                  placeholder="Edad OOC"
                  v-model="ageOOC"
                  maxlength="2"
                  required
                  @focus="focusedField = 'ageOOC'"
                  @blur="focusedField = ''"
                />
                <div
                  class="field-underline"
                  :class="{ active: focusedField === 'ageOOC' }"
                ></div>
              </div>
            </div>

            <div class="form-row">
              <div
                class="form-field"
                :class="{ 'field-filled': discordId }"
              >
                <label for="discordId">ID de Discord</label>
                <input
                  id="discordId"
                  type="text"
                  placeholder="Ingresa tu ID de Discord"
                  v-model="discordId"
                  required
                  @focus="focusedField = 'discordId'"
                  @blur="focusedField = ''"
                />
                <div
                  class="field-underline"
                  :class="{ active: focusedField === 'discordId' }"
                ></div>
              </div>
              <div
                class="form-field"
                :class="{ 'field-filled': steamUrl }"
              >
                <label for="steamUrl">URL de Steam</label>
                <input
                  id="steamUrl"
                  type="url"
                  placeholder="Ingresa tu URL de Steam"
                  v-model="steamUrl"
                  required
                  @focus="focusedField = 'steamUrl'"
                  @blur="focusedField = ''"
                />
                <div
                  class="field-underline"
                  :class="{ active: focusedField === 'steamUrl' }"
                ></div>
              </div>
            </div>

            <div
              class="form-field"
              :class="{ 'field-filled': dailyTime }"
            >
              <label for="dailyTime">Tiempo Disponible Diario</label>
              <input
                id="dailyTime"
                type="text"
                placeholder="Ejemplo: 2 horas diarias"
                v-model="dailyTime"
                required
                @focus="focusedField = 'dailyTime'"
                @blur="focusedField = ''"
              />
              <div
                class="field-underline"
                :class="{ active: focusedField === 'dailyTime' }"
              ></div>
            </div>
          </div>
        </div>

        <!-- Experiencia y Conocimiento -->
        <div
          class="form-section"
          :class="{ 'section-active': activeSection === 1 }"
          @click="setActiveSection(1)"
        >
          <h3 class="section-title">
            <i class="fas fa-brain section-icon"></i>
            Experiencia y Conocimiento
            <div class="section-progress">
              <div
                class="section-progress-fill"
                :style="{ width: `${getSectionProgress(1)}%` }"
              ></div>
            </div>
          </h3>

          <div
            class="form-fields"
            v-show="activeSection === 1 || showAllSections"
          >
            <div
              class="form-field"
              :class="{ 'field-filled': emsRoleKnowledge }"
            >
              <label for="emsRoleKnowledge">Conocimiento del Rol de EMS</label>
              <textarea
                id="emsRoleKnowledge"
                placeholder="Describe tu conocimiento sobre el rol de EMS"
                v-model="emsRoleKnowledge"
                rows="4"
                required
                @focus="focusedField = 'emsRoleKnowledge'"
                @blur="focusedField = ''"
              ></textarea>
              <div
                class="field-underline"
                :class="{ active: focusedField === 'emsRoleKnowledge' }"
              ></div>
            </div>

            <div
              class="form-field"
              :class="{ 'field-filled': previousExperiences }"
            >
              <label for="previousExperiences">Experiencias en Otras Ciudades</label>
              <textarea
                id="previousExperiences"
                placeholder="Describe tus experiencias previas"
                v-model="previousExperiences"
                rows="4"
                required
                @focus="focusedField = 'previousExperiences'"
                @blur="focusedField = ''"
              ></textarea>
              <div
                class="field-underline"
                :class="{ active: focusedField === 'previousExperiences' }"
              ></div>
            </div>

            <div
              class="form-field"
              :class="{ 'field-filled': whyChooseMe }"
            >
              <label for="whyChooseMe">¿Por qué deberíamos elegirte?</label>
              <textarea
                id="whyChooseMe"
                placeholder="Explica por qué deberíamos elegirte"
                v-model="whyChooseMe"
                rows="4"
                required
                @focus="focusedField = 'whyChooseMe'"
                @blur="focusedField = ''"
              ></textarea>
              <div
                class="field-underline"
                :class="{ active: focusedField === 'whyChooseMe' }"
              ></div>
            </div>
          </div>
        </div>

        <!-- Ejemplos de Roleplay -->
        <div
          class="form-section"
          :class="{ 'section-active': activeSection === 2 }"
          @click="setActiveSection(2)"
        >
          <h3 class="section-title">
            <i class="fas fa-theater-masks section-icon"></i>
            Ejemplos de Roleplay
            <div class="section-progress">
              <div
                class="section-progress-fill"
                :style="{ width: `${getSectionProgress(2)}%` }"
              ></div>
            </div>
          </h3>

          <div
            class="form-fields"
            v-show="activeSection === 2 || showAllSections"
          >
            <div class="form-row">
              <div
                class="form-field"
                :class="{ 'field-filled': exampleMe }"
              >
                <label for="exampleMe">Ejemplo de /me</label>
                <textarea
                  id="exampleMe"
                  placeholder="Proporciona un ejemplo de /me"
                  v-model="exampleMe"
                  rows="3"
                  required
                  @focus="focusedField = 'exampleMe'"
                  @blur="focusedField = ''"
                ></textarea>
                <div
                  class="field-underline"
                  :class="{ active: focusedField === 'exampleMe' }"
                ></div>
              </div>
              <div
                class="form-field"
                :class="{ 'field-filled': exampleDo }"
              >
                <label for="exampleDo">Ejemplo de /do</label>
                <textarea
                  id="exampleDo"
                  placeholder="Proporciona un ejemplo de /do"
                  v-model="exampleDo"
                  rows="3"
                  required
                  @focus="focusedField = 'exampleDo'"
                  @blur="focusedField = ''"
                ></textarea>
                <div
                  class="field-underline"
                  :class="{ active: focusedField === 'exampleDo' }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Conocimientos Médicos -->
        <div
          class="form-section"
          :class="{ 'section-active': activeSection === 3 }"
          @click="setActiveSection(3)"
        >
          <h3 class="section-title">
            <i class="fas fa-stethoscope section-icon"></i>
            Conocimientos Médicos
            <div class="section-progress">
              <div
                class="section-progress-fill"
                :style="{ width: `${getSectionProgress(3)}%` }"
              ></div>
            </div>
          </h3>

          <div
            class="form-fields"
            v-show="activeSection === 3 || showAllSections"
          >
            <div
              class="form-field"
              :class="{ 'field-filled': medicationForInfection }"
            >
              <label for="medicationForInfection">¿Qué medicamentos usarías para una infección?</label>
              <textarea
                id="medicationForInfection"
                placeholder="Describe los medicamentos que usarías"
                v-model="medicationForInfection"
                rows="3"
                required
                @focus="focusedField = 'medicationForInfection'"
                @blur="focusedField = ''"
              ></textarea>
              <div
                class="field-underline"
                :class="{ active: focusedField === 'medicationForInfection' }"
              ></div>
            </div>
          </div>
        </div>

        <!-- Definiciones -->
        <div
          class="form-section"
          :class="{ 'section-active': activeSection === 4 }"
          @click="setActiveSection(4)"
        >
          <h3 class="section-title">
            <i class="fas fa-book section-icon"></i>
            Definiciones
            <div class="section-progress">
              <div
                class="section-progress-fill"
                :style="{ width: `${getSectionProgress(4)}%` }"
              ></div>
            </div>
          </h3>

          <div
            class="form-fields"
            v-show="activeSection === 4 || showAllSections"
          >
            <div
              class="form-field"
              :class="{ 'field-filled': defineDM }"
            >
              <label for="defineDM">Define DM</label>
              <textarea
                id="defineDM"
                placeholder="Define DM con tus palabras"
                v-model="defineDM"
                rows="2"
                required
                @focus="focusedField = 'defineDM'"
                @blur="focusedField = ''"
              ></textarea>
              <div
                class="field-underline"
                :class="{ active: focusedField === 'defineDM' }"
              ></div>
            </div>

            <div
              class="form-field"
              :class="{ 'field-filled': definePG }"
            >
              <label for="definePG">Define PG</label>
              <textarea
                id="definePG"
                placeholder="Define PG con tus palabras"
                v-model="definePG"
                rows="2"
                required
                @focus="focusedField = 'definePG'"
                @blur="focusedField = ''"
              ></textarea>
              <div
                class="field-underline"
                :class="{ active: focusedField === 'definePG' }"
              ></div>
            </div>

            <div
              class="form-field"
              :class="{ 'field-filled': defineCarjack }"
            >
              <label for="defineCarjack">Define Carjack</label>
              <textarea
                id="defineCarjack"
                placeholder="Define Carjack con tus palabras"
                v-model="defineCarjack"
                rows="2"
                required
                @focus="focusedField = 'defineCarjack'"
                @blur="focusedField = ''"
              ></textarea>
              <div
                class="field-underline"
                :class="{ active: focusedField === 'defineCarjack' }"
              ></div>
            </div>
          </div>
        </div>

        <div class="button-group">
          <button
            type="button"
            class="secondary"
            @click="toggleAllSections"
          >
            <i class="fas fa-eye"></i>
            {{ showAllSections ? 'Colapsar' : 'Ver Todo' }}
          </button>
          <button
            type="button"
            class="secondary"
            @click="resetForm"
          >
            <i class="fas fa-undo"></i>
            Limpiar
          </button>
          <button
            type="submit"
            :disabled="isSubmitting"
            class="primary-submit"
          >
            <div class="button-content">
              <div
                v-if="isSubmitting"
                class="loading-spinner"
              ></div>
              <i
                v-else
                class="fas fa-paper-plane"
              ></i>
              {{ isSubmitting ? 'Enviando...' : 'Enviar Aplicación' }}
            </div>
            <div
              class="button-ripple"
              :class="{ active: buttonRipple }"
            ></div>
          </button>
        </div>
      </form>
    </div>

    <!-- Enhanced Toast Messages -->
    <Transition
      name="toast"
      appear
    >
      <div
        v-if="successMessage"
        class="toast success"
      >
        <div class="toast-icon">
          <i class="fas fa-check-circle"></i>
        </div>
        <div class="toast-content">
          <div class="toast-title">¡Éxito!</div>
          <div class="toast-message">{{ successMessage }}</div>
        </div>
        <div class="toast-progress">
          <div class="toast-progress-bar"></div>
        </div>
      </div>
    </Transition>

    <Transition
      name="toast"
      appear
    >
      <div
        v-if="errorMessage"
        class="toast error"
      >
        <div class="toast-icon">
          <i class="fas fa-exclamation-circle"></i>
        </div>
        <div class="toast-content">
          <div class="toast-title">Error</div>
          <div class="toast-message">{{ errorMessage }}</div>
        </div>
        <div class="toast-progress">
          <div class="toast-progress-bar"></div>
        </div>
      </div>
    </Transition>

    <!-- Floating particles background -->
    <div class="particles">
      <div
        v-for="i in 20"
        :key="i"
        class="particle"
        :style="{
          left: Math.random() * 100 + '%',
          animationDelay: Math.random() * 20 + 's',
          animationDuration: Math.random() * 10 + 10 + 's',
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const webhook = atob(import.meta.env.VITE_DISCORD_WEBHOOK ?? '');

// Form fields
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

// UI state
const successMessage = ref('');
const errorMessage = ref('');
const isSubmitting = ref(false);
const activeSection = ref(0);
const showAllSections = ref(false);
const focusedField = ref('');
const buttonRipple = ref(false);

// Animation state
const titleChars = ref('Formulario SAMS'.split(''));

// Computed properties
const formProgress = computed(() => {
  const fields = [
    name.value,
    ageIC.value,
    ageOOC.value,
    discordId.value,
    steamUrl.value,
    dailyTime.value,
    emsRoleKnowledge.value,
    previousExperiences.value,
    whyChooseMe.value,
    exampleMe.value,
    exampleDo.value,
    medicationForInfection.value,
    defineDM.value,
    definePG.value,
    defineCarjack.value,
  ];
  const filledFields = fields.filter((field) => field.trim() !== '').length;
  return (filledFields / fields.length) * 100;
});

const getSectionProgress = (sectionIndex) => {
  const sections = [
    [name.value, ageIC.value, ageOOC.value, discordId.value, steamUrl.value, dailyTime.value],
    [emsRoleKnowledge.value, previousExperiences.value, whyChooseMe.value],
    [exampleMe.value, exampleDo.value],
    [medicationForInfection.value],
    [defineDM.value, definePG.value, defineCarjack.value],
  ];

  const sectionFields = sections[sectionIndex];
  const filledFields = sectionFields.filter((field) => field.trim() !== '').length;
  return (filledFields / sectionFields.length) * 100;
};

// Methods
const setActiveSection = (index) => {
  if (!showAllSections.value) {
    activeSection.value = index;
  }
};

const toggleAllSections = () => {
  showAllSections.value = !showAllSections.value;
};

const handleSubmit = async () => {
  if (isSubmitting.value) return;

  buttonRipple.value = true;
  setTimeout(() => (buttonRipple.value = false), 600);

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
    `- **¿Por qué deberíamos elegirte?:** ${whyChooseMe.value}`,
    `- **Ejemplo de /me:** ${exampleMe.value}`,
    `- **Ejemplo de /do:** ${exampleDo.value}`,
    `- **¿Qué medicamentos usarías para una infección?:** ${medicationForInfection.value}`,
    `- **Define DM:** ${defineDM.value}`,
    `- **Define PG:** ${definePG.value}`,
    `- **Define Carjack:** ${defineCarjack.value}`,
  ];

  try {
    await sendToDiscord(payloadSections);
    successMessage.value = 'Aplicación enviada con éxito';
    errorMessage.value = '';
    setTimeout(() => {
      successMessage.value = '';
    }, 5000);
    resetForm();
  } catch (error) {
    errorMessage.value = 'Error al enviar la aplicación.';
    setTimeout(() => {
      errorMessage.value = '';
    }, 5000);
    console.error(error);
  } finally {
    isSubmitting.value = false;
  }
};

const sendToDiscord = async (sections) => {
  const maxMessageLength = 2000;
  let messageBuffer = '# Nueva Aplicación SAMS:\n';
  const username = 'SAMS Application Bot';
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
};

const sendMessageToWebhook = async (content, username, avatar_url) => {
  await new Promise((resolve) => setTimeout(resolve, 200));

  if (!content.trim()) {
    throw new Error('El contenido del mensaje está vacío.');
  }

  const payload = {
    username: username,
    avatar_url: avatar_url,
    content: content,
  };

  const response = await fetch(webhook, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Error en la respuesta del servidor: ${response.status} - ${await response.text()}`);
  }
};

const resetForm = () => {
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
};

onMounted(() => {
  // Trigger initial animations
  setTimeout(() => {
    document.querySelector('.header-animated').classList.add('animate-in');
  }, 100);
});
</script>

<style scoped>
:root {
  --dark-bg: #0a0e1a;
  --dark-card: #1a1f2e;
  --dark-card-hover: #252b3d;
  --dark-border: #2d3748;
  --dark-text: #e2e8f0;
  --dark-text-secondary: #94a3b8;
  --primary: #3b82f6;
  --primary-hover: #2563eb;
  --primary-light: rgba(59, 130, 246, 0.1);
  --success: #10b981;
  --error: #ef4444;
  --warning: #f59e0b;
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-success: linear-gradient(135deg, #10b981 0%, #059669 100%);
  --gradient-error: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-bounce: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --border-radius: 12px;
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 8px 25px rgba(0, 0, 0, 0.2);
  --shadow-xl: 0 12px 35px rgba(0, 0, 0, 0.25);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--dark-bg);
  background-image:
    radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
  color: var(--dark-text);
  font-family:
    'Inter',
    'Segoe UI',
    system-ui,
    -apple-system,
    sans-serif;
  line-height: 1.6;
  min-height: 100vh;
  padding: 1rem;
  overflow-x: hidden;
}

.container {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Progress Bar */
.progress-container {
  position: sticky;
  top: 1rem;
  z-index: 100;
  background: rgba(26, 31, 46, 0.95);
  backdrop-filter: blur(10px);
  border-radius: var(--border-radius);
  padding: 1rem;
  margin-bottom: 2rem;
  border: 1px solid var(--dark-border);
  box-shadow: var(--shadow-lg);
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
  background: var(--gradient-primary);
  border-radius: 4px;
  transition: width 0.5s ease;
  position: relative;
}

.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: shimmer 2s infinite;
}

.progress-text {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--primary);
  text-align: center;
  display: block;
}

/* Header Animations */
.header-animated {
  text-align: center;
  padding: 3rem 0;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(30px);
  transition: var(--transition);
}

.header-animated.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.logo-container {
  margin: 0 auto 2rem;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-xl);
  transition: var(--transition-bounce);
  position: relative;
  overflow: hidden;
}

.logo-container:hover {
  transform: scale(1.05) rotate(5deg);
  box-shadow: 0 15px 40px rgba(59, 130, 246, 0.3);
}

.logo-pulse {
  animation: pulse 2s infinite;
}

.logo-glow {
  position: absolute;
  inset: -2px;
  background: var(--gradient-primary);
  border-radius: 50%;
  opacity: 0;
  transition: var(--transition);
  animation: rotate 3s linear infinite;
}

.logo-container:hover .logo-glow {
  opacity: 0.7;
}

.saed-logo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 2;
}

.title {
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -1px;
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-char {
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
}

.subtitle {
  font-size: 1.25rem;
  color: var(--dark-text-secondary);
  max-width: 700px;
  margin: 0 auto;
  opacity: 0;
  animation: fadeIn 1s ease 0.5s forwards;
}

/* Form Container */
.form-container {
  background: rgba(26, 31, 46, 0.8);
  backdrop-filter: blur(20px);
  border-radius: var(--border-radius);
  padding: 2.5rem;
  box-shadow: var(--shadow-xl);
  margin-bottom: 2rem;
  border: 1px solid var(--dark-border);
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
  background: var(--gradient-primary);
  opacity: 0.5;
}

/* Form Sections */
.form-section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--dark-border);
  transition: var(--transition);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.form-section:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.form-section.section-active {
  border-color: var(--primary);
  background: var(--primary-light);
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.1);
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
}

.section-icon {
  font-size: 1.25rem;
  padding: 0.5rem;
  background: var(--primary-light);
  border-radius: 8px;
  transition: var(--transition);
}

.form-section:hover .section-icon {
  transform: scale(1.1);
  background: var(--primary);
  color: white;
}

.section-progress {
  flex: 1;
  height: 4px;
  background: var(--dark-border);
  border-radius: 2px;
  overflow: hidden;
  margin-left: auto;
  width: 100px;
}

.section-progress-fill {
  height: 100%;
  background: var(--gradient-primary);
  border-radius: 2px;
  transition: width 0.5s ease;
}

/* Form Fields */
.form-fields {
  animation: slideDown 0.3s ease;
}

.form-field {
  margin-bottom: 1.5rem;
  position: relative;
}

.form-field.field-filled label {
  color: var(--primary);
  transform: translateY(-2px);
}

.form-row {
  display: flex;
  gap: 1.5rem;
}

.form-row .form-field {
  flex: 1;
}

label {
  display: block;
  margin-bottom: 0.75rem;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--dark-text);
  transition: var(--transition);
}

input,
textarea {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: 2px solid var(--dark-border);
  border-radius: var(--border-radius);
  background: rgba(255, 255, 255, 0.05);
  color: var(--dark-text);
  transition: var(--transition);
  font-family: inherit;
  resize: vertical;
}

input:focus,
textarea:focus {
  border-color: var(--primary);
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  background: rgba(255, 255, 255, 0.08);
}

.field-underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background: var(--gradient-primary);
  transition: width 0.3s ease;
}

.field-underline.active {
  width: 100%;
}

/* Buttons */
.button-group {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

button {
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  position: relative;
  overflow: hidden;
  min-width: 140px;
}

button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

button:active {
  transform: translateY(0);
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

button.secondary {
  background: transparent;
  border: 2px solid var(--dark-border);
  color: var(--dark-text-secondary);
  flex: 1;
}

button.secondary:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.05);
  color: var(--dark-text);
  border-color: var(--primary);
}

.primary-submit {
  background: var(--gradient-primary);
  flex: 2;
  position: relative;
}

.primary-submit:hover:not(:disabled) {
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}

.button-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  z-index: 2;
}

.button-ripple {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  transform: scale(0);
  border-radius: var(--border-radius);
  transition: transform 0.6s ease;
}

.button-ripple.active {
  transform: scale(1);
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Toast Messages */
.toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  font-size: 0.95rem;
  font-weight: 500;
  z-index: 1000;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  box-shadow: var(--shadow-xl);
  min-width: 350px;
  max-width: 500px;
  position: relative;
  overflow: hidden;
}

.toast.success {
  background: var(--gradient-success);
  color: white;
}

.toast.error {
  background: var(--gradient-error);
  color: white;
}

.toast-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.toast-content {
  flex: 1;
}

.toast-title {
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.toast-message {
  opacity: 0.9;
}

.toast-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: rgba(255, 255, 255, 0.2);
}

.toast-progress-bar {
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  animation: toastProgress 5s linear forwards;
}

/* Particles Background */
.particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--primary);
  border-radius: 50%;
  opacity: 0.1;
  animation: float linear infinite;
}

/* Transitions */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%) scale(0.8);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%) scale(0.8);
}

/* Animations */
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.1;
  }
  90% {
    opacity: 0.1;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

@keyframes toastProgress {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0.5rem;
  }

  .form-row {
    flex-direction: column;
    gap: 0;
  }

  .button-group {
    flex-direction: column;
  }

  .button-group button {
    flex: 1;
  }

  .title {
    font-size: 2.5rem;
  }

  .logo-container {
    width: 150px;
    height: 150px;
  }

  .toast {
    bottom: 1rem;
    right: 1rem;
    left: 1rem;
    min-width: auto;
  }

  .progress-container {
    margin: 0 -0.5rem 2rem;
  }
}

@media (max-width: 480px) {
  .form-container {
    padding: 1.5rem;
  }

  .title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.25rem;
  }
}
</style>
