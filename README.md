# 🍕 Pizzería Mamma Mía --- React App

Proyecto desarrollado como parte del programa **Full Stack JavaScript --
Desafío Latam**. La aplicación simula una tienda de pizzas implementando
componentes reutilizables, manejo de estado, vistas simuladas y consumo
de API externa con React.

------------------------------------------------------------------------

# 🚀 Tecnologías utilizadas

-   React
-   Vite
-   JavaScript (ES6+)
-   Bootstrap
-   Fetch API
-   React Hooks (`useState`, `useEffect`)

------------------------------------------------------------------------

# 📚 Hito 1 --- Estructura base de componentes

## Objetivo

Construir la estructura inicial de la aplicación utilizando componentes
reutilizables.

## Componentes creados

-   Navbar.jsx
-   Header.jsx
-   CardPizza.jsx
-   Footer.jsx
-   Home.jsx

## Funcionalidades implementadas

-   Navbar superior con navegación simulada
-   Header con imagen destacada
-   Cards dinámicas de pizzas
-   Footer informativo
-   Layout responsive con Bootstrap

------------------------------------------------------------------------

# 📚 Hito 2 --- Props y renderizado dinámico

## Objetivo

Utilizar props para renderizar contenido dinámico en los componentes.

## Implementación

El componente `CardPizza.jsx` recibe props:

-   name
-   price
-   ingredients
-   img

## Funcionalidades implementadas

-   Render dinámico de ingredientes con `.map()`
-   Formato de precio en CLP
-   Reutilización del componente CardPizza
-   Separación lógica por componentes

------------------------------------------------------------------------

# 📚 Hito 3 --- Formularios y vistas adicionales

## Objetivo

Agregar nuevas vistas simuladas dentro de la aplicación.

## Componentes creados

-   Register.jsx
-   Login.jsx
-   Cart.jsx

## Funcionalidades implementadas

Formulario Register:

-   Nombre
-   Email
-   Password
-   Confirmación password

Formulario Login:

-   Email
-   Password

Vista Cart:

-   Listado de productos
-   Cantidad
-   Precio total
-   Botón pagar (visual)

------------------------------------------------------------------------

# 📚 Hito 4 --- Consumo de API con React

## Objetivo

Consumir una API externa utilizando `fetch` y `useEffect`.

API utilizada:

http://localhost:5000/api/pizzas

## Implementación en Home.jsx

Se reemplazó el arreglo local de pizzas por datos obtenidos desde la
API.

Permite:

-   Obtener listado de pizzas desde backend
-   Renderizar tarjetas dinámicamente
-   Actualizar estado con useState

## Implementación en Pizza.jsx

Se creó el componente:

src/components/Pizza.jsx

Consumiento el endpoint:

http://localhost:5000/api/pizzas/p001

Renderiza:

-   Nombre
-   Imagen
-   Descripción
-   Ingredientes
-   Precio
-   Botón añadir al carrito (visual)

------------------------------------------------------------------------

# 🧠 Hooks utilizados

## useState

Para manejar estados locales:

-   listado de pizzas
-   detalle de pizza
-   formularios
-   carrito

## useEffect

Utilizado para:

-   consumo de API
-   renderizado inicial de datos

------------------------------------------------------------------------

# 📦 Backend utilizado

El proyecto consume una API local incluida en el material de apoyo del
curso:

http://localhost:5000/api/pizzas

Ejecutar backend:

npm install npm start

------------------------------------------------------------------------

# 🖥️ Ejecutar el proyecto

Frontend:

npm install npm run dev

Backend:

npm install npm start

------------------------------------------------------------------------

# 📈 Estado actual del proyecto

✔ Componentización completa\
✔ Props dinámicas\
✔ Formularios funcionales\
✔ Vista carrito\
✔ Consumo de API externa\
✔ Renderizado dinámico desde backend\
✔ Uso correcto de hooks React

------------------------------------------------------------------------
