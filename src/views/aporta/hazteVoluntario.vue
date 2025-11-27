<script setup>
import {Icon} from "@iconify/vue";
import RedesSociales from "@/components/util/redesSociales.vue";
</script>

<template>
  <main class="w-full min-h-screen bg-[var(--color-fondo)]">
    <!-- Título -->
    <section class="flex justify-center items-center gap-8 p-8 pb-6 bg-[var(--color-fondo)]">
      <div class="p-3 bg-[var(--color-fondo-secundario)] rounded-full shadow-md">
        <Icon icon="mdi:hand-heart" class="w-12 h-12 text-[var(--color-hover-primario)]" />
      </div>
      <h1 class="m-0 text-4xl md:text-5xl text-[var(--color-texto-secundario)] font-bold text-center">Hazte Voluntario</h1>
    </section>

    <!-- Contenido Principal -->
    <section class="w-full p-8">
      <!-- Voluntariado Corporativo -->
      <div class="mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-texto-secundario)] mb-8 text-center">
          VOLUNTARIADO CORPORATIVO
        </h2>
        
        <div class="max-w-5xl mx-auto space-y-6 px-4">
          <div class="bg-[var(--color-fondo-texto)] p-8 rounded-2xl shadow-md">
            <h3 class="text-2xl font-bold text-[var(--color-hover-primario)] mb-4">
              Responsabilidad Social Empresarial (RSE) con YMCA Santander
            </h3>
            <p class="leading-relaxed text-lg mb-6">
              En <strong>YMCA Santander</strong>, la Responsabilidad Social Empresarial (RSE) ofrece a tu empresa la oportunidad de contribuir activamente al mejoramiento social, económico y medioambiental de las comunidades. Al colaborar con nosotros, tu organización puede obtener reconocimiento y un valioso acercamiento a las necesidades de la región.
            </p>
            <p class="leading-relaxed text-lg">
              Invitamos a tu equipo de trabajo a participar en diversas iniciativas que marcan la diferencia. Pueden involucrarse en jornadas de limpieza de quebradas, acompañamiento a sectores vulnerables a través de actividades lúdicas y recreativas, el apoyo a emprendimientos sociales y juveniles, o la vinculación con actividades de inmersión en inglés para reducir la brecha social que enfrentan los jóvenes por la falta de una segunda lengua. <strong>¡Tu compromiso nos ayuda a construir un futuro mejor para Bucaramanga y sus alrededores!</strong>
            </p>
          </div>
        </div>
      </div>

      <!-- Iniciativas de Voluntariado -->
      <div class="mb-16">
        <h3 class="text-2xl md:text-3xl font-bold text-[var(--color-texto-secundario)] mb-8 text-center">
          Iniciativas en las que puedes participar
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <!-- Limpieza de Quebradas -->
          <div class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md border-l-4 border-[var(--color-hover-primario)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div class="flex items-start gap-4">
              <div class="p-3 bg-[var(--color-fondo)] rounded-full shadow-sm shrink-0">
                <Icon icon="mdi:water" class="w-8 h-8 text-[var(--color-hover-primario)]" />
              </div>
              <div>
                <h4 class="text-xl font-bold text-[var(--color-texto-secundario)] mb-2">Limpieza de Quebradas</h4>
                <p class="leading-relaxed">
                  Jornadas de limpieza ambiental para proteger nuestros recursos hídricos y el medio ambiente.
                </p>
              </div>
            </div>
          </div>

          <!-- Actividades Lúdicas -->
          <div class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md border-l-4 border-[var(--color-hover-primario)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div class="flex items-start gap-4">
              <div class="p-3 bg-[var(--color-fondo)] rounded-full shadow-sm shrink-0">
                <Icon icon="mdi:human-greeting" class="w-8 h-8 text-[var(--color-hover-primario)]" />
              </div>
              <div>
                <h4 class="text-xl font-bold text-[var(--color-texto-secundario)] mb-2">Acompañamiento Social</h4>
                <p class="leading-relaxed">
                  Actividades lúdicas y recreativas con sectores vulnerables para generar espacios de alegría y desarrollo.
                </p>
              </div>
            </div>
          </div>

          <!-- Emprendimientos -->
          <div class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md border-l-4 border-[var(--color-hover-primario)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div class="flex items-start gap-4">
              <div class="p-3 bg-[var(--color-fondo)] rounded-full shadow-sm shrink-0">
                <Icon icon="mdi:lightbulb-on" class="w-8 h-8 text-[var(--color-hover-primario)]" />
              </div>
              <div>
                <h4 class="text-xl font-bold text-[var(--color-texto-secundario)] mb-2">Apoyo a Emprendimientos</h4>
                <p class="leading-relaxed">
                  Fortalecimiento de emprendimientos sociales y juveniles para impulsar el desarrollo económico local.
                </p>
              </div>
            </div>
          </div>

          <!-- Inmersión en Inglés -->
          <div class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md border-l-4 border-[var(--color-hover-primario)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div class="flex items-start gap-4">
              <div class="p-3 bg-[var(--color-fondo)] rounded-full shadow-sm shrink-0">
                <Icon icon="mdi:translate" class="w-8 h-8 text-[var(--color-hover-primario)]" />
              </div>
              <div>
                <h4 class="text-xl font-bold text-[var(--color-texto-secundario)] mb-2">Inmersión en Inglés</h4>
                <p class="leading-relaxed">
                  Actividades de práctica de inglés para reducir la brecha social y abrir oportunidades para los jóvenes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Síguenos en Redes Sociales -->
      <div class="mb-16">
        <div class="max-w-4xl mx-auto bg-[var(--color-fondo-texto)] p-8 rounded-2xl shadow-md text-center">
          <h3 class="text-2xl md:text-3xl font-bold text-[var(--color-texto-secundario)] mb-4">
            ¿Listo para hacer la diferencia?
          </h3>
          <p class="text-lg mb-6">
            Únete a nuestro equipo de voluntarios y sé parte del cambio que Bucaramanga necesita.
          </p>
          <p class="text-lg mb-6 font-semibold">
            Síguenos en nuestras redes sociales y mantente informado sobre nuestras actividades:
          </p>
          <div class="flex justify-center">
            <RedesSociales 
              variant="footer" 
              size="xlarge" 
              :showLabels="true"
              spacing="relaxed"
              color="var(--color-texto-secundario)"
              hoverColor="var(--color-hover-primario)"
            />
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="max-w-4xl mx-auto">
        <div class="bg-gradient-to-r from-[var(--color-hover-primario)] to-[var(--color-hover-secundario)] p-8 rounded-2xl shadow-lg text-center">
          <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
            Contáctanos
          </h3>
          <p class="text-white text-lg mb-6">
            ¿Tienes preguntas o quieres más información? Escríbenos y con gusto te atenderemos.
          </p>
          <a href="mailto:contacto@ymcasantander.org" class="inline-block bg-white text-[var(--color-hover-primario)] font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-md">
            Escríbenos
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>

