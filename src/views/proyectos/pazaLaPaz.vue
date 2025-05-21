<script>
import titulo from "@/components/proyectos/pazaLaPaz/titulo.vue";
import descripsion from "@/components/proyectos/pazaLaPaz/descripsion.vue";
import beneficios from "@/components/proyectos/pazaLaPaz/beneficios.vue";

export default {
  name: "pazaLaPaz",
  components: {
    descripsion,
    titulo,
  },
};
</script>
<template>
  <main class="pazaLaPaz">
    <titulo />

    <section class="Descripcion">
      <descripsion />
    </section>

    <section class="Beneficios">
      <Beneficios/>
    </section>

    <section class="metodologia">
      <h2>Metodología</h2>
      <p>Se desarrollan procesos formativos con metodologías basadas en la educación experiencial, divididos en tres áreas:</p>
      <div class="componentes">
        <article>
          <h3>Convivencia y Paz</h3>
          <p>Jóvenes que gestionan soluciones pacíficas en sus entornos.</p>
        </article>
        <article>
          <h3>Organización y Participación Juvenil</h3>
          <p>Entrenamiento para descubrir talentos y construir un proyecto de vida.</p>
        </article>
        <article>
          <h3>Emprendimiento Juvenil</h3>
          <p>Participación en proyectos sociales y económicos que fortalecen habilidades y sentido de vida.</p>
        </article>
      </div>
    </section>

    <section class="aliados">
      <h2>Aliados Estratégicos</h2>
      <div class="logos">
        <img src="/LogoAzul.png" alt="UDI" />
        <img src="/LogoAzul.png" alt="UNAD" />
        <img src="/LogoAzul.png" alt="UMB" />
        <img src="/LogoAzul.png" alt="Fe y Alegría" />
        <img src="/LogoAzul.png" alt="Fundación Bolívar Davivienda" />
        <img src="/LogoAzul.png" alt="HORYZON" />
        <img src="/LogoAzul.png" alt="AMERICAN EXPRESS" />
      </div>
    </section>

    <section class="testimonios">
      <h2>Testimonios</h2>
      <div class="videoTestimonio">
        <img src="/LogoAzul.png" alt="Video de Magaly" />
        <p>VIDEO MAGALY</p>
      </div>
      <div class="textoTestimonio">
        <p>Agregar testimonio escrito aquí.</p>
      </div>
    </section>
  </main>
</template>

<style scoped>


.componentes {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.componentes article {
  background: #f0f4f8;
  padding: 1rem;
  border-left: 4px solid #00b3a4;
  border-radius: 8px;
}

.aliados .logos {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

.aliados img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  background: #f3f3f3;
  padding: 0.5rem;
  border-radius: 8px;
}

.testimonios {
  margin-top: 2rem;
}

.videoTestimonio,
.textoTestimonio {
  background: #eef6f7;
  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.videoTestimonio img {
  width: 50px;
  height: 50px;
}
</style>
