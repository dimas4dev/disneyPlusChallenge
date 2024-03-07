
# Estructura del Proyecto

Este proyecto sigue una estructura modular que organiza el código en carpetas específicas para facilitar la gestión y escalabilidad. A continuación, se presenta un desglose de los directorios principales y su propósito:

- `src`: El directorio fuente que contiene todo el código principal del proyecto.
  - `assets`: Contiene archivos estáticos como imágenes e iconos utilizados en toda la aplicación
  - `components`: Componentes reutilizables se dividen en subdirectorios para una mejor organización.
    - `core`: Componentes de interfaz de usuario básicos como `Button`, `Container`, `Header`, `Input`, y `MovieCard` que son los bloques de construcción de la aplicación.
    - `Footer`: Componente para el pie de página de la aplicación.
    - `Login`: Componente que maneja la funcionalidad de inicio de sesión del usuario.
  - `config`: Contiene archivos de configuración, como claves API y puntos finales.
  - `hooks`: Hooks de React personalizados para lógica compartida entre componentes, como `useInputChange` y `useAuth`.
  - `pages`: Componentes que representan páginas enteras como `Home`, `Originals`, y `Watchlist`.
  - `StatusHandlers`: Gestión del estado utilizando Zustand, con stores como `AuthContext` que es realizado con ReactContext y `ZustandHandler`.Que es realizado con la libreria de Zustand
  - `utils`: Funciones de utilidad y ayudantes para la aplicación.

Los archivos CSS se encuentran en la raíz de `src` para proporcionar un estilo global.

Esta estructura promueve la separación de preocupaciones por tipo y funcionalidad, haciendo que el código sea más mantenible y comprensible.

Recuerde que el proyecto esta desplegado a traves de herramientas gratuitas como Vercel por lo cual cuando visites el sitio web no podras ver reflejada satisfactoriamente la app. Te recomiendo que esperes 5 min mientras la instancia del servidor se enciende

[URL de la APP](https://disney-plus-challenge-h3rw.vercel.app/)