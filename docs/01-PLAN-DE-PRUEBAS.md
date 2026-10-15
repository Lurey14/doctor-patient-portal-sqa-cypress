# Plan e informe de pruebas funcionales — Doctor Patient Portal

**Equipo:** Noemy Molina Garron, Wendy Ramirez Veizaga, Natalia Romero Cuqui y Alex Joshua Villegas Ibanez.  
**Scrum Master:** Noemy Molina Garron.  
**Periodo de trabajo:** 12–19 de octubre de 2026.  
**Presentación:** 19 de octubre de 2026.  
**Automatización:** Cypress 16.1.1, `cypress/e2e/test.cy.js`.

## 1. Resumen ejecutivo

Este documento establece el alcance y la ejecución de las pruebas funcionales E2E del portal. El ambiente local utiliza Docker Compose para iniciar la aplicación Java/Tomcat y MySQL; Cypress se abre desde la terminal integrada de VS Code con `npm run cy:open`.

La matriz contiene **20 historias de usuario y 23 casos de prueba**. CP-01 a CP-22 corresponden a pruebas automatizadas; CP-23 registra el alta de otro administrador como brecha porque esta versión no implementa esa función. La evidencia conservada del 14 de octubre de 2026 reporta **22 passing, 0 failing y 0 pending**. Este resultado describe esa ejecución y no sustituye el resultado de una ejecución posterior.

## 2. Identificación y objetivo

| Campo | Detalle |
|---|---|
| Producto | Doctor Patient Portal — Advance Java WebProject |
| Propósito | Evaluar los recorridos funcionales disponibles para visitante, administrador, paciente y doctor. |
| Tipo de pruebas | Smoke test y pruebas funcionales end-to-end. |
| Herramienta | Cypress 16.1.1; ejecución interactiva en VS Code y modo terminal con Electron. |
| Ambiente | Aplicación y base MySQL en Docker Compose; datos de prueba ficticios. |
| Base documental | Historias y casos en `docs/02-HISTORIAS-Y-CASOS.md` y en el Excel de entrega. |

El objetivo es comprobar resultados visibles y navegaciones de los flujos implementados, mantener trazabilidad entre historias, casos y automatización, e informar claramente las funciones ausentes o limitaciones encontradas.

## 3. Alcance de las pruebas

### Incluido

- Portada pública, contenido, carrusel y accesos principales.
- Administración: acceso válido e inválido, panel, contadores, creación de especialidad, altas/listados/edición/eliminación de doctores, consulta global de pacientes/citas y cierre de sesión.
- Paciente: registro, acceso válido e inválido, solicitud y consulta de citas, cambio de contraseña, cierre de sesión y protección de rutas privadas.
- Doctor: acceso válido e inválido, panel, consulta de pacientes/citas, comentario o prescripción, edición de perfil, cambio de contraseña y protección de rutas privadas.
- Verificación de mensajes, navegación, datos visibles y efectos principales en la base de práctica.

### Fuera del alcance o no disponible

- Registro de otra cuenta de administrador: no existe formulario ni endpoint en esta versión; CP-23 documenta la brecha sin intentar una operación inexistente.
- Edición o eliminación de especialidades y recuperación de contraseña: funciones no disponibles.
- Pruebas exhaustivas de límites y combinaciones de campos, seguridad, accesibilidad, rendimiento, carga, concurrencia, compatibilidad de todos los navegadores o idoneidad clínica.

Los fragmentos compartidos de navegación, pie de página y estilos se ejercitan indirectamente en las páginas que los incluyen. No se consideran páginas de negocio independientes.

## 4. Estrategia y tipos de prueba

### Smoke test

CP-01 es la verificación rápida de disponibilidad: abre la portada, comprueba los cuatro accesos principales, el contenido destacado y las cuatro diapositivas configuradas. Se ejecuta antes de confiar en recorridos más extensos.

### Pruebas funcionales E2E

CP-02 a CP-22 recorren las operaciones y errores principales de los cuatro roles. La suite utiliza nombres/emails únicos por ejecución y aserciones sobre pantallas, mensajes, tablas y redirecciones. La numeración CP coincide con los títulos de `it()` en Cypress y con las filas del Excel.

### Datos y efectos

- Los registros creados por la automatización son ficticios; los correos usan el dominio reservado `example.test`.
- CP-22 elimina al doctor sintético creado durante la ejecución. La clave foránea elimina también sus citas asociadas.
- El paciente y la especialidad sintéticos permanecen en el volumen MySQL. No usar datos reales ni borrar el volumen si se necesitan conservar los datos locales.
- Las pruebas deben ejecutarse solo contra el ambiente de práctica.

### Priorización

P0 identifica el smoke test. P1 agrupa acceso, solicitud/atención de citas y control de sesiones. P2 cubre operaciones de administración y perfil. P3 señala una brecha que no puede automatizarse hasta que el producto implemente la función.

