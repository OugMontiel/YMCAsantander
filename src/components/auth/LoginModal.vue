<!-- Cambios hechos por Sara -->

<template>
  <div class="modal">
    <div class="modal-content">
      <h2>Bienvenido a YMCA</h2>
      
      <div class="login-actions">
        <button @click="login">Iniciar Sesión</button>
        <button @click="register">Registrarse</button>
        <button @click="$emit('close')">Cerrar</button>
      </div>
      
    </div>
  </div>
</template>


<script setup>
function login() {
  console.log('Login...')
  // lógica de login aquí
}

function register() {
  console.log('Ir a registro...')
  // redirigir o mostrar otra vista/modal
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 320px;
  width: 90%;
  text-align: center;
  z-index: 10000;
}

/* Nueva clase para agrupar botones */
.login-actions {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}


.login-actions button {
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 6px;
  background-color: var(--color-hover-primario);
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.login-actions button:hover {
  background-color: var(--color-hover-primario);
}

</style>
