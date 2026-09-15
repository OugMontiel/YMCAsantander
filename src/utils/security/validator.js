/**
 * Módulo de Validación Estricta y Sanitización de Entradas
 * Proyecto: YMCA Santander
 *
 * Aplica principios de defensa en profundidad:
 * - Lista blanca (whitelisting) de caracteres permitidos.
 * - Sanitización y codificación de entidades HTML para prevención de XSS.
 * - Validación de tipos, longitudes mínimas y máximas.
 * - Mitigación de Mass Assignment / Asignación Masiva mediante filtrado de campos permitidos.
 */

// Codificación estricta de entidades para prevenir Cross-Site Scripting (XSS)
export function sanitizeString(input) {
  if (typeof input !== 'string') {
    return '';
  }

  const entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

  return input
    .trim()
    .replace(/[&<>"'`=\/]/g, (char) => entityMap[char] || char);
}

// Expresiones regulares estrictas
export const VALIDATION_PATTERNS = {
  // Solo letras, espacios, acentos y caracteres del idioma español (2 a 60 caracteres)
  NAME: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]{2,60}$/,

  // Formato de correo electrónico estándar RFC 5322
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

  // Teléfono móvil en Colombia (10 dígitos comenzando en 3, o formato internacional E.164)
  PHONE_CO: /^(\+?57)?3[0-9]{9}$/,

  // Documento de identidad (Cédula o Tarjeta de identidad: numérico, entre 6 y 11 dígitos)
  DOCUMENT_ID: /^[0-9]{6,11}$/,

  // Mensaje o texto libre seguro: sin scripts, caracteres seguros (hasta 1000 caracteres)
  SAFE_TEXT: /^[\w\s.,;:?!¡¿()\-_'"@#+*/\n\r]{5,1000}$/
};

/**
 * Validador para el formulario de voluntariado de YMCA
 */
export function validateVolunteerForm(data) {
  const errors = {};
  const sanitizedData = {};

  // 1. Nombre completo
  if (!data.nombre || typeof data.nombre !== 'string') {
    errors.nombre = 'El nombre es obligatorio.';
  } else {
    const cleanNombre = data.nombre.trim();
    if (!VALIDATION_PATTERNS.NAME.test(cleanNombre)) {
      errors.nombre = 'El nombre contiene caracteres inválidos o longitud incorrecta (2-60 caracteres).';
    } else {
      sanitizedData.nombre = sanitizeString(cleanNombre);
    }
  }

  // 2. Correo electrónico
  if (!data.email || typeof data.email !== 'string') {
    errors.email = 'El correo electrónico es obligatorio.';
  } else {
    const cleanEmail = data.email.trim().toLowerCase();
    if (cleanEmail.length > 100 || !VALIDATION_PATTERNS.EMAIL.test(cleanEmail)) {
      errors.email = 'El formato del correo electrónico es inválido.';
    } else {
      sanitizedData.email = cleanEmail;
    }
  }

  // 3. Teléfono de contacto
  if (!data.telefono || typeof data.telefono !== 'string') {
    errors.telefono = 'El número de teléfono es obligatorio.';
  } else {
    const cleanPhone = data.telefono.replace(/\s+/g, '');
    if (!VALIDATION_PATTERNS.PHONE_CO.test(cleanPhone)) {
      errors.telefono = 'Ingrese un número telefónico válido (ejemplo: 3001234567 o +573001234567).';
    } else {
      sanitizedData.telefono = cleanPhone;
    }
  }

  // 4. Documento de Identidad
  if (!data.documento || typeof data.documento !== 'string') {
    errors.documento = 'El documento de identidad es obligatorio.';
  } else {
    const cleanDoc = data.documento.trim();
    if (!VALIDATION_PATTERNS.DOCUMENT_ID.test(cleanDoc)) {
      errors.documento = 'El documento debe contener entre 6 y 11 dígitos numéricos.';
    } else {
      sanitizedData.documento = cleanDoc;
    }
  }

  // 5. Área de interés / Programa
  const allowedPrograms = ['paz-a-la-paz', 'mision-paz', 'y-mana', 'our-words', 'ritmos-paz', 'general'];
  if (!data.programa || !allowedPrograms.includes(data.programa)) {
    errors.programa = 'Seleccione un programa o área de voluntariado válida.';
  } else {
    sanitizedData.programa = data.programa;
  }

  // 6. Mensaje o motivación (opcional)
  if (data.mensaje) {
    if (typeof data.mensaje !== 'string' || !VALIDATION_PATTERNS.SAFE_TEXT.test(data.mensaje)) {
      errors.mensaje = 'El mensaje contiene caracteres no admitidos o supera el límite (máximo 1000 caracteres).';
    } else {
      sanitizedData.mensaje = sanitizeString(data.mensaje);
    }
  } else {
    sanitizedData.mensaje = '';
  }

  // 7. Aceptación de política de datos
  if (data.aceptaTerminos !== true) {
    errors.aceptaTerminos = 'Debe aceptar la política de tratamiento de datos personales de YMCA Santander.';
  } else {
    sanitizedData.aceptaTerminos = true;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    data: sanitizedData
  };
}

/**
 * Validador para formulario de donaciones o aportes
 */
export function validateDonationForm(data) {
  const errors = {};
  const sanitizedData = {};

  if (!data.nombre || typeof data.nombre !== 'string' || !VALIDATION_PATTERNS.NAME.test(data.nombre.trim())) {
    errors.nombre = 'El nombre del donante es inválido.';
  } else {
    sanitizedData.nombre = sanitizeString(data.nombre.trim());
  }

  if (!data.email || typeof data.email !== 'string' || !VALIDATION_PATTERNS.EMAIL.test(data.email.trim())) {
    errors.email = 'El correo electrónico es inválido.';
  } else {
    sanitizedData.email = data.email.trim().toLowerCase();
  }

  const monto = Number(data.monto);
  if (!Number.isFinite(monto) || monto < 10000 || monto > 50000000) {
    errors.monto = 'El monto a donar debe ser un valor numérico entre $10,000 y $50,000,000 COP.';
  } else {
    sanitizedData.monto = Math.floor(monto);
  }

  const frecuenciasValidas = ['unica', 'mensual', 'anual'];
  if (!data.frecuencia || !frecuenciasValidas.includes(data.frecuencia)) {
    errors.frecuencia = 'Frecuencia de donación no válida.';
  } else {
    sanitizedData.frecuencia = data.frecuencia;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    data: sanitizedData
  };
}
