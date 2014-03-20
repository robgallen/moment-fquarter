// moment-fquarter.js
// version : 0.3
// author : Rob Allen
// license : MIT
// github.com/robgallen/moment-fquarter

(function () {

    function onload(moment) {
        moment.fn.fquarter = function (startMonth) {
            var result = {}, adjustedDate;
            startMonth = startMonth || 4; // default is April

            if (startMonth > 1) {
                adjustedDate = this.subtract("months", startMonth - 1);
                result.nextYear = adjustedDate.clone().add("years", 1).year();
            } else {
                adjustedDate = this;
                result.nextYear = false;
            }

            result.quarter  = Math.ceil((adjustedDate.month() + 1.0) / 3.0);
            result.year     = adjustedDate.year();

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
