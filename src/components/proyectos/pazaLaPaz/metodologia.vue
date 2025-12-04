<template>
  <section class="pazMetodologia">
    <h2>Metodología</h2>
    <p>El Proyecto Paza la Paz 2025-2028 propone una intervención integral que:</p>
    <div class="componentes">
      <article>
        <h4><strong>Habilidades Socioemocionales</strong></h4>
        <p>Fortalezca las habilidades socioemocionales de los jóvenes, dotándolos de herramientas para manejar sus emociones y desarrollar una autoestima saludable.</p>
      </article>
      <article>
        <h4><strong>Liderazgo Transformador</strong></h4>
        <p>Desarrolle capacidades de liderazgo transformador, fomentando su participación activa en procesos de toma de decisiones comunitarias.</p>
      </article>
      <article>
        <h4><strong>Oportunidades Educativas y Laborales</strong></h4>
        <p>Cree oportunidades educativas y laborales, vinculándolos a redes de emprendimiento y empleabilidad.</p>
      </article>
      <article>
        <h4><strong>Entorno Comunitario Positivo</strong></h4>
        <p>Promueva un entorno comunitario positivo, que fomente la convivencia pacífica y reduzca los riesgos de violencia.</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.pazMetodologia {
  padding: 2rem;
  background-color: var(--color-fondo);
}

.pazMetodologia h2 {
  margin-bottom: 1rem;
  text-align: center;
}

.pazMetodologia > p {
  text-align: center;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.componentes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.componentes article {
  background-color: var(--color-fondo-secundario);
  padding: 1.5rem;
  border-left: 5px solid var(--color-hover-primario);
  border-radius: 1rem;
  box-shadow: 0 2px 8px var(--color-fondo-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.componentes article:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px var(--color-fondo-shadow);
}

.componentes article h4 {
  margin-bottom: 0.75rem;
  color: var(--color-texto-secundario);
}

.componentes article p {
  margin: 0;
  text-align: left;
}

/* xxl - Pantallas grandes */
@media (min-width: 1201px) {
  .componentes {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* xl - Laptops / desktops medianos */
@media (max-width: 1200px) {
  .componentes {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}

/* lg - Laptops pequeñas */
@media (max-width: 992px) {
  .pazMetodologia {
    padding: 1.5rem;
  }
}

/* md - Tablets */
@media (max-width: 768px) {
  .componentes {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .pazMetodologia {
    padding: 1rem;
  }
}

/* sm - Teléfonos estándar */
@media (max-width: 576px) {
  .componentes article {
    padding: 1rem;
  }
}

/* xs - Teléfonos pequeños */
@media (max-width: 480px) {
  .pazMetodologia h2 {
    font-size: 2rem;
  }
}
</style>
