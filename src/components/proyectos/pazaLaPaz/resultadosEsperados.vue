<template>
  <section class="pazResultados">
    <h2>Resultados Esperados</h2>
    <div class="resultados">
      <article>
        <div class="numero">1</div>
        <div class="contenido">
          <h4><strong>Jóvenes Capacitados</strong></h4>
          <p>Jóvenes capacitados en habilidades socioemocionales.</p>
        </div>
      </article>
      <article>
        <div class="numero">2</div>
        <div class="contenido">
          <h4><strong>Redes Juveniles</strong></h4>
          <p>Creación de redes juveniles y colectivos comunitarios.</p>
        </div>
      </article>
      <article>
        <div class="numero">3</div>
        <div class="contenido">
          <h4><strong>Proyectos Comunitarios</strong></h4>
          <p>Implementación de proyectos comunitarios y emprendimientos liderados por jóvenes.</p>
        </div>
      </article>
      <article>
        <div class="numero">4</div>
        <div class="contenido">
          <h4><strong>Participación Juvenil</strong></h4>
          <p>Incremento en la participación juvenil en espacios de toma de decisiones locales.</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.pazResultados {
  padding: 2rem;
  background-color: var(--color-fondo);
}

.pazResultados h2 {
  margin-bottom: 1rem;
  text-align: center;
}

.resultados {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.resultados article {
  background-color: var(--color-fondo-secundario);
  padding: 1.5rem;
  border-left: 5px solid var(--color-hover-primario);
  border-radius: 1rem;
  box-shadow: 0 2px 8px var(--color-fondo-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  gap: 1rem;
  align-items: start;
}

.resultados article:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px var(--color-fondo-shadow);
}

.resultados article .numero {
  background-color: var(--color-hover-primario);
  color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  flex-shrink: 0;
}

.resultados article .contenido h4 {
  margin-bottom: 0.5rem;
  color: var(--color-texto-secundario);
}

.resultados article .contenido p {
  margin: 0;
  text-align: left;
}

/* xxl - Pantallas grandes */
@media (min-width: 1201px) {
  .resultados {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* xl - Laptops / desktops medianos */
@media (max-width: 1200px) {
  .resultados {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}

/* lg - Laptops pequeñas */
@media (max-width: 992px) {
  .pazResultados {
    padding: 1.5rem;
  }
}

/* md - Tablets */
@media (max-width: 768px) {
  .resultados {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .pazResultados {
    padding: 1rem;
  }
}

/* sm - Teléfonos estándar */
@media (max-width: 576px) {
  .resultados article {
    padding: 1rem;
  }
  
  .resultados article .numero {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.25rem;
  }
}

/* xs - Teléfonos pequeños */
@media (max-width: 480px) {
  .pazResultados h2 {
    font-size: 2rem;
  }
}
</style>
