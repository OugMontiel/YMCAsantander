export function calcularAniosYMCA() {
  const hoy = new Date();
  const fundacion = new Date(1844, 5, 6); // OJO: los meses en JS van de 0 a 11 (junio es 5)

  let anios = hoy.getFullYear() - fundacion.getFullYear();

  // Si aún no ha llegado el aniversario este año, restamos 1
  const aunNoEsAniversario =
    hoy.getMonth() < fundacion.getMonth() || (hoy.getMonth() === fundacion.getMonth() && hoy.getDate() < fundacion.getDate());

  if (aunNoEsAniversario) {
    anios--;
  }

  return anios;
}
