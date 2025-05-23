<template>
  <div class="footerDesarrollador">
    <p>© 2023 YMCA. Todos los derechos reservados.</p>
    <p>
      Desarrollado por
      <a href="#">Diego Alejandro Montiel Flórez</a>
    </p>
  </div>
</template>

<style scoped>
.footerDesarrollador {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: var(--color-texto-secundario);
  border-top: 1px solid var(--color-borde);
}
@media (max-width: 670px) {
  .footerDesarrollador {
    flex-direction: column;
  }
}
</style>
