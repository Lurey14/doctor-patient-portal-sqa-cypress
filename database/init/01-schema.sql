USE hospital;

CREATE TABLE specialist (
    id INT AUTO_INCREMENT PRIMARY KEY,
    specialist_name VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE user_details (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE doctor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullName VARCHAR(150) NOT NULL,
    dateOfBirth VARCHAR(50),
    qualification VARCHAR(200),
    specialist VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(30),
    password VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE appointment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    fullName VARCHAR(150) NOT NULL,
    gender VARCHAR(20),
    age VARCHAR(10),
    appointmentDate VARCHAR(50),
    email VARCHAR(100),
    phone VARCHAR(30),
    diseases VARCHAR(255),
    doctorId INT NOT NULL,
    address TEXT,
    status VARCHAR(255),
    CONSTRAINT fk_appointment_user
        FOREIGN KEY (userId) REFERENCES user_details(id) ON DELETE CASCADE,
    CONSTRAINT fk_appointment_doctor
        FOREIGN KEY (doctorId) REFERENCES doctor(id) ON DELETE CASCADE
) ENGINE=InnoDB;
