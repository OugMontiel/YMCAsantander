<template>
  <section class="estadisticas">
    <h2 class="estadisticas__titulo">Estadísticas de Impacto</h2>
    <p class="estadisticas__descripcion">
      Conoce el alcance de nuestros proyectos y cómo contribuimos al desarrollo comunitario desde YMCA.
    </p>
    <div class="estadisticas__grid">
      <div class="estadisticas__item">
        <div class="estadisticas__icono">&#128188;</div>
        <h3 class="estadisticas__subtitulo">Proyectos Totales</h3>
        <p class="estadisticas__valor">30</p>
      </div>
      <div class="estadisticas__item">
        <div class="estadisticas__icono">&#128640;</div>
        <h3 class="estadisticas__subtitulo">En Curso</h3>
        <p class="estadisticas__valor">5</p>
      </div>
      <div class="estadisticas__item">
        <div class="estadisticas__icono">&#9989;</div>
        <h3 class="estadisticas__subtitulo">Finalizados</h3>
        <p class="estadisticas__valor">25</p>
      </div>
      <div class="estadisticas__item">
        <div class="estadisticas__icono">&#128101;</div>
        <h3 class="estadisticas__subtitulo">Beneficiarios</h3>
        <p class="estadisticas__valor">+12,000</p>
      </div>
    </div>
  </section>
</template>

<style>
.estadisticas {
  background-color: #f9f9f9;
  padding: 60px 20px;
  text-align: center;
  font-family: Arial, sans-serif;
}

.estadisticas__titulo {
  font-size: 32px;
  margin-bottom: 10px;
  color: #333;
}

.estadisticas__descripcion {
  max-width: 700px;
  margin: 0 auto 40px;
  color: #666;
  font-size: 16px;
}

.estadisticas__grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.estadisticas__item {
  background: white;
  padding: 30px 20px;
  width: 250px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.estadisticas__item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
}

.estadisticas__icono {
  font-size: 40px;
  margin-bottom: 15px;
  color: #3a7bd5;
}

.estadisticas__subtitulo {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

.estadisticas__valor {
  font-size: 28px;
  font-weight: bold;
  color: #222;
}

/* xs - Teléfonos pequeños */
@media (max-width: 480px) {}

/* sm - Teléfonos estándar */
@media (max-width: 576px) {}

/* md - Tablets */
@media (max-width: 768px) {}

/* lg - Laptops pequeñas */
@media (max-width: 992px) {}

/* xl - Laptops / desktops medianos */
@media (max-width: 1200px) {}

/* xxl - Pantallas grandes */
@media (min-width: 1201px) {}

</style>
