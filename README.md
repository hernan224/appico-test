# Appico Dashboard Test

Appico frontend developer test response, made by [**Hernán Zubiri Corzo**](https://www.linkedin.com/in/hern%C3%A1n-zubiri-corzo-99323a18a/).

## Project structure

There are two folders in this repository, _template_ and _appico-dashboard_.

### _Template_ folder

This is the first aproach to solve the test, a static HTML - CSS template with responsive behaviour.

No JS code added to this website. No CSS framwork used for styling.

### _appico-dashboard_ folder

This is a **React** SPA implementation from the previous template.

* Using [Reach Router](https://github.com/reach/router) for routing and [PropTypes](https://github.com/facebook/prop-types) for component props checking.

* Fetching paginated user data from <https://jsonplaceholder.typicode.com/>

#### Starting react dashboard app

Navigate to the appico-dashboard folder

````shell
cd appico-dashboard
````

Install npm dependencies, before the first run

````shell
npm install
````

Start the react app in development mode

````shell
npm run start
````

-----------------------

## Estructura del proyecto

En este repositorio se encuentran dos directorios, _template_ y _appico-dashboard_.

### Directorio _Template_

Este es el primer acercamiento a la solución de la prueba. Consiste es un sitio web estático y responsivo, realizado únicamente en HTML y CSS.

No se utilizó JS para crear interactividades, ni framwork CSS para los estilos generales.

### Directorio _appico-dashboard_

Esta es una SPA creada usando **React**, basada en el template creado previamente.

* Se utilizó [Reach Router](https://github.com/reach/router) para el enrutado de la app y [PropTypes](https://github.com/facebook/prop-types) para comprobar la validez de los *props* en los componentes.
* Se accede a información de usuarios ficticios desde la fuente externa <https://jsonplaceholder.typicode.com/.> La información se obtiene paginada desde el origen.

#### Iniciando la app, utilizando react

Navega al directorio appico-dashboard

````shell
cd appico-dashboard
````

Antes del primer uso, instala las dependencias npm del proyecto

````shell
npm install
````

Inicia la app, en el modo desarrollador de react

````shell
npm run start
````
