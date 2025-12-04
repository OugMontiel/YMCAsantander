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
      <!-- Iniciativas de Voluntariado -->
      <div class="mb-16">
        <h3 class="text-2xl md:text-3xl font-bold text-[var(--color-texto-secundario)] mb-8 text-center">
          Iniciativas en las que puedes participar
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <!-- Y-Maná -->
          <div class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md border-l-4 border-[var(--color-hover-primario)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div class="flex items-start gap-4">
              <div class="p-3 bg-[var(--color-fondo)] rounded-full shadow-sm shrink-0">
                <Icon icon="mdi:food" class="w-8 h-8 text-[var(--color-hover-primario)]" />
              </div>
              <div>
                <h4 class="text-xl font-bold text-[var(--color-texto-secundario)] mb-2">Y-Maná</h4>
                <p class="leading-relaxed">
                  Iniciativa del movimiento YMCA Santander donde voluntarios, colaboradores, simpatizantes y staff, comparten aguapanela con pan con personas en situación de calle en Bucaramanga. Este gesto sirve como puente para el diálogo, la oración y la extensión del Reino de Dios. Los voluntarios gestionan 200 panes y 10 panelas para llevar a cabo esta actividad solidaria.
                </p>
              </div>
            </div>
          </div>

          <!-- Our Words -->
          <div class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md border-l-4 border-[var(--color-hover-primario)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div class="flex items-start gap-4">
              <div class="p-3 bg-[var(--color-fondo)] rounded-full shadow-sm shrink-0">
                <Icon icon="mdi:book-alphabet" class="w-8 h-8 text-[var(--color-hover-primario)]" />
              </div>
              <div>
                <h4 class="text-xl font-bold text-[var(--color-texto-secundario)] mb-2">Our Words</h4>
                <p class="leading-relaxed">
                  Este proyecto busca enseñar inglés a niños de una vereda en Girón desde edades tempranas, utilizando juegos y actividades lúdicas. El objetivo es que los niños se familiaricen con el idioma de forma natural y divertida, contribuyendo así a cerrar la brecha lingüística en esta zona de Santander.
                </p>
              </div>
            </div>
          </div>

          <!-- Ritmos para la paz -->
          <div class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md border-l-4 border-[var(--color-hover-primario)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div class="flex items-start gap-4">
              <div class="p-3 bg-[var(--color-fondo)] rounded-full shadow-sm shrink-0">
                <Icon icon="mdi:music" class="w-8 h-8 text-[var(--color-hover-primario)]" />
              </div>
              <div>
                <h4 class="text-xl font-bold text-[var(--color-texto-secundario)] mb-2">Ritmos para la paz</h4>
                <p class="leading-relaxed">
                  Iniciativa del colegio Campo Hermoso que, a través de la música, busca fomentar la disciplina y el crecimiento personal en aproximadamente 15 jóvenes, se enfoca en el desarrollo integral de los jóvenes, inculcando valores, fortaleciendo habilidades sociales y promoviendo la convivencia pacífica.
                </p>
              </div>
            </div>
          </div>

          <!-- Y-Talk -->
          <div class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md border-l-4 border-[var(--color-hover-primario)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div class="flex items-start gap-4">
              <div class="p-3 bg-[var(--color-fondo)] rounded-full shadow-sm shrink-0">
                <Icon icon="mdi:chat" class="w-8 h-8 text-[var(--color-hover-primario)]" />
              </div>
              <div>
                <h4 class="text-xl font-bold text-[var(--color-texto-secundario)] mb-2">Y-Talk</h4>
                <p class="leading-relaxed">
                  Es un espacio conversacional de inglés que se lleva a cabo en la sede de la YMCA. A través de actividades lúdico-formativas, el programa busca no solo mejorar las habilidades en inglés de los participantes, sino también reconocer y apoyar la importante labor de los voluntarios. Es una iniciativa que combina el aprendizaje del idioma con el fomento de la participación comunitaria.
                </p>
              </div>
            </div>
          </div>

          <!-- Speaking English YMCA-UTS -->
          <div class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md border-l-4 border-[var(--color-hover-primario)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div class="flex items-start gap-4">
              <div class="p-3 bg-[var(--color-fondo)] rounded-full shadow-sm shrink-0">
                <Icon icon="mdi:school" class="w-8 h-8 text-[var(--color-hover-primario)]" />
              </div>
              <div>
                <h4 class="text-xl font-bold text-[var(--color-texto-secundario)] mb-2">Speaking English YMCA-UTS</h4>
                <p class="leading-relaxed">
                  Iniciativa conjunta con las Unidades Tecnológicas de Santander (UTS) que crea un espacio dinámico para que los estudiantes de la institución puedan socializar, participar recreativamente y mejorar sus habilidades de habla y comprensión en inglés. A través de juegos y actividades lúdicas, este encuentro busca ser una oportunidad interactiva para que los jóvenes pongan a prueba y fortalezcan su segundo idioma en un ambiente divertido y relajado.
                </p>
              </div>
            </div>
          </div>

          <!-- Pequeñas sonrisas -->
          <div class="bg-[var(--color-fondo-secundario)] p-6 rounded-2xl shadow-md border-l-4 border-[var(--color-hover-primario)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div class="flex items-start gap-4">
              <div class="p-3 bg-[var(--color-fondo)] rounded-full shadow-sm shrink-0">
                <Icon icon="mdi:emoticon-happy" class="w-8 h-8 text-[var(--color-hover-primario)]" />
              </div>
              <div>
                <h4 class="text-xl font-bold text-[var(--color-texto-secundario)] mb-2">Pequeñas sonrisas</h4>
                <p class="leading-relaxed">
                  Iniciativa desarrollada en el sector de Villa Helena, Piedecuesta, que busca fortalecer el desarrollo emocional y mejorar las relaciones interpersonales de niños y niñas, utilizando una metodología experiencial con la cual aprenden jugando.
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

