// moment-fquarter.js
// version : 0.3
// author : Rob Allen
// license : MIT
// github.com/robgallen/moment-fquarter

(function () {

    function onload(moment) {
        moment.fn.fquarter = function (startMonth) {
            var adjustedDate, quarter, year, nextYear;
            startMonth = startMonth || 4; // default is April

            if (startMonth > 1) {
                adjustedDate = this.subtract("months", startMonth - 1);
				nextYear = "/" + adjustedDate.clone().add("years", 1).format("YYYY");
            } else {
                adjustedDate = this;
				nextYear = "";
            }

            quarter = Math.ceil((adjustedDate.month() + 1.0) / 3.0);
            year = adjustedDate.year();

            return {quarter: quarter, year: year, nextYear: nextYear}
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
