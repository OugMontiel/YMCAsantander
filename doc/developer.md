# Documentación para Desarrolladores

## Flujo de Trabajo con Git Flow

Seguimos el estándar Git Flow como se describe en:  
[**Git Flow Workflow - Atlassian**](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

### Estructura de Ramas Principales
- `main` ➔ **Producción** 
- `develop` ➔ **Desarrollo**

### Reglas Clave
1. **Nunca hacer commit directo** en `main` o `develop`
2. **Squash merge** recomendado para PRs (opcional)
4. Revisión de código antes de hacer el pr

## Guía de Diseño Responsive

enfoque principal es **desktop-first (para pantallas grandes)** y luego escalas hacia abajo.

#### 📌 **Puntos clave:**  
1. **Base en escritorio grande (≥1400px)**: Estilos iniciales sin media query.  
2. **Escalas hacia abajo** con `max-width` para adaptar a pantallas más pequeñas.  
3. **Orden descendente**: Desde el viewport más grande al más pequeño.  
4. **Pruebas obligatorias**: Verificar en al todos los dispositivos o viewport.

### platilla de Uso

```css
/* -------------------------------------------- */
/* BASE: Escritorio XXL (≥1400px) - Sin media query */
/* -------------------------------------------- */

/* xxl - Pantallas extra grandes  */
@media (max-width: 1400px) { 
  /* Ajustes para laptops grandes */
}

/* xxl - Pantallas grandes */
@media (max-width: 1200px) {
}

/* lg - Laptops pequeñas */
@media (max-width: 992px) {
}
/* md - Tablets */
@media (max-width: 768px) {
}

/* sm - Teléfonos estándar */
@media (max-width: 576px) {
}

/* xs - Teléfonos pequeños */
@media (max-width: 480px) {
}
```

## Scripts principales

* **`npm run dev`** → Servidor de desarrollo (Vite) local.
* **`npm run lint:format`** → Formatea el código (Prettier).

**Flujo de despliegue**

El proceso de **despliegue a producción** está completamente automatizado mediante **GitHub Workflows**.

Para el entorno de **desarrollo**, el despliegue se realiza manualmente ejecutando el siguiente comando:

```bash
sudo docker compose -f docker-compose.dev.yml up -d --build
```

Este comando levanta el entorno local para realizar pruebas y revisiones.
Una vez finalizadas las verificaciones, el entorno se detiene para evitar consumo innecesario de recursos en el servidor.

```bash
sudo docker compose -f docker-compose.dev.yml down
```

* `down` → detiene y elimina los contenedores, redes y recursos creados por ese compose.
