// src/data/proyectosData.js
import pazaLaPaz from "@/assets/img/proyectos/pazaLaPaz/pazaLaPaz.jpg";
import misionPazYCiudadania from "@/assets/img/proyectos/misionPazYCiudadania/misionPazYCiudadania.jpg"; // asegúrate que esta imagen exista

export default [
  {
    id: 1,
    titulo: "Paza La Paz",
    descripcion:
      "Es un proyecto dirigido a jóvenes entre 14 y 28 años en situación de vulnerabilidad social. Busca contribuir a la construcción de Paz y la transformación del conflicto social en Colombia, generando oportunidades para el empoderamiento y la inclusión de los y las jóvenes.",
    img: pazaLaPaz,
    routeName: "pazaLaPaz",
  },
  {
    id: 2,
    titulo: "Semillas de paz y bienestar Comunitario",
    descripcion:
      "El proyecto busca la promoción del bienestar comunitario, sostenibilidad ambiental y justicia social, a través del fortalecimiento de la acción voluntaria inspirada en los valores cristianos.",
    img: misionPazYCiudadania,
    routeName: "misionPazYCiudadania",
  },
];
