CREATE DATABASE QuanLyBanHang;
USE QuanLyBanHang;

CREATE TABLE Products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2),
    quantity INT
);
