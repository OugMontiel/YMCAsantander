<script>
import {documentosEsal} from "@/data/esal/Esal.js";

export default {
  name: "DocumentosEsal",
  data() {
    return {
      documentos: documentosEsal,
      documentoActual: null,
    };
  },
  methods: {
    verDocumento(doc) {
      this.documentoActual = doc;
    },
    cerrarModal() {
      this.documentoActual = null;
    },
  },
};
</script>

<template>
  <div class="esal">
    <h2>Documentación ESAL</h2>

    <div class="docuemntosEsal">
      <div class="itemEsal" v-for="(doc, index) in documentos" :key="index">
        <div class="infoEsal">
          <h4>{{ doc.titulo }}</h4>
          <div class="botones">
            <button @click="verDocumento(doc)" class="btn ver">Ver</button>
            <a :href="doc.archivo" target="_blank" download class="btn descargar"> Descargar </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal para ver el documento -->
    <div v-if="documentoActual" class="modalOverlay" @click.self="cerrarModal">
      <div class="modal">
        <div class="modalHeader">
          <h4>{{ documentoActual.titulo }}</h4>
          <button class="btn cerrar" @click="cerrarModal">X</button>
        </div>
        <embed :src="documentoActual.archivo" width="100%" height="500px" class="visor" />
        <div class="modalFooter">
          <a :href="documentoActual.archivo" target="_blank" download class="btn descargar"> Descargar PDF </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Contenedor principal */
.esal {
  padding: 2rem;
  text-align: center;
}

/* Lista de documentos */
.docuemntosEsal {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.itemEsal {
  background-color: var(--color-fondo-secundario);
  padding: 1rem 1.5rem;
  border-radius: 1em;
  box-shadow: 0 2px 4px var(--color-fondo-shadow);
}

.infoEsal {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Botones */
.botones {
  display: flex;
  gap: 1.5rem;
}

.btn {
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 1em;
  cursor: pointer;
  transition: background 0.2s ease;
  color: var(--color-texto-principal-blanco);
}

.btn.ver {
  background-color: var(--color-botones-primario);
}

.btn.descargar {
  background-color: var(--color-botones-tercero);
}

.btn.cerrar {
  color: var(--color-texto-principal);
}

/* Modal */
.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 90;

  background-color: var(--color-fondo-shadow);

  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  width: 90%;
  border-radius: 1em;
  overflow: hidden;
  box-shadow: 0 5px 20px var(--overlay-negro);
  animation: fadeIn 0.3s ease;
}

.modalHeader,
.modalFooter {
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-fondo);
}

.visor {
  display: block;
  border: none;
}

/* Animación */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* xxl - Pantallas grandes */
@media (min-width: 1201px) {
}

/* xl - Laptops / desktops medianos */
@media (max-width: 1200px) {
}

/* lg - Laptops pequeñas */
@media (max-width: 992px) {
}
/* md - Tablets */
@media (max-width: 768px) {
  .infoEsal {
    text-align: left;
  }
}

/* sm - Teléfonos estándar */
@media (max-width: 576px) {
  .infoEsal {
    text-align: center;
    flex-direction: column;
    gap: 0.5em;
  }
}

/* xs - Teléfonos pequeños */
@media (max-width: 480px) {
}
</style>
