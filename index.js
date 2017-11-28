let moment = require('moment');

class Util {
	
	static get_current_unix_time(){
		return moment().valueOf();
	}
	
	static get_current_date_unix_time(){
		return moment().startOf('day').valueOf();
	}
	
	static check_in_range(start, end){
		let cur = this.get_current_unix_time();
		
		if (!start) return false;
		
		if (!end) {
			if (cur >= start) return true;
			else return false
		};
		
		if (cur >= start && cur <= end) return true;
		
		return false;
	}

	static add_datetime(day){
		return moment().add(day, 'day').format('DD/MM/YYYY HH:mm:ss');
	}
}

module.exports = Util;