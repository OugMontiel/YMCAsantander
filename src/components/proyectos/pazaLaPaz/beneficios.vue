<script setup>
import {Icon} from "@iconify/vue";
import beneficios from "@/data/proyectos/beneficiosPrograma.js";
</script>

<template>
  <section class="mt-8">
    <div class="flex justify-center items-center mb-8 p-4 text-center">
      <h2 class="m-0 text-[var(--color-texto-secundario)] text-2xl font-bold">¿Por qué ser parte del programa?</h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div
        class="bg-[var(--color-fondo-secundario)] p-3 border-t-[5px] border-[var(--color-hover-primario)] rounded-2xl flex flex-col items-center gap-4 shadow-[0_2px_8px_var(--color-fondo-shadow)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_4px_12px_var(--color-fondo-shadow)] h-full"
        v-for="(beneficio, index) in beneficios"
        :key="index"
      >
        <div class="p-3 bg-[var(--color-fondo)] rounded-full shadow-sm">
          <Icon :icon="beneficio.icono" :alt="beneficio.alt" class="w-10 h-10 text-[var(--color-hover-primario)]" />
        </div>
        <p class="text-center m-0 leading-relaxed">{{ beneficio.texto }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
