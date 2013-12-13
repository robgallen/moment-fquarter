!function (moment, undefined) {

	moment.fn.fquarter = function (startMonth) {
		var initial = this.lang()._quarter || "Q";
		var adjustedDate, quarter, year, nextYear;
		startMonth = startMonth || 4; // default is April

		if (startMonth > 1) {
			adjustedDate = this.subtract("months", startMonth - 1);
			nextYear = "/" + adjustedDate.clone().add("years", 1).format("YY");
		} else {
			adjustedDate = this;
			nextYear = "";
		}

		quarter = Math.ceil((adjustedDate.month() + 1.0) / 3.0);
		year = adjustedDate.year();

		return initial + quarter + " " + year + nextYear;
	};

}(this.moment)
