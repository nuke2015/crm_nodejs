/*
Navicat MySQL Data Transfer

Source Server         : sdfs
Source Server Version : 50613
Source Host           : localhost:3306
Source Database       : fengshop

Target Server Type    : MYSQL
Target Server Version : 50613
File Encoding         : 65001

Date: 2016-12-21 17:15:50
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `fs_article`
-- ----------------------------
DROP TABLE IF EXISTS `fs_article`;
CREATE TABLE `fs_article` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `title` varchar(100) NOT NULL COMMENT '标题',
  `pic` varchar(200) NOT NULL COMMENT '缩略图',
  `desp` varchar(200) NOT NULL COMMENT '描述',
  `content` text NOT NULL COMMENT '内容',
  `create_at` int(11) NOT NULL COMMENT '添加时间',
  `status` tinyint(1) NOT NULL COMMENT '状态',
  `user_id` int(11) NOT NULL COMMENT '作者',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COMMENT='小卖部_促销文章表';

-- ----------------------------
-- Records of fs_article
-- ----------------------------

-- ----------------------------
-- Table structure for `fs_menu`
-- ----------------------------
DROP TABLE IF EXISTS `fs_menu`;
CREATE TABLE `fs_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `title` varchar(50) NOT NULL COMMENT '菜单标题',
  `list_no` int(11) NOT NULL COMMENT '排序,按升序',
  `create_at` int(11) NOT NULL COMMENT '添加时间',
  `status` tinyint(1) NOT NULL COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf16 COMMENT='小卖部_系统菜单表';

-- ----------------------------
-- Records of fs_menu
-- ----------------------------
INSERT INTO `fs_menu` VALUES ('1', 'testsdff', '1', '123', '1');
INSERT INTO `fs_menu` VALUES ('2', 'wewer', '1', '123', '1');
INSERT INTO `fs_menu` VALUES ('3', 'wewer', '1', '123', '1');
INSERT INTO `fs_menu` VALUES ('4', 'wewer', '1', '123', '1');
INSERT INTO `fs_menu` VALUES ('5', 'wewer', '1', '123', '1');
INSERT INTO `fs_menu` VALUES ('6', 'wewer', '1', '123', '1');

-- ----------------------------
-- Table structure for `fs_user`
-- ----------------------------
DROP TABLE IF EXISTS `fs_user`;
CREATE TABLE `fs_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `uname` varchar(50) NOT NULL COMMENT '用户名',
  `passwd` varchar(32) NOT NULL COMMENT '密码需要做md5',
  `salt` char(6) NOT NULL,
  `group` tinyint(1) NOT NULL COMMENT '用户组[1超级管理员2采购员3销售员4普通客户]',
  `status` tinyint(1) NOT NULL COMMENT '状态',
  `create_at` int(11) NOT NULL COMMENT '注册时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf16 COMMENT='小卖部_用户表';

-- ----------------------------
-- Records of fs_user
-- ----------------------------
INSERT INTO `fs_user` VALUES ('1', 'admin', '90ebb6bd3490db4b9c4e63855738579d', 'zA6sE5', '1', '1', '1482244296');
