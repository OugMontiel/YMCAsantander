<template>
  <section class="pazBeneficios">
    <div class="beneficiosHeader">
      <img src="/LogoAzul.png" alt="Logo decorativo Paza la Paz" class="logoBeneficiosHeader" />
      <h2>¿Por qué ser parte del programa?</h2>
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
}

.beneficiosHeader {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;

  margin-bottom: 2rem;
}

.logoBeneficiosHeader {
  width: 60px;
  height: auto;
}

.beneficiosGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1rem;
}

.beneficioCard {
  background-color: var(--color-fondo-secundario);
  padding: 1rem;
  border-left: 5px solid var(--color-hover-primario);
  border-radius: 1em;

  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  box-shadow: 0 2px 6px var(--color-fondo-shadow);
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
}

.beneficioCard p {
  text-align: left;
}
</style>
