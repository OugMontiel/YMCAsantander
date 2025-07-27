<!-- Cambios hechos por Sara -->

<template>
  <div class="menu">
    <ul>
      <li @click="goToDashboard">Gestor</li>
      <li @click="goToEvents">Eventos</li>
      <li @click="logout">Cerrar sesión</li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToDashboard() {
  // Aquí se validará si el usuario tiene permiso o no
  router.push('/gestor')
}

function goToEvents() {
  router.push('/eventos')
}

function logout() {
  // Aquí se hace la lógica de logout, temporalmente solo un log
  console.log('Cerrar sesión')
  // Emitir evento al componente padre si es necesario
}
</script>

<style scoped>
.menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  box-shadow: 0px 2px 6px rgba(0,0,0,0.1);
  padding: 0.5rem;
  border-radius: 0.5rem;
  z-index: 10;
}
.menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.menu li {
  padding: 0.5rem;
  cursor: pointer;
}
.menu li:hover {
  background-color: #f0f0f0;
}
</style>