## 5. Historias y casos relacionados

La hoja **Historias de usuario** contiene HU-01 a HU-20. La hoja **Casos de prueba** contiene CP-01 a CP-23 con prioridad, tipo, precondiciones, datos, pasos, resultado esperado, resultado observado, estado y referencia al spec Cypress. La hoja **Trazabilidad** enlaza cada historia con sus casos.

La cobertura automatizada incluye 22 casos. El caso CP-23 permanece identificado como no automatizable en esta versión y no se cuenta como aprobado. El detalle paso a paso está en el Excel para que cada integrante pueda repetirlo sin depender del guion oral.

## 6. Ambiente y ejecución

| Componente | Configuración verificada en el proyecto |
|---|---|
| Aplicación | Java 17, Maven y Tomcat 9, dentro de Docker; URL local `http://localhost:8080`. |
| Base de datos | MySQL 8.0.28 en Docker Compose; base `hospital`, volumen persistente `hospital_data`. |
| Cuenta de aplicación de MySQL | Usuario `hospital_app`; la clave se configura por variable de entorno. |
| Cypress | Versión 16.1.1 como dependencia local del proyecto. |
| E2E local | `npm run cy:open` abre Test Runner; `npm run cy:run` ejecuta Electron en terminal. |
| Spec | `cypress/e2e/test.cy.js`. |

Desde la raíz del proyecto, en la terminal PowerShell de VS Code:

```powershell
docker compose up --build -d
docker compose ps
npm run cy:open
```

En Cypress se selecciona **E2E Testing**, un navegador y `cypress/e2e/test.cy.js`. Para ejecutar sin la interfaz:

```powershell
npm run cy:run
```

Docker Desktop debe estar iniciado y el servicio `db` debe aparecer `healthy`; el portal debe responder en el puerto 8080. La guía completa está en `docs/03-GUIA-VS-CODE.md`. `docker compose stop` conserva la base; `docker compose down -v` elimina el volumen.

El login web administrativo de esta versión usa `admin@gmail.com` / `admin`. Es distinto de la cuenta MySQL y de la referencia `root/root` escrita en la pizarra. El archivo `.env` no se versiona.

## 7. Criterios de entrada y salida

### Entrada

- Docker Desktop está iniciado.
- La terminal está ubicada en la carpeta con `docker-compose.yml` y `package.json`.
- `docker compose up --build -d` termina sin error; `db` está saludable y `app` se encuentra ejecutándose.
- El sitio carga en `http://localhost:8080` y Cypress local está preparado.
- Se usan exclusivamente datos ficticios.

### Salida

- Se registra el resultado de cada caso como aprobado, fallido, bloqueado o no ejecutable, junto con fecha y versión cuando se ejecuta.
- Se adjunta salida del Test Runner o capturas/logs si existen fallos.
- No se marca como aprobado un caso cuya función no existe.
- Word, Excel, Cypress y presentación usan los mismos identificadores y números de casos.

## 8. Evidencia disponible

La ejecución local de Cypress 16.1.1 registrada el **14/10/2026** terminó con **22 passing, 0 failing y 0 pending**; no produjo capturas por fallo. CP-23 se conserva como brecha no automatizable. El resultado corresponde a la ejecución indicada, no constituye una certificación de seguridad ni una recomendación clínica.

## 9. Riesgos y respuesta

| Riesgo | Impacto | Respuesta |
|---|---|---|
| Docker apagado o sin recursos | La app o MySQL no están disponibles para Cypress. | Revisar `docker compose ps` y `docker compose logs app db` antes de iniciar la suite. |
| Base con registros de una ejecución anterior | Datos duplicados o resultados ambiguos. | Usar nombres/emails únicos; revisar que el spec cree los datos antes de consultarlos. |
| Datos sintéticos persistentes | El volumen puede conservar pacientes y especialidades de prueba. | No usar datos reales; informar qué limpia CP-22 y qué registros permanecen. |
| Recursos de estilo externos no disponibles | La presentación puede verse distinta aunque las funciones respondan. | Priorizar aserciones funcionales y no depender de contenido externo para el resultado de negocio. |
| Administrador fijo y contraseñas sin hash | Exposición de credenciales si el sistema se publica fuera de la práctica. | Mantener el ambiente local; no usar contraseñas reales ni desplegar el portal públicamente. |
| Flujo solicitado ausente | Imposibilidad de automatizar alta de administrador, mantenimiento de especialidades o recuperación de clave. | Registrar la brecha; no simular un resultado exitoso. |
| Cambios simultáneos en el mismo archivo | Conflictos y pérdida de trabajo. | Dividir tareas, crear ramas pequeñas y revisar mediante Pull Request. |

## 10. Organización Scrum y equipo

