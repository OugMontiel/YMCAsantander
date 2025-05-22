<script>
export default {
  name: "EnConstruccion",
  props: {
    mensaje: {
      type: String,
      default: "Esta página está en desarrollo.",
    },
    mostrarBotonInicio: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    irInicio() {
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <div class="contenedor">
    <h1 class="titulo">🚧 En Construcción</h1>
    <p class="mensaje">{{ mensaje }}</p>

    <button v-if="mostrarBotonInicio" @click="irInicio" class="boton">Ir al inicio</button>
  </div>
</template>

<style scoped>
.contenedor {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 70vh;
  text-align: center;

  padding: 1rem;
}

.titulo {
  margin-bottom: 1rem;
}

.mensaje {
  margin-bottom: 1.5rem;
}

.boton {
  background-color: var(--color-botones-primario);
  color: var(--color-texto-principal-blanco);

  padding: 0.5rem 1rem;
  border-radius: 1em;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.boton:hover {
  background-color: var(--color-hover-primario);
}
</style>
