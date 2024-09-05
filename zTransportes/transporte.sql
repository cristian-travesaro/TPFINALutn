-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 03-09-2024 a las 16:26:14
-- Versión del servidor: 8.3.0
-- Versión de PHP: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `transporte`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'El Gobierno espera un descenso de los precios en septiembre tras la reducción del Impuesto País.', 'El ministro de Economía anticipó que la inflación de agosto será similar a la de julio. Sin embargo, esperan una fuerte desaceleración en el noveno mes del año por los cambios impositivos', 'La tensión entre CABA y el gobierno nacional sumó un nuevo peldaño este miércoles luego de que el jefe de Gobierno Jorge Macri hablara en público de la controversia por los subsidios de los colectivos y el ministro de Economía, Luis Caputo, le respondiera.', NULL),
(2, 'El Gobierno espera un descenso de los precios en septiembre tras la reducción del Impuesto País.', 'El ministro de Economía anticipó que la inflación de agosto será similar a la de julio. Sin embargo, esperan una fuerte desaceleración en el noveno mes del año por los cambios impositivos', 'La tensión entre CABA y el gobierno nacional sumó un nuevo peldaño este miércoles luego de que el jefe de Gobierno Jorge Macri hablara en público de la controversia por los subsidios de los colectivos y el ministro de Economía, Luis Caputo, le respondiera.', NULL),
(3, 'Ciudad Bilingüe: cómo es la nueva plataforma gratuita del gobierno porteño para aprender inglés y certificarse.', 'El programa busca capacitar a quienes tienen contacto con el turismo, aunque no es exclusivo del sector. Permite obtener el certificado internacional C1.', 'El jefe de gobierno porteño, Jorge Macri, presentó esta mañana una nueva plataforma para aprender inglés de forma gratuita. Como parte del programa Ciudad Bilingüe, podrán utilizarlo todas las personas que vivan o trabajen en la jurisdicción.', NULL),
(4, 'Ciudad Bilingüe: cómo es la nueva plataforma gratuita del gobierno porteño para aprender inglés y certificarse.', 'El programa busca capacitar a quienes tienen contacto con el turismo, aunque no es exclusivo del sector. Permite obtener el certificado internacional C1.', 'El jefe de gobierno porteño, Jorge Macri, presentó esta mañana una nueva plataforma para aprender inglés de forma gratuita. Como parte del programa Ciudad Bilingüe, podrán utilizarlo todas las personas que vivan o trabajen en la jurisdicción.', NULL),
(14, 'gfdsg', 'dsgtsdhdsh', 'sdghdefjhftrgj', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'laura', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
