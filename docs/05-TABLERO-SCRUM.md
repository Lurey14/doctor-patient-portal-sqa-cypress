# Tablero Scrum del equipo

## Objetivo de la iteración

Organizar la entrega de aseguramiento de calidad del Doctor Patient Portal para la exposición del 19 de octubre de 2026. El entorno Docker/MySQL se levantó el 12/10, según lo informado por el equipo. El Product Backlog comprende ambiente, plan de pruebas, historias y casos, Cypress, documentación y presentación.

## Integrantes

| Integrante | Rol y responsabilidad |
|---|---|
| Noemy Molina Garron | Scrum Master; facilita coordinación, actualiza el tablero y apoya entorno e integración. |
| Wendy Ramirez Veizaga | Plan de pruebas, smoke test y flujos de administración. |
| Natalia Romero Cuqui | Historias, casos y trazabilidad de paciente y citas. |
| Alex Joshua Villegas Ibanez | Flujos del doctor, regresión y exposición. |

## Tareas, revisores y criterios

| ID | Tarea | Responsable | Revisión | Prioridad | Fecha / hito | Criterio de aceptación |
|---|---|---|---|---|---|---|
| SQA-01 | Facilitar planificación y seguimiento; mantener el tablero visible | Noemy | Todo el equipo | Alta | 14–18/10 | Backlog con diez tareas, responsables, revisores y criterios enlazados a Issues. |
| SQA-02 | Levantar entorno Docker/MySQL y documentar ejecución desde VS Code | Noemy | Wendy | Alta | 12–14/10 | Entorno levantado el 12/10 según reporte del equipo; guía con pasos de inicio, comprobación, Cypress y detención. |
| SQA-03 | Consolidar plan, alcance, estrategia, riesgos y smoke test | Wendy | Natalia | Alta | 14–15/10 | Informe define alcance, CP-01 como smoke, criterios de entrada/salida y riesgos. |
| SQA-04 | Documentar CP-01–CP-07 y CP-22 de visitante y administración | Wendy | Alex | Alta | 15–16/10 | Casos con precondición, datos, pasos, resultado esperado e IDs trazables. |
| SQA-05 | Documentar HU-07–HU-13 y CP-08–CP-15 de paciente/citas | Natalia | Wendy | Alta | 14–16/10 | Historias, criterios de aceptación y casos concuerdan con páginas y spec. |
| SQA-06 | Documentar CP-17–CP-21 de doctor y protección de sesión | Alex | Noemy | Alta | 15–17/10 | Login, dashboard, atención, perfil, contraseña y logout descritos con expectativas. |
| SQA-07 | Integrar suite E2E y evidencia de ejecución | Noemy | Alex | Alta | 14–18/10 | Spec automatiza CP-01–CP-22; ejecución local registrada 14/10: 22 passing, 0 failing, 0 pending. |
| SQA-08 | Revisar matriz, trazabilidad y datos de prueba | Natalia | Wendy | Media | 17/10 | Excel relaciona 20 HU y 23 CP; usa datos sintéticos `example.test`. |
| SQA-09 | Organizar guion, evidencia GitHub y orden de exposición | Alex | Todo el equipo | Alta | 18/10 | Guion oral, responsabilidades y enlaces del repo/Issues/tablero incluidos. |
| SQA-10 | Integrar los cuatro entregables para la exposición | Todo el equipo; facilita Noemy | Todo el equipo | Alta | 19/10 | Word, Excel, spec Cypress y PowerPoint sincronizados en el repositorio público. |

## Ceremonias y cadencia

| Fecha | Ceremonia | Duración | Enfoque |
|---|---|---:|---|
| 14/10 | Planificación y refinamiento | 30 min | Meta, prioridades, responsables, criterios y riesgos. |
| 15–17/10 | Seguimiento breve | 10–15 min | Avance integrado, actividad actual y bloqueos. |
| 18/10 | Revisión y retrospectiva | 30 min | Coherencia de entregables, evidencia y aprendizajes del trabajo en equipo. |
| 18/10 | Preparación de exposición | 20–30 min | Orden, comandos y responsabilidades de presentación. |
| 19/10 | Presentación | Según la asignatura | Explicar entregables y resultados con evidencia. |

## Flujo de GitHub

El [repositorio público](https://github.com/Lurey14/doctor-patient-portal-sqa-cypress) y el [tablero Scrum](https://github.com/users/Lurey14/projects/1/views/1) reúnen la entrega y sus diez Issues. El flujo visual del tablero es **Backlog → Por hacer → En progreso → En revisión → Hecho**. Los cambios se organizan en ramas cortas, commits descriptivos y Pull Requests revisados por otra integrante. Para subir cambios, cada integrante usa su propia cuenta y recibe permiso de escritura como colaborador.

## División de la exposición

1. **Noemy:** objetivo, Scrum, tablero y entorno Docker/MySQL.
2. **Wendy:** plan, smoke test, alcance y riesgos.
3. **Natalia:** historias, criterios y casos de paciente/citas.
4. **Alex:** flujos del doctor, Cypress, resultados registrados y GitHub.
5. **Todo el equipo:** cobertura, brechas conocidas y preguntas.
