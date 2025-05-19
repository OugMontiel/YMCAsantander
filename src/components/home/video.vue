<template>
  <section class="video">
    <h1>Video de presentación</h1>
    <p>Este video presenta la misión y visión de la Fundación Paz Ciudadana, así como sus programas y proyectos.</p>
    <div class="videoContenido">
      <iframe src="https://www.youtube.com/embed/r3HPs-3oNYY" title="Video de presentación" frameborder="0" allowfullscreen></iframe>
    </div>
  </section>
</template>

<style scoped>
.video {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  background-color: var(--color-fondo-secundario);
  color: var(--color-texto-principal);
  padding: 2rem;
}

.video h1 {
  margin-bottom: 0.5rem;
}

.video p {
  font-size: 1rem;
  margin: 0 auto 2rem;
}

.videoContenido {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */

  display: flex;
  justify-content: center;
  width: 100%;

  border-radius: 12px;
  box-shadow: 0 10px 25px var(--color-fondo-shadow);
}

.videoContenido iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 12px;
}
</style>
