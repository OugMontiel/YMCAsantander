/**
 * Módulo de Manejo Seguro de Sesiones de Usuario
 * Proyecto: YMCA Santander
 *
 * Aplica buenas prácticas de seguridad:
 * - Almacenamiento en memoria volátil de tokens de sesión para mitigar robo por XSS en localStorage.
 * - Control estricto de tiempo de inactividad (Idle Timeout) y tiempo de vida absoluto (Absolute Timeout).
 * - Protección contra fijación de sesión (Session Fixation) mediante regeneración de identificadores.
 * - Detección de actividad del usuario con regulación de eventos (throttling).
 * - Destrucción segura y completa del estado de sesión al cerrar sesión.
 */

import { csrfService } from './csrf.js';

// Configuración de tiempos de sesión (en milisegundos)
const SESSION_CONFIG = {
  INACTIVITY_TIMEOUT_MS: 15 * 60 * 1000, // 15 minutos de inactividad
  ABSOLUTE_TIMEOUT_MS: 8 * 60 * 60 * 1000, // 8 horas máximo de sesión continua
  ACTIVITY_THROTTLE_MS: 10 * 1000 // Regular actualización de actividad cada 10s
};

class SecureSessionManager {
  constructor() {
    this._sessionToken = null;
    this._user = null;
    this._sessionStartedAt = null;
    this._lastActivityAt = null;
    this._inactivityTimer = null;
    this._absoluteTimer = null;
    this._lastThrottleTimestamp = 0;
    this._boundOnUserActivity = this._onUserActivity.bind(this);
    this._eventListenersAttached = false;
    this._listeners = new Set();
  }

  /**
   * Inicia una nueva sesión segura de usuario
   * Genera un nuevo identificador evitando fijación de sesión
   */
  startSession(userData, sessionToken) {
    this.terminateSession(); // Limpieza previa preventiva

    this._user = Object.freeze({ ...userData });
    this._sessionToken = sessionToken || this._generateSecureId();
    this._sessionStartedAt = Date.now();
    this._lastActivityAt = Date.now();

    // Inicializar token CSRF asociado a la nueva sesión
    csrfService.initToken();

    this._startTimers();
    this._attachActivityListeners();
    this._notifyListeners('start', { user: this._user });
  }

  /**
   * Genera un identificador único seguro usando Web Crypto
   */
  _generateSecureId() {
    if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
      const array = new Uint8Array(24);
      window.crypto.getRandomValues(array);
      return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    }
    return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
  }

  /**
   * Retorna el token de sesión actual en memoria
   */
  getSessionToken() {
    if (!this.isValidSession()) {
      this.terminateSession();
      return null;
    }
    return this._sessionToken;
  }

  /**
   * Retorna los datos del usuario autenticado
   */
  getCurrentUser() {
    if (!this.isValidSession()) {
      return null;
    }
    return this._user;
  }

  /**
   * Valida si la sesión sigue activa dentro de los umbrales de tiempo
   */
  isValidSession() {
    if (!this._sessionToken || !this._sessionStartedAt || !this._lastActivityAt) {
      return false;
    }

    const now = Date.now();
    const isInactiveExpired = (now - this._lastActivityAt) > SESSION_CONFIG.INACTIVITY_TIMEOUT_MS;
    const isAbsoluteExpired = (now - this._sessionStartedAt) > SESSION_CONFIG.ABSOLUTE_TIMEOUT_MS;

    return !isInactiveExpired && !isAbsoluteExpired;
  }

  /**
   * Registra actividad del usuario para reiniciar el temporizador de inactividad
   */
  _onUserActivity() {
    const now = Date.now();
    if (now - this._lastThrottleTimestamp < SESSION_CONFIG.ACTIVITY_THROTTLE_MS) {
      return;
    }
    this._lastThrottleTimestamp = now;

    if (this.isValidSession()) {
      this._lastActivityAt = now;
      this._resetInactivityTimer();
    } else if (this._sessionToken) {
      this.terminateSession('TIMEOUT_INACTIVITY');
    }
  }

  _startTimers() {
    this._resetInactivityTimer();

    // Temporizador absoluto
    this._absoluteTimer = setTimeout(() => {
      this.terminateSession('TIMEOUT_ABSOLUTE');
    }, SESSION_CONFIG.ABSOLUTE_TIMEOUT_MS);
  }

  _resetInactivityTimer() {
    if (this._inactivityTimer) {
      clearTimeout(this._inactivityTimer);
    }
    this._inactivityTimer = setTimeout(() => {
      this.terminateSession('TIMEOUT_INACTIVITY');
    }, SESSION_CONFIG.INACTIVITY_TIMEOUT_MS);
  }

  _attachActivityListeners() {
    if (this._eventListenersAttached || typeof window === 'undefined') return;

    const events = ['mousemove', 'keydown', 'touchstart', 'scroll'];
    events.forEach(event => {
      window.addEventListener(event, this._boundOnUserActivity, { passive: true });
    });
    this._eventListenersAttached = true;
  }

  _detachActivityListeners() {
    if (!this._eventListenersAttached || typeof window === 'undefined') return;

    const events = ['mousemove', 'keydown', 'touchstart', 'scroll'];
    events.forEach(event => {
      window.removeEventListener(event, this._boundOnUserActivity);
    });
    this._eventListenersAttached = false;
  }

  /**
   * Destruye la sesión actual limpiando memoria, temporizadores y cookies asociadas
   */
  terminateSession(reason = 'USER_LOGOUT') {
    if (this._inactivityTimer) clearTimeout(this._inactivityTimer);
    if (this._absoluteTimer) clearTimeout(this._absoluteTimer);

    this._inactivityTimer = null;
    this._absoluteTimer = null;
    this._sessionToken = null;
    this._user = null;
    this._sessionStartedAt = null;
    this._lastActivityAt = null;

    this._detachActivityListeners();
    csrfService.clearToken();

    // Eliminar cookies de sesión en el navegador con banderas seguras
    if (typeof document !== 'undefined') {
      document.cookie = 'ymca_session=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; Secure; SameSite=Strict';
    }

    this._notifyListeners('terminate', { reason });
  }

  /**
   * Suscribe escuchadores para reaccionar a cambios en el ciclo de vida de la sesión
   */
  subscribe(callback) {
    this._listeners.add(callback);
    return () => this._listeners.delete(callback);
  }

  _notifyListeners(event, payload) {
    this._listeners.forEach(callback => {
      try {
        callback(event, payload);
      } catch (err) {
        console.error('Error en listener de sesión:', err);
      }
    });
  }
}

export const sessionManager = new SecureSessionManager();
