# Entregable 4: exposición y organización del equipo

## 1. Objetivo de la exposición

Presentar cómo el equipo organizó el trabajo de aseguramiento de calidad del **Doctor Patient Portal**: planificación de las pruebas, historias de usuario y casos, automatización E2E con Cypress, entorno reproducible con Docker y colaboración mediante Git/GitHub.

El equipo usa **Scrum ligero** para organizar el trabajo académico del 12 al 19 de octubre de 2026. Noemy Molina Garron es la Scrum Master. Scrum organiza el backlog, los seguimientos y las revisiones; Git y GitHub permiten compartir, revisar e integrar cambios.

## 2. Integrantes y responsabilidades

El rol de Scrum Master de Noemy fue confirmado por el equipo. Las demás responsabilidades son una distribución de trabajo para esta práctica; cada persona debe ajustar la descripción si sus tareas reales fueron distintas.

| Integrante | Responsabilidad propuesta | Ejemplos de tareas |
|---|---|---|
| Noemy Molina Garron | Scrum Master y apoyo técnico | Facilitar las reuniones, mantener visible el tablero, ayudar a resolver bloqueos y apoyar Docker/Cypress e integración de la suite. |
| Wendy Ramirez Veizaga | Calidad y flujos de administración | Revisar el plan de pruebas, smoke test y casos de acceso, especialistas y administración de doctores. |
| Natalia Romero Cuqui | Calidad y flujos de paciente | Revisar historias y casos de registro/inicio de sesión, solicitud y consulta de citas. |
| Alex Joshua Villegas Ibanez | Calidad y flujos de doctor y exposición | Revisar casos del doctor, apoyar la regresión y preparar la demostración del flujo Git/GitHub. |

**Función de Scrum Master:** facilitar el proceso, ayudar a retirar impedimentos y cuidar que reuniones y acuerdos sean útiles. No es una jefatura ni asigna unilateralmente el trabajo. En un equipo pequeño también puede contribuir con tareas técnicas.

### Reparto propuesto de tareas del 14 al 18 de octubre

El siguiente tablero convierte el reparto por áreas en tareas revisables. Las personas son responsables principales, no las únicas participantes; todo cambio se revisa entre pares. Los estados reflejan el plan al 14/10 y no afirman que las tareas posteriores ya se hayan realizado.

| ID | Tarea | Responsable principal | Fecha | Criterio para mover a Hecho | Estado inicial |
|---|---|---|---|---|---|
| SQA-01 | Facilitar planificación, mantener tablero y registrar bloqueos/acuerdos | Noemy Molina Garron (Scrum Master) | 14–18/10 | Backlog priorizado; cada sesión tiene avance, siguiente paso y bloqueos registrados | En curso |
| SQA-02 | Confirmar Docker, MySQL y guía de ejecución en VS Code | Noemy Molina Garron | 14/10 | `docker compose ps` muestra servicios activos y guía incluye comandos de inicio/parada | Entorno levantado 12/10; revisión pendiente |
| SQA-03 | Consolidar el plan de pruebas, alcance, smoke test, criterios y riesgos | Wendy Ramirez Veizaga | 14–15/10 | Plan coherente con la matriz HU/CP y el alcance real de la aplicación | En curso |
| SQA-04 | Revisar CP-01 a CP-07 y cobertura de administración | Wendy Ramirez Veizaga | 15–16/10 | Casos tienen precondiciones, datos, pasos numerados y resultado esperado; revisión cruzada de Alex | Pendiente |
| SQA-05 | Revisar historias/casos de paciente y trazabilidad de citas | Natalia Romero Cuqui | 14–16/10 | HU-07 a HU-13 enlazadas con CP-08 a CP-15 y spec; revisión cruzada de Wendy | En curso |
| SQA-06 | Revisar CP-17 a CP-21, flujos de doctor y evidencia de regresión | Alex Joshua Villegas Ibanez | 15–17/10 | Login, dashboard, atención, perfil, logout y accesos protegidos documentados con evidencia | Pendiente |
| SQA-07 | Integrar Cypress, revisar ejecución completa y capturar resultado del 18/10 | Noemy Molina Garron; revisión de Alex | 16–18/10 | Suite ejecutada en entorno de presentación; guardar conteos y fallos reales sin alterar el resultado | Pendiente |
| SQA-08 | Revisar Excel y preparar guion/demo de entregables y GitHub | Alex Joshua Villegas Ibanez; revisión de todo el equipo | 17–18/10 | Matriz legible; presentación ensayada; enlaces reales al repo/issues disponibles | Pendiente |
| SQA-09 | Revisión final de cuatro entregables y acuerdos para exposición | Todo el equipo; facilita Noemy | 18/10 | Lista de control completada; brechas y pendientes comunicados con honestidad | Pendiente |
| SQA-10 | Presentar el trabajo y explicar Scrum, cobertura y resultados | Todo el equipo | 19/10 | Cada integrante presenta su parte y responde preguntas sobre su área | Programado |

