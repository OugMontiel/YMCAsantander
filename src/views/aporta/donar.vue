<script setup>
import {Icon} from "@iconify/vue";
import { ref } from 'vue';

const showQR = ref(false);
</script>

<template>
  <main class="w-full min-h-screen bg-[var(--color-fondo)]">
    <!-- Título -->
    <section class="flex justify-center items-center gap-8 p-8 bg-[var(--color-fondo)]">
      <div class="p-3 bg-[var(--color-fondo-secundario)] rounded-full shadow-md">
        <Icon icon="mdi:hand-coin" class="w-12 h-12 text-[var(--color-hover-primario)]" />
      </div>
      <h1 class="m-0 text-4xl md:text-5xl text-[var(--color-texto-secundario)] font-bold text-center">Haz tu Aporte</h1>
    </section>

    <!-- Contenido Principal -->
    <section class="w-full p-8 pt-0">
      <!-- Beneficio Fiscal -->
      <div class="mb-8 max-w-3xl mx-auto text-center">
          <p class="text-lg font-semibold">
            Tus aportes te pueden otorgar un descuento del
            <strong class="text-[var(--color-hover-primario)]">25%</strong> del valor donado sobre el impuesto de renta causado en Colombia.
          </p>
      </div>
      
      <!-- Métodos de Donación -->
      <div class="mb-16">

        
        <h6 class="text-3xl md:text-4xl font-bold text-[var(--color-texto-secundario)] mb-8 text-center">Elige cómo donar</h6>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- Transferencia Bancaria -->
          <div class="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <!-- Triangular Header -->
            <div class="relative h-48 bg-gradient-to-b from-[var(--color-confianza)] to-[var(--color-transparencia)] flex items-center justify-center" style="clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);">
              <div class="p-4 bg-white/20 backdrop-blur-md rounded-full mb-6">
                <Icon icon="mdi:bank" class="w-16 h-16 text-white" />
              </div>
            </div>
            
            <!-- Content -->
            <div class="px-8 pb-8 pt-4 text-center">
              <h3 class="text-2xl font-bold text-[var(--color-confianza)] mb-2">Cuenta Corriente</h3>
              <div class="w-16 h-1 bg-[var(--color-calidez)] mx-auto mb-4 rounded-full"></div>
              <p class="text-3xl font-black text-[var(--color-texto-principal)] mb-1 tracking-wider">
                90304023-6
              </p>
              <p class="text-lg text-[var(--color-texto-secundario)] font-medium mb-6">
                Banco AV. Villas
              </p>
              <a href="https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00027801&origen=buscar" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-[var(--color-fondo-secundario)] rounded-full text-[var(--color-confianza)] font-bold text-sm group-hover:bg-[var(--color-confianza)] group-hover:text-white transition-colors duration-300 shadow-sm">
                Donar Ahora
              </a>
            </div>
          </div>

          <!-- Nequi -->
          <div class="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-full">
            <!-- Triangular Header -->
            <div class="relative h-48 bg-gradient-to-b from-[var(--color-espiritualidad)] to-[var(--color-generosidad)] flex items-center justify-center" style="clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);">
              <div class="p-4 bg-white/20 backdrop-blur-md rounded-full mb-6">
                <Icon icon="mdi:cellphone" class="w-16 h-16 text-white" />
              </div>
            </div>

            <!-- Content -->
            <div class="px-8 pb-8 pt-4 text-center">
              <h3 class="text-2xl font-bold text-[var(--color-espiritualidad)] mb-2">Nequi</h3>
              <div class="w-16 h-1 bg-[var(--color-generosidad)] mx-auto mb-4 rounded-full"></div>
              <p class="text-[var(--color-texto-principal)] text-center mb-4 leading-relaxed">
                Dona de forma rápida y segura escaneando el código o usando el número.
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://recarga.nequi.com.co/billetera/recarga" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-[var(--color-fondo-secundario)] rounded-full text-[var(--color-espiritualidad)] font-bold text-sm hover:bg-[var(--color-espiritualidad)] hover:text-white transition-colors duration-300 shadow-sm">
                  Ir a Nequi
                </a>
                <a href="#" @click.prevent="showQR = true" class="inline-block px-6 py-3 bg-[var(--color-fondo-secundario)] rounded-full text-[var(--color-espiritualidad)] font-bold text-sm hover:bg-[var(--color-espiritualidad)] hover:text-white transition-colors duration-300 shadow-sm">
                  Ver QR
                </a>
              </div>
            </div>
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

    <!-- QR Modal -->
    <div v-if="showQR" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300" @click.self="showQR = false">
      <div class="bg-white rounded-2xl p-8 max-w-sm w-full relative shadow-2xl transform transition-all duration-300 scale-100">
        <button @click="showQR = false" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors">
          <Icon icon="mdi:close-circle" class="w-8 h-8" />
        </button>
        
        <div class="text-center">
          <h3 class="text-2xl font-bold text-[var(--color-espiritualidad)] mb-6">Código QR Nequi</h3>
          <div class="bg-gray-100 p-4 rounded-xl mb-6 inline-block">
            <!-- Placeholder QR -->
            <img src="https://via.placeholder.com/300x300?text=QR+Nequi" alt="QR Nequi" class="w-64 h-64 object-contain rounded-lg" />
          </div>
          <p class="text-gray-600 mb-4">Escanea este código desde tu App Nequi</p>
          <button @click="showQR = false" class="px-6 py-2 bg-[var(--color-fondo-secundario)] rounded-full text-gray-700 font-bold hover:bg-gray-200 transition-colors">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
