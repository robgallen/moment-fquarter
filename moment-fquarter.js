// moment-fquarter.js
// version : 1.0
// author : Rob Allen
// license : MIT
// github.com/robgallen/moment-fquarter

(function () {

	function onload(moment) {
		moment.fn.fquarter = function (startMonth) {
			var thisDate = this.clone();
			var initial = thisDate.local()._quarter || "Q";
			var result = {}, adjustedDate, nextYear = null;
			startMonth = startMonth || 4; // default is April
			var originalDate = this.clone();

			if (startMonth > 1) {
				adjustedDate = thisDate.subtract(startMonth - 1, "months");
				nextYear = adjustedDate.clone().add(1, "years");
			} else {
				adjustedDate = thisDate;
			}
			if (startMonth < 0) {
				adjustedDate = thisDate.subtract(12 + startMonth, "month").add(1, "year");
				nextYear = adjustedDate.clone().add(1, "year");
			} else {
				adjustedDate = thisDate;
			}

			result.quarter = Math.ceil((adjustedDate.month() + 1.0) / 3.0);
			result.year = adjustedDate.year();
			result.nextYear = (nextYear) ? nextYear.year() : nextYear;
			result.start = originalDate.set("date", 1).subtract((originalDate.month()+12)%3, "months").format("YYYY-MM-DD");
			result.end =   originalDate.set("date", 1).subtract((originalDate.month()+12)%3, "months").add(3, "months").subtract(1, "day").format("YYYY-MM-DD");

			result.toString = function () {
				var str = initial + result.quarter + " " + result.year;
				return (nextYear) ? str + "/" + nextYear.format("YY") : str;
			};

			return result;
		};

		return moment;
	}

	if (typeof define === "function" && define.amd) {
		define("moment-fquarter", ["moment"], onload);
	} else if (typeof module !== "undefined") {
		module.exports = onload(require("moment"));
	} else if (typeof window !== "undefined" && window.moment) {
		onload(window.moment);
	}

}).apply(this);