En GitHub se recomienda reflejar cada tarea como Issue con prefijo `SQA-` y usar estados **Backlog → Por hacer → En progreso → En revisión → Hecho** en un GitHub Project o, si no está disponible, en una tabla equivalente. Mientras no se conozcan los nombres de usuario de GitHub de las tres compañeras, los Issues deben nombrar a la persona responsable en el cuerpo, sin asignar una cuenta incorrecta.

## 3. Cómo aplicar Scrum al trabajo

### Product Backlog

La lista priorizada de trabajo se deriva del alcance de la práctica y de la matriz de historias/casos (`docs/02-HISTORIAS-Y-CASOS.md`). Ejemplos de elementos:

- Levantar y comprobar la aplicación y MySQL con Docker.
- Documentar el plan, los riesgos y el smoke test.
- Cubrir con casos las funciones de visitante, administrador, paciente y doctor.
- Automatizar con Cypress los flujos implementados y relacionar cada prueba con su caso.
- Registrar las brechas funcionales observadas; por ejemplo, el alta de otro administrador no está implementada.
- Preparar evidencia y guion de exposición.

### Iteración y cronograma de trabajo

Se plantea una iteración corta desde el levantamiento del entorno hasta la presentación. Solo el levantamiento del 12 de octubre está registrado como realizado; las demás actividades son el cronograma de trabajo acordado para avanzar del 14 al 19.

| Fecha | Reunión o actividad | Propósito y resultado |
|---|---|---|
| Lun 12/10 | Preparación del entorno | Docker inicia la aplicación y MySQL. Realizado según el equipo. |
| Mié 14/10 | Planificación y refinamiento | Acordar alcance, roles, backlog, criterios y entregables; comenzar su consolidación. |
| Jue 15/10 | Seguimiento y revisión de casos | Revisar pasos, precondiciones, datos y criterios; registrar bloqueos. |
| Vie 16/10 | Seguimiento e integración Cypress | Relacionar casos con el spec y revisar flujos de los tres roles autenticados. |
| Sáb 17/10 | Revisión de documentación | Consolidar Word, Excel, riesgos, evidencias y trazabilidad. |
| Dom 18/10 | Revisión final y ensayo | Revisar la presentación y practicar el orden de demostración. |
| Lun 19/10 | Exposición | Presentar entorno, cobertura, evidencia y organización Scrum/Git. |

### Reuniones y ceremonias planificadas

- **Planificación (14/10):** acordar el objetivo de la iteración, priorizar tareas y confirmar quién trabajará en cada una.
- **Seguimientos (15–18/10):** reunión breve de 10–15 minutos al inicio de cada sesión; compartir avance, siguiente tarea y bloqueos.
- **Revisión (18/10):** mostrar el estado de los entregables y recoger ajustes antes de la exposición.
- **Retrospectiva (18/10):** anotar qué conviene mantener o mejorar en la coordinación y en la revisión del código.

El levantamiento de Docker/MySQL del 12/10 es el avance confirmado. La planificación del 14/10 y las reuniones posteriores aparecen como agenda propuesta para el trabajo que se realizará del 14 al 18; registrar acuerdos y asistencia cuando ocurran.

## 4. Tablero de trabajo

En GitHub Projects (o en un tablero equivalente) usar estas columnas:

```text
Backlog → Por hacer → En progreso → En revisión → Hecho
```

Cada tarea debe tener una descripción breve, responsable o colaboradores, prioridad y vínculo a una HU/CP cuando corresponda. Una prueba solo pasa a **Hecho** cuando el cambio está revisado, integrado y la verificación correspondiente tiene un resultado registrado.

Etiquetas sugeridas: `documentacion`, `cypress`, `docker`, `admin`, `paciente`, `doctor`, `HU`, `CP`, `bloqueado`.

## 5. Organización de Git y GitHub

