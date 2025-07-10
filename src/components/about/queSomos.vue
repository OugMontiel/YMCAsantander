<script>
import imgQueSomos from "@/assets/img/about/queSomos.jpg";

export default {
  name: "QueSomos",
  data() {
    return {
      imgQueSomos,
    };
  },
};
</script>
<template>
  <section class="Somos">
    <img :src="imgQueSomos" alt="Imagen Quiénes Somos" class="aboutImg" />

    <div class="SomosContenido">
      <h2>¿QUIÉNES SOMOS?</h2>
      <p>
        La YMCA es un movimiento mundial con {{ $aniosYMCA() }} años de historia, reconocida por sus aportes en la formación de los y las
        jóvenes.
      </p>
      <p>
        La creación del baloncesto, el voleibol, el raquetbol, los campamentos de verano, universidades e instituciones educativas y 2
        premios nobel de paz han sido algunos de sus principales aportes a la humanidad
      </p>
    </div>
  </section>
</template>

<style scoped>
.Somos {
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;

  max-height: 70vh;
}

.SomosContenido {
  position: absolute;
  z-index: 1;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-align: justify;
  gap: 1rem;

  max-width: 65%;
  margin: 0.5em;
}

.SomosContenido h2,
.SomosContenido p {
  background-color: var(--color-fondo-texto);
  padding: 1em;
  border-radius: 1em;
}

.aboutImg {
  object-fit: cover; /* o 'contain' dependiendo de cómo quieras recortar */
}

/* xxl - Pantallas grandes */
@media (min-width: 1201px) {
}

/* xl - Laptops / desktops medianos */
@media (max-width: 1200px) {
}

/* lg - Laptops pequeñas */
@media (max-width: 992px) {
}
/* md - Tablets */
@media (max-width: 768px) {
  .SomosContenido {
    max-width: 75%;
  }
}
/* sm - Teléfonos estándar */
@media (max-width: 576px) {
  .SomosContenido {
    max-width: 100%;
  }
}
/* xs - Teléfonos pequeños */
@media (max-width: 480px) {
  .Somos {
    flex-direction: column;
  }
  .SomosContenido {
    position: relative;
    max-width: 100%;
    gap: 0.5rem;
  }
  .SomosContenido h2,
  .SomosContenido p {
    background-color: var(--color-fondo);
    padding: 0.5em;
  }
}
</style>
