<script setup>
import {Icon} from "@iconify/vue";
</script>

<template>
  <main class="w-full min-h-screen bg-[var(--color-fondo)]">
    <!-- Título -->
    <section class="flex justify-center items-center gap-8 p-8 pb-6 bg-[var(--color-fondo)]">
      <div class="p-3 bg-[var(--color-fondo-secundario)] rounded-full shadow-md">
        <Icon icon="mdi:hand-coin" class="w-12 h-12 text-[var(--color-hover-primario)]" />
      </div>
      <h1 class="m-0 text-4xl md:text-5xl text-[var(--color-texto-secundario)] font-bold text-center">Haz tu Aporte</h1>
    </section>

    <!-- Contenido Principal -->
    <section class="w-full p-8">
      <!-- Métodos de Donación -->
      <div class="mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-texto-secundario)] mb-8 text-center">Elige cómo donar</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- Transferencia Bancaria -->
          <!-- Transferencia Bancaria -->
          <div
            class="group bg-gradient-to-br from-[var(--color-hover-primario)] to-[var(--color-hover-secundario)] p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div class="flex flex-col items-center gap-4">
              <div class="p-4 bg-white/20 backdrop-blur-sm rounded-full">
                <Icon icon="mdi:bank" class="w-16 h-16 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-white">Cuenta Corriente</h3>
              <p class="text-white/90 text-center text-lg font-semibold">90304023-6</p>
              <p class="text-white/90 text-center">Banco AV. Villas</p>
            </div>
          </div>

          <!-- Nequi -->
          <button
            class="group bg-gradient-to-br from-purple-500 to-pink-500 p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div class="flex flex-col items-center gap-4">
              <div class="p-4 bg-white/20 backdrop-blur-sm rounded-full">
                <Icon icon="mdi:cellphone" class="w-16 h-16 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-white">Nequi</h3>
              <p class="text-white/90 text-center">Dona de forma rápida y segura con Nequi</p>
              <div class="mt-2 px-4 py-2 bg-white/20 rounded-lg">
                <p class="text-white text-sm">Click para ver detalles</p>
              </div>
            </div>
          </button>
        </div>

        <!-- Beneficio Fiscal -->
        <div class="mt-8 max-w-3xl mx-auto text-center">
          <div class="bg-[var(--color-fondo-texto)] p-6 rounded-xl shadow-md">
            <Icon icon="mdi:certificate" class="w-12 h-12 text-[var(--color-hover-primario)] mx-auto mb-3" />
            <p class="text-lg font-semibold">
              Tus aportes te pueden deducir hasta en un puede obtener un descuento del
              <strong class="text-[var(--color-hover-primario)]">37%</strong> del valor donado sobre su impuesto de renta causado la
              declaración de renta en Colombia.
            </p>
          </div>
        </div>
      </div>

      <!-- Llamado a la Acción -->
      <div class="mb-16">
        <div class="max-w-5xl mx-auto space-y-6 px-4">
          <p class="leading-relaxed text-lg text-center font-bold text-[var(--color-texto-secundario)]">
            ¡Apoya los sueños de los jóvenes en Bucaramanga!
          </p>
          <p class="leading-relaxed text-lg text-center">
            ¿Quieres transformar el entorno de los jóvenes en Bucaramanga y su área metropolitana? En la YMCA, trabajamos incansablemente
            para disminuir el conflicto y fomentar la paz, creando un territorio seguro para nuestra juventud y sus comunidades.
          </p>
          <p class="leading-relaxed text-lg text-center">
            Como el movimiento de voluntarios más antiguo del mundo, empoderamos a más de <strong>300 jóvenes</strong> para que desarrollen
            sus habilidades sociales y de liderazgo, permitiéndoles replicar estas capacidades en sus propias comunidades y generar espacios
            seguros para otros.
          </p>
          <p class="leading-relaxed text-lg text-center">
            Hoy, tienes el poder de cambiar sus vidas. Tu donación nos ayudará a proporcionarles lo necesario para que fortalezcan su
            liderazgo social y tengan un espacio seguro donde seguir construyendo sus sueños y la esperanza de un futuro mejor.
          </p>
        </div>
      </div>

      <!-- Impacto de tu Donación -->
      <div class="mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-texto-secundario)] mb-8 text-center">Tu donación impacta en</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <!-- Liderazgo -->
          <div
            class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div class="flex justify-center mb-4">
              <div class="p-4 bg-[var(--color-fondo)] rounded-full shadow-sm">
                <Icon icon="mdi:account-group" class="w-12 h-12 text-[var(--color-hover-primario)]" />
              </div>
            </div>
            <h3 class="text-xl font-bold text-[var(--color-texto-secundario)] mb-2">Liderazgo Juvenil</h3>
            <p class="leading-relaxed">Formación de jóvenes líderes comprometidos con el cambio social.</p>
          </div>

          <!-- Espacios Seguros -->
          <div
            class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div class="flex justify-center mb-4">
              <div class="p-4 bg-[var(--color-fondo)] rounded-full shadow-sm">
                <Icon icon="mdi:shield-check" class="w-12 h-12 text-[var(--color-hover-primario)]" />
              </div>
            </div>
            <h3 class="text-xl font-bold text-[var(--color-texto-secundario)] mb-2">Espacios Seguros</h3>
            <p class="leading-relaxed">Creación de entornos protegidos para el desarrollo juvenil.</p>
          </div>

          <!-- Construcción de Paz -->
          <div
            class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div class="flex justify-center mb-4">
              <div class="p-4 bg-[var(--color-fondo)] rounded-full shadow-sm">
                <Icon icon="mdi:peace" class="w-12 h-12 text-[var(--color-hover-primario)]" />
              </div>
            </div>
            <h3 class="text-xl font-bold text-[var(--color-texto-secundario)] mb-2">Construcción de Paz</h3>
            <p class="leading-relaxed">Acciones concretas para reducir el conflicto en las comunidades.</p>
          </div>
        </div>
      </div>

      <!-- Call to Action Final -->
      <div class="max-w-4xl mx-auto">
        <div
          class="bg-gradient-to-r from-[var(--color-hover-secundario)] to-[var(--color-hover-primario)] p-8 rounded-2xl shadow-lg text-center"
        >
          <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">¡Sé parte del cambio!</h3>
          <p class="text-white text-lg mb-6">
            Sabemos que tú también quieres hacer parte del cambio. ¡Únete a la <strong>YMCA Santander</strong>!
          </p>
          <a
            href="mailto:contacto@ymcasantander.org"
            class="inline-block bg-white text-[var(--color-hover-secundario)] font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-md"
          >
            Contáctanos para Donar
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
