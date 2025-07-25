<!-- SubHeader.vue -->
<script>
export default {
  name: "SubHeader",
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <header class="subHeader">
    <nav class="subNav">
      <router-link v-for="link in links" :key="link.name" :to="{name: link.routeName}" class="subNavLink" active-class="active">
        {{ link.name }}
      </router-link>
    </nav>
  </header>
</template>

<style scoped>
.subHeader {  /* aquí */
  width: 100%;
  padding: 0.2em 0;
  background-color: var(--color-fondo-secundario);
}

/* Cambios hechos por Sara */
/* corrige el nombre de la clase noo hay 'subheader' sino 'subHeader' esto no se aplica a ningun lad dentro de este Componente*/
.subheader {  /* Vuelves a definir El .subHeader ... Si algo ya esta, no lo redefines Si no que lo modificas. La idea es que no quede Doble codigo  */
  width: 100%;
  padding: 2.8rem 0;
  background-color: var(--color-fondo-secundario);

  /* Scroll horizontal si hay desbordamiento */
  overflow-x: auto;
  white-space: nowrap;

  /* Estilos base consistentes */
  font-weight: var(--peso-light);
  font-size: 1rem;
}

/* Responsive */
@media (max-width: 575px) {  /* El responsi se aplica al final. Priemro en pantallas grande y luego en a pequeñas, revisa los otros comoponentes   */
  .subheader { /* corrige el nombre de la clase noo hay 'subheader' sino 'subHeader' esto no se aplica a ningun lad dentro de este Componente*/
    font-size: 0.875rem;
    padding: 1rem 0;
  }
}

.subNav {
  display: flex;
  justify-content: space-evenly;

  text-align: center;
}

.subNavLink {
  color: var(--color-texto-principal);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;
}

.subNavLink:hover,
.subNavLink:focus-visible {
  background-color: var(--color-hover-secundario);
  color: var(--color-fondo);
  outline: none;
}

.active {
  background-color: var(--color-hover-secundario);
  color: var(--color-texto-principal-blanco);
}
</style>
