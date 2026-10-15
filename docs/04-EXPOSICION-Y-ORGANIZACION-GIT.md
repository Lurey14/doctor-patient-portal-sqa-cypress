# Entregable 4 Exposición y organización Scrum y Git

## Propósito

Esta guía organiza la exposición de la práctica de pruebas funcionales del **Doctor Patient Portal** y explica cómo el equipo distribuye el trabajo con Scrum ligero y GitHub. El conjunto de entregables integra el plan de pruebas, las historias y casos, la automatización Cypress y la presentación.

## Equipo y responsabilidades

| Integrante | Rol | Responsabilidad del proyecto |
|---|---|---|
| Noemy Molina Garron | Scrum Master | Facilitar la planificación y el seguimiento, mantener el tablero actualizado y apoyar el entorno Docker/Cypress y la integración. |
| Wendy Ramirez Veizaga | Calidad | Plan de pruebas, smoke test y flujos de administración. |
| Natalia Romero Cuqui | Calidad | Historias, casos y trazabilidad de paciente, registro y citas. |
| Alex Joshua Villegas Ibanez | Calidad | Flujos de doctor, revisión de regresión y preparación de la exposición. |

Scrum Master facilita el proceso y ayuda a resolver impedimentos; no representa una jefatura. Las responsabilidades se complementan con revisión cruzada y acuerdos del equipo.

## Tareas del equipo

| ID | Tarea | Responsable | Revisión | Fecha / hito | Entregable relacionado |
|---|---|---|---|---|---|
| SQA-01 | Facilitar planificación y seguimiento; organizar los Issues | Noemy | Todo el equipo | 14–18/10 | Tablero público con diez Issues y responsables. |
| SQA-02 | Levantar y documentar Docker/MySQL y el uso desde VS Code | Noemy | Wendy | 12–14/10 | Entorno reportado por el equipo y guía `docs/03-GUIA-VS-CODE.md`. |
| SQA-03 | Consolidar plan, smoke test, criterios y riesgos | Wendy | Natalia | 14–15/10 | Informe Word y `docs/01-PLAN-DE-PRUEBAS.md`. |
| SQA-04 | Documentar casos de visitante y administración CP-01–CP-07 y CP-22 | Wendy | Alex | 15–16/10 | Matriz Excel y spec Cypress. |
| SQA-05 | Documentar HU-07–HU-13 y CP-08–CP-15 de paciente/citas | Natalia | Wendy | 14–16/10 | Historias, casos y trazabilidad de la matriz. |
| SQA-06 | Documentar CP-17–CP-21 de doctor y protección de sesión | Alex | Noemy | 15–17/10 | Matriz Excel y spec Cypress. |
| SQA-07 | Integrar la suite E2E y la evidencia de ejecución | Noemy | Alex | 14–18/10 | `cypress/e2e/test.cy.js`; resultado local registrado 14/10: 22 passing, 0 failing, 0 pending. |
| SQA-08 | Revisar matriz, identificadores y datos sintéticos | Natalia | Wendy | 17/10 | Excel con 20 HU, 23 CP y trazabilidad. |
| SQA-09 | Organizar guion, evidencia GitHub y orden de exposición | Alex | Todo el equipo | 18/10 | Presentación PowerPoint y esta guía. |
| SQA-10 | Integrar los cuatro entregables para la exposición | Todo el equipo | Noemy facilita | 19/10 | Word, Excel, Cypress y PowerPoint publicados en GitHub. |

## Scrum y cronograma

La iteración utiliza Product Backlog, planificación, reuniones breves de seguimiento, revisión y retrospectiva. El equipo toma como punto de inicio el levantamiento de Docker/MySQL del 12/10/2026 reportado por sus integrantes; el trabajo documental y de automatización se organiza del 14 al 18/10 y la exposición corresponde al 19/10.

| Fecha | Actividad de coordinación | Enfoque |
|---|---|---|
| 12/10 | Preparación del entorno | Aplicación y MySQL en Docker Compose. |
| 14/10 | Planificación y refinamiento | Alcance, roles, prioridades, historias, casos y entregables. |
| 15/10 | Seguimiento y revisión de casos | Precondiciones, datos, pasos y resultados esperados. |
| 16/10 | Integración de Cypress | Relación entre CP y spec para los roles del portal. |
| 17/10 | Revisión documental | Coherencia entre plan, matriz, automatización y exposición. |
| 18/10 | Integración final | Evidencia, guion y orden de presentación. |
| 19/10 | Exposición | Presentación de entorno, cobertura, resultados y organización. |

La agenda de seguimiento se guía por tres preguntas: qué avance está integrado, qué actividad se trabaja y qué impedimento requiere apoyo. La revisión recorre los entregables y la retrospectiva resume aprendizajes sobre colaboración, revisión y automatización.

## Tablero y definición de terminado

El [tablero Scrum del equipo](https://github.com/users/Lurey14/projects/1/views/1) contiene diez tareas SQA vinculadas a los [Issues del repositorio](https://github.com/Lurey14/doctor-patient-portal-sqa-cypress/issues). El flujo visual del tablero es **Backlog → Por hacer → En progreso → En revisión → Hecho**. Una tarea cumple su definición de terminado cuando el artefacto relacionado está integrado, revisado y asociado a evidencia verificable.

## Organización de Git y GitHub

**Git** registra versiones, cambios y ramas. **GitHub** aloja el repositorio remoto y permite colaborar mediante Issues, Projects y Pull Requests. La práctica está en un repositorio público de la cuenta personal **Lurey14**; no es una organización. El repositorio original del curso permanece separado y sin cambios.

Repositorio: [Lurey14/doctor-patient-portal-sqa-cypress](https://github.com/Lurey14/doctor-patient-portal-sqa-cypress).

Ramas de trabajo definidas: `docs/plan-pruebas`, `docs/historias-casos`, `test/cypress-admin`, `test/cypress-paciente`, `test/cypress-doctor` y `docs/exposicion-scrum-git`. El flujo de contribución es rama breve, commits descriptivos, Pull Request, revisión por otra integrante e integración a `main`. Las credenciales de GitHub son individuales; los permisos de escritura se conceden invitando colaboradores con sus usuarios GitHub.

## Orden de exposición

1. Noemy presenta el objetivo, el rol Scrum Master, el tablero y el entorno Docker/MySQL.
2. Wendy presenta el alcance, el plan de pruebas, CP-01 como smoke test y los riesgos.
3. Natalia presenta las historias y los casos de registro, login y citas del paciente.
4. Alex presenta los flujos del doctor, la automatización Cypress y el flujo de colaboración GitHub.
5. El equipo presenta la cobertura, la evidencia y las limitaciones conocidas.

La evidencia de Cypress corresponde a la ejecución local registrada el **14/10/2026**: **22 passing, 0 failing y 0 pending**. En la exposición se identifica esa fecha junto al resultado. CP-23 registra una brecha funcional: la versión revisada no ofrece registro de otro administrador.

## Guion oral

> “Somos cuatro integrantes y organizamos la práctica con Scrum ligero. Noemy facilita la coordinación como Scrum Master. El trabajo cubre el entorno, el plan de pruebas, las historias y casos, la automatización y la exposición. La matriz enlaza 20 historias con 23 casos; Cypress automatiza los 22 casos que corresponden a funciones disponibles. En GitHub compartimos el repositorio, los Issues y el tablero. CP-23 documenta el alta de otro administrador como una función que la versión evaluada no ofrece.”
