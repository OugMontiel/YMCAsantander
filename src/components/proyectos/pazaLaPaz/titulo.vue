<template>
  <div class="pazHeader">
    <img src="/LogoAzul.png" alt="Logo Paza la Paz" class="logopazHeader" />
    <h1>Paza la Paz</h1>
  </div>
</template>

<style>
.pazHeader {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  padding: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--color-borde-secundario);
  margin-bottom: 2rem;
}

.logopazHeader {
  width: 60px;
  height: 60px;
  object-fit: contain;
}
</style>
