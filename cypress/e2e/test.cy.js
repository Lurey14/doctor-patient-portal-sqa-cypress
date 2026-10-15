const runId = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
const password = 'PruebaSegura123';
const specialist = `QA Cardiologia ${runId}`;
const doctorName = `Doctor Cypress ${runId}`;
const editedDoctorName = `Doctor Editado ${runId}`;
const doctorEmail = `doctor.${runId}@example.test`;
const patientName = `Paciente Cypress ${runId}`;
const patientEmail = `paciente.${runId}@example.test`;
const treatment = `Tratamiento Cypress ${runId}`;
let patientPassword = password;
let doctorPassword = password;

function logInAdmin() {
  cy.visit('/admin_login.jsp');
  cy.get('form[action="adminLogin"] input[name="email"]').type('admin@gmail.com');
  cy.get('form[action="adminLogin"] input[name="password"]').type('admin');
  cy.get('form[action="adminLogin"] button[type="submit"]').click();
  cy.url().should('include', '/admin/index.jsp');
}

function logInPatient(currentPassword = patientPassword) {
  cy.visit('/user_login.jsp');
  cy.get('form[action="userLogin"] input[name="email"]').type(patientEmail);
  cy.get('form[action="userLogin"] input[name="password"]').type(currentPassword);
  cy.get('form[action="userLogin"] button[type="submit"]').click();
  cy.url().should('include', '/index.jsp');
}

function logInDoctor(currentPassword = doctorPassword) {
  cy.visit('/doctor_login.jsp');
  cy.get('form[action="doctorLogin"] input[name="email"]').type(doctorEmail);
  cy.get('form[action="doctorLogin"] input[name="password"]').type(currentPassword);
  cy.get('form[action="doctorLogin"] button[type="submit"]').click();
  cy.url().should('include', '/doctor/index.jsp');
}

function selectOptionContaining(selector, text) {
  cy.get(selector).then(($select) => {
    const option = [...$select[0].options].find((item) => item.textContent.includes(text));
    expect(option, `opción disponible: ${text}`).to.exist;
    cy.wrap($select).select(option.value);
  });
}

