# 🍕 Pizzería Mamma Mía --- React App

Proyecto desarrollado como parte del programa **Full Stack JavaScript --
Desafío Latam**. La aplicación simula una tienda de pizzas implementando
componentes reutilizables, manejo de estado, vistas simuladas y consumo
de API externa con React.

------------------------------------------------------------------------

# 🚀 Tecnologías utilizadas

-   React
-   React Router DOM
-   Vite
-   JavaScript (ES6+)
-   Bootstrap
-   Fetch API
-   React Hooks (`useState`, `useEffect`, `useContext`, `useParams`)

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

------------------------------------------------------------------------

# 📚 Hito 4 --- Estado con useState y eventos

## Objetivo

Manejar estado local y eventos en componentes funcionales.

## Funcionalidades implementadas

-   `useState` para controlar formularios e inputs
-   Eventos `onChange` y `onSubmit`
-   Validaciones básicas
-   Render condicional según el estado

------------------------------------------------------------------------

# 📚 Hito 5 --- React Router y vistas dinámicas

## Objetivo

Implementar navegación entre vistas con React Router.

## Rutas creadas

-   `/` → Home
-   `/login` → Login
-   `/register` → Register
-   `/cart` → Cart
-   `/pizza/p001` → Pizza
-   `/profile` → Profile
-   `/404` → NotFound
-   `*` → NotFound (fallback)

## Funcionalidades implementadas

-   `BrowserRouter` y `Routes` configurados en `App.jsx`
-   Navbar con enlaces usando `Link` de React Router
-   Botón 🛒 Total redirige a `/cart`
-   Página `NotFound` con enlace de regreso a `/`
-   Página `Profile` con email estático y botón de cierre de sesión (visual)

------------------------------------------------------------------------

# 📚 Hito 6 --- Context API y carrito global

## Objetivo

Implementar el manejo de estado global en la aplicación utilizando Context API.

## Archivos creados

-   src/context/CartContext.jsx

## Implementación

Se creó `CartContext` con `CartProvider` que expone:

-   `cart` — arreglo de productos en el carrito (con `count` por producto)
-   `addToCart(pizza)` — agrega una pizza o incrementa su cantidad si ya existe
-   `increase(id)` — incrementa la cantidad de un producto
-   `decrease(id)` — decrementa la cantidad y elimina el producto si llega a 0
-   `total` — precio total calculado automáticamente

## Modificaciones

`App.jsx` — envuelto con `<CartProvider>` para dar acceso global al contexto.

`Navbar.jsx` — consume `useCart()` para mostrar el total real del carrito en tiempo real.

`CardPizza.jsx` — agregado botón "Añadir al carrito" que dispara la prop `onAdd`.

`Home.jsx` — consume `addToCart` del context y lo pasa a cada `CardPizza`.

`Cart.jsx` — reemplaza estado local por `useCart()`. Muestra carrito vacío si no hay productos y el mismo total que el Navbar.

## Funcionalidades implementadas

-   Estado global del carrito compartido entre todos los componentes
-   Botón "Añadir al carrito" funcional en cada card de Home
-   Navbar muestra el total actualizado en tiempo real
-   Página Cart permite agregar y eliminar productos
-   Total sincronizado entre Navbar y página Cart

------------------------------------------------------------------------

# 📚 Hito 7 --- React Router II, rutas protegidas y useParams

## Objetivo

Implementar rutas protegidas con un `UserContext` (token simulado) y consumir el endpoint dinámico `GET /api/pizzas/:id` usando el hook `useParams`.

## Archivos creados

-   `src/context/UserContext.jsx`
-   `src/components/RouteGuards.jsx`

## Implementación

`UserContext` expone:

-   `token` — estado booleano, por defecto en `true`
-   `logout()` — cambia el token a `false`
-   `login()` — cambia el token a `true` (preparación para integraciones futuras)

`RouteGuards.jsx` contiene dos componentes:

-   `ProtectedRoute` — si el token es `false`, redirige a `/login`
-   `PublicRoute` — si el token es `true`, redirige a `/`

## Modificaciones

`App.jsx` — envuelto con `<UserProvider>`. Se cambia la ruta `/pizza/p001` por la ruta dinámica `/pizza/:id`. `/profile` se envuelve con `ProtectedRoute`, mientras que `/login` y `/register` se envuelven con `PublicRoute`.

`Pizza.jsx` — usa `useParams()` para obtener el `id` de la URL y hace `fetch` a `http://localhost:5000/api/pizzas/:id`. Maneja estados de carga y error. El botón "Añadir al carrito" usa `addToCart` desde `CartContext`.

`CardPizza.jsx` — agregado `Link` de React Router que redirige a `/pizza/:id` ("Ver más"). Recibe `id` como prop.

`Home.jsx` — pasa la prop `id` a cada `CardPizza`.

`Navbar.jsx` — consume `useUser()` y renderiza condicionalmente:

-   Si `token === true`: botones **Profile** y **Logout**
-   Si `token === false`: botones **Login** y **Register**
-   **Home** y **Total** siempre visibles
-   El botón **Logout** ejecuta el método `logout()` del contexto

`Cart.jsx` — consume `useUser()` y deshabilita el botón **Pagar** cuando `token === false` (o cuando el carrito está vacío).

## Funcionalidades implementadas

-   Estado global de autenticación simulada con `UserContext`
-   Ruta dinámica `/pizza/:id` con detalle obtenido desde la API
-   Botón "Ver más" en cada `CardPizza` que redirige al detalle
-   Navbar reactivo al estado de autenticación
-   Botón **Pagar** deshabilitado cuando no hay sesión
-   Ruta `/profile` protegida → redirige a `/login` si no hay token
-   Rutas `/login` y `/register` redirigen al home si ya hay sesión

------------------------------------------------------------------------

# 🧠 Hooks utilizados

## useState

Para manejar estados locales:

-   listado de pizzas
-   detalle de pizza
-   formularios
-   carrito (ahora en CartContext)

## useEffect

Utilizado para:

-   consumo de API
-   renderizado inicial de datos

## useContext

Utilizado para:

-   consumir `CartContext` y `UserContext` desde cualquier componente sin prop drilling

## useParams

Utilizado en `Pizza.jsx` para obtener el `id` dinámico desde la URL y hacer la petición a la API correspondiente.

------------------------------------------------------------------------

# 📦 Backend utilizado

El proyecto consume una API local incluida en el material de apoyo del
curso:

-   `GET http://localhost:5000/api/pizzas` — listado de pizzas
-   `GET http://localhost:5000/api/pizzas/:id` — detalle de una pizza

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
✔ Uso correcto de hooks React\
✔ Estado global con Context API\
✔ Carrito funcional con agregar y eliminar productos\
✔ Total sincronizado entre Navbar y página Cart\
✔ Autenticación simulada con `UserContext` y token global\
✔ Rutas protegidas (`/profile`) y públicas (`/login`, `/register`)\
✔ Ruta dinámica `/pizza/:id` con `useParams` y fetch al backend\
✔ Navbar reactivo al estado de sesión\
✔ Botón **Pagar** deshabilitado sin sesión activa

------------------------------------------------------------------------
