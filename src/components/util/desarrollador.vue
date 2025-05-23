<template>
  <footer class="footerDesarrollador">
    <p class="textoFooter">© {{ new Date().getFullYear() }} YMCA. Todos los derechos reservados.</p>
    <p class="autorFooter">
      Sitio desarrollado con 💙 por
      <a
        href="https://ougmontiel.github.io/OugMontiel/"
        class="enlaceAutor"
        title="Portafolio de Diego Alejandro Montiel Flórez"
        target="_blank"
      >
        Diego Alejandro Montiel Flórez
      </a>
    </p>
  </footer>
</template>

<style scoped>
.footerDesarrollador {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
  text-align: center;
  gap: 0.5rem;

  animation: fadeIn 1s ease-in-out;
}

.autorFooter {
  font-size: 1rem;
}

.enlaceAutor {
  color: var(--color-texto-principal-blanco);
  text-decoration: none;
  transition:
    color 0.3s ease,
    text-shadow 0.3s ease;
}

.enlaceAutor:hover {
  color: var(--color-texto-principal);
  text-shadow: 0 0 3px rgba(0, 119, 204, 0.4);
  cursor: pointer;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
