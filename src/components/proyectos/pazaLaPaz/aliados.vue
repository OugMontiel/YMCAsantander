<script>
import aliados from "@/data/proyectos/aliados.js";

export default {
  name: "Aliados",
  data() {
    return {
      aliados,
    };
  },
};
</script>

<template>
  <section class="pazAliados">
    <h2>Aliados Estratégicos</h2>
    <div class="logos">
      <img v-for="(aliado, index) in aliados" :key="index" v-lazy="{src: aliado.logo}" :alt="aliado.nombre" />
    </div>
  </section>
</template>

<style scoped>
.pazAliados {
  text-align: center;
  padding: 2rem;
  background-color: var(--color-fondo-texto);
}

.pazAliados h2 {
  margin-bottom: 2rem;
  color: var(--color-texto-secundario);
}

.logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.logos img {
  width: 120px;
  height: 120px;
  padding: 1rem;
  border-radius: 1rem;
  background-color: var(--color-fondo);
  object-fit: contain;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 6px var(--color-fondo-shadow);
}

.logos img:hover {
  box-shadow: 0 4px 12px var(--color-fondo-shadow);
  transform: scale(1.1);
}

/* xxl - Pantallas grandes */
@media (min-width: 1201px) {
  .logos {
    gap: 3rem;
  }
}

/* xl - Laptops / desktops medianos */
@media (max-width: 1200px) {
  .logos {
    gap: 2rem;
  }
}

/* lg - Laptops pequeñas */
@media (max-width: 992px) {
  .logos img {
    width: 100px;
    height: 100px;
  }
}

/* md - Tablets */
@media (max-width: 768px) {
  .pazAliados {
    padding: 1.5rem;
  }
  
  .logos {
    gap: 1.5rem;
  }
  
  .logos img {
    width: 90px;
    height: 90px;
  }
}

/* sm - Teléfonos estándar */
@media (max-width: 576px) {
  .pazAliados {
    padding: 1rem;
  }
  
  .logos {
    gap: 1rem;
  }
  
  .logos img {
    width: 80px;
    height: 80px;
    padding: 0.75rem;
  }
}

/* xs - Teléfonos pequeños */
@media (max-width: 480px) {
  .logos img {
    width: 70px;
    height: 70px;
  }
}
</style>
