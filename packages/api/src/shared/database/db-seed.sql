-- Inserção de dados exemplo na tabela users
INSERT INTO users (name, email, password, phone_number, birthdate) 
VALUES 
('John Doe', 'john.doe@example.com', 'password123', '1234567890', '1985-05-15'),
('Jane Smith', 'jane.smith@example.com', 'password456', '0987654321', '1990-08-25'),
('Michael Johnson', 'michael.johnson@example.com', 'password789', '1112223333', '1975-12-05'),
('Emily Davis', 'emily.davis@example.com', 'password012', '2223334444', '1988-07-18'),
('Daniel Brown', 'daniel.brown@example.com', 'password345', '3334445555', '1992-11-22');

-- Inserção de dados exemplo na tabela addresses
INSERT INTO addresses (user_id, street_name, street_number, street_complement, district, city, state, zip) 
VALUES 
((SELECT id FROM users WHERE email = 'john.doe@example.com'), 'Main St', '123', 'Apt 4', 'Downtown', 'Springfield', 'IL', '62701'),
((SELECT id FROM users WHERE email = 'jane.smith@example.com'), 'Oak St', '456', '', 'West Side', 'Greenwood', 'IN', '46142'),
((SELECT id FROM users WHERE email = 'michael.johnson@example.com'), 'Pine St', '789', 'Suite 5B', 'North End', 'Columbus', 'OH', '43215'),
((SELECT id FROM users WHERE email = 'emily.davis@example.com'), 'Maple St', '101', '', 'East Side', 'Bloomington', 'IN', '47408'),
((SELECT id FROM users WHERE email = 'daniel.brown@example.com'), 'Cedar St', '202', '', 'Central', 'Madison', 'WI', '53703'),
((SELECT id FROM users WHERE email = 'john.doe@example.com'), 'Elm St', '303', 'Unit 6', 'South Side', 'Lansing', 'MI', '48910'),
((SELECT id FROM users WHERE email = 'john.doe@example.com'), 'Birch St', '404', '', 'Old Town', 'Naperville', 'IL', '60540');

-- Consultas para verificar os dados inseridos
SELECT * FROM users;
SELECT * FROM addresses;
