# Historias de usuario y casos de prueba

**Sistema bajo prueba:** Doctor Patient Portal (versión incluida en este repositorio).  
**Automatización:** Cypress E2E en `cypress/e2e/test.cy.js`.  
**Trazabilidad:** cada `CP` de la tabla corresponde a un `it()` con el mismo identificador en Cypress.

La matriz de entrega en `entregables/02-Historias-y-Casos-de-Prueba.xlsx` amplía estos resúmenes con prioridad, tipo de prueba, precondiciones, pasos numerados, resultados, estado de ejecución y referencia a la automatización. La planificación de reuniones del equipo se desarrolla en `docs/04-EXPOSICION-Y-ORGANIZACION-GIT.md`.

## Historias de usuario

| HU | Historia | Criterio de aceptación |
|---|---|---|
| HU-01 | Como visitante, quiero recorrer la portada y sus accesos para conocer el portal y elegir una función. | Portada, contenido principal, carrusel y navegación cargan. |
| HU-02 | Como administrador, quiero autenticarme para gestionar el portal. | Credenciales correctas abren el panel; las incorrectas se rechazan. |
| HU-03 | Como administrador, quiero consultar los contadores del dashboard. | Se muestran conteos de doctores, usuarios, citas y especialidades. |
| HU-04 | Como administrador, quiero registrar especialidades para clasificarlas al crear doctores. | La especialidad se crea y aparece como opción de doctor. |
| HU-05 | Como administrador, quiero registrar, listar, editar y eliminar doctores. | Los cambios se reflejan en el listado y el doctor nuevo puede usarse en los flujos. |
| HU-06 | Como administrador, quiero cerrar sesión para proteger el panel. | La sesión termina y el dashboard redirige al login. |
| HU-07 | Como paciente, quiero crear una cuenta para usar el portal. | El sistema registra una cuenta con nombre, email y contraseña. |
| HU-08 | Como paciente, quiero iniciar sesión con mi cuenta. | El acceso válido muestra la cuenta; las credenciales inválidas se rechazan. |
| HU-09 | Como visitante, quiero conocer cómo acceder al solicitar una cita. | Sin sesión se presenta el acceso al login en vez de enviar una cita. |
| HU-10 | Como paciente autenticado, quiero solicitar una cita con un doctor. | La cita queda registrada con los datos ingresados y estado inicial `Pending`. |
| HU-11 | Como paciente, quiero consultar mis citas. | El listado muestra mi cita, doctor y estado. |
| HU-12 | Como paciente, quiero cambiar mi contraseña verificando la anterior. | La contraseña anterior incorrecta se rechaza y la correcta permite el cambio. |
| HU-13 | Como paciente, quiero cerrar sesión y proteger mis páginas privadas. | Tras salir, citas y cambio de contraseña redirigen al login. |
| HU-14 | Como administrador, quiero consultar el listado general de pacientes y citas. | El listado muestra la cita y los datos de paciente, doctor y motivo. |
| HU-15 | Como doctor, quiero iniciar sesión con mi cuenta. | Acceso válido abre el dashboard y el inválido es rechazado. |
| HU-16 | Como doctor, quiero consultar el dashboard con el total de citas asignadas. | El panel muestra la cuenta de citas del doctor autenticado. |
| HU-17 | Como doctor, quiero consultar mis pacientes y registrar un comentario/prescripción. | La cita asignada aparece y el comentario reemplaza el estado `Pending`. |
| HU-18 | Como doctor, quiero actualizar mi perfil y cambiar la contraseña. | Los cambios de perfil se reflejan; el cambio de contraseña valida la anterior. |
| HU-19 | Como doctor, quiero cerrar sesión y proteger mis páginas privadas. | Tras salir, dashboard, pacientes y perfil redirigen al login. |
| HU-20 | Como administrador, quiero registrar otra cuenta de administrador. | **No disponible en esta versión:** no existe formulario ni endpoint para hacerlo. |

## Casos de prueba funcionales

Los casos automatizan los flujos funcionales principales de todas las páginas JSP navegables del proyecto. Los datos usan nombres únicos por ejecución y emails del dominio reservado `example.test`. Los escenarios que alteran credenciales usan cuentas generadas por la misma ejecución.

