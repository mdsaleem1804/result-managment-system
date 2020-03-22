-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 22, 2020 at 06:56 PM
-- Server version: 5.5.32
-- PHP Version: 5.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `spiro-result-managment-system`
--
CREATE DATABASE IF NOT EXISTS `spiro-result-managment-system` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `spiro-result-managment-system`;

-- --------------------------------------------------------

--
-- Table structure for table `admin_login`
--

CREATE TABLE IF NOT EXISTS `admin_login` (
  `id` int(3) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `token` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin_login`
--

INSERT INTO `admin_login` (`id`, `email`, `password`, `token`) VALUES
(1, 'admin@gmail.com', 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `result_entry`
--

CREATE TABLE IF NOT EXISTS `result_entry` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `student_rollno` varchar(50) NOT NULL,
  `exam_type` varchar(50) NOT NULL,
  `subject1` int(3) NOT NULL COMMENT 'v',
  `subject2` int(3) NOT NULL,
  `subject3` int(3) NOT NULL,
  `subject4` int(3) NOT NULL,
  `subject5` int(3) NOT NULL,
  `subject6` int(3) NOT NULL,
  `total` int(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `result_entry`
--

INSERT INTO `result_entry` (`id`, `student_rollno`, `exam_type`, `subject1`, `subject2`, `subject3`, `subject4`, `subject5`, `subject6`, `total`) VALUES
(1, '101', 'InternalExam1', 50, 60, 50, 60, 40, 40, 300),
(2, '102', 'InternalExam1', 80, 50, 60, 75, 64, 98, 427);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE IF NOT EXISTS `student` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `student_name` varchar(100) NOT NULL,
  `student_rollno` varchar(100) NOT NULL,
  `student_gender` varchar(20) NOT NULL,
  `student_email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `student_name`, `student_rollno`, `student_gender`, `student_email`) VALUES
(1, 'Hana', '101', 'Female', 'hana@gmail.com'),
(2, 'raja', '102', 'Male', 'raja@gmail.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
