<script>
import logoPLP from "@/assets/img/proyectos/pazaLaPaz/LogoPazaLaPazAzul.webp";

export default {
  name: "Titulo paza la paz",
  data() {
    return {
      logoPLP,
    };
  },
};
</script>

<template>
  <div class="pazHeader">
    <img v-lazy="{src: logoPLP}" alt="Logo Paza la Paz" class="logopazHeader" />
    <h1>Paza la Paz</h1>
  </div>
</template>

<style scoped>
.pazHeader {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem 1rem;
  border-bottom: 2px solid var(--color-borde-secundario);
  margin-bottom: 2rem;
  background-color: var(--color-fondo);
}

.pazHeader h1 {
  margin: 0;
  font-size: 2.5rem;
  color: var(--color-texto-secundario);
}

.logopazHeader {
  width: 60px;
  height: 60px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.logopazHeader:hover {
  transform: scale(1.1);
}

/* xxl - Pantallas grandes */
@media (min-width: 1201px) {
}

/* xl - Laptops / desktops medianos */
@media (max-width: 1200px) {
}

/* lg - Laptops pequeñas */
@media (max-width: 992px) {
  .pazHeader h1 {
    font-size: 2rem;
  }
}

/* md - Tablets */
@media (max-width: 768px) {
  .pazHeader {
    gap: 1.5rem;
    padding: 1.5rem 1rem;
  }
  
  .pazHeader h1 {
    font-size: 1.75rem;
  }
  
  .logopazHeader {
    width: 50px;
    height: 50px;
  }
}

/* sm - Teléfonos estándar */
@media (max-width: 576px) {
  .pazHeader {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  
  .pazHeader h1 {
    font-size: 1.5rem;
    text-align: center;
  }
}

/* xs - Teléfonos pequeños */
@media (max-width: 480px) {
  .pazHeader h1 {
    font-size: 1.25rem;
  }
}
</style>
