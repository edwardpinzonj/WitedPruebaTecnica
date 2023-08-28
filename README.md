# Wited Prueba Técnica frontend

Esta plantilla debería ayudarte a empezar a desarrollar con Vue 3 en Vite.

## Configuración Recomendada del IDE

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (y deshabilita Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Soporte de Tipos para Importaciones `.vue` en TS

TypeScript no puede manejar información de tipos para las importaciones `.vue` por defecto, por lo que reemplazamos la CLI `tsc` con `vue-tsc` para la verificación de tipos. En los editores, necesitamos el [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) para que el servicio de lenguaje de TypeScript reconozca los tipos `.vue`.

Si el plugin independiente de TypeScript no es lo suficientemente rápido para ti, Volar también ha implementado un [Modo Take Over](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) que es más eficiente en rendimiento. Puedes habilitarlo siguiendo estos pasos:

1. Desactiva la Extensión Integrada de TypeScript
   1) Ejecuta `Extensions: Show Built-in Extensions` desde la paleta de comandos de VSCode
   2) Encuentra `TypeScript and JavaScript Language Features`, haz clic derecho y selecciona `Disable (Workspace)`
2. Recarga la ventana de VSCode ejecutando `Developer: Reload Window` desde la paleta de comandos.

## Personaliza la configuración

Consulta la [Referencia de Configuración de Vite](https://vitejs.dev/config/).

## Configuración del Proyecto

```sh
npm install
```

## Variable de Entono

```.env
VITE_API_URL = https://jsonplaceholder.typicode.com
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
