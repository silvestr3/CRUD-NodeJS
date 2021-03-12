CREATE SCHEMA http_api;

CREATE USER 'api'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
GRANT ALL PRIVILEGES ON http_api.* TO 'api';

FLUSH PRIVILEGES;

USE http_api;

CREATE  TABLE IF NOT EXISTS `instrutores` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `conteudo` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO instrutores (nome, conteudo) VALUES ('Silvestre', 'Web Hacking');
INSERT INTO instrutores (nome, conteudo) VALUES ('Kirito', 'Web Hacking');
