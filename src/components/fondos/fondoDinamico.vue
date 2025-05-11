<script>
import Azul from "@/assets/fondos/fondoAzulOpc1.png";
import Morado from "@/assets/fondos/fondoMoradoOpc1.png";
import Naranja from "@/assets/fondos/fondoNaranjaOpc1.png";

export default {
  name: "fondoDinamico",
  data() {
    return {
      fondos: [Azul, Morado, Naranja],
      index: 0,
    };
  },
  mounted() {
    this.iniciarCambio();
  },
  methods: {
    iniciarCambio() {
      setInterval(() => {
        this.index = (this.index + 1) % this.fondos.length;
      }, 5000); // cambia cada 5s
    },
  },
};
</script>

<template>
  <div class="contenedor-fondos">
    <div
      v-for="(fondo, i) in fondos"
      :key="i"
      class="fondo"
      :style="{
        backgroundImage: `url(${fondo})`,
        opacity: i === index ? 1 : 0,
        zIndex: i === index ? 1 : 0,
      }"
    ></div>
  </div>
</template>

<style scoped>
.contenedor-fondos {
  position: absolute; /* importante para contener los fondos absolutamente posicionados */
  z-index: -100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none; /* evita que el fondo intercepte clics */
}

.fondo {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center center;
  transition: opacity 2s ease-in-out;
}
</style>
