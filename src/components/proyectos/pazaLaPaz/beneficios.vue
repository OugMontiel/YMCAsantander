<template>
  <section class="pazBeneficios">
    <div class="beneficiosHeader">
      <h2>¿Por qué ser parte del programa?</h2>
      <img src="/LogoAzul.png" alt="Logo decorativo Paza la Paz" class="logoDecorativo" />
    </div>
    <div class="beneficiosGrid">
      <div class="beneficioCard">
        <img src="/LogoAzul.png" alt="Trabajo en equipo" class="iconoImg" />
        <p>Desarrollas habilidades para trabajar en equipo y gestionar conflictos.</p>
      </div>
      <div class="beneficioCard">
        <img src="/LogoAzul.png" alt="Confianza y autoestima" class="iconoImg" />
        <p>Incrementas tu confianza y autoestima.</p>
      </div>
      <div class="beneficioCard">
        <img src="/LogoAzul.png" alt="Valores YMCA" class="iconoImg" />
        <p>Aprendes los valores de un líder YMCA: inclusión, sensibilidad y responsabilidad.</p>
      </div>
      <div class="beneficioCard">
        <img src="/LogoAzul.png" alt="Impacto comunitario" class="iconoImg" />
        <p>Impactas positivamente tu comunidad.</p>
      </div>
      <div class="beneficioCard">
        <img src="/LogoAzul.png" alt="Vocación y emprendimiento" class="iconoImg" />
        <p>Identificas tu vocación y oportunidades de emprendimiento.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pazBeneficios {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.beneficiosHeader {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.beneficiosHeader h2 {
  font-size: 2rem;
  color: var(--color-texto-secundario);
  flex: 1;
  min-width: 200px;
}

.logoDecorativo {
  width: 60px;
  height: auto;
}

.beneficiosGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.beneficioCard {
  background-color: #e6fffa;
  border-left: 5px solid #00b3a4;
  padding: 1.2rem;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.beneficioCard:hover {
  transform: translateY(-5px);
}

.iconoImg {
  width: 40px;
  height: 40px;
  object-fit: contain;
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.beneficioCard p {
  margin: 0;
  font-size: 1rem;
  color: var(--color-texto-principal);
  line-height: 1.5;
}
</style>