**Git** es el sistema de control de versiones que registra cambios y ramas en el proyecto. **GitHub** es un servicio web donde se aloja un repositorio Git y se colaboran mediante Issues, Projects y Pull Requests. Una organización de GitHub es un espacio compartido para varios repositorios y miembros; no es lo mismo que tener un repositorio personal.

Para esta práctica, el equipo trabajará en un repositorio compartido bajo la cuenta personal de Noemy. No es una organización de GitHub. Al configurarlo como público, los cuatro pueden consultar el contenido sin invitación; solo las cuentas con permiso pueden escribir o revisar Pull Requests. El código fuente original pertenece al repositorio indicado por el curso; el repositorio de entrega se identifica como copia de trabajo académico y no reemplaza ni modifica el original.

### Ramas y revisión

```text
main
 ├─ docs/plan-pruebas
 ├─ docs/historias-casos
 ├─ test/cypress-admin
 ├─ test/cypress-paciente
 ├─ test/cypress-doctor
 └─ docs/exposicion-scrum-git
       └─ Pull Request → revisión de otra persona → integración a main
```

1. `main` contiene la versión integrada que el equipo considera presentable.
2. Crear ramas pequeñas desde `main`, una por tarea o conjunto relacionado de cambios.
3. Usar commits descriptivos, por ejemplo: `docs: documentar riesgos y smoke test` o `test: automatizar solicitud de cita`.
4. Abrir un Pull Request que explique el cambio y vincule la HU/CP o tarea del tablero.
5. Pedir revisión a otra integrante; comprobar que los documentos sean coherentes y que la prueba correspondiente se ejecute antes de integrar.
6. No subir contraseñas personales, `.env`, datos reales de pacientes, `node_modules`, `target` ni resultados temporales.

### Ejemplos de comandos

```powershell
git status
git switch main
git pull
git switch -c test/cypress-paciente
# editar y guardar los archivos de la tarea
git add cypress/e2e/test.cy.js docs/02-HISTORIAS-Y-CASOS.md
git commit -m "test: automatizar flujo de citas de paciente"
git push -u origin test/cypress-paciente
```

Después del `push`, se abre el Pull Request en GitHub y se solicita revisión. Estos comandos son una guía; solo se deben mostrar como ejecutados si efectivamente se usaron en el repositorio remoto del grupo.

## 6. Guion oral sugerido

> “Somos cuatro integrantes y organizamos la práctica con Scrum ligero. El Product Backlog reúne el entorno, el plan de pruebas, las historias y casos, la automatización y la exposición. Para cada sprint acordamos un objetivo y revisamos el avance. La persona que facilita como Scrum Master ayuda a coordinar y resolver bloqueos, mientras todo el equipo contribuye al producto. En Git trabajamos con ramas pequeñas y Pull Requests para que otra integrante revise los cambios antes de integrarlos. Cypress automatiza los flujos implementados del portal. También registramos las funciones que no existen, como el registro de un segundo administrador, para no reportarlas como aprobadas.”

Si el equipo no realizó sprints formales, reemplazar “organizamos” por “proponemos organizar” y explicar qué actividades sí se hicieron.

## 7. Orden de demostración

1. Mostrar el objetivo, los cuatro integrantes y a Noemy como Scrum Master.
2. Mostrar el plan de pruebas y el smoke test en `docs/01-PLAN-DE-PRUEBAS.md`.
3. Mostrar las historias/casos y su relación con Cypress en `docs/02-HISTORIAS-Y-CASOS.md`.
4. Levantar el entorno con `docker compose up --build -d` y abrir la aplicación.
5. Abrir Cypress desde la terminal de VS Code con `npm run cy:open`; elegir E2E Testing, el navegador y `cypress/e2e/test.cy.js`.
6. Mostrar el resumen real de ejecución, incluyendo aprobados/fallidos, y no ocultar fallos.
7. Mostrar el tablero, una rama y un Pull Request de GitHub solo si el equipo ya los creó. Si todavía no existe repositorio grupal, presentar el flujo como propuesta de organización.

## 8. Estado real que debe revisarse antes de entregar

- Confirmar que el reparto técnico por rol refleja las tareas que cada persona realizó realmente.
- Confirmar si trabajarán desde un repositorio personal compartido o una organización de GitHub y registrar el enlace correcto.
- Añadir enlaces o capturas reales del tablero, ramas, commits y Pull Requests; no inventar actividad.
- Ejecutar Cypress en el entorno que se presentará y guardar el resultado observado.

