# Tablero Scrum del equipo

## Objetivo de la iteración

Completar y revisar los cuatro entregables de aseguramiento de calidad del Doctor Patient Portal para presentarlos el 19 de octubre de 2026. El entorno Docker/MySQL se levantó el 12/10 según lo informado por el equipo. El trabajo del 14 al 18/10 y sus reuniones se muestran como plan propuesto; actualicen estado y acuerdos conforme ocurran.

## Integrantes

| Integrante | Rol y área de responsabilidad |
|---|---|
| Noemy Molina Garron | Scrum Master; facilita reuniones y acuerdos, mantiene visible el tablero, apoya entorno Docker/Cypress e integración. |
| Wendy Ramirez Veizaga | Plan de pruebas, smoke test y revisión de flujos administrativos. |
| Natalia Romero Cuqui | Historias, casos y trazabilidad de registro, acceso y citas de pacientes. |
| Alex Joshua Villegas Ibanez | Historias/casos del doctor, revisión de regresión y preparación de demostración. |

El reparto técnico es una propuesta para organizar el trabajo. Se puede ajustar por acuerdo del equipo, y no debe interpretarse como registro de tareas ya terminadas.

## Backlog de la iteración

| ID | Tarea | Responsable principal | Revisión | Prioridad | Fecha objetivo | Estado al 14/10 | Criterio de aceptación |
|---|---|---|---|---|---|---|---|
| SQA-01 | Facilitar planificación y seguimiento; mantener bloqueos y acuerdos visibles | Noemy | Todo el equipo | Alta | 14–18/10 | En curso | Se registra objetivo, avance, siguiente paso y bloqueos de cada sesión realizada. |
| SQA-02 | Confirmar entorno Docker/MySQL y documentar ejecución desde VS Code | Noemy | Wendy | Alta | 14/10 | Entorno levantado 12/10; revisar guía | Los pasos de inicio, comprobación, Cypress y apagado están documentados. |
| SQA-03 | Consolidar plan, alcance, estrategia, riesgos y smoke test | Wendy | Natalia | Alta | 15/10 | En curso | El plan define entrada/salida, CP-01 como smoke y distingue brechas de resultados. |
| SQA-04 | Revisar casos CP-01–CP-07 de portada y administración | Wendy | Alex | Alta | 16/10 | Pendiente | Cada caso tiene precondición, datos, pasos, resultado esperado y trazabilidad. |
| SQA-05 | Revisar HU-07–HU-13 y CP-08–CP-15 de paciente/citas | Natalia | Wendy | Alta | 16/10 | En curso | Historias, criterios y casos concuerdan con las páginas y el spec Cypress. |
| SQA-06 | Revisar CP-17–CP-21 de doctor y protección de sesión | Alex | Noemy | Alta | 17/10 | Pendiente | Quedan descritos login, dashboard, atención, perfil, contraseña y logout. |
| SQA-07 | Integrar/revisar suite E2E y anotar resultado de ejecución actual | Noemy | Alex | Alta | 18/10 | Pendiente | `npm run cy:run` se ejecuta en el entorno de presentación; se registra resultado observado. |
| SQA-08 | Verificar la matriz Excel, enlaces y datos de prueba sintéticos | Natalia | Wendy | Media | 17/10 | En curso | Excel se entiende, los IDs enlazan con Cypress y se usan datos `example.test`. |
| SQA-09 | Preparar guion, evidencia GitHub y ensayo de exposición | Alex | Todo el equipo | Alta | 18/10 | Pendiente | El guion muestra solo Issues/PRs y ejecuciones que existan realmente. |
| SQA-10 | Revisar los cuatro entregables y presentar el trabajo | Todo el equipo; facilita Noemy | Todo el equipo | Alta | 19/10 | Programado | Plan, Excel, spec y exposición están sincronizados y cada integrante conoce su parte. |

## Ceremonias previstas

| Fecha | Ceremonia | Duración sugerida | Pregunta/resultado |
|---|---|---:|---|
| 14/10 | Planificación y refinamiento | 30 min | Acordar meta, prioridades, responsables, criterios y riesgos. |
| 15–17/10 | Seguimiento breve | 10–15 min por sesión | Qué avancé, qué sigue y qué impedimento necesito resolver. |
| 18/10 | Revisión y retrospectiva | 30 min | Revisar entregables/evidencia; acordar una mejora para exposición. |
| 18/10 | Ensayo | 20–30 min | Practicar orden, comandos y responsables de cada sección. |
| 19/10 | Presentación | Según docente | Exponer entregables y responder preguntas con resultados verificables. |

Registrar asistencia y acuerdos una vez que cada reunión ocurra. No completar retrospectivas con resultados inventados.

## Definición de Hecho

Una tarea pasa a **Hecho** cuando el artefacto está guardado en la rama/repositorio acordado, cumple el criterio de aceptación, fue revisado por otra integrante y tiene evidencia reproducible. Si no se ejecutó, se deja como pendiente o bloqueada; no se inventan resultados.

## Flujo de GitHub

El [tablero Scrum público](https://github.com/users/Lurey14/projects/1/views/1) contiene los Issues `SQA-01` a `SQA-10`. Mover las tareas por `Backlog → Por hacer → En progreso → En revisión → Hecho` conforme ocurra el trabajo. Crear ramas breves (`docs/plan-pruebas`, `test/cypress-paciente`), commits descriptivos y Pull Requests revisados por otra persona. El [repositorio](https://github.com/Lurey14/doctor-patient-portal-sqa-cypress) es público para que el equipo consulte archivos e Issues. Sin los usernames de GitHub de Wendy, Natalia y Alex no se asigna ni invita ninguna cuenta; la responsabilidad queda escrita por nombre completo.

## División de la exposición

1. **Noemy:** objetivo, Scrum ligero, tablero y entorno Docker/MySQL.
2. **Wendy:** plan de pruebas, smoke test, alcance y riesgos.
3. **Natalia:** historias, criterios y casos de paciente/citas.
4. **Alex:** flujos del doctor, Cypress, resultados registrados y organización GitHub.
5. **Todos:** preguntas, limitaciones conocidas y cierre.
