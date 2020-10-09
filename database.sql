CREATE TABLE books (
    id MEDIUMINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(75),
    code VARCHAR(50),
    author VARCHAR(75),
    volume VARCHAR(20),
    quantity TINYINT UNSIGNED,
    createdAt DATE,
    updatedAt DATE
);

INSERT INTO books (name,code,author,volume,quantity, createdAt) VALUES 
('Caninos Brancos','ISBN0121','Arthur Conan Doyle','XII',2, curdate())
,('Memórias Póstumas de Brás Cubas','IIN 56458','Machado de Assis','III',3, curdate())
,('Harry Potter e a Pedra Filosofal','UK 025825','JK Rowling','I',15, curdate());
