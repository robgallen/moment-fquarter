# moment-fquarter.js
This plugin provides fiscal quarterly formatting for moment objects.

## How to use?
Call the `fquarter` method on any moment object. It returns an object by default and can also return a string.
```javascript
moment("2013-04-01").fquarter();
// {quarter:1, year:2013, nextYear:2014}
moment("2013-04-01").fquarter().toString();
// Q1 2013/14
moment("2013-01-01").fquarter();
// {quarter:4, year:2012, nextYear:2013}
moment("2013-01-01").fquarter().toString();
// Q4 2012/13
```

The default fiscal year starting month is April. You can optionally pass in the start month, for example 1 (January) for normal calendar quarters, 7 or 9 (July or September) for academic quarters.
```javascript
moment("2013-09-01").fquarter(9);
// {quarter:1, year:2013, nextYear:2014}
moment("2013-09-01").fquarter(9).toString();
// Q1 2013/14
moment("2013-01-01").fquarter(9);
// {quarter:2, year:2012, nextYear:2013}
moment("2013-01-01").fquarter(9).toString();
// Q2 2012/13
```
If you use 1 as a starting month, you do not get the additional year as all the quarters fit within the single calendar year.
```javascript
moment("2013-01-01").fquarter(1);
// {quarter:1, year:2013, nextYear:null}
moment("2013-01-01").fquarter(1).toString();
// Q1 2013
moment("2013-09-01").fquarter(1);
// {quarter:3, year:2013, nextYear:null}
moment("2013-09-01").fquarter(1).toString();
// Q3 2013
```

## Changing the quarter initial
```javascript
week: {
	dow: 1, // Monday is the first day of the week.
	doy: 4  // The week that contains Jan 4th is the first week of the year.
},
quarter: "XYZ"
```
