<template>
  <section class="pazMetodologia">
    <h2>Metodología</h2>
    <p>Se desarrollan procesos formativos con metodologías basadas en la educación experiencial, divididos en tres áreas:</p>
    <div class="componentes">
      <article>
        <h4><strong>Convivencia y Paz</strong></h4>
        <p>Jóvenes que gestionan soluciones pacíficas en sus entornos.</p>
      </article>
      <article>
        <h4><strong>Organización y Participación Juvenil</strong></h4>
        <p>Entrenamiento para descubrir talentos y construir un proyecto de vida.</p>
      </article>
      <article>
        <h4><strong>Emprendimiento Juvenil</strong></h4>
        <p>Participación en proyectos sociales y económicos que fortalecen habilidades y sentido de vida.</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.pazMetodologia {
  padding: 2em;
}

.componentes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.componentes article {
  background-color: var(--color-fondo-secundario);
  padding: 1rem;
  border-left: 4px solid var(--color-hover-primario);
  border-radius: 1em;

  transition: transform 0.2s ease;
}

.componentes article:hover {
  transform: translateY(-5px);
}
</style>
