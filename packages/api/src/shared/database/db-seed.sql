-- Inserção de dados exemplo na tabela users
INSERT INTO users (name, email, password, phone_number, birthdate) 
VALUES 
('John Doe', 'john.doe@example.com', 'password123', '1234567890', '1985-05-15'),
('Jane Smith', 'jane.smith@example.com', 'password456', '0987654321', '1990-08-25'),
('Michael Johnson', 'michael.johnson@example.com', 'password789', '1112223333', '1975-12-05');

INSERT INTO doctors (name, crm, specialty) 
VALUES 
('Dr. Ana Oliveira', '12345', 'Clinica Geral'),
('Dr. Carlos Mendes', '67890', 'Cardiologista'),
('Dra. Fernanda Silva', '54321', 'Endocrinologista');

-- Inserção de dados exemplo na tabela hospitals
INSERT INTO hospitals (name, address, phone)
VALUES 
('Hospital Central', 'Rua das Flores, 123 - Centro', '1234-5678'),
('Clínica da Família', 'Av. das Palmeiras, 456 - Bairro Alto', '8765-4321');

-- Inserção de dados exemplo na tabela addresses
INSERT INTO addresses (user_id, street_name, street_number, street_complement, district, city, state, zip) 
VALUES 
((SELECT id FROM users WHERE email = 'john.doe@example.com'), 'Main St', '123', 'Apt 4', 'Downtown', 'Springfield', 'IL', '62701'),
((SELECT id FROM users WHERE email = 'jane.smith@example.com'), 'Oak St', '456', '', 'West Side', 'Greenwood', 'IN', '46142'),
((SELECT id FROM users WHERE email = 'michael.johnson@example.com'), 'Pine St', '789', 'Suite 5B', 'North End', 'Columbus', 'OH', '43215');

-- Inserção de dados exemplo na tabela medical_history
INSERT INTO medical_history (user_id, allergies, chronic_diseases, past_surgeries) 
VALUES 
((SELECT id FROM users WHERE email = 'john.doe@example.com'), NULL, NULL, 'Apêndice, em 2010'),
((SELECT id FROM users WHERE email = 'jane.smith@example.com'), 'Alergia a poeira', 'Hipertensão', 'Cesariana, em 2018'),
((SELECT id FROM users WHERE email = 'michael.johnson@example.com'), 'Alergia a nozes', 'Diabetes Tipo 2', 'Hérnia, em 2015');

-- Inserção de dados exemplo na tabela current_medications
INSERT INTO current_medications (user_id, medication) 
VALUES 
((SELECT id FROM users WHERE email = 'john.doe@example.com'), NULL),
((SELECT id FROM users WHERE email = 'jane.smith@example.com'), 'Lisinopril, Metformina'),
((SELECT id FROM users WHERE email = 'michael.johnson@example.com'), 'Insulina, Atorvastatina');

-- Inserção de dados exemplo na tabela vaccination_history
INSERT INTO vaccination_history (user_id, vaccine_name, last_vaccination_date, status) 
VALUES 
((SELECT id FROM users WHERE email = 'john.doe@example.com'), 'Gripe', '2023-03-05', 'completa'),
((SELECT id FROM users WHERE email = 'john.doe@example.com'), 'Hepatite B', '2010-08-15', 'completa'),
((SELECT id FROM users WHERE email = 'john.doe@example.com'), 'Tríplice Viral', '2010-08-15', 'completa'),
((SELECT id FROM users WHERE email = 'jane.smith@example.com'), 'Gripe', '2023-03-10', 'completa'),
((SELECT id FROM users WHERE email = 'jane.smith@example.com'), 'Hepatite B', '2015-06-20', 'completa'),
((SELECT id FROM users WHERE email = 'michael.johnson@example.com'), 'Gripe', '2023-03-15', 'completa');

-- Inserção de dados exemplo na tabela recent_consultations
INSERT INTO recent_consultations (user_id, consultation_date, details) 
VALUES 
((SELECT id FROM users WHERE email = 'john.doe@example.com'), '2023-05-10', 'Check-up anual, sem anormalidades.'),
((SELECT id FROM users WHERE email = 'jane.smith@example.com'), '2023-06-10', 'Consulta de rotina.'),
((SELECT id FROM users WHERE email = 'michael.johnson@example.com'), '2023-07-10', 'Consulta de acompanhamento.');

