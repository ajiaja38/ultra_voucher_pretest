-- Active: 1710909648333@@127.0.0.1@5432@ultra_voucher@public
CREATE Table mst_user (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  parent_id INT,
  FOREIGN KEY(parent_id) REFERENCES mst_user(id)
);

INSERT INTO mst_user (name, parent_id) VALUES
('Zaki', 2),
('Ilham', null),
('Irwan', 2),
('Arka', 3);

SELECT * FROM mst_user;

SELECT u.id, u.name, p.name as parent_name
FROM mst_user u
LEFT JOIN mst_user p ON p.id = u.parent_id
ORDER BY u.id;