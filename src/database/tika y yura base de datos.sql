-- MySQL Script generated by MySQL Workbench
-- Tue May 16 14:44:04 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema tika_y_yura_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema tika_y_yura_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tika_y_yura_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
USE `tika_y_yura_db` ;

-- -----------------------------------------------------
-- Table `tika_y_yura_db`.`localidad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tika_y_yura_db`.`localidad` (
  `id` INT(11) NOT NULL,
  `provincia` VARCHAR(73) NULL DEFAULT NULL,
  `localidad` VARCHAR(73) NULL DEFAULT NULL,
  `ciudad` VARCHAR(73) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `tika_y_yura_db`.`domicilio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tika_y_yura_db`.`domicilio` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `calle` VARCHAR(73) NOT NULL,
  `altura` INT(11) NOT NULL,
  `piso` INT(11) NULL DEFAULT NULL,
  `departamento` INT(11) NULL DEFAULT NULL,
  `localidad_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_domicilio_localidad_idx` (`localidad_id` ASC) VISIBLE,
  CONSTRAINT `fk_domicilio_localidad`
    FOREIGN KEY (`localidad_id`)
    REFERENCES `tika_y_yura_db`.`localidad` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `tika_y_yura_db`.`maceta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tika_y_yura_db`.`maceta` (
  `id` INT(11) NOT NULL,
  `tipo` VARCHAR(73) NULL DEFAULT NULL,
  `tamaño` INT(11) NULL DEFAULT NULL,
  `color` VARCHAR(73) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `tika_y_yura_db`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tika_y_yura_db`.`products` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(73) NOT NULL,
  `other_name` VARCHAR(117) NOT NULL,
  `description` VARCHAR(620) NULL DEFAULT NULL,
  `features` VARCHAR(630) NULL DEFAULT NULL,
  `price` DECIMAL(7,2) NOT NULL,
  `image` VARCHAR(11) NULL DEFAULT NULL,
  `maceta_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_producto_maceta_idx` (`maceta_id` ASC) VISIBLE,
  CONSTRAINT `fk_producto_maceta`
    FOREIGN KEY (`maceta_id`)
    REFERENCES `tika_y_yura_db`.`maceta` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `tika_y_yura_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tika_y_yura_db`.`users` (
  `id` INT(11) NOT NULL,
  `first_name` VARCHAR(15) NOT NULL,
  `last_name` VARCHAR(11) NOT NULL,
  `email` VARCHAR(32) NOT NULL,
  `Img` VARCHAR(75) NOT NULL,
  `ip_address` VARCHAR(15) NOT NULL,
  `password` VARCHAR(12) NOT NULL,
  `domicilio_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_usuario_domicilio_idx` (`domicilio_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_domicilio`
    FOREIGN KEY (`domicilio_id`)
    REFERENCES `tika_y_yura_db`.`domicilio` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
