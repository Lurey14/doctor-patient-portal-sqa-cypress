# Guía para ejecutar el proyecto desde VS Code

## Requisitos

- Docker Desktop instalado y abierto para ejecutar la aplicación y MySQL.
- Node.js/npm disponibles en la terminal si se abrirá la interfaz Cypress desde VS Code. La preparación guarda Cypress, sus dependencias y su caché dentro de esta carpeta del proyecto; no instala Cypress globalmente.
- VS Code para abrir la carpeta del proyecto y usar Terminal > New Terminal.

## Abrir el proyecto

En VS Code selecciona **File > Open Folder** y abre la carpeta `Doctor-Patient-Portal` que contiene `docker-compose.yml`.

## Levantar la aplicación y MySQL

En la terminal PowerShell integrada ejecuta:

```powershell
docker compose up --build -d
docker compose ps
```

Espera hasta que MySQL aparezca como `healthy`. Abre `http://localhost:8080` en el navegador. El login administrativo usado por esta versión es `admin@gmail.com` / `admin`; las credenciales `root/root` de la pizarra no son las credenciales de inicio de sesión web.

## Preparar y abrir Cypress

Node.js 22 o superior debe estar disponible en la terminal. Desde la carpeta raíz del proyecto, prepara Cypress una sola vez:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\setup-cypress.ps1
```

El script instala el paquete local de Cypress en `node_modules` y guarda tanto la caché de npm como el binario de Cypress dentro de `.cache`, en esta carpeta del proyecto. No instala paquetes globales. Después, abre una terminal integrada nueva en VS Code y ejecuta:

```powershell
npm run cy:open
```

En Cypress elige **E2E Testing**, selecciona el navegador y abre `cypress/e2e/test.cy.js`. La aplicación y MySQL deben estar activos en Docker para que los flujos pasen.

Para ejecutar todas las pruebas sin la interfaz visual, usa `npm run cy:run`.

## Detener y volver a iniciar

Para detener los contenedores conservando los datos locales de la base, ejecuta `docker compose stop`. Para volver a iniciarlos, ejecuta `docker compose start`. No borres el volumen de MySQL si necesitas conservar los datos de prueba.

## Repositorio propio del equipo

El repositorio descargado sirve como base local y referencia. Para entregar en GitHub, el equipo debería crear un repositorio nuevo en una cuenta acordada, añadir a los cuatro integrantes y subir el proyecto con documentos, Docker y Cypress. Antes de crear o publicar el remoto, acuerden el nombre del repositorio y quién será su propietario. No subir contraseñas personales ni datos reales.

## Organización sugerida de ramas

- `main`: versión integrada y revisada.
- `feat/docker-cypress`: entorno y automatización.
- `docs/test-plan`: plan de pruebas.
- `docs/test-cases`: historias, casos y exposición.

Cada persona crea una rama, realiza commits pequeños y abre un Pull Request para revisión de otra integrante. La tabla de responsabilidades de la exposición es propuesta: actualícenla para reflejar el trabajo realizado realmente.
