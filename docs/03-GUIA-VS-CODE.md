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

## Repositorio y colaboración del equipo

La entrega está publicada en [Lurey14/doctor-patient-portal-sqa-cypress](https://github.com/Lurey14/doctor-patient-portal-sqa-cypress). Es un repositorio público de una cuenta personal, no una organización. El tablero Scrum y los Issues `SQA-01` a `SQA-10` están enlazados desde la página principal.

Para editar o subir cambios, cada integrante usa su propia cuenta GitHub. La propietaria invita a Wendy, Natalia y Alex desde **Settings > Collaborators > Add people** y concede permiso de escritura. Para editar el estado del Project también se concede permiso **Write** desde **Project > … > Settings > Manage access**. No se comparten contraseñas de cuentas.

## Flujo de Git

- `main`: versión integrada de la entrega.
- Ramas breves: `docs/plan-pruebas`, `docs/historias-casos`, `test/cypress-paciente` y `test/cypress-doctor`.
- Commits descriptivos y Pull Requests con revisión cruzada.

```powershell
git status
git switch main
git pull
git switch -c docs/plan-pruebas
# editar y guardar los archivos de la tarea
git add docs/01-PLAN-DE-PRUEBAS.md
git commit -m "docs: actualizar plan de pruebas"
git push -u origin docs/plan-pruebas
```

La matriz, el plan, la suite Cypress y la exposición comparten los identificadores HU/CP y se organizan con el tablero Scrum enlazado en el repositorio. El repositorio original del curso se conserva como fuente; la entrega es una copia académica independiente.
