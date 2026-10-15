# Doctor Patient Portal

Aplicación web Java (JSP/Servlets) con MySQL. El entorno local se ejecuta con Docker Compose; no requiere instalar MySQL, Java, Maven ni Tomcat en Windows. VS Code se usa para editar el proyecto.

## Requisitos

- Docker Desktop instalado y ejecutándose con contenedores Linux.
- Node.js/npm 22.x, 24.x o 26+ disponibles si se desea abrir Cypress localmente desde VS Code.
- VS Code (opcional, para editar y usar la terminal integrada).
- Puertos locales `3306` y `8080` libres.

La primera ejecución necesita acceso a Internet para descargar las imágenes de MySQL, Maven y Tomcat y para que Maven descargue las dependencias del proyecto.

## Iniciar el entorno

Abre la carpeta del proyecto en VS Code. En **Terminal > New Terminal**, ejecuta:

```powershell
docker compose config
docker compose up --build -d
docker compose ps
```

La primera construcción puede tardar varios minutos. Espera hasta que `db` aparezca como `healthy` y `app` como `running`. Si quieres ver el arranque en tiempo real:

```powershell
docker compose logs -f app db
```

Abre la aplicación en <http://localhost:8080/>. La página de ingreso de administrador está en <http://localhost:8080/admin_login.jsp>.

Credenciales de administrador definidas por el código del proyecto:

- Correo: `admin@gmail.com`
- Contraseña: `admin`

## Base de datos

El servicio MySQL escucha en el puerto `3306` del equipo y crea la base `hospital`. El script `database/init/01-schema.sql` se ejecuta automáticamente la primera vez que se inicializa el volumen vacío.

La aplicación dentro de Docker se conecta al host `db` usando un usuario propio de desarrollo. El código conserva la conexión local `localhost:3306` como alternativa cuando se ejecuta fuera de Docker.

Para inspeccionar tablas desde VS Code:

```powershell
docker compose exec db mysql -uhospital_app -phospital_dev hospital -e "SHOW TABLES;"
```

Para abrir una sesión SQL interactiva:

```powershell
docker compose exec db mysql -uhospital_app -phospital_dev hospital
```

## Detener y volver a iniciar

Detener los contenedores y conservar los datos:

```powershell
docker compose stop
```

Volver a iniciarlos:

```powershell
docker compose start
```

Reconstruir la aplicación después de modificar el código:

```powershell
docker compose up --build -d app
```

El volumen `hospital_data` conserva la base aunque los contenedores se detengan o reconstruyan. No lo elimines si necesitas conservar los datos. Los scripts SQL de inicialización solo se ejecutan cuando se crea un volumen de base vacío.

## Configuración de desarrollo

Las credenciales de Compose son solo para desarrollo local. Puedes definir `MYSQL_ROOT_PASSWORD` y `DB_PASSWORD` en un archivo `.env` junto a `docker-compose.yml`; `.env` está excluido de la imagen y no debe subirse a Git.

Si los puertos `3306` o `8080` ya están ocupados, detén el servicio que los usa antes de iniciar este entorno.

## Abrir Cypress desde VS Code

Se requiere Node.js 22.x, 24.x o 26 o superior. En Windows, prepara las dependencias del proyecto una sola vez:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\setup-cypress.ps1
```

Esto instala Cypress como dependencia local en `node_modules` y guarda su binario y caché npm dentro de `.cache/`, carpetas excluidas de Git. No instala herramientas globales. Con la aplicación y MySQL levantados en Docker, abre el Test Runner:

```powershell
npm run cy:open
```

Selecciona **E2E Testing** y el archivo `cypress/e2e/test.cy.js`. Para ejecutar sin interfaz usa `npm run cy:run`.

## Cypress en Docker

Cypress también puede ejecutarse en modo automático dentro de Docker, sin abrir la interfaz:

```powershell
docker compose up --build -d
docker compose --profile e2e run --rm cypress
```

La primera corrida descarga `cypress/included:16.1.1`. El spec `cypress/e2e/test.cy.js` automatiza el smoke test y los recorridos de administrador, paciente y doctor. Las capturas de pruebas fallidas quedan en `cypress-results/` y esa carpeta no se versiona.

## Entregables de la práctica

1. [Informe y plan de pruebas](entregables/01-Plan-de-Pruebas-Doctor-Patient-Portal-Equipo.docx), con smoke test, alcance, riesgos, tareas, criterios y cronograma Scrum.
2. [Historias de usuario y casos de prueba](entregables/02-Historias-y-Casos-de-Prueba.xlsx), con matriz detallada y trazabilidad.
3. [Suite Cypress E2E](cypress/e2e/test.cy.js).
4. [Presentación y organización Scrum/Git](entregables/04-Exposicion-Organizacion-Git.pptx).

Las fuentes de documentación editables en Markdown están en [`docs/`](docs/). La distribución de tareas, estados iniciales y reuniones Scrum se encuentra en [`docs/05-TABLERO-SCRUM.md`](docs/05-TABLERO-SCRUM.md); es un plan y debe actualizarse según el trabajo que realmente se complete. Noemy Molina Garron facilita el equipo como Scrum Master. El plan sitúa el levantamiento Docker/MySQL el 12/10/2026, el trabajo y seguimientos del 14 al 18/10, y la presentación el 19/10. El caso de registro de administrador se marca como brecha porque esta aplicación solo tiene un administrador estático (`admin@gmail.com` / `admin`) y no implementa el alta de otras cuentas administrativas.

## Repositorio compartido del equipo

Entrega alojada bajo la cuenta personal de Noemy: [Lurey14/doctor-patient-portal-sqa-cypress](https://github.com/Lurey14/doctor-patient-portal-sqa-cypress). El repositorio público permite consultar los archivos e Issues; para contribuir mediante push o Pull Request cada integrante debe usar su cuenta GitHub y tener los permisos correspondientes. La asignación de tareas figura por nombre completo; se necesitan los usernames para invitar a Wendy, Natalia y Alex como colaboradores con permiso de escritura.
