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
      <h1 class="m-0 text-4xl md:text-5xl text-[var(--color-texto-secundario)] font-bold text-center">¿POR QUÉ HACERTE SOCIO?</h1>
    </section>

    <!-- Contenido Principal -->
    <section class="w-full p-8">
      <!-- Motivos -->
      <div class="mb-16">


        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <!-- Motivo 1 -->
          <div
            class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
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
          <div
            class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
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
          <div
            class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div class="flex justify-center mb-4">
              <div class="p-4 bg-[var(--color-fondo)] rounded-full shadow-sm">
                <Icon icon="mdi:shield-check" class="w-12 h-12 text-[var(--color-hover-primario)]" />
              </div>
            </div>
            <h3 class="text-xl font-bold text-[var(--color-texto-secundario)] mb-2">Transparencia</h3>
            <p class="leading-relaxed">Acceso a informes detallados sobre el uso de recursos y el impacto de los programas que apoyas.</p>
          </div>

          <!-- Motivo 4 -->
          <div
            class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div class="flex justify-center mb-4">
              <div class="p-4 bg-[var(--color-fondo)] rounded-full shadow-sm">
                <Icon icon="mdi:certificate" class="w-12 h-12 text-[var(--color-hover-primario)]" />
              </div>
            </div>
            <h3 class="text-xl font-bold text-[var(--color-texto-secundario)] mb-2">Beneficios Fiscales</h3>
            <p class="leading-relaxed">Tus aportes te pueden otorgar un descuento del 37% del valor donado sobre el impuesto de renta causado en Colombia..</p>
          </div>

          <!-- Motivo 5 -->
          <div
            class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
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
          <div
            class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
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

        <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-texto-secundario)] mb-8 text-center">CAMPAÑA FINANCIERA</h2>

        <div class="max-w-5xl mx-auto space-y-6 px-4">
          <p class="leading-relaxed text-lg text-center">
            En <strong>YMCA Santander</strong>, nuestra campaña financiera se basa en la filantropía, entendida como la respuesta empática
            de individuos e instituciones a causas sociales que buscan el bienestar y la transformación de comunidades vulnerables.
            Reconocemos que los recursos financieros son esenciales para el desarrollo, expansión y sostenibilidad de nuestros programas
            comunitarios, así como para fortalecer las capacidades de nuestra organización.
          </p>
          <p class="leading-relaxed text-lg text-center">
            Nos esforzamos en gestionar los fondos necesarios para operar y sostener nuestros programas de servicio a la comunidad,
            confiando siempre en que estos medios se nos faciliten para cumplir nuestra misión. Para asegurar que nuestra sede sea un
            espacio seguro para los jóvenes, implementamos actividades de recaudación de fondos que promueven la autosostenibilidad
            financiera. Esto contribuye directamente al desarrollo de los procesos juveniles y al fortalecimiento comunitario, a través de
            actividades de integración y la venta de productos YMCA.
          </p>
          <p class="leading-relaxed text-lg text-center font-bold text-[var(--color-hover-primario)]">
            ¡Te invitamos a donar y ser parte del cambio con YMCA Santander!
          </p>

          <!-- Video Placeholder -->
          <!-- <div class="w-full aspect-video bg-gray-200 rounded-xl flex items-center justify-center shadow-inner mt-8">
            <div class="text-center text-gray-500">
              <Icon icon="mdi:video-outline" class="w-16 h-16 mx-auto mb-2 opacity-50" />
              <p class="text-xl font-semibold">Video de Campaña Financiera</p>
              <p class="text-sm">(Próximamente)</p>
            </div>
          </div> -->
        </div>
      </div>

      <!-- Call to Action -->
      <div class="max-w-4xl mx-auto">
        <div
          class="bg-gradient-to-r from-[var(--color-hover-primario)] to-[var(--color-hover-secundario)] p-8 rounded-2xl shadow-lg text-center"
        >
          <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">¡Únete a nuestra familia YMCA!</h3>
          <p class="text-white text-lg mb-6">Te invitamos a ser parte del cambio desde la <strong>YMCA Santander</strong>.</p>
          <a
            href="mailto:contacto@ymcasantander.org"
            class="inline-block bg-white text-[var(--color-hover-primario)] font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-md"
          >
            Contáctanos
          </a>
        </div>
      </div>

      <!-- Socio Empresarial -->
      <div class="mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-texto-secundario)] mb-8 text-center">
          Socio Empresarial
        </h2>
        
        <div class="max-w-5xl mx-auto space-y-6 px-4">
          <p class="leading-relaxed text-lg text-center">
            En <strong>YMCA Santander</strong>, la Responsabilidad Social Empresarial (RSE) ofrece a tu empresa la oportunidad de contribuir activamente al mejoramiento social, económico y medioambiental de las comunidades. Al colaborar con nosotros, tu organización puede obtener reconocimiento y un valioso acercamiento a las necesidades de la región.
          </p>
          <p class="leading-relaxed text-lg text-center">
            Invitamos a tu equipo de trabajo a participar en diversas iniciativas que marcan la diferencia. Pueden involucrarse en jornadas de limpieza de quebradas, acompañamiento a sectores vulnerables a través de actividades lúdicas y recreativas, el apoyo a emprendimientos sociales y juveniles, o la vinculación con actividades de inmersión en inglés para reducir la brecha social que enfrentan los jóvenes por la falta de una segunda lengua. <strong>¡Tu compromiso nos ayuda a construir un futuro mejor para Bucaramanga y sus alrededores!</strong>
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
