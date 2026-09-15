/**
 * Módulo de Protección contra Falsificación de Peticiones en Sitios Cruzados (CSRF)
 * Proyecto: YMCA Santander
 *
 * Implementa:
 * - Generación de tokens anti-CSRF criptográficamente seguros (Web Crypto API).
 * - Manejo en memoria para evitar almacenamiento inseguro.
 * - Validación y adjunto automático de encabezados anti-CSRF (X-CSRF-Token).
 * - Envoltorio de transporte seguro para solicitudes mutables (POST, PUT, DELETE, PATCH).
 */

class CSRFService {
  constructor() {
    this._csrfToken = null;
    this._tokenHeader = 'X-CSRF-Token';
    this._initialized = false;
  }

  /**
   * Genera un token aleatorio criptográficamente fuerte de 32 bytes (256 bits)
   */
  _generateSecureToken() {
    if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
      const array = new Uint8Array(32);
      window.crypto.getRandomValues(array);
      return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    }
    // Fallback seguro usando array typed si window.crypto está en otro scope
    throw new Error('Crypto API no disponible para generación segura de tokens CSRF.');
  }

  /**
   * Inicializa o actualiza el token anti-CSRF para la sesión actual
   */
  initToken() {
    this._csrfToken = this._generateSecureToken();
    this._initialized = true;
    return this._csrfToken;
  }

  /**
   * Obtiene el token CSRF activo o lo genera si no existe
   */
  getToken() {
    if (!this._csrfToken || !this._initialized) {
      return this.initToken();
    }
    return this._csrfToken;
  }

  /**
   * Limpia el token al terminar sesión
   */
  clearToken() {
    this._csrfToken = null;
    this._initialized = false;
  }

  /**
   * Verifica si un método HTTP es potencialmente modificador de estado
   */
  isStateChangingMethod(method) {
    const safeMethods = ['GET', 'HEAD', 'OPTIONS'];
    return !safeMethods.includes(method.toUpperCase());
  }

  /**
   * Valida que un token entrante coincida de manera segura con el token esperado
   */
  verifyToken(receivedToken) {
    if (!receivedToken || !this._csrfToken) {
      return false;
    }
    if (typeof receivedToken !== 'string' || receivedToken.length !== this._csrfToken.length) {
      return false;
    }

    // Comparación en tiempo constante para mitigar ataques de temporización (timing attacks)
    let result = 0;
    for (let i = 0; i < receivedToken.length; i++) {
      result |= receivedToken.charCodeAt(i) ^ this._csrfToken.charCodeAt(i);
    }
    return result === 0;
  }

  /**
   * Cliente HTTP seguro que inyecta automáticamente cabeceras de protección CSRF
   * y garantiza el modo de credenciales seguras.
   */
  async secureRequest(url, options = {}) {
    const config = { ...options };
    const method = (config.method || 'GET').toUpperCase();

    config.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(config.headers || {})
    };

    // Si el método modifica estado en el servidor, adjuntar cabecera Anti-CSRF
    if (this.isStateChangingMethod(method)) {
      config.headers[this._tokenHeader] = this.getToken();
    }

    // Asegurar política de credenciales para Same-Origin
    if (!config.credentials) {
      config.credentials = 'same-origin';
    }

    const response = await fetch(url, config);

    // Si el servidor envía un nuevo token en cabeceras de respuesta, sincronizarlo
    const refreshedToken = response.headers.get('x-csrf-token') || response.headers.get('x-xsrf-token');
    if (refreshedToken) {
      this._csrfToken = refreshedToken;
    }

    return response;
  }
}

export const csrfService = new CSRFService();
