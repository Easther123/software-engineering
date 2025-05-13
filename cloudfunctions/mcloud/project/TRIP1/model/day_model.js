/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-05-13 15:47:45
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-05-22 18:33:30
 * @FilePath: \前端练习c:\Users\29901\Desktop\Code\WeTravel\cloudfunctions\mcloud\project\TRIP1\model\day_model.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * Notes: 预约日期设置实体
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY cclinux0730 (wechat)
 * Date: 2021-01-25 19:20:00 
 */


const BaseProjectModel = require('./base_project_model.js');

class DayModel extends BaseProjectModel {

}

// 集合名
DayModel.CL = BaseProjectModel.C('day'); 

DayModel.DB_STRUCTURE = {
	_pid: 'string|true',
	DAY_ID: 'string|true',
	DAY_MEET_ID: 'string|true',

	day: 'string|true|comment=日期 yyyy-mm-dd',
	dayDesc: 'string|true|comment=描述',
	times: 'array|true|comment=具体时间段',
	/*
		{
			1. mark=唯一性标识,
			2. start=开始时间点hh:mm ～,  
			3. end=结束时间点hh:mm, 
			4. isLimit=是否人数限制, 
			5. limit=报名上限,  
			6. status=状态 0/1
			7. stat:{ //统计数据 
				succCnt=1预约成功*, 
				cancelCnt=10已取消, 
				adminCancelCnt=99后台取消
			}
		}', 
	*/

	DAY_ADD_TIME: 'int|true',
	DAY_EDIT_TIME: 'int|true',
	DAY_ADD_IP: 'string|false',
	DAY_EDIT_IP: 'string|false',
};

// 字段前缀
DayModel.FIELD_PREFIX = "DAY_";



module.exports = DayModel;