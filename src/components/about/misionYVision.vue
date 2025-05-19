<template>
  <section class="MisionYVision">
    <div class="MisionYVisionContenido">
      <div class="mision">
        <h2>MISIÓN</h2>
        <p>
          <strong>YMCA Santander</strong> trabaja por el desarrollo juvenil y la transformación social. Su misión es inspirar y crear
          oportunidades para una vida digna, especialmente entre poblaciones vulnerables, promoviendo el empoderamiento de jóvenes y mujeres
          como agentes clave de cambio.
        </p>
      </div>
      <div class="vision">
        <h2>VISIÓN</h2>
        <p>
          YMCA Santander busca consolidarse como un referente en el desarrollo juvenil y la transformación social, promoviendo el liderazgo,
          la inclusión y el bienestar comunitario mediante programas sostenibles y de alto impacto.
        </p>

        <p>
          <strong>VISIÓN 2030</strong> de la YMCA es una estrategia global adoptada en el Consejo Mundial de julio de 2022, con el objetivo
          de empoderar comunidades y transformar vidas. Esta visión se fundamenta en cuatro pilares clave:
        </p>

        <ul>
          <li><strong>Bienestar Comunitario:</strong> Fomentar el desarrollo integral de los jóvenes en cuerpo, mente y espíritu.</li>
          <li><strong>Planeta Sostenible:</strong> Canalizar el compromiso juvenil hacia la justicia climática y la sostenibilidad.</li>
          <li><strong>Mundo Justo:</strong> Amplificar las voces y acciones de los jóvenes en sus comunidades.</li>
          <li>
            <strong>Impacto Social:</strong> Implementar programas estratégicos alineados con los Objetivos de Desarrollo Sostenible de la
            ONU.
          </li>
        </ul>
      </div>
    </div>
    <div class="MisionYVisionVideo">
      <iframe src="https://www.youtube.com/embed/eXqSDqHQNQo" frameborder="0" allowfullscreen></iframe>
    </div>
  </section>
</template>

<style>
.MisionYVision {
  display: flex;
  gap: 2rem;
  padding: 2rem;
}

.MisionYVisionVideo {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */

  display: flex;
  justify-content: center;
  width: 70%;

  border-radius: 12px;
  box-shadow: 0 10px 25px var(--color-fondo-shadow);
}

.MisionYVisionVideo iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 12px;
}
.MisionYVisionContenido {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 2rem;
}

/* xs - Teléfonos pequeños */
@media (max-width: 480px) {
  
}

/* sm - Teléfonos estándar */
@media (max-width: 576px) {
  .MisionYVision {
    flex-direction: column;
    padding: 1em;
  }
  .MisionYVisionVideo {
    width: 100%;
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
