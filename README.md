# CRUD-NodeJS

CRUD básico em NodeJs para exemplificar métodos HTTP

## Banco: MySQL
```sql
CREATE DATABASE http_api;

CREATE  TABLE IF NOT EXISTS `instrutores` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `conteudo` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
```
