/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-05-13 15:47:45
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-05-22 20:41:18
 * @FilePath: \前端练习c:\Users\29901\Desktop\Code\WeTravel\cloudfunctions\mcloud\project\TRIP1\model\fav_model.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * Notes: 收藏实体
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY cclinux0730 (wechat)
 * Date: 2022-05-24 19:20:00 
 */


const BaseProjectModel = require('./base_project_model.js');

class FavModel extends BaseProjectModel {

}

// 集合名
FavModel.CL = BaseProjectModel.C('fav');

FavModel.DB_STRUCTURE = {
	_pid: 'string|true',
	FAV_ID: 'string|true',

	FAV_USER_ID: 'string|true',

	FAV_TITLE: 'string|true|comment=标题',
	FAV_TYPE: 'string|true|comment=类型',
	FAV_OID: 'string|true|comment=相关表主键',
	FAV_PATH: 'string|true|comment=路径',

	FAV_ADD_TIME: 'int|true',
	FAV_EDIT_TIME: 'int|true',
	FAV_ADD_IP: 'string|false',
	FAV_EDIT_IP: 'string|false',
};

// 字段前缀
FavModel.FIELD_PREFIX = "FAV_";

module.exports = FavModel;