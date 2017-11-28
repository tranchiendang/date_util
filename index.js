let moment = require('moment');

class Util {
	
	static get_current_unix_time(){
		return moment().valueOf();
	}

	static get_current_datetime(fm){
		return moment().format(fm);
	}
	
	static get_current_date_unix_time(){
		return moment().startOf('day').valueOf();
	}

	static convert_string_to_unix_time(data, fm) {
		return moment(data, fm).valueOf();
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

	static add_datetime(day, fm){
		return moment().add(day, 'day').format(fm);
	}
}

module.exports = Util;