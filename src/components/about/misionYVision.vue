<template>
  <section class="MisionYVision">
    <div class="MisionYVisionContenido">
      <div class="mision">
        <h2>MISIÓN DE LA YMCA SANTANDER</h2>
        <p>
          <strong>YMCA Santander</strong> trabaja por el desarrollo juvenil y la transformación social. Su misión es inspirar y crear
          oportunidades para una vida digna, especialmente entre poblaciones vulnerables, promoviendo el empoderamiento de jóvenes y mujeres
          como agentes clave de cambio.
        </p>
      </div>
      <div class="vision">
        <h2>VISIÓN DE LA YMCA SANTANDER</h2>
        <p>
          YMCA Santander busca consolidarse como un referente en el desarrollo juvenil y la transformación social, promoviendo el liderazgo,
          la inclusión y el bienestar comunitario. A través de programas sostenibles y de alto impacto. <strong>VISION 2030</strong> de la
          YMCA es una estrategia global adoptada en el Consejo Mundial de julio de 2022, con el objetivo de empoderar comunidades y
          transformar vidas. Se basa en cuatro pilares fundamentales: Bienestar Comunitario: Fomentar el desarrollo integral de los jóvenes
          en cuerpo, mente y espíritu. Planeta Sostenible: Canalizar el compromiso juvenil hacia la justicia climática y la sostenibilidad.
          Mundo Justo: Amplificar las voces y acciones de los jóvenes en sus comunidades. Impacto Social: Implementar programas estratégicos
          alineados con los Objetivos de Desarrollo Sostenible de la ONU
        </p>
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
</style>
