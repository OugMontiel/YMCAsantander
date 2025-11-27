<script setup>
import {Icon} from "@iconify/vue";
</script>

<template>
  <main class="w-full min-h-screen bg-[var(--color-fondo)]">
    <!-- Título -->
    <section class="flex justify-center items-center gap-8 p-8 pb-6 bg-[var(--color-fondo)]">
      <div class="p-3 bg-[var(--color-fondo-secundario)] rounded-full shadow-md">
        <Icon icon="mdi:account-heart" class="w-12 h-12 text-[var(--color-hover-primario)]" />
      </div>
      <h1 class="m-0 text-4xl md:text-5xl text-[var(--color-texto-secundario)] font-bold text-center">Hazte Socio</h1>
    </section>

    <!-- Contenido Principal -->
    <section class="w-full p-8">
      <!-- Motivos -->
      <div class="mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-texto-secundario)] mb-8 text-center">
          ¿POR QUÉ HACERTE SOCIO?
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <!-- Motivo 1 -->
          <div class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div class="flex justify-center mb-4">
              <div class="p-4 bg-[var(--color-fondo)] rounded-full shadow-sm">
                <Icon icon="mdi:heart-multiple" class="w-12 h-12 text-[var(--color-hover-primario)]" />
              </div>
            </div>
            <h3 class="text-xl font-bold text-[var(--color-texto-secundario)] mb-2">Impacto Social</h3>
            <p class="leading-relaxed">
              Contribuye directamente al desarrollo de programas que transforman vidas de jóvenes en situación de vulnerabilidad.
            </p>
          </div>

          <!-- Motivo 2 -->
          <div class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div class="flex justify-center mb-4">
              <div class="p-4 bg-[var(--color-fondo)] rounded-full shadow-sm">
                <Icon icon="mdi:account-group" class="w-12 h-12 text-[var(--color-hover-primario)]" />
              </div>
            </div>
            <h3 class="text-xl font-bold text-[var(--color-texto-secundario)] mb-2">Comunidad YMCA</h3>
            <p class="leading-relaxed">
              Forma parte de la red global de voluntarios más antigua del mundo, conectando con personas comprometidas.
            </p>
          </div>

          <!-- Motivo 3 -->
          <div class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div class="flex justify-center mb-4">
              <div class="p-4 bg-[var(--color-fondo)] rounded-full shadow-sm">
                <Icon icon="mdi:shield-check" class="w-12 h-12 text-[var(--color-hover-primario)]" />
              </div>
            </div>
            <h3 class="text-xl font-bold text-[var(--color-texto-secundario)] mb-2">Transparencia</h3>
            <p class="leading-relaxed">
              Acceso a informes detallados sobre el uso de recursos y el impacto de los programas que apoyas.
            </p>
          </div>

          <!-- Motivo 4 -->
          <div class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div class="flex justify-center mb-4">
              <div class="p-4 bg-[var(--color-fondo)] rounded-full shadow-sm">
                <Icon icon="mdi:certificate" class="w-12 h-12 text-[var(--color-hover-primario)]" />
              </div>
            </div>
            <h3 class="text-xl font-bold text-[var(--color-texto-secundario)] mb-2">Beneficios Fiscales</h3>
            <p class="leading-relaxed">
              Tus aportes son deducibles de impuestos hasta en un 100% en tu declaración de renta en Colombia.
            </p>
          </div>

          <!-- Motivo 5 -->
          <div class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div class="flex justify-center mb-4">
              <div class="p-4 bg-[var(--color-fondo)] rounded-full shadow-sm">
                <Icon icon="mdi:handshake" class="w-12 h-12 text-[var(--color-hover-primario)]" />
              </div>
            </div>
            <h3 class="text-xl font-bold text-[var(--color-texto-secundario)] mb-2">Participación Activa</h3>
            <p class="leading-relaxed">
              Oportunidad de involucrarte en actividades, eventos y decisiones que dan forma a nuestros programas.
            </p>
          </div>

          <!-- Motivo 6 -->
          <div class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div class="flex justify-center mb-4">
              <div class="p-4 bg-[var(--color-fondo)] rounded-full shadow-sm">
                <Icon icon="mdi:star" class="w-12 h-12 text-[var(--color-hover-primario)]" />
              </div>
            </div>
            <h3 class="text-xl font-bold text-[var(--color-texto-secundario)] mb-2">Reconocimiento</h3>
            <p class="leading-relaxed">
              Reconocimiento público de tu compromiso con el desarrollo social y la construcción de paz en Santander.
            </p>
          </div>
        </div>
      </div>

      <!-- Campaña Financiera con decoración -->
      <div class="mb-16 relative">
        <!-- Decoración izquierda -->
        <div class="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 opacity-10">
          <Icon icon="mdi:hand-coin-outline" class="w-full h-full text-[var(--color-hover-primario)]" />
        </div>
        
        <!-- Decoración derecha -->
        <div class="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 opacity-10">
          <Icon icon="mdi:charity" class="w-full h-full text-[var(--color-hover-secundario)]" />
        </div>

        <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-texto-secundario)] mb-8 text-center">
          CAMPAÑA FINANCIERA
        </h2>
        
        <div class="max-w-5xl mx-auto space-y-6 px-4">
          <p class="leading-relaxed text-lg text-center">
            En la <strong>YMCA</strong> entendemos la Filantropía como las respuestas empáticas de personas e instituciones a causas sociales que
            propendan por el bienestar y transformación social de las comunidades, especialmente aquellas que se encuentran en condiciones de
            vulnerabilidad social.
          </p>
          <p class="leading-relaxed text-lg text-center">
            Los recursos financieros son uno de los medios para facilitar el desarrollo, extensión y sostenibilidad de programas de servicio a la
            comunidad, o el fortalecimiento de capacidades en la organización.
          </p>
          <p class="leading-relaxed text-lg text-center">
            Realizamos esfuerzos para gestionar los recursos que se requieren con el fin de desarrollar programas de servicio a la comunidad, así
            como la operación y sostenibilidad, poniendo siempre la confianza en la voluntad de Dios, como el proveedor que cuida y facilita los
            medios y oportunidades para el cumplimiento de la Misión.
          </p>
          <p class="leading-relaxed text-lg text-center">
            Lo que nos lleva a que nuestra sede <strong>YMCA Santander</strong> sea un espacio seguro para los jóvenes. Es por eso que, a través
            de las actividades de recaudación de fondos, propendemos por la autosostenibilidad financiera, con lo que se aporta al desarrollo de
            los procesos juveniles y el fortalecimiento comunitario, a través de la realización de actividades de integración y la venta de
            productos YMCA.
          </p>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="max-w-4xl mx-auto">
        <div class="bg-gradient-to-r from-[var(--color-hover-primario)] to-[var(--color-hover-secundario)] p-8 rounded-2xl shadow-lg text-center">
          <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
            ¡Únete a nuestra familia YMCA!
          </h3>
          <p class="text-white text-lg mb-6">
            Te invitamos a ser parte del cambio desde la <strong>YMCA Santander</strong>.
          </p>
          <a href="mailto:contacto@ymcasantander.org" class="inline-block bg-white text-[var(--color-hover-primario)] font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-md">
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>

