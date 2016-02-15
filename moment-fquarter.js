// moment-fquarter.js
// version : 0.4
// author : Rob Allen
// license : MIT
// github.com/robgallen/moment-fquarter

(function () {

	function onload(moment) {
		moment.fn.fquarter = function (startMonth) {
			startMonth = startMonth || 4; // default is April
			var thisDate = this.clone();
			var initial = thisDate.local()._quarter || "Q";
			var result = {};
			var adjustedDate = thisDate;
			var nextYear = null;
			var fiscalCalendarIndex = buildFiscalCalendar(startMonth).indexOf(this.month());
			var monthsIntoQuarter = fiscalCalendarIndex % 3;
			var startOfQuarter = this.clone().startOf("month").subtract(monthsIntoQuarter, "months");

			if (startMonth > 1) {
				adjustedDate = thisDate.subtract(startMonth - 1, "months");
				nextYear = adjustedDate.clone().add(1, "years");
			}

			if (startMonth < 0) {
				adjustedDate = thisDate.subtract(12 + startMonth, "month").add(1, "year");
				nextYear = adjustedDate.clone().add(1, "year");
			}

			result.quarter = Math.ceil((adjustedDate.month() + 1.0) / 3.0);
			result.year = adjustedDate.year();
			result.nextYear = (nextYear) ? nextYear.year() : nextYear;
			result.start = startOfQuarter.format("YYYY-MM-DD");
			result.end = startOfQuarter.add(3, "months").subtract(1, 'day').format("YYYY-MM-DD");

			result.toString = function () {
				var str = initial + result.quarter + " " + result.year;
				return (nextYear) ? str + "/" + nextYear.format("YY") : str;
			};

			return result;
		};

		return moment;
	}

	function buildFiscalCalendar(startMonth) {
		if (startMonth < 0) {
			startMonth = 13 + startMonth;
		}

		startMonth--;
		var months = [];

		for (var i = 0; i < 12; i++) {
			months.push(startMonth);
			startMonth++;
			if (startMonth > 11) startMonth = 0;
		}

		return months;
	}

	if (typeof define === "function" && define.amd) {
		define("moment-fquarter", ["moment"], onload);
	} else if (typeof module !== "undefined") {
		module.exports = onload(require("moment"));
	} else if (typeof window !== "undefined" && window.moment) {
		onload(window.moment);
	}

}).apply(this);
