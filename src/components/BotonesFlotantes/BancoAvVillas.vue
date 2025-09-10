<template>
  <UButton
    square
    variant="ghost"
    color="gray"
    class="fixed bottom-28 right-6 w-20 h-20 bg-transparent shadow-none rounded-full"
    @click="abrirBanco"
  >
    <img
      v-lazy="{src: 'https://piloto.avvillas.com.co/o/bavv-portalpublico-theme/images/favicon.ico'}"
      alt="AV Villas"
      class="w-14 h-14 transition-transform transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(200,0,0,0.7)]"
    />
  </UButton>
</template>

<script setup>
const abrirBanco = () => {
  window.open(
    "https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00027801&origen=buscar",
    "_blank"
  );
};
</script>
