<script>
import imgProyecto from "@/assets/img/proyectos/PazaLaPaz/pazaLaPaz.jpg";
import beneficios from "@/components/proyectos/pazaLaPaz/beneficios.vue";

export default {
  name: "PazaLaPazDescripcion",
  components: {
    beneficios,
  },
  data() {
    return {
      imgProyecto,
    };
  },
};
</script>
<template>
  <section class="pazDescripcion">
    <div class="contenidoPazDescripcion">
      <p>
        Es un proyecto dirigido a jóvenes entre <strong>14 y 28 años</strong> en situación de vulnerabilidad social. Su objetivo es
        contribuir a la construcción de paz y a la transformación del conflicto social en Colombia, generando oportunidades de
        empoderamiento e inclusión para los jóvenes en <strong>Bucaramanga</strong> y su área metropolitana.
      </p>

      <beneficios />
    </div>
    <div class="logoContainer">
      <img :src="imgProyecto" alt="Logo de Paza la Paz" class="logoPazDescripcion" />
    </div>
  </section>
</template>

<style scoped>
.pazDescripcion {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  position: relative;
}

.contenidoPazDescripcion {
  flex: 1;
  min-width: 280px;
  padding: 2em;
}

.contenidoPazDescripcion h1 {
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.logoContainer {
  flex-shrink: 0;
}

.logoPazDescripcion {
  max-width: 36rem;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

/* xxl - Pantallas grandes */
@media (min-width: 1201px) {
}

/* xl - Laptops / desktops medianos */
@media (max-width: 1200px) {
  .logoPazDescripcion {
    max-width: 30rem;
  }
}

/* lg - Laptops pequeñas */
@media (max-width: 992px) {
  .contenidoPazDescripcion {
    position: absolute;
    top: 3em;
    z-index: 10;

    background-color: var(--color-fondo-texto);
    border-radius: 1rem;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .logoContainer {
    flex-shrink: 1;
  }
  .logoPazDescripcion {
    max-width: none;
  }

  .contenidoPazDescripcion {
    max-width: 40rem;
  }
  .pazDescripcion {
    justify-content: center;
  }
}
/* md - Tablets */
@media (max-width: 768px) {
  .contenidoPazDescripcion {
    max-width: 34rem;
  }
}

/* sm - Teléfonos estándar */
@media (max-width: 576px) {
  .contenidoPazDescripcion {
    position: static; /* comportamiento por defecto */
    z-index: auto;

    background-color: transparent; /* sin fondo */
    border-radius: 0;
    padding: 1em; /* padding suave y adaptable */

    display: block; /* comportamiento por defecto */
    text-align: left; /* alineación de texto natural */
  }
}

/* xs - Teléfonos pequeños */
@media (max-width: 480px) {
}
</style>