| Caso | HU | Escenario | Resultado esperado | Cypress |
|---|---|---|---|---|
| CP-01 | HU-01 | Smoke de portada, navegación, contenido y carrusel | Portada y accesos principales visibles; cuatro diapositivas cargadas | Sí |
| CP-02 | HU-02 | Login admin inválido | Login conserva la página y muestra error | Sí |
| CP-03 | HU-02, HU-03 | Login admin válido y dashboard | Dashboard y contadores visibles | Sí |
| CP-04 | HU-04 | Crear especialidad | Mensaje de éxito tras enviar el modal | Sí |
| CP-05 | HU-05 | Crear doctor asociado a la especialidad nueva | Mensaje de éxito; doctor creado con email de prueba | Sí |
| CP-06 | HU-05 | Editar doctor desde el listado | Nombre/teléfono actualizados en la fila | Sí |
| CP-07 | HU-06 | Logout de administrador y acceso al dashboard | Dashboard redirige al login | Sí |
| CP-08 | HU-07 | Abrir y enviar formulario de registro de paciente | Formulario se presenta y muestra confirmación de alta | Sí |
| CP-09 | HU-08 | Login de paciente con contraseña inválida | Se rechaza el acceso y aparece el mensaje de error | Sí |
| CP-10 | HU-08 | Login válido y menú de cuenta | Se muestra el nombre y opciones de citas, contraseña y logout | Sí |
| CP-11 | HU-09 | Solicitud de cita como visitante | Formulario visible y CTA lleva al login; no hay botón de envío autenticado | Sí |
| CP-12 | HU-10 | Crear cita autenticado | Mensaje de éxito y cita queda lista para consulta | Sí |
| CP-13 | HU-11 | Consultar cita del paciente | Aparecen paciente, doctor y estado `Pending` | Sí |
| CP-14 | HU-12 | Contraseña anterior incorrecta y cambio válido | Error para la anterior incorrecta; confirmación al cambiarla | Sí |
| CP-15 | HU-13 | Logout y acceso a citas/cambio de contraseña | Ambas páginas redirigen al login | Sí |
| CP-16 | HU-14 | Listado global de pacientes del administrador | La cita generada aparece con paciente, doctor y motivo | Sí |
| CP-17 | HU-15 | Login de doctor inválido | Se rechaza el acceso y aparece el error | Sí |
| CP-18 | HU-15, HU-16 | Login válido y dashboard del doctor | Nombre del doctor y total de citas visibles | Sí |
| CP-19 | HU-17 | Consultar cita y registrar tratamiento | La cita deja de estar pendiente y muestra el comentario | Sí |
| CP-20 | HU-18 | Actualizar perfil y cambiar contraseña del doctor | Perfil actualizado; contraseña anterior validada y cambio confirmado | Sí |
| CP-21 | HU-19 | Logout y acceso a páginas privadas del doctor | Dashboard, pacientes y perfil redirigen al login | Sí |
| CP-22 | HU-05 | Eliminar el doctor generado por la ejecución | Confirmación y doctor ausente del listado | Sí |
| CP-23 | HU-20 | Crear un segundo administrador | No ejecutable: la función no existe en la aplicación | No, brecha del producto |

## Cobertura de páginas

La aplicación incluye 17 páginas JSP navegables y fragmentos compartidos para navegación, pie de página y estilos. Los casos CP-01 a CP-22 recorren las páginas funcionales: portada; login de los tres roles; registro; solicitud/listado de citas; cambio de contraseña del paciente; paneles, formularios y listados administrativos; y dashboard, pacientes, comentario/prescripción y perfil del doctor. También se revisan los fragmentos de navegación usados por esos flujos.

El registro de un administrador no forma parte de estas 17 páginas porque el producto no lo implementa. Los fragmentos de Bootstrap, CSS y pie de página se comprueban indirectamente en las páginas que los incluyen; no son páginas funcionales independientes.

## Límites conocidos de la cobertura

- La cobertura funcional abarca páginas y caminos principales, pero no prueba exhaustivamente todas las combinaciones de campos, límites, fallos de red, concurrencia ni accesibilidad.
- El formulario de registro de paciente no declara atributos HTML `required`; la automatización no presenta como garantizada una validación que el producto no implementa.
- No existe mantenimiento de especialistas (edición/eliminación), recuperación de contraseña ni alta de administradores.
- El cambio de comentario se comprueba en el listado del doctor. La cita deja de estar `Pending`; no se modela un estado clínico adicional.
- El caso CP-22 borra el doctor sintético creado por la ejecución. La base es de práctica; no usar datos reales.

## Criterios comunes para ejecutar un caso

1. Confirmar que Docker está activo, MySQL aparece saludable y la aplicación responde en `http://localhost:8080`.
2. Abrir Cypress desde la raíz del proyecto o seguir los pasos manuales de precondición que figuran en el Excel.
3. Utilizar solo datos sintéticos. Los correos automatizados usan el dominio reservado `example.test`.
4. Registrar fecha, resultado real y evidencia. Si una prueba falla, conservar el fallo e investigar el ambiente antes de cambiar la expectativa.
5. Ejecutar CP-22 al final de la suite porque elimina el doctor sintético y sus citas asociadas.

La ejecución local de Cypress 16.1.1 registrada el 14/10/2026 obtuvo 22 casos aprobados, 0 fallidos y 0 pendientes. CP-23 documenta la función de alta de administrador que no existe en la versión evaluada.

## Trazabilidad

Los identificadores de historia y caso se escriben en el nombre de cada prueba Cypress. El archivo de plan de pruebas contiene el alcance, ambiente, riesgos, criterios de entrada/salida y responsables; esta matriz mantiene la relación entre historias, casos y automatización. El alta de administrador queda registrada como brecha, no como caso aprobado.

## Credenciales de prueba

El login web de administrador implementado en la aplicación usa `admin@gmail.com` / `admin`. La indicación `root/root` de la pizarra no es el login web. Las credenciales MySQL del contenedor son distintas y están configuradas para el entorno local. No publicar secretos personales ni usar datos de pacientes reales.
