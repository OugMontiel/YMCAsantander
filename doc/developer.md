# Documentación para Desarrolladores

## Flujo de Trabajo con Git Flow

Seguimos el estándar Git Flow como se describe en:  
[**Git Flow Workflow - Atlassian**](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

### Estructura de Ramas Principales
- `Producion` ➔ **Producción** (solo releases estables)
- `main` ➔ **Desarrollo** (integración de features)

### Reglas Clave
1. **Nunca hacer commit directo** en `main` o `Producion`
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