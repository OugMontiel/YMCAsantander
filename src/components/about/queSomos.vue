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
        La ACJ YMCA es un movimiento mundial con 173 años de historia que ha sido reconocida por sus aportes en la formación de los y las
        jóvenes.
      </p>
      <p>
        La creación del baloncesto, el voleibol, el raquetbol, los campamentos de verano, universidades e instituciones educativas y 2
        premios nobel de paz han sido algunos de sus principales aportes a la humanidad.
      </p>
    </div>
  </section>
</template>

<style scoped>
.Somos {
  position: relative;
  display: flex;
  justify-content: center;
}
.aboutImg {
  max-height: 50vh;
}
.SomosContenido {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: justify;
  gap: 1rem;
  padding: 1em;
}
.SomosContenido p {
  max-width: 50em;
}

/* xs - Teléfonos pequeños */
@media (max-width: 480px) {
  
}

/* sm - Teléfonos estándar */
@media (max-width: 576px) {
  .aboutImg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  .SomosContenido {
    background-color: var(--color-fondo-texto);
    border-radius: 1em;
    padding: 0.5em;
    margin: 0.5em;
  }
}

/* md - Tablets */
@media (max-width: 768px) {
}

/* lg - Laptops pequeñas */
@media (max-width: 992px) {
}

/* xl - Laptops / desktops medianos */
@media (max-width: 1200px) {
}

/* xxl - Pantallas grandes */
@media (min-width: 1201px) {
}
</style>
