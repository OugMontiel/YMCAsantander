<template>
  <!-- Presentación de programas -->
  <section class="programas">
    <div class="programasTitulo">
      <h1>Nuestros Programas</h1>
      <p>Conoce las iniciativas que impulsamos para construir una sociedad más justa y pacífica.</p>
    </div>

    <div class="programasContenido">
      <article class="programa">
        <h2>Paza La Paz</h2>
        <p>Iniciativa comunitaria que fomenta la convivencia, el diálogo y la resolución pacífica de conflictos en barrios vulnerables.</p>
      </article>

      <article class="programa">
        <h2>Paz Ciudadana</h2>
        <p>Programa que promueve la participación ciudadana y la seguridad mediante actividades educativas y culturales.</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.programas {
  padding: 2rem;
  background-color: var(--color-fondo-secundario);
  color: var(--color-texto-principal);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.programasTitulo {
  text-align: center;
}
.programasTitulo h1 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-texto-secundario);
}

.programasTitulo p {
  margin-bottom: 2rem;
}

.programasContenido {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.programa {
  background: var(--color-fondo-texto);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px var(--color-fonde-shadow);
  flex: 1 1 300px;
}

.programa h2 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--color-texto-secundario);
}
</style>
