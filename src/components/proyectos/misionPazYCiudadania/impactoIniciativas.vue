<script setup>
import {Icon} from "@iconify/vue";
</script>

<template>
  <section class="p-8">
    <div class="mb-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-texto-secundario)] mb-4">IMPACTO</h2>
      <p class="leading-relaxed text-lg text-center max-w-4xl mx-auto">
        Este proyecto se ha ejecutado en dos ocasiones, y en su última versión, se logró la realización de
        <strong>19 iniciativas de incidencia social</strong>, entre las cuales se pueden resaltar:
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      <!-- Alma Sana -->
      <div class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md border-l-4 border-[var(--color-hover-primario)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div class="flex items-start gap-4">
          <div class="p-3 bg-[var(--color-fondo)] rounded-full shadow-sm shrink-0">
            <Icon icon="mdi:heart-pulse" class="w-8 h-8 text-[var(--color-hover-primario)]" />
          </div>
          <div>
            <h3 class="text-xl font-bold text-[var(--color-texto-secundario)] mb-2">Alma Sana</h3>
            <p class="leading-relaxed">
              Es un proyecto que busca generar hábitos que incidan de manera positiva en la salud mental de los
              voluntarios de la YMCA Santander.
            </p>
          </div>
        </div>
      </div>

      <!-- Plantearte -->
      <div class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md border-l-4 border-[var(--color-hover-primario)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div class="flex items-start gap-4">
          <div class="p-3 bg-[var(--color-fondo)] rounded-full shadow-sm shrink-0">
            <Icon icon="mdi:palette" class="w-8 h-8 text-[var(--color-hover-primario)]" />
          </div>
          <div>
            <h3 class="text-xl font-bold text-[var(--color-texto-secundario)] mb-2">Plantearte</h3>
            <p class="leading-relaxed">
              Es un proyecto que busca la concientización sobre el cuidado del medio ambiente, por medio de
              actividades que involucran el arte.
            </p>
          </div>
        </div>
      </div>

      <!-- EcoÁngulo -->
      <div class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md border-l-4 border-[var(--color-hover-primario)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div class="flex items-start gap-4">
          <div class="p-3 bg-[var(--color-fondo)] rounded-full shadow-sm shrink-0">
            <Icon icon="mdi:leaf" class="w-8 h-8 text-[var(--color-hover-primario)]" />
          </div>
          <div>
            <h3 class="text-xl font-bold text-[var(--color-texto-secundario)] mb-2">EcoÁngulo</h3>
            <p class="leading-relaxed">
              Busca generar conciencia en los estudiantes del colegio Ángulo sobre el cuidado del medio ambiente, a
              partir del aprovechamiento de los recursos que se pueden reciclar.
            </p>
          </div>
        </div>
      </div>

      <!-- Hora del Café -->
      <div class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md border-l-4 border-[var(--color-hover-primario)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div class="flex items-start gap-4">
          <div class="p-3 bg-[var(--color-fondo)] rounded-full shadow-sm shrink-0">
            <Icon icon="mdi:coffee" class="w-8 h-8 text-[var(--color-hover-primario)]" />
          </div>
          <div>
            <h3 class="text-xl font-bold text-[var(--color-texto-secundario)] mb-2">Hora del Café</h3>
            <p class="leading-relaxed">
              Busca concientizar a las mujeres de la comunidad del barrio El Cinal del municipio de Bucaramanga,
              sobre la importancia de incentivar el autocuidado, para fortalecer su rol de mujer.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

