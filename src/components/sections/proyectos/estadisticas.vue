<template>
  <section class="proyectoEstadistica">
    <h1 class="estadisticaTitulo">Estadísticas de Impacto</h1>
    <p class="estadisticaDescripcion">
      Conoce el alcance de nuestros proyectos y cómo contribuimos al desarrollo comunitario desde YMCA Santander.
    </p>
    <div class="estadisticas">
      <div class="estadisticaItem">
        <div class="itemIcono">&#128188;</div>
        <h4 class="itemSubTitulo">Proyectos Curso</h4>
        <h2 class="itemValor">2</h2>
      </div>
      <div class="estadisticaItem">
        <div class="itemIcono">&#128640;</div>
        <h4 class="itemSubTitulo">voluntarios</h4>
        <h2 class="itemValor">+50</h2>
      </div>
      <div class="estadisticaItem">
        <div class="itemIcono">&#128101;</div>
        <h4 class="itemSubTitulo">Beneficiarios</h4>
        <h2 class="itemValor">+300</h2>
      </div>
    </div>
  </section>
</template>

<style>
.proyectoEstadistica {
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.estadisticas {
  padding: 2em;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 30px;
}

.estadisticaItem {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1em;
  width: 250px;
  border-radius: 1em;
  box-shadow: 0 4px 10px var(--color-fondo-shadow);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.estadisticaItem:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 18px var(--color-hover-secundario);
}

.itemIcono {
  font-size: 40px;
}

/* xs - Teléfonos pequeños */
@media (max-width: 480px) {
}

/* sm - Teléfonos estándar */
@media (max-width: 576px) {
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
