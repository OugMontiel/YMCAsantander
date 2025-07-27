<!-- Cambios hechos por Sara -->

<template>
  <div class="login-button">
    <!-- Si el usuario NO ha iniciado sesión -->
    <button v-if="!user" @click="openModal">
      Ingresar
    </button>

    <!-- Si el usuario SÍ ha iniciado sesión -->
    <div v-else class="avatar-container" @click="toggleMenu">
      <img class="avatar" :src="user.avatarUrl || '/default-avatar.png'" alt="avatar" />
      <!-- Mostramos el menú solo si showMenu es true -->
      <AvatarMenu v-if="showMenu" @close="showMenu = false" />
    </div>

    <!-- Modal de login -->
    <LoginModal v-if="showModal && !user" @close="showModal = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LoginModal from './LoginModal.vue'
import AvatarMenu from './AvatarMenu.vue'

// Simular usuario logueado (puedes dejarlo como null si aún no hay auth)
const user = ref(null)
// const user = ref({ name: 'Sara Ariza', avatarUrl: '/default-avatar.png' })

const showModal = ref(false)
const showMenu = ref(false)

function openModal() {
  showModal.value = true
}

function toggleMenu() {
  showMenu.value = !showMenu.value
}
</script>

<style scoped>
.login-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.avatar-container {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
</style>