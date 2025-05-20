<template>
  <section class="timeLine">
    <h1>HISTORIA DE LA YMCA</h1>
    <div class="timeLineMundial">
      <p>
        <strong>YMCA</strong> es un movimiento mundial con <strong>173 años de historia</strong>. Su fundador
        <strong>Georges Williams</strong> nació en Inglaterra en 1821. A los 20 años, dejó la granja en la que se crió y se mudó a Londres
        donde encontró un trabajo en una fábrica de telas. Las largas jornadas de trabajo, que llegaban a alcanzar las 12 horas diarias, así
        como carecer de un hogar y compartir un cuarto con otros empleados, le hacía sentir más nostalgia por estar lejos de su familia.
        Formó junto con un grupo de amigos de los dormitorios la primera <strong>YMCA</strong>, en 1844.
      </p>
      <p>
        Ha sido reconocida por sus aportes en la formación de los y las jóvenes. Fue fundado en Londres-Inglaterra, el
        <strong>6 de junio de 1844</strong> por <strong>George Williams</strong> y un grupo de jóvenes cristianos. Sus contribuciones a la
        humanidad han sido notables, desde la invención del <strong>baloncesto</strong>, <strong>voleibol</strong>,
        <strong>raquetbol</strong>, <strong>fútbol sala</strong> y los <strong>campamentos de verano</strong> con fines formativos. Recibió
        el <strong>Premio Nobel de Paz</strong> en 1901 y 1946 por su ayuda a los refugiados durante la I y II guerra mundial.
      </p>
    </div>

    <div class="timeLineColombia">
      <h2>YMCA COLOMBIA</h2>
      <p>
        En <strong>1963</strong> se dieron los primeros pasos para establecer una <strong>YMCA</strong> en Bogotá, con la ayuda del Comité
        Internacional de la YMCA de USA y Canadá. En <strong>1964</strong>, la Constitución fue aceptada y se comenzó a trabajar en sedes
        arrendadas.
      </p>
      <p>
        La <strong>ACJ – YMCA</strong> llegó a Colombia en 1964 y actualmente hace presencia en Barranquilla, Bucaramanga (Santander), Cali,
        Tolima con sedes en Ibagué, Lérida y Armero Guayabal, Bogotá y algunas poblaciones de Cundinamarca, Risaralda, en el Eje Cafetero,
        con sedes en Armenia y Quindío, Medellín y Puerto Boyacá. La <strong>Federación Colombiana de ACJs</strong> es la instancia que las
        representa ante los demás organismos a nivel nacional e internacional.
      </p>
    </div>

    <div class="timeLineSantander">
      <h2>YMCA SANTANDER</h2>
      <p>
        La <strong>ACJ Santander</strong> fue fundada el <strong>5 de octubre de 1995</strong> en la ciudad de Bucaramanga por iniciativa de
        la <strong>Federación Colombiana de ACJs</strong>. Se inician labores en la comunidad con programas de capacitación a madres
        comunitarias y con el proyecto de apoyo al ancianato San Rafael; posteriormente en <strong>1997</strong>, el programa “<strong
          >Libertad Asistida</strong
        >”, coordinado por el ICBF en el que se atendía 120 jóvenes y sus familias, posteriormente se inicia con el programa de promoción y
        prevención <strong>Clubes Prejuveniles y Juveniles</strong> así como el programa <strong>Educador Familiar</strong>.
      </p>
      <p>
        A lo largo de su historia y gracias a donantes internacionales y a la tenacidad de los equipos de trabajo y de los voluntarios,
        hemos podido fortalecer los proyectos de vida de niños, niñas, jóvenes, familias y comunidad en general que se ven rodeados de
        diferentes problemáticas sociales.
      </p>
    </div>
  </section>
</template>

<style>
.timeLine {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
}
.timeLine h1 {
  margin-bottom: 0.5em;
}

.timeLineMundial {
  padding-right: 3em;
  padding-bottom: 1em;
  margin-right: 3em;
  margin-bottom: 1em;
  border-radius: 0 0 2em 0;
  border-right: 3px solid var(--color-borde-secundario);
  border-bottom: 3px solid var(--color-borde-secundario);
}

.timeLineColombia {
  padding-left: 3em;
  padding-bottom: 1em;
  margin-left: 3em;
  margin-bottom: 1em;
  border-radius: 0 0 0 2em;
  border-left: 3px solid var(--color-borde-secundario);
  border-bottom: 3px solid var(--color-borde-secundario);
}

.timeLineSantander {
  padding-right: 3em;
  padding-bottom: 1em;
  margin-right: 3em;
  margin-bottom: 1em;
  border-radius: 0 0 2em 0;
  border-right: 3px solid var(--color-borde-secundario);
  border-bottom: 3px solid var(--color-borde-secundario);
}

/* xs - Teléfonos pequeños */
@media (max-width: 480px) {
  .timeLineMundial {
    padding-right: 1em;
    margin-right: 0;
  }

  .timeLineColombia {
    padding-left: 1em;
    margin-left: 0;
  }

  .timeLineSantander {
    padding-right: 1em;
    margin-right: 0;
  }
}

/* sm - Teléfonos estándar */
@media (max-width: 576px) {
}

/* md - Tablets */
@media (max-width: 768px) {
  .timeLineMundial {
    padding-right: 1.5em;
    margin-right: 0.5em;
  }

  .timeLineColombia {
    padding-left: 1.5em;
    margin-left: 0.5em;
  }

  .timeLineSantander {
    padding-right: 1.5em;
    margin-right: 0.5em;
  }
}

/* lg - Laptops pequeñas */
@media (max-width: 992px) {
}

/* xl - Laptops / desktops medianos */
@media (max-width: 1200px) {
  .timeLineMundial {
    padding-right: 2em;
    margin-right: 1em;
  }

  .timeLineColombia {
    padding-left: 2em;
    margin-left: 1em;
  }

  .timeLineSantander {
    padding-right: 2em;
    margin-right: 1em;
  }
}

/* xxl - Pantallas grandes */
@media (min-width: 1201px) {
  .timeLine {
    padding: 2em;
  }
}
</style>
