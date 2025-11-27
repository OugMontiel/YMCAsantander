<script>
export default {
  props: {
    videoUrl: {
      type: String,
      required: true,
    },
    visible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    cerrar() {
      this.$emit("cerrar");
    },
    handleEscape(e) {
      if (e.key === "Escape" && this.visible) {
        this.cerrar();
      }
    },
  },
  mounted() {
    document.addEventListener("keydown", this.handleEscape);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleEscape);
  },
};
</script>

<template>
  <div class="modal" v-if="visible" @click.self="cerrar" id="videoModal" role="dialog" aria-modal="true" aria-labelledby="videoTitle">
    <div class="modal-content">
      <!-- Título oculto para accesibilidad -->
      <h2 id="videoTitle" class="sr-only">Reproductor de video</h2>

      <iframe :src="videoUrl" frameborder="0" allowfullscreen title="Video de YouTube"></iframe>

      <button @click="cerrar" aria-label="Cerrar video">✖</button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-content {
  background: var(--color-fondo);
  padding: 2rem;
  border-radius: 1rem;
  max-width: 90%;
  width: 100%;
  max-width: 800px;
  text-align: center;
  position: relative;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal-content iframe {
  width: 100%;
  height: 450px;
  border-radius: 0.5rem;
  border: none;
}

.modal-content button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: var(--color-botones-primario);
  color: var(--color-texto-principal-blanco);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 8px var(--color-fondo-shadow);
}

.modal-content button:hover {
  background-color: var(--color-hover-primario);
  transform: scale(1.1);
}

.modal-content button:active {
  transform: scale(0.95);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* xxl - Pantallas grandes */
@media (min-width: 1201px) {
  .modal-content iframe {
    height: 500px;
  }
}

/* xl - Laptops / desktops medianos */
@media (max-width: 1200px) {
  .modal-content iframe {
    height: 450px;
  }
}

/* lg - Laptops pequeñas */
@media (max-width: 992px) {
  .modal-content {
    padding: 1.5rem;
    max-width: 95%;
  }
  
  .modal-content iframe {
    height: 400px;
  }
}

/* md - Tablets */
@media (max-width: 768px) {
  .modal-content {
    padding: 1rem;
    max-width: 95%;
  }
  
  .modal-content iframe {
    height: 350px;
  }
  
  .modal-content button {
    width: 35px;
    height: 35px;
    font-size: 1.25rem;
    top: 0.5rem;
    right: 0.5rem;
  }
}

/* sm - Teléfonos estándar */
@media (max-width: 576px) {
  .modal-content {
    padding: 0.75rem;
    max-width: 98%;
  }
  
  .modal-content iframe {
    height: 250px;
  }
  
  .modal-content button {
    width: 30px;
    height: 30px;
    font-size: 1rem;
  }
}

/* xs - Teléfonos pequeños */
@media (max-width: 480px) {
  .modal-content iframe {
    height: 200px;
  }
}
</style>
