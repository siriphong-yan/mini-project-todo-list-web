-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: tododb
-- ------------------------------------------------------
-- Server version	8.0.37

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
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task` (
  `task_id` int NOT NULL AUTO_INCREMENT,
  `task_name` varchar(80) NOT NULL,
  `task_desc` varchar(120) DEFAULT NULL,
  `task_bg_color` varchar(8) NOT NULL,
  `task_date` datetime NOT NULL,
  `user_id` int NOT NULL,
  `tast_status_id` int NOT NULL,
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`task_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task`
--

LOCK TABLES `task` WRITE;
/*!40000 ALTER TABLE `task` DISABLE KEYS */;
INSERT INTO `task` VALUES (1,'อ่านหนังสื้อก่อนนอน','หนังสืออยู่ตรงหน้าทีวี','#E2E2E2','2024-05-22 00:00:00',1,1,'2024-05-22 08:00:07','2024-05-22 13:55:36'),(2,'ไปซื้อของใช้ในร้าน 7-11','นำยาล้างจานหมด','#EAFFBD','2024-05-22 00:00:00',1,1,'2024-05-22 08:01:08','2024-05-22 13:55:36'),(3,'จับหมาจรจัด','มีนัดกับเทศบาลจับหมาจร','#FFCDCD','2024-05-22 01:00:00',1,1,'2024-05-22 12:29:02','2024-05-22 13:45:02'),(4,'ไปซื้อดินสำหรับปลูกต้นไม้','ซื้อดินพร้อมปุ๋ยสามคิว','#CDFFF6','2024-05-22 01:00:00',1,1,'2024-05-22 12:29:46','2024-05-22 13:46:47'),(5,'ฉลองศาล','ฉลองศาลพระภูมิตอนเข้ามืด','#EAFFBD','2024-05-22 01:00:00',1,1,'2024-05-22 12:34:01','2024-05-22 13:55:36'),(6,'เที่ยวงานบั่งไฟแสน จ.ยโสธร','นัดเพื่อนไว้แล้ว','#E2E2E2','2024-05-28 01:00:00',1,1,'2024-05-22 12:34:13','2024-05-22 13:55:36'),(7,'เรียนขับรถ','เรียนขับจักรยาน','#CDFFF6','2024-05-22 01:00:00',1,1,'2024-05-22 12:35:14','2024-05-22 13:49:47'),(8,'ไปดูต้นไม้','สถานที่ คลองหลวง ปทุมธานี','#EAFFBD','2024-05-28 01:00:00',1,1,'2024-05-22 12:35:27','2024-05-22 13:55:36'),(9,'รอดูโหนกระแส','คาดว่าจะเป็นตอนที่ไม่เครียด','#CDFFF6','2024-05-29 01:00:00',1,1,'2024-05-22 12:38:50','2024-05-22 13:20:51'),(10,'จัดกระเป๋าก่อนไปทำงาน','อย่าลืมที่ชาร์ตมือถือด้วยน่ะ','#CDFFF6','2024-05-22 01:00:00',1,1,'2024-05-22 12:43:11','2024-05-22 13:11:27'),(11,'ฟังเพลง','ชิวๆ','#FFCDCD','2024-05-22 01:00:00',1,1,'2024-05-22 12:48:03','2024-05-22 12:48:03'),(12,'บอกตัวเองให้ตื่น','ขึนมาเพื่อทำสิ่งต่างๆ','#D4CDFF','2024-05-23 01:00:00',1,1,'2024-05-22 12:49:08','2024-05-22 12:49:08'),(13,'ทำกับข้าวเข้า','ทำกับข้าวเช้าตอนบ่าย','#FBFFCD','2024-05-23 01:00:00',1,1,'2024-05-22 13:41:38','2024-05-22 13:41:38');
/*!40000 ALTER TABLE `task` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-22 22:59:53
