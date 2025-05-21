<template>
  <section class="pazDescripcion">
    <div class="contenidoPazDescripcion">
      <h1>Paza la Paz</h1>
      <p>
        Es un proyecto dirigido a jóvenes entre <strong>14 y 28 años</strong> en situación de vulnerabilidad social. Su objetivo es
        contribuir a la construcción de paz y a la transformación del conflicto social en Colombia, generando oportunidades de
        empoderamiento e inclusión para los jóvenes en <strong>Bucaramanga</strong> y su área metropolitana.
      </p>
    </div>
    <div class="logoContainer">
      <img src="/LogoAzul.png" alt="Logo de Paza la Paz" class="logoPazDescripcion" />
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

  padding: 2rem;
}

.contenidoPazDescripcion {
  flex: 1;
  min-width: 280px;
}

.contenidoPazDescripcion h1 {
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.contenidoPazDescripcion p {
  line-height: 1.6;
}

.logoContainer {
  flex-shrink: 0;
}

.logoPazDescripcion {
  max-width: 500px; /* Elemento a Ajustar deacuerdo el tamaño de la img  */
  height: auto;
}
</style>
