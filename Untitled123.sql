CREATE DATABASE  IF NOT EXISTS `project3` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `project3`;
-- MySQL dump 10.13  Distrib 8.0.36, for macos14 (arm64)
--
-- Host: localhost    Database: project3
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `channel`
--

DROP TABLE IF EXISTS `channel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `channel` (
  `channel_id` int NOT NULL,
  `channel_name` text,
  PRIMARY KEY (`channel_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `channel`
--

LOCK TABLES `channel` WRITE;
/*!40000 ALTER TABLE `channel` DISABLE KEYS */;
INSERT INTO `channel` VALUES (0,'Bein Sports'),(1,'Digiturk'),(2,'TRT');
/*!40000 ALTER TABLE `channel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coach`
--

DROP TABLE IF EXISTS `coach`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coach` (
  `username` varchar(500) NOT NULL,
  `password` text,
  `name` text,
  `surname` text,
  `nationality` text,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coach`
--

LOCK TABLES `coach` WRITE;
/*!40000 ALTER TABLE `coach` DISABLE KEYS */;
INSERT INTO `coach` VALUES ('a_derune','aderune_147','Amicia','Derune','FR'),('d_santarelli','santa.really1','Daniele','Santarelli','ITA'),('f_akbas','a.fatih55','Ferhat','Akbaş','TR'),('g_guidetti','guidgio.90','Giovanni','Guidetti','ITA'),('m_hebert','m.hebert45','Mike','Hebert','US'),('o_deriviere','oliviere_147','Oliviere','Deriviere','FR');
/*!40000 ALTER TABLE `coach` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dbmanager`
--

DROP TABLE IF EXISTS `dbmanager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dbmanager` (
  `username` text,
  `password` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dbmanager`
--

LOCK TABLES `dbmanager` WRITE;
/*!40000 ALTER TABLE `dbmanager` DISABLE KEYS */;
INSERT INTO `dbmanager` VALUES ('Kevin','Kevin'),('Bob','Bob'),('sorunlubirarkadas','muvaffakiyetsizleştiricileştiriveremeyebileceklerimizdenmişsinizcesine');
/*!40000 ALTER TABLE `dbmanager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jury`
--

DROP TABLE IF EXISTS `jury`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jury` (
  `username` varchar(500) NOT NULL,
  `password` text,
  `name` text,
  `surname` text,
  `nationality` text,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jury`
--

LOCK TABLES `jury` WRITE;
/*!40000 ALTER TABLE `jury` DISABLE KEYS */;
INSERT INTO `jury` VALUES ('e_sener','ertem.4587','Ertem','Şener','TR'),('m_sevinc','mehmet.0457','Mehmet','Sevinç','TR'),('o_ozcelik','ozlem.0347','Özlem','Özçelik','TR'),('s_engin','sinan.6893','Sinan','Engin','TR');
/*!40000 ALTER TABLE `jury` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matchsession`
--

DROP TABLE IF EXISTS `matchsession`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `matchsession` (
  `session_id` int DEFAULT NULL,
  `team_id` int DEFAULT NULL,
  `stadium_id` int DEFAULT NULL,
  `time_slot` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  `assigned_jury_username` text,
  `rating` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matchsession`
--

LOCK TABLES `matchsession` WRITE;
/*!40000 ALTER TABLE `matchsession` DISABLE KEYS */;
INSERT INTO `matchsession` VALUES (0,0,0,1,'2024-03-10','o_ozcelik',4.5),(1,1,1,1,'2024-04-03','o_ozcelik',4.9),(2,0,1,3,'2024-04-03','o_ozcelik',4.4),(3,2,2,2,'2024-04-03','m_sevinc',4.9),(4,3,2,2,'2023-04-03','e_sener',4.5),(5,3,1,1,'2023-05-27','s_engin',4.4),(6,0,1,1,'2022-09-01','m_sevinc',4.6),(7,0,2,3,'2023-05-02','o_ozcelik',4.7),(8,1,0,1,'2024-02-10','o_ozcelik',4.5);
/*!40000 ALTER TABLE `matchsession` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player`
--

DROP TABLE IF EXISTS `player`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player` (
  `username` varchar(500) NOT NULL,
  `password` text,
  `name` text,
  `surname` text,
  `date_of_birth` date DEFAULT NULL,
  `height` int DEFAULT NULL,
  `weight` int DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player`
--

LOCK TABLES `player` WRITE;
/*!40000 ALTER TABLE `player` DISABLE KEYS */;
INSERT INTO `player` VALUES ('a_aykac','Aa.1996','Ayşe','Aykaç','1996-02-27',176,57),('a_kalac','Ak.1995','Aslı','Kalaç','1995-12-13',185,73),('c_ozbay','Co.1996','Cansu','Özbay','1996-10-17',182,78),('d_cebecioglu','Dc.2007','Derya','Cebecioğlu','2007-10-24',187,68),('e_karakurt','Ek.2006','Ebrar','Karakurt','2006-01-17',196,73),('e_sahin','Es.2001','Elif','Şahin','2001-01-19',190,68),('ee_dundar','Eed.2008','Eda Erdem','Dündar','2008-06-22',188,4),('g_orge','Go.1993','Gizem','Örge','1993-04-26',170,59),('h_baladin','Hb.2007','Hande','Baladın','2007-09-01',190,81),('i_aydin','Ia.2007','İlkin','Aydın','2007-01-05',183,67),('k_akman','Ka.2006','Kübra','Akman','2006-10-13',200,88),('m_vargas','Mv.1999','Melissa','Vargas','1999-10-16',194,76),('s_akoz','Sa.1991','Simge','Aköz','1991-04-23',168,55),('user_2092','P.16070','Eileen','Ryen','2004-06-21',188,60),('user_2826','P.45825','Brenda','Schulz','2002-12-13',193,80),('user_2835','P.51875','Martha','Lazo','2001-05-20',173,71),('user_3000','P.73005','Stephanie','White','2002-05-19',193,74),('user_3556','P.49595','Andrea','Campbell','1996-04-26',185,100),('user_4163','P.31812','Betsey','Lenoir','1993-05-07',156,48),('user_7934','P.24374','Beatrice','Bradley','1997-05-28',150,57),('user_8142','P.58665','Wanda','Ramirez','1994-01-03',183,94),('user_8323','P.33562','Daenerys','Targaryen','2006-09-16',222,74),('user_9501','P.99695','Erika','Foley','1995-12-21',164,62),('z_gunes','Zg.2008','Zehra','Güneş','2008-07-07',197,88);
/*!40000 ALTER TABLE `player` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `playerpositions`
--

DROP TABLE IF EXISTS `playerpositions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `playerpositions` (
  `player_positions_id` int DEFAULT NULL,
  `username` text,
  `position` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playerpositions`
--

LOCK TABLES `playerpositions` WRITE;
/*!40000 ALTER TABLE `playerpositions` DISABLE KEYS */;
INSERT INTO `playerpositions` VALUES (1,'g_orge',0),(2,'g_orge',3),(3,'c_ozbay',1),(4,'m_vargas',2),(5,'h_baladin',3),(6,'a_kalac',4),(7,'ee_dundar',4),(8,'z_gunes',4),(9,'i_aydin',1),(10,'i_aydin',3),(11,'e_sahin',1),(12,'e_sahin',3),(13,'e_karakurt',2),(14,'e_karakurt',3),(15,'s_akoz',0),(16,'k_akman',0),(17,'k_akman',4),(18,'d_cebecioglu',3),(19,'d_cebecioglu',4),(20,'a_aykac',0),(21,'user_2826',2),(22,'user_2826',1),(23,'user_9501',0),(24,'user_9501',4),(25,'user_3556',1),(26,'user_3556',0),(27,'user_7934',4),(28,'user_7934',2),(29,'user_4163',3),(30,'user_4163',0),(31,'user_2835',2),(32,'user_2835',3),(33,'user_8142',1),(34,'user_8142',3),(35,'user_2092',4),(36,'user_2092',2),(37,'user_3000',1),(38,'user_3000',4),(39,'user_8323',3),(40,'user_8323',2);
/*!40000 ALTER TABLE `playerpositions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `playerteams`
--

DROP TABLE IF EXISTS `playerteams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `playerteams` (
  `player_teams_id` int DEFAULT NULL,
  `username` text,
  `team` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playerteams`
--

LOCK TABLES `playerteams` WRITE;
/*!40000 ALTER TABLE `playerteams` DISABLE KEYS */;
INSERT INTO `playerteams` VALUES (1,'g_orge',0),(2,'c_ozbay',0),(3,'c_ozbay',1),(4,'m_vargas',0),(5,'m_vargas',1),(6,'h_baladin',0),(7,'h_baladin',2),(8,'a_kalac',0),(9,'a_kalac',1),(10,'ee_dundar',0),(11,'ee_dundar',2),(12,'z_gunes',0),(13,'z_gunes',2),(14,'i_aydin',1),(15,'i_aydin',2),(16,'e_sahin',0),(17,'e_karakurt',0),(18,'e_karakurt',2),(19,'s_akoz',0),(20,'s_akoz',1),(21,'k_akman',0),(22,'k_akman',2),(23,'d_cebecioglu',0),(24,'d_cebecioglu',1),(25,'a_aykac',0),(26,'user_2826',2),(27,'user_2826',3),(28,'user_9501',0),(29,'user_9501',3),(30,'user_3556',2),(31,'user_3556',3),(32,'user_7934',0),(33,'user_7934',3),(34,'user_4163',1),(35,'user_4163',3),(36,'user_2835',2),(37,'user_2835',3),(38,'user_8142',0),(39,'user_8142',3),(40,'user_2092',2),(41,'user_2092',3),(42,'user_3000',2),(43,'user_3000',3),(44,'user_8323',0),(45,'user_8323',3);
/*!40000 ALTER TABLE `playerteams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `position`
--

DROP TABLE IF EXISTS `position`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `position` (
  `position_ID` int DEFAULT NULL,
  `position_name` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `position`
--

LOCK TABLES `position` WRITE;
/*!40000 ALTER TABLE `position` DISABLE KEYS */;
INSERT INTO `position` VALUES (0,'Libero'),(1,'Setter'),(2,'Opposite hitter'),(3,'Outside hitter'),(4,'Middle blocker');
/*!40000 ALTER TABLE `position` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessionsquads`
--

DROP TABLE IF EXISTS `sessionsquads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessionsquads` (
  `squad_id` int NOT NULL AUTO_INCREMENT,
  `session_id` int DEFAULT NULL,
  `played_player_username` text,
  `position_id` int DEFAULT NULL,
  PRIMARY KEY (`squad_id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessionsquads`
--

LOCK TABLES `sessionsquads` WRITE;
/*!40000 ALTER TABLE `sessionsquads` DISABLE KEYS */;
INSERT INTO `sessionsquads` VALUES (1,0,'g_orge',0),(2,0,'c_ozbay',1),(3,0,'m_vargas',2),(4,0,'h_baladin',3),(5,0,'a_kalac',4),(6,0,'ee_dundar',4),(7,1,'c_ozbay',1),(8,1,'m_vargas',2),(9,1,'i_aydin',1),(10,1,'a_kalac',4),(11,1,'s_akoz',0),(12,1,'d_cebecioglu',3),(13,2,'g_orge',3),(14,2,'m_vargas',2),(15,2,'c_ozbay',1),(16,2,'a_kalac',4),(17,2,'s_akoz',0),(18,2,'a_aykac',0),(19,3,'ee_dundar',4),(20,3,'h_baladin',3),(21,3,'z_gunes',4),(22,3,'i_aydin',3),(23,3,'e_karakurt',2),(24,3,'k_akman',0),(25,4,'user_2826',2),(26,4,'user_9501',0),(27,4,'user_3556',1),(28,4,'user_7934',4),(29,4,'user_4163',3),(30,4,'user_2835',2),(31,5,'user_2826',1),(32,5,'user_9501',4),(33,5,'user_3556',0),(34,5,'user_7934',2),(35,5,'user_4163',0),(36,5,'user_2835',3),(37,6,'g_orge',0),(38,6,'m_vargas',2),(39,6,'c_ozbay',1),(40,6,'a_kalac',4),(41,6,'e_karakurt',3),(42,6,'a_aykac',0),(43,7,'g_orge',3),(44,7,'m_vargas',2),(45,7,'c_ozbay',1),(46,7,'a_kalac',4),(47,7,'e_karakurt',2),(48,7,'a_aykac',0);
/*!40000 ALTER TABLE `sessionsquads` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stadium`
--

DROP TABLE IF EXISTS `stadium`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stadium` (
  `stadium_id` int NOT NULL,
  `stadium_name` text,
  `stadium_country` text,
  PRIMARY KEY (`stadium_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stadium`
--

LOCK TABLES `stadium` WRITE;
/*!40000 ALTER TABLE `stadium` DISABLE KEYS */;
INSERT INTO `stadium` VALUES (0,'Burhan Felek Voleybol Salonu','TR'),(1,'GD Voleybol Arena','TR'),(2,'Copper Box Arena','UK');
/*!40000 ALTER TABLE `stadium` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team`
--

DROP TABLE IF EXISTS `team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team` (
  `team_id` int NOT NULL,
  `team_name` text,
  `coach_username` text,
  `contract_start` date DEFAULT NULL,
  `contract_finish` date DEFAULT NULL,
  `channel_id` int DEFAULT NULL,
  PRIMARY KEY (`team_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team`
--

LOCK TABLES `team` WRITE;
/*!40000 ALTER TABLE `team` DISABLE KEYS */;
INSERT INTO `team` VALUES (0,'Women A','d_santarelli','2021-12-25','2025-12-12',0),(1,'Women B','g_guidetti','2021-09-11','2026-09-11',1),(2,'U19','f_akbas','2021-08-10','2026-08-10',0),(3,'Women B','f_akbas','2000-08-10','2015-08-10',1),(4,'Women C','m_hebert','2024-04-01','2026-07-21',1),(5,'U19','o_deriviere','2015-08-10','2020-08-09',2),(6,'U19','a_derune','2005-08-10','2010-08-10',2);
/*!40000 ALTER TABLE `team` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-07 12:33:51
