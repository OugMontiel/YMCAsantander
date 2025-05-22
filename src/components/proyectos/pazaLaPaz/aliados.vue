<script>
import logoUDI from "/LogoAzul.png";
import logoUNAD from "/LogoAzul.png";
import logoUMB from "/LogoAzul.png";
import logoFe from "/LogoAzul.png";
import logoBolivar from "/LogoAzul.png";
import logoHoryzon from "/LogoAzul.png";
import logoAmex from "/LogoAzul.png";

export default {
  name: "Aliados",
  data() {
    return {
      logoUDI,
      logoUNAD,
      logoUMB,
      logoFe,
      logoBolivar,
      logoHoryzon,
      logoAmex,
    };
  },
};
</script>

<template>
  <section class="pazAliados">
    <h2>Aliados Estratégicos</h2>
    <div class="logos">
      <img :src="logoUDI" alt="UDI" />
      <img :src="logoUNAD" alt="UNAD" />
      <img :src="logoUMB" alt="UMB" />
      <img :src="logoFe" alt="Fe y Alegría" />
      <img :src="logoBolivar" alt="Fundación Bolívar Davivienda" />
      <img :src="logoHoryzon" alt="HORYZON" />
      <img :src="logoAmex" alt="AMERICAN EXPRESS" />
    </div>
  </section>
</template>
<style scoped>
.pazAliados {
  text-align: center;
  padding: 2rem;
  background-color: var(--color-fondo-texto);
}

.logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1rem;
}

.logos img {
  width: 100px;
  height: 100px;

  padding: 1rem;
  border-radius: 1em;
  transition: transform 0.2s ease;
}

.logos img:hover {
  box-shadow: 0 2px 6px var(--color-fondo-shadow);
  transform: scale(1.05);
}
</style>
