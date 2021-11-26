-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Erstellungszeit: 23. Nov 2021 um 16:26
-- Server-Version: 10.5.11-MariaDB-1:10.5.11+maria~focal-log
-- PHP-Version: 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `d0380f1c`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `name` varchar(48) DEFAULT NULL,
  `price` decimal(6,2) DEFAULT NULL,
  `additives` varchar(24) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `menu`
--

INSERT INTO `menu` (`id`, `name`, `price`, `additives`) VALUES
(1, 'Döner Kebap', '5.00', NULL),
(2, 'Dürüm Döner', '5.50', NULL),
(3, 'Pom Döner', '5.00', NULL),
(4, 'Lahmacun', '3.50', NULL),
(5, 'Döner Teller', '8.00', NULL),
(6, 'Falafel', '4.00', NULL),
(7, 'Börek', '4.50', NULL),
(8, 'Pide', '5.00', NULL);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `menus`
--

CREATE TABLE `menus` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` decimal(6,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `menus`
--

INSERT INTO `menus` (`id`, `name`, `description`, `price`) VALUES
(1, 'Döner', 'Lecker und mit scharf!', '5.50'),
(2, 'Dürum', 'Mit Tsatsiki und Kraut lan!!', '6.00');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `menu_side_dish`
--

CREATE TABLE `menu_side_dish` (
  `sd_id` int(11) DEFAULT NULL,
  `m_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `menu_side_dish`
--

INSERT INTO `menu_side_dish` (`sd_id`, `m_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `menus` varchar(48) DEFAULT NULL,
  `side_dishes` varchar(128) DEFAULT NULL,
  `toal` decimal(10,0) DEFAULT NULL,
  `invoice_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `sideDishes`
--

CREATE TABLE `sideDishes` (
  `id` int(11) NOT NULL,
  `name` varchar(24) DEFAULT NULL,
  `price` decimal(4,2) DEFAULT NULL,
  `additives` varchar(24) DEFAULT NULL,
  `menu_id` int(11) DEFAULT NULL,
  `oder_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `sideDishes`
--

INSERT INTO `sideDishes` (`id`, `name`, `price`, `additives`, `menu_id`, `oder_id`) VALUES
(1, 'Bauernsalat', '0.00', NULL, NULL, NULL),
(2, 'Zwiebeln', '0.00', NULL, NULL, NULL),
(3, 'Krautsalat-rot', '0.00', NULL, NULL, NULL),
(4, 'Krautsalat-weiss', '0.00', NULL, NULL, NULL),
(5, 'TsaTsiki', '0.00', NULL, NULL, NULL),
(6, 'Curry-Soße', '0.00', NULL, NULL, NULL),
(7, 'Cocktail-Soße', '0.00', NULL, NULL, NULL),
(8, 'Chilli-Soße', '0.00', NULL, NULL, NULL),
(9, 'Brot', '0.00', NULL, NULL, NULL),
(10, 'Reis', '0.00', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(64) DEFAULT NULL,
  `last_name` varchar(64) DEFAULT NULL,
  `street` varchar(64) DEFAULT NULL,
  `house_no` int(11) DEFAULT NULL,
  `city` varchar(48) DEFAULT NULL,
  `zip` varchar(5) DEFAULT NULL,
  `phone` varchar(16) DEFAULT NULL,
  `email` varchar(24) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `sideDishes`
--
ALTER TABLE `sideDishes`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT für Tabelle `menus`
--
ALTER TABLE `menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT für Tabelle `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `sideDishes`
--
ALTER TABLE `sideDishes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT für Tabelle `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
