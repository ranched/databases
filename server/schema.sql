CREATE DATABASE chat;

USE chat;

  -- CREATE TABLE messages (
  --   /* Describe your table here.*/
  --   chatID int NOT NULL AUTO_INCREMENT,
  --   userName VARCHAR(32),
  --   message VARCHAR(32),
  --   room VARCHAR(32),
  --   createdAt DATETIME,
  --   PRIMARY KEY (chatID)  
  -- );

  -- /* Create other tables and define schemas for them here! */




  -- /*  Execute this file from the command line by typing:
  --  *    mysql -u root < server/schema.sql
  --  *  to create the database and the tables.*/


  -- -- ---
  -- -- Globals
  -- -- ---

  -- -- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
  -- -- SET FOREIGN_KEY_CHECKS=0;

  -- -- ---
  -- -- Table 'messages'
  -- -- 
  -- -- ---

/*DROP TABLE IF EXISTS `messages`;*/
    
CREATE TABLE `messages` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(255) NULL DEFAULT NULL,
  `id_users` INTEGER NULL DEFAULT NULL,
  `id_room` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'room'
-- 
-- ---

/*DROP TABLE IF EXISTS `room`;*/
    
CREATE TABLE `room` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `roomname` VARCHAR(255) NULL DEFAULT 'lobby',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'users'
-- 
-- ---

/*DROP TABLE IF EXISTS `users`;*/
    
CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(32) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `messages` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (id_room) REFERENCES `room` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `room` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `messages` (`id`,`text`,`id_users`,`id_room`) VALUES
-- ('','','','');
-- INSERT INTO `room` (`id`,`roomname`) VALUES
-- ('','');
-- INSERT INTO `users` (`id`,`username`) VALUES
-- ('','');