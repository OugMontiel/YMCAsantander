<template>
  <main class="w-full p-4 sm:p-6 lg:p-8 flex items-center justify-around">
    <div class="w-full max-w-6xl mx-auto flex flex-col justify-center">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r bg-clip-text text-transparent">
        Manual de políticas y procedimientos Habeas Data
      </h2>

      <div class="modalOverlay rounded-xl shadow-2xl overflow-hidden border" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div class="modal w-full">
          <div class="aspect-[3/4] sm:aspect-[4/3] lg:aspect-[16/10]">
            <embed
              src="/esal/manualDePoliticasYProcedimientosHabeasData.pdf"
              class="visor w-full h-full border-none"
              type="application/pdf"
              aria-label="Visor del documento PDF"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