El equipo trabajará con una iteración corta hasta la exposición. Noemy Molina Garron es la **Scrum Master**: facilita planificación y seguimiento, mantiene visible el tablero y ayuda a quitar bloqueos. Este rol no convierte a una persona en jefa; las decisiones de trabajo y la construcción de los entregables siguen siendo colaborativas.

| Integrante | Responsabilidad principal de la iteración |
|---|---|
| Noemy Molina Garron | Scrum Master; coordinar reuniones y tablero, apoyar Docker/Cypress e integrar cambios. |
| Wendy Ramirez Veizaga | Plan de pruebas, smoke test y cobertura administrativa. |
| Natalia Romero Cuqui | Historias y casos de paciente, registro y citas. |
| Alex Joshua Villegas Ibanez | Flujos de doctor, revisión de resultados y apoyo a la exposición/Git. |

El reparto es una base de coordinación; se ajusta por acuerdo del grupo y cada integrante revisa el trabajo relacionado. Para esta práctica, el docente puede representar al cliente académico que valida el alcance y los criterios de aceptación, si así lo acuerda la materia.

### Reuniones y cronograma del 12 al 19 de octubre

| Fecha | Reunión o actividad | Resultado esperado | Estado del plan |
|---|---|---|---|
| Lun 12/10 | Inicio y preparación del entorno | Aplicación y MySQL levantados con Docker Compose. | Realizado según la información del equipo. |
| Mié 14/10 | Planificación y refinamiento del backlog | Acordar alcance, responsables, historias/casos y entregables; comenzar su consolidación. | Trabajo iniciado hoy. |
| Jue 15/10 | Seguimiento breve y revisión de casos | Revisar precondiciones, datos y pasos; anotar bloqueos. | Planificado. |
| Vie 16/10 | Seguimiento e integración de Cypress | Revisar cobertura de administración, paciente y doctor; verificar vínculos CP/spec. | Planificado. |
| Sáb 17/10 | Revisión del informe y matriz | Consolidar riesgos, resultados disponibles, trazabilidad y estado de cobertura. | Planificado. |
| Dom 18/10 | Revisión final y ensayo | Revisar Word, Excel, spec y diapositivas; practicar demostración y registrar pendientes. | Planificado. |
| Lun 19/10 | Exposición | Presentar el entorno, los entregables, la evidencia y la organización Scrum/Git. | Fecha de presentación indicada por el equipo. |

Durante el trabajo del **14 al 18 de octubre** se propone un seguimiento diario de 10–15 minutos: qué avancé, qué haré y qué bloqueo tengo. El equipo puede registrar acuerdos breves en su canal o tablero. Las actividades marcadas como planificadas no se deben presentar como reuniones ya realizadas.

### Tablero y trabajo con Git/GitHub

Tablero sugerido: **Backlog → Por hacer → En progreso → En revisión → Hecho**. Cada tarjeta contiene una tarea concreta, responsable o colaboradores, prioridad y HU/CP relacionada. Una tarea pasa a “Hecho” cuando su cambio se revisó y el resultado queda anotado.

Git registra versiones y ramas en el proyecto local. GitHub aloja el repositorio remoto y permite colaborar mediante Issues, Projects y Pull Requests. La práctica puede alojarse en una cuenta acordada o en una organización creada por el grupo; no afirmar que la organización, ramas o PR ya existen hasta comprobarlo en GitHub. El repositorio original del curso debe permanecer sin cambios.

Flujo sugerido: crear una rama desde `main`, realizar commits pequeños, publicar la rama, abrir Pull Request, obtener revisión de otra integrante e integrar a `main`. Ejemplos: `docs/plan-pruebas`, `test/cypress-paciente`, `test/cypress-doctor`. No subir `.env`, claves personales, `node_modules`, `target` ni datos reales.

## 11. Reporte de incidencias

Cuando una aserción falle, registrar: identificador CP, fecha y versión, navegador, precondiciones, pasos que reproducen el fallo, resultado esperado, resultado observado, mensaje/captura y severidad acordada. Primero comprobar si el ambiente está disponible; si el defecto se reproduce, mantenerlo como fallido y vincularlo a la HU. No modificar expectativas para ocultar un defecto.

## 12. Limitaciones y conclusión

El conjunto prioriza recorridos funcionales E2E y un smoke test. No cubre todos los límites de entrada, ni pruebas especializadas de seguridad, rendimiento o accesibilidad. La aplicación no implementa alta de administradores, edición/eliminación de especialidades o recuperación de contraseña; el registro de paciente no declara todos los campos como `required`. Estas observaciones deben acompañar cualquier interpretación del resultado.

La evidencia disponible muestra que los 22 escenarios automatizados pasaron en la ejecución local del 14 de octubre. La matriz de Excel permite repetirlos y relacionarlos con las historias. El caso de alta de un segundo administrador se mantiene como brecha hasta que el producto incorpore esa función.
