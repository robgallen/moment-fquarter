// moment-fquarter.js
// version : 0.4
// author : Rob Allen
// license : MIT
// github.com/robgallen/moment-fquarter

(function () {

	function onload(moment) {
		moment.fn.fquarter = function (startMonth) {
			var initial = this.local()._quarter || "Q";
			var result = {}, adjustedDate, nextYear = null;
			startMonth = startMonth || 4; // default is April

			if (startMonth > 1) {
				adjustedDate = this.subtract(startMonth - 1, "months");
				nextYear = adjustedDate.clone().add(1, "years");
			} else {
				adjustedDate = this;
			}
			if (startMonth < 0) {
				adjustedDate = this.subtract(12 + startMonth, "month").add(1, "year");
				nextYear = adjustedDate.clone().add(1, "year");
			} else {
				adjustedDate = this;
			}

			result.quarter = Math.ceil((adjustedDate.month() + 1.0) / 3.0);
			result.year = adjustedDate.year();
			result.nextYear = (nextYear) ? nextYear.year() : nextYear;

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
