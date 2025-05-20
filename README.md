# Documentación para Desarrolladores

## Introducción
Este proyecto consiste en el desarrollo de una página web para la YMCA Santander. Su propósito principal es proporcionar una plataforma digital moderna, clara y funcional que represente de forma institucional a la organización. A diferencia de una landing page tradicional, esta web está estructurada en múltiples secciones que permiten presentar la información de manera jerárquica y ordenada, facilitando el acceso a los distintos servicios, programas, actividades y contenidos que ofrece la YMCA.

La página estará enfocada en reflejar los valores organizacionales de la institución, destacando su labor social, educativa y comunitaria. Además, se prioriza un diseño visual limpio, profesional y adaptable a distintos dispositivos (responsive), garantizando una experiencia de usuario agradable y coherente con la identidad institucional.

## Requisitos Previos

Para trabajar en este proyecto de desarrollo web para la YMCA Santander, es necesario contar con un entorno de desarrollo preparado con las siguientes herramientas, versiones de software y configuraciones:

### Entorno de Desarrollo

* **Node.js**: Versión LTS 23.9
  Se recomienda instalar la versión LTS más reciente de Node.js v23.9 para asegurar compatibilidad con todas las dependencias del proyecto.

* **Gestor de Paquetes**:

  * `npm`  

### Herramientas de Desarrollo

* **Vite**: Utilizado para el desarrollo y pruebas iniciales del proyecto por su velocidad y simplicidad.
* **Nuxt 3**: Framework principal para la estructura del proyecto. Una vez estructurado el entorno con Vite, se migró a Nuxt para aprovechar sus capacidades organizativas y escalabilidad.
* **Vue 3**: Se emplea como el framework base para la construcción de componentes.

### Dependencias Principales

```json
"dependencies": {
  "@nuxt/ui": "^3.1.1",
  "@nuxt/ui-pro": "^3.1.1",
  "vue": "^3.5.13",
  "vue-router": "^4.5.0"
}
```

* `@nuxt/ui` y `@nuxt/ui-pro`: Conjuntos de componentes visuales modernos optimizados para Nuxt.
* `vue-router`: Para el manejo de rutas dentro de la aplicación.

### Dependencias de Desarrollo

```json
"devDependencies": {
  "@iconify-json/material-symbols-light": "^1.2.20",
  "@vitejs/plugin-vue": "^5.2.3",
  "prettier": "3.5.3",
  "vite": "^6.2.4",
  "vite-plugin-vue-devtools": "^7.7.2"
}
```

* `@vitejs/plugin-vue`: Integración de Vue en el entorno de desarrollo Vite.
* `vite-plugin-vue-devtools`: Herramientas para depuración y desarrollo con Vue.
* `prettier`: Para mantener un formato de código consistente durante el desarrollo.
* `@iconify-json/material-symbols-light`: Conjunto de íconos utilizados en la interfaz.

### Recomendaciones adicionales

* **Editor de Código**: Visual Studio Code con extensiones recomendadas como:

  * Vue - Official (para soporte Vue 3)
  * Prettier - Code formatter
  * ftp-simple
  * Conventional Commits
* **Navegador**: Se recomienda Chrome para desarrollo y pruebas.
* **Sistema Operativo**: Compatible con Windows, macOS y distribuciones Linux.




## Instalación

A continuación, se describen los pasos necesarios para clonar el repositorio, instalar las dependencias y lanzar el proyecto en modo desarrollo. Este proyecto no requiere realizar un proceso de build para comenzar a trabajar, ya que está pensado para un entorno de desarrollo directo con Vite y Nuxt.

### 1. Clonar el repositorio

Primero, debes clonar el repositorio desde GitHub (o la plataforma correspondiente). Ejecuta el siguiente comando en la terminal:

```bash
git clone https://github.com/OugMontiel/YMCAsantander
```

### 2. Acceder al directorio del proyecto

```bash
cd YMCAsantander
```

### 3. Instalar dependencias

Una vez dentro del directorio del proyecto, instala las dependencias necesarias ejecutando:

```bash
npm install
```

### 4. Lanzar el entorno de desarrollo

Con las dependencias instaladas, puedes iniciar el entorno de desarrollo con el siguiente comando:

```bash
npm run dev
```

Esto levantará el servidor local y podrás acceder al proyecto desde el navegador, generalmente en `http://localhost:3000`.


