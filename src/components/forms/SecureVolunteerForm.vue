<template>
  <div class="secure-form-container">
    <h3 class="form-title">Inscripción de Voluntariado YMCA Santander</h3>
    <p class="form-subtitle">Tus datos están protegidos bajo estrictos estándares de seguridad y confidencialidad.</p>

    <form @submit.prevent="handleSubmit" novalidate class="form-body">
      <!-- Campo Nombre Completo -->
      <div class="form-group">
        <label for="nombre" class="form-label">Nombre Completo *</label>
        <input
          id="nombre"
          v-model="formData.nombre"
          type="text"
          maxlength="60"
          autocomplete="name"
          class="form-input"
          :class="{ 'input-error': formErrors.nombre }"
          placeholder="Ej. Juan Pérez"
          required
        />
        <span v-if="formErrors.nombre" class="error-text">{{ formErrors.nombre }}</span>
      </div>

      <!-- Campo Correo Electrónico -->
      <div class="form-group">
        <label for="email" class="form-label">Correo Electrónico *</label>
        <input
          id="email"
          v-model="formData.email"
          type="email"
          maxlength="100"
          autocomplete="email"
          class="form-input"
          :class="{ 'input-error': formErrors.email }"
          placeholder="ejemplo@dominio.com"
          required
        />
        <span v-if="formErrors.email" class="error-text">{{ formErrors.email }}</span>
      </div>

      <!-- Campo Teléfono Móvil -->
      <div class="form-group">
        <label for="telefono" class="form-label">Teléfono Móvil (WhatsApp) *</label>
        <input
          id="telefono"
          v-model="formData.telefono"
          type="tel"
          maxlength="15"
          autocomplete="tel"
          class="form-input"
          :class="{ 'input-error': formErrors.telefono }"
          placeholder="3001234567"
          required
        />
        <span v-if="formErrors.telefono" class="error-text">{{ formErrors.telefono }}</span>
      </div>

      <!-- Campo Documento -->
      <div class="form-group">
        <label for="documento" class="form-label">Documento de Identidad *</label>
        <input
          id="documento"
          v-model="formData.documento"
          type="text"
          maxlength="11"
          class="form-input"
          :class="{ 'input-error': formErrors.documento }"
          placeholder="Número de documento"
          required
        />
        <span v-if="formErrors.documento" class="error-text">{{ formErrors.documento }}</span>
      </div>

      <!-- Programa de Voluntariado -->
      <div class="form-group">
        <label for="programa" class="form-label">Programa de Interés *</label>
        <select
          id="programa"
          v-model="formData.programa"
          class="form-input"
          :class="{ 'input-error': formErrors.programa }"
          required
        >
          <option value="" disabled>Selecciona un programa</option>
          <option value="paz-a-la-paz">Paz a la Paz</option>
          <option value="mision-paz">Misión Paz y Ciudadanía</option>
          <option value="y-mana">Y-Maná</option>
          <option value="our-words">Our Words (Enseñanza de inglés)</option>
          <option value="ritmos-paz">Ritmos para la Paz</option>
          <option value="general">Voluntariado General</option>
        </select>
        <span v-if="formErrors.programa" class="error-text">{{ formErrors.programa }}</span>
      </div>

      <!-- Mensaje o Motivación -->
      <div class="form-group">
        <label for="mensaje" class="form-label">¿Por qué deseas ser voluntario? (Opcional)</label>
        <textarea
          id="mensaje"
          v-model="formData.mensaje"
          maxlength="1000"
          rows="3"
          class="form-input"
          :class="{ 'input-error': formErrors.mensaje }"
          placeholder="Cuéntanos brevemente tu motivación..."
        ></textarea>
        <span v-if="formErrors.mensaje" class="error-text">{{ formErrors.mensaje }}</span>
      </div>

      <!-- Aceptación de términos y protección de datos -->
      <div class="form-checkbox-group">
        <label class="checkbox-container">
          <input
            v-model="formData.aceptaTerminos"
            type="checkbox"
            required
          />
          <span class="checkbox-label">
            Acepto la política de tratamiento de datos personales de YMCA Santander.
          </span>
        </label>
        <span v-if="formErrors.aceptaTerminos" class="error-text block">{{ formErrors.aceptaTerminos }}</span>
      </div>

      <!-- Mensajes de estado -->
      <div v-if="submitSuccess" class="alert-success">
        ✅ ¡Solicitud recibida correctamente! Nos pondremos en contacto contigo pronto.
      </div>
      <div v-if="submitError" class="alert-error">
        ❌ {{ submitError }}
      </div>

      <!-- Botón de Envío -->
      <button
        type="submit"
        :disabled="isSubmitting"
        class="submit-btn"
      >
        <span v-if="isSubmitting">Enviando con seguridad...</span>
        <span v-else>Enviar Solicitud Segura</span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import { validateVolunteerForm, csrfService } from '@/utils/security';

const formData = reactive({
  nombre: '',
  email: '',
  telefono: '',
  documento: '',
  programa: '',
  mensaje: '',
  aceptaTerminos: false
});

const formErrors = ref({});
const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref(null);

onMounted(() => {
  // Inicializar token Anti-CSRF al cargar el componente de formulario
  csrfService.initToken();
});

async function handleSubmit() {
  submitSuccess.value = false;
  submitError.value = null;

  // 1. Validación estricta y sanitización en cliente
  const validationResult = validateVolunteerForm(formData);
  formErrors.value = validationResult.errors;

  if (!validationResult.isValid) {
    return;
  }

  isSubmitting.value = true;

  try {
    // 2. Envío mediante transporte seguro con cabecera Anti-CSRF
    const response = await csrfService.secureRequest('/api/voluntarios', {
      method: 'POST',
      body: JSON.stringify(validationResult.data)
    });

    if (!response.ok) {
      throw new Error(`Error en el servidor: código ${response.status}`);
    }

    submitSuccess.value = true;
    // Resetear formulario
    Object.assign(formData, {
      nombre: '',
      email: '',
      telefono: '',
      documento: '',
      programa: '',
      mensaje: '',
      aceptaTerminos: false
    });
  } catch (err) {
    submitError.value = err.message || 'Error al procesar la solicitud.';
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<style scoped>
.secure-form-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--color-fondo-texto, #ffffff);
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}
.form-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-texto-secundario, #002f6c);
  margin-bottom: 0.5rem;
}
.form-subtitle {
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 1.5rem;
}
.form-body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.form-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1e293b;
}
.form-input {
  width: 100%;
  padding: 0.65rem 0.85rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 0.95rem;
  transition: border-color 0.2s;
}
.form-input:focus {
  outline: none;
  border-color: var(--color-hover-primario, #e31b23);
  box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.15);
}
.input-error {
  border-color: #ef4444;
}
.error-text {
  font-size: 0.75rem;
  color: #ef4444;
}
.form-checkbox-group {
  margin-top: 0.5rem;
}
.checkbox-container {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  cursor: pointer;
}
.checkbox-label {
  font-size: 0.825rem;
  color: #475569;
}
.alert-success {
  padding: 0.75rem;
  background-color: #ecfdf5;
  border: 1px solid #10b981;
  border-radius: 6px;
  color: #065f46;
  font-size: 0.875rem;
}
.alert-error {
  padding: 0.75rem;
  background-color: #fef2f2;
  border: 1px solid #ef4444;
  border-radius: 6px;
  color: #991b1b;
  font-size: 0.875rem;
}
.submit-btn {
  background-color: var(--color-hover-primario, #e31b23);
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.1s ease;
}
.submit-btn:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
}
.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