describe('Doctor Patient Portal — pruebas funcionales E2E', () => {
  it('CP-01 Smoke: carga portada, navegación, contenido e imágenes del carrusel', () => {
    cy.visit('/');
    cy.get('body').should('contain.text', 'Doctor Patient Portal');
    cy.get('a[href="admin_login.jsp"]').should('be.visible');
    cy.get('a[href="doctor_login.jsp"]').should('be.visible');
    cy.get('a[href="user_login.jsp"]').should('be.visible');
    cy.get('a[href="user_appointment.jsp"]').should('be.visible');
    cy.get('#carouselExampleIndicators .carousel-item').should('have.length', 4);
    cy.contains('Some key Features of our Doctor Patient Portal').should('be.visible');
    cy.contains('Our Team').should('be.visible');
  });

  describe('Administración', () => {
    it('CP-02: rechaza credenciales administrativas incorrectas', () => {
      cy.visit('/admin_login.jsp');
      cy.get('form[action="adminLogin"] input[name="email"]').type('incorrecto@example.test');
      cy.get('form[action="adminLogin"] input[name="password"]').type('incorrecta');
      cy.get('form[action="adminLogin"] button[type="submit"]').click();
      cy.url().should('include', '/admin_login.jsp');
      cy.contains('Invalid Username or Password.').should('be.visible');
    });

    it('CP-03: permite login válido y muestra contadores del dashboard', () => {
      logInAdmin();
      cy.contains('Admin Dashboard').should('be.visible');
      cy.contains('Doctor').should('be.visible');
      cy.contains('User').should('be.visible');
      cy.contains('Total Appointment').should('be.visible');
      cy.contains('Specialist').should('be.visible');
    });

    it('CP-04: crea una especialidad desde el modal del dashboard', () => {
      logInAdmin();
      cy.contains('.card', 'Specialist').click();
      cy.get('#exampleModal').should('be.visible');
      cy.get('#exampleModal input[name="specialistName"]').type(specialist);
      cy.get('#exampleModal button[type="submit"]').click();
      cy.contains('Specialist added Successfully.').should('be.visible');
    });

    it('CP-05: crea un doctor vinculado con la especialidad nueva', () => {
      logInAdmin();
      cy.contains('a', 'DOCTOR').click();
      cy.get('form[action="../addDoctor"] input[name="fullName"]').type(doctorName);
      cy.get('form[action="../addDoctor"] input[name="dateOfBirth"]').type('1985-05-12');
      cy.get('form[action="../addDoctor"] input[name="qualification"]').type('Medicina general');
      selectOptionContaining('form[action="../addDoctor"] select[name="specialist"]', specialist);
      cy.get('form[action="../addDoctor"] input[name="email"]').type(doctorEmail);
      cy.get('form[action="../addDoctor"] input[name="phone"]').type('70012345');
      cy.get('form[action="../addDoctor"] input[name="password"]').type(password);
      cy.get('form[action="../addDoctor"] button[type="submit"]').click();
      cy.contains('Doctor added Successfully').should('be.visible');
    });

    it('CP-06: lista y edita los datos del doctor', () => {
      logInAdmin();
      cy.contains('a', 'VIEW DOCTOR').click();
      cy.contains('tr', doctorEmail).within(() => cy.contains('a', 'Edit').click());
      cy.get('form[action="../updateDoctor"] input[name="fullName"]')
        .clear().type(editedDoctorName);
      cy.get('form[action="../updateDoctor"] input[name="phone"]').clear().type('70012346');
      cy.get('form[action="../updateDoctor"] button[type="submit"]').click();
      cy.contains('Doctor update Successfully').should('be.visible');
      cy.contains('tr', doctorEmail).should('contain.text', editedDoctorName)
        .and('contain.text', '70012346');
    });

    it('CP-07: cierra sesión administrativa y bloquea el dashboard', () => {
      logInAdmin();
      cy.get('#dropdownMenuButton1').click();
      cy.contains('.dropdown-item', 'Logout').click();
      cy.visit('/admin/index.jsp');
      cy.url().should('include', '/admin_login.jsp');
    });
  });

  describe('Paciente', () => {
    it('CP-08: valida el formulario de registro y registra un paciente', () => {
      cy.visit('/signup.jsp');
      cy.get('form[action="user_register"] input[name="fullName"]').should('be.visible');
      cy.get('form[action="user_register"] input[name="email"]').should('have.attr', 'type', 'email');
      // El registro no declara campos requeridos en HTML; se verifica el formulario real sin atribuirle esa validación.
      cy.get('form[action="user_register"] input[name="password"]').should('have.attr', 'type', 'password');
      cy.get('form[action="user_register"] input[name="fullName"]').type(patientName);
      cy.get('form[action="user_register"] input[name="email"]').type(patientEmail);
      cy.get('form[action="user_register"] input[name="password"]').type(password);
      cy.get('form[action="user_register"] button[type="submit"]').click();
      cy.contains('Register Successfully').should('be.visible');
    });

    it('CP-09: rechaza credenciales incorrectas del paciente', () => {
      cy.visit('/user_login.jsp');
      cy.get('form[action="userLogin"] input[name="email"]').type(patientEmail);
      cy.get('form[action="userLogin"] input[name="password"]').type('incorrecta');
      cy.get('form[action="userLogin"] button[type="submit"]').click();
      cy.url().should('include', '/user_login.jsp');
      cy.contains('Invalid email or password').should('be.visible');
    });

    it('CP-10: inicia sesión y abre su menú de cuenta', () => {
      logInPatient();
      cy.get('#dropdownMenuButton1').should('contain.text', patientName);
      cy.contains('a', 'VIEW APPOINTMENT').should('be.visible');
      cy.get('#dropdownMenuButton1').click();
      cy.contains('.dropdown-item', 'Change Password').should('be.visible');
      cy.contains('.dropdown-item', 'Logout').should('be.visible');
    });

    it('CP-11: muestra la opción de login cuando un visitante solicita una cita', () => {
      cy.visit('/user_appointment.jsp');
      cy.get('form[action="addAppointment"]').should('be.visible');
      cy.get('form[action="addAppointment"] a[href="user_login.jsp"]')
        .should('be.visible').and('contain.text', 'Submit');
      cy.get('form[action="addAppointment"] button[type="submit"]').should('not.exist');
    });

    it('CP-12: permite solicitar una cita y registra el estado inicial Pending', () => {
      logInPatient();
      cy.contains('a', 'APPOINTMENT').click();
      cy.get('form[action="addAppointment"] input[name="fullName"]').type(patientName);
      cy.get('form[action="addAppointment"] select[name="gender"]').select('female');
      cy.get('form[action="addAppointment"] input[name="age"]').type('28');
      cy.get('form[action="addAppointment"] input[name="appointmentDate"]').type('2030-05-20');
      cy.get('form[action="addAppointment"] input[name="email"]').type(patientEmail);
      cy.get('form[action="addAppointment"] input[name="phone"]').type('70123456');
      cy.get('form[action="addAppointment"] input[name="diseases"]').type('Control preventivo');
      selectOptionContaining('form[action="addAppointment"] select[name="doctorNameSelect"]', editedDoctorName);
      cy.get('form[action="addAppointment"] textarea[name="address"]').type('Av. de prueba 123');
      cy.get('form[action="addAppointment"] button[type="submit"]').click();
      cy.contains('Appointment is recorded Successfully.').should('be.visible');
    });

    it('CP-13: consulta los datos y estado de su cita', () => {
      logInPatient();
      cy.contains('a', 'VIEW APPOINTMENT').click();
      cy.contains('td', patientName).should('be.visible');
      cy.contains('td', editedDoctorName).should('be.visible');
      cy.contains('td', 'Pending').should('be.visible');
    });

    it('CP-14: rechaza contraseña anterior incorrecta y permite cambiarla', () => {
      logInPatient();
      cy.get('#dropdownMenuButton1').click();
      cy.contains('.dropdown-item', 'Change Password').click();
      cy.get('form[action="userChangePassword"] input[name="newPassword"]').type('PacienteNuevo123');
      cy.get('form[action="userChangePassword"] input[name="oldPassword"]').type('anterior-incorrecta');
      cy.get('form[action="userChangePassword"] button[type="submit"]').click();
      cy.contains('Old password incorrect').should('be.visible');

      cy.get('form[action="userChangePassword"] input[name="newPassword"]').type('PacienteNuevo123');
      cy.get('form[action="userChangePassword"] input[name="oldPassword"]').type(patientPassword);
      cy.get('form[action="userChangePassword"] button[type="submit"]').click();
      cy.contains('Password Change Successfully.').should('be.visible');
      patientPassword = 'PacienteNuevo123';
    });

    it('CP-15: cierra sesión y protege citas y cambio de contraseña', () => {
      logInPatient();
      cy.get('#dropdownMenuButton1').click();
      cy.contains('.dropdown-item', 'Logout').click();
      cy.visit('/view_appointment.jsp');
      cy.url().should('include', '/user_login.jsp');
      cy.visit('/change_password.jsp');
      cy.url().should('include', '/user_login.jsp');
    });
  });

  describe('Vista administrativa de pacientes', () => {
    it('CP-16: muestra la cita creada en el listado global del administrador', () => {
      logInAdmin();
      cy.contains('a', 'PATIENT').click();
      cy.contains('tr', patientName).should('contain.text', editedDoctorName)
        .and('contain.text', 'Control preventivo');
    });
  });

  describe('Doctor', () => {
    it('CP-17: rechaza credenciales incorrectas del doctor', () => {
      cy.visit('/doctor_login.jsp');
      cy.get('form[action="doctorLogin"] input[name="email"]').type(doctorEmail);
      cy.get('form[action="doctorLogin"] input[name="password"]').type('incorrecta');
      cy.get('form[action="doctorLogin"] button[type="submit"]').click();
      cy.url().should('include', '/doctor_login.jsp');
      cy.contains('Invalid email or password').should('be.visible');
    });

    it('CP-18: inicia sesión y consulta su dashboard', () => {
      logInDoctor();
      cy.contains('Doctor DashBoard').should('be.visible');
      cy.contains('Total Appointment').should('be.visible');
      cy.get('#dropdownMenuButton1').should('contain.text', editedDoctorName);
    });

    it('CP-19: consulta pacientes/citas asignados y registra un tratamiento', () => {
      logInDoctor();
      cy.contains('a', 'PATIENT').click();
      cy.contains('tr', patientName).should('contain.text', 'Pending');
      cy.contains('tr', patientName).within(() => cy.contains('a', 'Comment / Prescription').click());
      cy.get('form[action="../updateStatus"] input[name="fullName"]').should('have.value', patientName);
      cy.get('form[action="../updateStatus"] textarea[name="comment"]').type(treatment);
      cy.get('form[action="../updateStatus"] button[type="submit"]').click();
      cy.contains('Comment updated').should('be.visible');
      cy.contains('tr', patientName).should('contain.text', treatment);
    });

    it('CP-20: edita el perfil del doctor y cambia su contraseña', () => {
      logInDoctor();
      cy.get('#dropdownMenuButton1').click();
      cy.contains('.dropdown-item', 'Edit Profile').click();
      cy.get('form[action="../doctorEditProfile"] input[name="fullName"]')
        .clear().type(editedDoctorName);
      cy.get('form[action="../doctorEditProfile"] input[name="phone"]').clear().type('70012347');
      cy.get('form[action="../doctorEditProfile"] button[type="submit"]').click();
      cy.contains('Doctor update Successfully').should('be.visible');
      cy.get('form[action="../doctorEditProfile"] input[name="phone"]').should('have.value', '70012347');

      cy.get('form[action="../doctorChangePassword"] input[name="newPassword"]').type('DoctorNuevo123');
      cy.get('form[action="../doctorChangePassword"] input[name="oldPassword"]').type('anterior-incorrecta');
      cy.get('form[action="../doctorChangePassword"] button[type="submit"]').click();
      cy.contains('Old Password not match').should('be.visible');
      cy.get('form[action="../doctorChangePassword"] input[name="newPassword"]').type('DoctorNuevo123');
      cy.get('form[action="../doctorChangePassword"] input[name="oldPassword"]').type(doctorPassword);
      cy.get('form[action="../doctorChangePassword"] button[type="submit"]').click();
      cy.contains('Password change successfully.').should('be.visible');
      doctorPassword = 'DoctorNuevo123';
    });

    it('CP-21: cierra sesión y protege dashboard, pacientes y perfil', () => {
      logInDoctor();
      cy.get('#dropdownMenuButton1').click();
      cy.contains('.dropdown-item', 'Logout').click();
      cy.visit('/doctor/index.jsp');
      cy.url().should('include', '/doctor_login.jsp');
      cy.visit('/doctor/patient.jsp');
      cy.url().should('include', '/doctor_login.jsp');
      cy.visit('/doctor/edit_profile.jsp');
      cy.url().should('include', '/doctor_login.jsp');
    });
  });

  describe('Eliminación de datos de prueba', () => {
    it('CP-22: elimina el doctor generado por esta ejecución', () => {
      logInAdmin();
      cy.contains('a', 'VIEW DOCTOR').click();
      cy.contains('tr', doctorEmail).within(() => cy.get('a[href*="../deleteDoctor"]').click());
      cy.contains('Doctor Deleted Successfully.').should('be.visible');
      cy.contains('tr', doctorEmail).should('not.exist');
    });
  });
});