## Estructura del Proyecto

El proyecto está organizado de forma clara para facilitar el mantenimiento, la escalabilidad y el trabajo en equipo. A continuación se describe la estructura principal de carpetas y archivos del repositorio de la página web de la YMCA Santander.

### Estructura de carpetas

```
.
├── index.html                # Archivo principal HTML base
├── main.js                   # Punto de entrada para la aplicación Vue
├── vite.config.js            # Configuración de Vite para desarrollo
├── package.json              # Dependencias y scripts del proyecto
├── jsconfig.json             # Configuración del entorno JS/VSCode
├── README.md                 # Documentación del proyecto
├── public/                   # Archivos públicos estáticos como favicon
│   └── favicon.ico
├── src/                      # Código fuente del proyecto
│   ├── App.vue               # Componente raíz de la aplicación
│   ├── main.js               # Archivo de arranque del proyecto
│   ├── assets/               # Archivos estáticos organizados
│   │   ├── base.css
│   │   ├── Documentos/
│   │   ├── fondos/
│   │   ├── img/
│   │   └── logos/
│   ├── components/           # Componentes Vue reutilizables
│   │   ├── fondos/
│   │   │   └── fondoDinamico.vue
│   │   ├── header/
│   │   │   ├── aporteHeader.vue
│   │   │   ├── experienciasHeader.vue
│   │   │   ├── legalHeader.vue
│   │   │   ├── proyectosHeader.vue
│   │   │   └── socialHeader.vue
│   │   ├── footer.vue
│   │   └── header.vue
│   ├── router/
│   │   └── index.js          # Definición de rutas de la aplicación
│   └── views/                # Páginas principales organizadas por sección
│       ├── home.vue
│       ├── about.vue
│       ├── aporta/
│       │   ├── donar.vue
│       │   ├── hazteVoluntario.vue
│       │   ├── socialEmpresarial.vue
│       │   └── socio.vue
│       ├── experiencias/
│       │   ├── areaInternacional.vue
│       │   └── experienciasLocales.vue
│       ├── legal/
│       │   ├── Esal.vue
│       │   ├── PoliticaDeCookies.vue
│       │   ├── Privacidad.vue
│       │   └── TerminosYCondiciones.vue
│       ├── proyectos/
│       │   ├── misionPazYCiudadania.vue
│       │   ├── pazaLaPaz.vue
│       │   └── programas.vue
│       └── social/
│           ├── publicaciones.vue
│           └── voluntariado.vue
```

### Observaciones

* La carpeta `src/` está bien estructurada en componentes, vistas, rutas y recursos visuales.
* Se hace un uso eficiente del sistema de rutas (`router/`) para gestionar la navegación entre secciones.
* Los componentes están organizados de manera semántica según su uso (por ejemplo, encabezados para secciones específicas).

## Posible Problema y Solución
**Error:** `Cannot find module '../lightningcss.linux-x64-musl.node'`

Este error puede ocurrir al intentar construir Storybook. Para solucionarlo, asegúrate de tener instalada la versión LTS/jod de Node.js en tu sistema. Además, en sistemas Windows x64, descargar e instalar el siguiente paquete puede resolver el problema:

[Descargar Microsoft Visual C++ Redistributable](https://aka.ms/vs/17/release/vc_redist.x64.exe)

Para otros sistemas, consulta la documentación oficial para descargar la versión adecuada:  
[Última versión de Microsoft Visual C++ Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#latest-microsoft-visual-c-redistributable-version)

## Pruebas
Instrucciones para ejecutar pruebas unitarias, de integración y de extremo a extremo.

## Contribución
Guía para contribuir al proyecto, incluyendo estándares de codificación y flujo de trabajo.

## Recursos Adicionales
Enlaces a documentación, tutoriales y herramientas útiles.

## Contacto
Información de contacto para soporte o preguntas relacionadas con el proyecto.

# Necesito 

- Un triangulo Blanco.. para fonde del logo y que no se vea afectado por el cambio de color del fondo 
- logos de los programas 
- Info paz y ciudadania 
- eslogan de la YMCA (Implementar en pantallas agrandes)
- actualizar archivo proyectosData.js 
- actualizar archivo proyectos.jpg (Algo donde esten logos de varios proyectos o algo asi)