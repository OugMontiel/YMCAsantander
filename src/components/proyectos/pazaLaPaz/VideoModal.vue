<script>
export default {
  props: {
    videoUrl: {
      type: String,
      required: true,
    },
    visible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    cerrar() {
      this.$emit("cerrar");
    },
  },
};
</script>

<template>
  <div class="modal" v-if="visible" @click.self="cerrar">
    <div class="modal-content">
      <iframe :src="videoUrl" frameborder="0" allowfullscreen></iframe>
      <button @click="cerrar">Cerrar</button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 1rem;
  border-radius: 10px;
  max-width: 80%;
  text-align: center;
}
.modal-content iframe {
  width: 100%;
  height: 315px;
  border-radius: 8px;
}
.modal-content button {
  margin-top: 1rem;
}
</style>
