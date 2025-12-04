<script>
import logoMPC from "@/assets/img/proyectos/pazaLaPaz/LogoPazaLaPazAzul.webp";

export default {
  name: "TituloPazYCiudadania",
  data() {
    return {
      logoMPC,
    };
  },
};
</script>

<template>
  <div class="flex justify-center items-center gap-8 p-8 pb-6 bg-[var(--color-fondo)]">
    <img v-lazy="{src: logoMPC}" alt="Logo Misión Paz Y Ciudadanía" class="w-16 h-16 object-contain transition-transform duration-300 hover:scale-110" />
    <h1 class="m-0 text-4xl md:text-5xl text-[var(--color-texto-secundario)] font-bold text-center">Semillas de paz y ciudadanía.</h1>
  </div>
</template>

<style scoped></style>

