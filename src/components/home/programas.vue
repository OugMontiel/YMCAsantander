<template>
  <!-- Presentación de programas -->
  <section class="programas">
    <div class="programasTitulo">
      <h1>Nuestros Programas</h1>
      <p>
        Descubre las iniciativas que promovemos para construir una sociedad más justa y pacífica, impulsando la inclusión, el liderazgo
        juvenil y el compromiso comunitario.
      </p>
    </div>

    <div class="programasContenido">
      <article class="programa">
        <h2>Paza La Paz</h2>
        <p>
          Es un proyecto dirigido a jóvenes entre 14 y 28 años en situación de vulnerabilidad social. Busca contribuir con la construcción
          de Paz y la transformación del conflicto social en Colombia, generando oportunidades para el empoderamiento y la inclusión de los
          y las jóvenes.
        </p>
      </article>

      <article class="programa">
        <h2>Mision y voluntariado</h2>
        <p>
          El proyecto busca la promoción del bienestar comunitario, sostenibilidad ambiental y justicia social, a través del fortalecimiento
          de la acción voluntaria inspirada en los valores cristianos.
        </p>
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
  margin-bottom: 0.5rem;
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
  box-shadow: 0 2px 6px var(--color-fondo-shadow);
  flex: 1 1 300px;
}

.programa h2 {
  margin-bottom: 0.5rem;
}
</style>