-- Inserção de dados exemplo na tabela blood_pressure
INSERT INTO blood_pressure (user_id, measurement_date, systolic, diastolic) 
VALUES 
((SELECT id FROM users WHERE email = 'john.doe@example.com'), '2023-05-10', 120, 80),
((SELECT id FROM users WHERE email = 'jane.smith@example.com'), '2023-06-10', 130, 85),
((SELECT id FROM users WHERE email = 'michael.johnson@example.com'), '2023-07-10', 140, 90);

-- Inserção de dados exemplo na tabela recent_exams
INSERT INTO recent_exams (user_id, exam_name, exam_date, results, doctor_id, hospital_id) 
VALUES 
((SELECT id FROM users WHERE email = 'john.doe@example.com'), 'Hemograma', '2023-04-15', 'Resultados dentro da faixa normal.', (SELECT id FROM doctors WHERE name = 'Dr. Ana Oliveira'), (SELECT id FROM hospitals WHERE name = 'Hospital Central')),
((SELECT id FROM users WHERE email = 'john.doe@example.com'), 'Colesterol Total', '2023-04-20', 'Colesterol LDL: 110 mg/dL, Colesterol HDL: 50 mg/dL', (SELECT id FROM doctors WHERE name = 'Dr. Carlos Mendes'), (SELECT id FROM hospitals WHERE name = 'Clínica da Família')),
((SELECT id FROM users WHERE email = 'john.doe@example.com'), 'Glicose', '2023-04-25', 'Glicose em Jejum: 90 mg/dL', (SELECT id FROM doctors WHERE name = 'Dra. Fernanda Silva'), (SELECT id FROM hospitals WHERE name = 'Hospital Central')),
((SELECT id FROM users WHERE email = 'jane.smith@example.com'), 'Hemograma', '2023-05-01', 'Resultados dentro da faixa normal.', (SELECT id FROM doctors WHERE name = 'Dr. Ana Oliveira'), (SELECT id FROM hospitals WHERE name = 'Hospital Central')),
((SELECT id FROM users WHERE email = 'michael.johnson@example.com'), 'Glicose', '2023-05-05', 'Glicose em Jejum: 100 mg/dL', (SELECT id FROM doctors WHERE name = 'Dra. Fernanda Silva'), (SELECT id FROM hospitals WHERE name = 'Clínica da Família'));

-- Inserção de dados exemplo na tabela recommendations
INSERT INTO recommendations (user_id, recommendation, doctor_id) 
VALUES 
((SELECT id FROM users WHERE email = 'john.doe@example.com'), 'Manter uma dieta balanceada e praticar exercícios regularmente.', (SELECT id FROM doctors WHERE name = 'Dr. Ana Oliveira')),
((SELECT id FROM users WHERE email = 'john.doe@example.com'), 'Realizar exames de rotina conforme orientação médica.', (SELECT id FROM doctors WHERE name = 'Dr. Carlos Mendes')),
((SELECT id FROM users WHERE email = 'jane.smith@example.com'), 'Reduzir a ingestão de sal e manter o controle da pressão arterial.', (SELECT id FROM doctors WHERE name = 'Dra. Fernanda Silva')),
((SELECT id FROM users WHERE email = 'michael.johnson@example.com'), 'Monitorar níveis de glicose regularmente.', (SELECT id FROM doctors WHERE name = 'Dr. Carlos Mendes'));

-- Inserção de dados exemplo na tabela medical_signatures
INSERT INTO medical_signatures (user_id, doctor_id, crm) 
VALUES 
((SELECT id FROM users WHERE email = 'john.doe@example.com'), (SELECT id FROM doctors WHERE name = 'Dra. Fernanda Silva'), '12345'),
((SELECT id FROM users WHERE email = 'jane.smith@example.com'), (SELECT id FROM doctors WHERE name = 'Dr. Carlos Mendes'), '67890'),
((SELECT id FROM users WHERE email = 'michael.johnson@example.com'), (SELECT id FROM doctors WHERE name = 'Dra. Fernanda Silva'), '54321');

-- Inserção de dados exemplo na tabela emergency_contacts
INSERT INTO emergency_contacts (user_id, contact_name, relationship, contact_phone) 
VALUES 
((SELECT id FROM users WHERE email = 'john.doe@example.com'), 'Mary Doe', 'Esposa', '1234567891'),
((SELECT id FROM users WHERE email = 'jane.smith@example.com'), 'Peter Smith', 'Irmão', '0987654322'),
((SELECT id FROM users WHERE email = 'michael.johnson@example.com'), 'Sara Johnson', 'Filha', '1112223334');