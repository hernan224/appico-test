# Appico Dashboard Test

Appico frontend developer test response, made by [**Hernán Zubiri Corzo**](https://www.linkedin.com/in/hern%C3%A1n-zubiri-corzo-99323a18a/).

## Project structure

There are two folders in this repository, _template_ and _appico-dashboard_.

### _Template_ folder

This is the first aproach to solve the test, a static HTML - CSS template width responsive behavior.

No JS code added to this website. No CSS framwork used for styling.

### _appico-dashboard_ folder

This is a **React** SPA implementation from the previus template.

* Used [Reach Router](https://github.com/reach/router) for routing and [PropTypes](https://github.com/facebook/prop-types) for component props checking.

* Fetched paginated user data from <https://jsonplaceholder.typicode.com/>

#### Starting react dashboard app

Navigate to the appico-dashboard folder

````shell
cd appico-dashboard
````

Install npm dependencies, for the first run

````shell
npm install
````

Start the react app, in development mode

````shell
npm run start
````

-----------------------

## Estructura del proyecto

En este repositorio se encuentran dos directorios, _template_ y _appico-dashboard_.

### Directorio _Template_

Esta es la primera implementación de realizada como colución de la prueba. Consiste es un sitio web estático y resposivo, basado únicamente en HTML y CSS.

No se utilizó JS para crear interactividades, ni framwork CSS para los estilos generales.

### Directorio _appico-dashboard_

Esta es una SPA creada usando **React**, basada en el tempalte creado previamente.

* Se utilizó [Reach Router](https://github.com/reach/router) para el enrutado de la app y [PropTypes](https://github.com/facebook/prop-types) para comprobar la validez de los *props* de los componentes.
* Se accede a información de usuarios ficticios desde la fuente externa <https://jsonplaceholder.typicode.com/.> La información se obtiene paginada desde el origen.

#### Iniciando la app, utilizando react

Navegar al directorio appico-dashboard

````shell
cd appico-dashboard
````

Antes del primer uso, instalar las dependencias npm del proyecto

````shell
npm install
````

Iniciar la app, en el modo desarrollador de react

````shell
npm run start
````
