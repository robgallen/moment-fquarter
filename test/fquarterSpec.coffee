describe "Fiscal quarters", ->
  it "Jan is Q4", ->
    expect(moment("2013-01-01").fquarter()).toEqual({quarter: 4, year: 2012, nextYear: 2013})
    expect(moment("2013-01-01").fquarter().toString()).toEqual("Q4 2012/13")
  it "Feb is Q4", ->
    expect(moment("2013-02-01").fquarter()).toEqual({quarter: 4, year: 2012, nextYear: 2013})
    expect(moment("2013-02-01").fquarter().toString()).toEqual("Q4 2012/13")
  it "Mar is Q4", ->
    expect(moment("2013-03-01").fquarter()).toEqual({quarter: 4, year: 2012, nextYear: 2013})
    expect(moment("2013-03-01").fquarter().toString()).toEqual("Q4 2012/13")
  it "Apr is Q1", ->
    expect(moment("2013-04-01").fquarter()).toEqual({quarter: 1, year: 2013, nextYear: 2014})
    expect(moment("2013-04-01").fquarter().toString()).toEqual("Q1 2013/14")
  it "May is Q1", ->
    expect(moment("2013-05-01").fquarter()).toEqual({quarter: 1, year: 2013, nextYear: 2014})
    expect(moment("2013-05-01").fquarter().toString()).toEqual("Q1 2013/14")
  it "Jun is Q1", ->
    expect(moment("2013-06-01").fquarter()).toEqual({quarter: 1, year: 2013, nextYear: 2014})
    expect(moment("2013-06-01").fquarter().toString()).toEqual("Q1 2013/14")
  it "Jul is Q2", ->
    expect(moment("2013-07-01").fquarter()).toEqual({quarter: 2, year: 2013, nextYear: 2014})
    expect(moment("2013-07-01").fquarter().toString()).toEqual("Q2 2013/14")
  it "Aug is Q2", ->
    expect(moment("2013-08-01").fquarter()).toEqual({quarter: 2, year: 2013, nextYear: 2014})
    expect(moment("2013-08-01").fquarter().toString()).toEqual("Q2 2013/14")
  it "Sep is Q2", ->
    expect(moment("2013-09-01").fquarter()).toEqual({quarter: 2, year: 2013, nextYear: 2014})
    expect(moment("2013-09-01").fquarter().toString()).toEqual("Q2 2013/14")
  it "Oct is Q3", ->
    expect(moment("2013-10-01").fquarter()).toEqual({quarter: 3, year: 2013, nextYear: 2014})
    expect(moment("2013-10-01").fquarter().toString()).toEqual("Q3 2013/14")
  it "Nov is Q3", ->
    expect(moment("2013-11-01").fquarter()).toEqual({quarter: 3, year: 2013, nextYear: 2014})
    expect(moment("2013-11-01").fquarter().toString()).toEqual("Q3 2013/14")
  it "Dec is Q3", ->
    expect(moment("2013-12-01").fquarter()).toEqual({quarter: 3, year: 2013, nextYear: 2014})
    expect(moment("2013-12-01").fquarter().toString()).toEqual("Q3 2013/14")

describe "Calendar quarters", ->
  it "Jan is Q1", ->
    expect(moment("2013-01-01").fquarter(1)).toEqual({quarter: 1, year: 2013, nextYear: null})
    expect(moment("2013-01-01").fquarter(1).toString()).toEqual("Q1 2013")
  it "Feb is Q1", ->
    expect(moment("2013-02-01").fquarter(1)).toEqual({quarter: 1, year: 2013, nextYear: null})
    expect(moment("2013-02-01").fquarter(1).toString()).toEqual("Q1 2013")
  it "Mar is Q1", ->
    expect(moment("2013-03-01").fquarter(1)).toEqual({quarter: 1, year: 2013, nextYear: null})
    expect(moment("2013-03-01").fquarter(1).toString()).toEqual("Q1 2013")
  it "Apr is Q2", ->
    expect(moment("2013-04-01").fquarter(1)).toEqual({quarter: 2, year: 2013, nextYear: null})
    expect(moment("2013-04-01").fquarter(1).toString()).toEqual("Q2 2013")
  it "May is Q2", ->
    expect(moment("2013-05-01").fquarter(1)).toEqual({quarter: 2, year: 2013, nextYear: null})
    expect(moment("2013-05-01").fquarter(1).toString()).toEqual("Q2 2013")
  it "Jun is Q2", ->
    expect(moment("2013-06-01").fquarter(1)).toEqual({quarter: 2, year: 2013, nextYear: null})
    expect(moment("2013-06-01").fquarter(1).toString()).toEqual("Q2 2013")
  it "Jul is Q3", ->
    expect(moment("2013-07-01").fquarter(1)).toEqual({quarter: 3, year: 2013, nextYear: null})
    expect(moment("2013-07-01").fquarter(1).toString()).toEqual("Q3 2013")
  it "Aug is Q3", ->
    expect(moment("2013-08-01").fquarter(1)).toEqual({quarter: 3, year: 2013, nextYear: null})
    expect(moment("2013-08-01").fquarter(1).toString()).toEqual("Q3 2013")
  it "Sep is Q3", ->
    expect(moment("2013-09-01").fquarter(1)).toEqual({quarter: 3, year: 2013, nextYear: null})
    expect(moment("2013-09-01").fquarter(1).toString()).toEqual("Q3 2013")
  it "Oct is Q4", ->
    expect(moment("2013-10-01").fquarter(1)).toEqual({quarter: 4, year: 2013, nextYear: null})
    expect(moment("2013-10-01").fquarter(1).toString()).toEqual("Q4 2013")
  it "Nov is Q4", ->
    expect(moment("2013-11-01").fquarter(1)).toEqual({quarter: 4, year: 2013, nextYear: null})
    expect(moment("2013-11-01").fquarter(1).toString()).toEqual("Q4 2013")
  it "Dec is Q4", ->
    expect(moment("2013-12-01").fquarter(1)).toEqual({quarter: 4, year: 2013, nextYear: null})
    expect(moment("2013-12-01").fquarter(1).toString()).toEqual("Q4 2013")

describe "Academic quarters", ->
  it "Jan is Q2", ->
    expect(moment("2013-01-01").fquarter(9)).toEqual({quarter: 2, year: 2012, nextYear: 2013})
    expect(moment("2013-01-01").fquarter(9).toString()).toEqual("Q2 2012/13")
  it "Feb is Q2", ->
    expect(moment("2013-02-01").fquarter(9)).toEqual({quarter: 2, year: 2012, nextYear: 2013})
    expect(moment("2013-02-01").fquarter(9).toString()).toEqual("Q2 2012/13")
  it "Mar is Q3", ->
    expect(moment("2013-03-01").fquarter(9)).toEqual({quarter: 3, year: 2012, nextYear: 2013})
    expect(moment("2013-03-01").fquarter(9).toString()).toEqual("Q3 2012/13")
  it "Apr is Q3", ->
    expect(moment("2013-04-01").fquarter(9)).toEqual({quarter: 3, year: 2012, nextYear: 2013})
    expect(moment("2013-04-01").fquarter(9).toString()).toEqual("Q3 2012/13")
  it "May is Q3", ->
    expect(moment("2013-05-01").fquarter(9)).toEqual({quarter: 3, year: 2012, nextYear: 2013})
    expect(moment("2013-05-01").fquarter(9).toString()).toEqual("Q3 2012/13")
  it "Jun is Q4", ->
    expect(moment("2013-06-01").fquarter(9)).toEqual({quarter: 4, year: 2012, nextYear: 2013})
    expect(moment("2013-06-01").fquarter(9).toString()).toEqual("Q4 2012/13")
  it "Jul is Q4", ->
    expect(moment("2013-07-01").fquarter(9)).toEqual({quarter: 4, year: 2012, nextYear: 2013})
    expect(moment("2013-07-01").fquarter(9).toString()).toEqual("Q4 2012/13")
  it "Aug is Q4", ->
    expect(moment("2013-08-01").fquarter(9)).toEqual({quarter: 4, year: 2012, nextYear: 2013})
    expect(moment("2013-08-01").fquarter(9).toString()).toEqual("Q4 2012/13")
  it "Sep is Q1", ->
    expect(moment("2013-09-01").fquarter(9)).toEqual({quarter: 1, year: 2013, nextYear: 2014})
    expect(moment("2013-09-01").fquarter(9).toString()).toEqual("Q1 2013/14")
  it "Oct is Q1", ->
    expect(moment("2013-10-01").fquarter(9)).toEqual({quarter: 1, year: 2013, nextYear: 2014})
    expect(moment("2013-10-01").fquarter(9).toString()).toEqual("Q1 2013/14")
  it "Nov is Q1", ->
    expect(moment("2013-11-01").fquarter(9)).toEqual({quarter: 1, year: 2013, nextYear: 2014})
    expect(moment("2013-11-01").fquarter(9).toString()).toEqual("Q1 2013/14")
  it "Dec is Q2", ->
    expect(moment("2013-12-01").fquarter(9)).toEqual({quarter: 2, year: 2013, nextYear: 2014})
    expect(moment("2013-12-01").fquarter(9).toString()).toEqual("Q2 2013/14")

describe "Backwards Fiscal Year quarters", ->
  it "January is FYQ2 of current calendar year", ->
    expect(moment('2015-01-01').fquarter(-3)).toEqual({quarter: 2, year: 2015, nextYear: 2016})
    expect(moment("2015-01-01").fquarter(-3).toString()).toEqual("Q2 2015/16")
  it "February is FYQ2 of current calendar year", ->
    expect(moment('2015-02-15').fquarter(-3)).toEqual({quarter: 2, year: 2015, nextYear: 2016})
    expect(moment("2015-02-15").fquarter(-3).toString()).toEqual("Q2 2015/16")
  it "March is FYQ2 of current calendar year", ->
    expect(moment('2015-03-15').fquarter(-3)).toEqual({quarter: 2, year: 2015, nextYear: 2016})
    expect(moment("2015-03-15").fquarter(-3).toString()).toEqual("Q2 2015/16")
  it "April is FYQ3 of current calendar year", ->
    expect(moment('2015-04-15').fquarter(-3)).toEqual({quarter: 3, year: 2015, nextYear: 2016})
    expect(moment("2015-04-15").fquarter(-3).toString()).toEqual("Q3 2015/16")
  it "May is FYQ3 of current calendar year", ->
    expect(moment('2015-05-15').fquarter(-3)).toEqual({quarter: 3, year: 2015, nextYear: 2016})
    expect(moment("2015-05-15").fquarter(-3).toString()).toEqual("Q3 2015/16")
  it "June is FYQ3 of current calendar year", ->
    expect(moment('2015-06-15').fquarter(-3)).toEqual({quarter: 3, year: 2015, nextYear: 2016})
    expect(moment("2015-06-15").fquarter(-3).toString()).toEqual("Q3 2015/16")
  it "July is FYQ4 of current calendar year", ->
    expect(moment('2015-07-15').fquarter(-3)).toEqual({quarter: 4, year: 2015, nextYear: 2016})
    expect(moment("2015-07-15").fquarter(-3).toString()).toEqual("Q4 2015/16")
  it "August is FYQ4 of current calendar year", ->
    expect(moment('2015-08-05').fquarter(-3)).toEqual({quarter: 4, year: 2015, nextYear: 2016})
    expect(moment("2015-08-05").fquarter(-3).toString()).toEqual("Q4 2015/16")
  it "September is Q4 of current calendar year", ->
    expect(moment('2015-09-15').fquarter(-3)).toEqual({quarter: 4, year: 2015, nextYear: 2016})
    expect(moment("2015-09-15").fquarter(-3).toString()).toEqual("Q4 2015/16")
  it "October is Q1 of next calendar year", ->
    expect(moment('2015-10-15').fquarter(-3)).toEqual({quarter: 1, year: 2016, nextYear: 2017})
    expect(moment("2015-10-15").fquarter(-3).toString()).toEqual("Q1 2016/17")
  it "November is Q1 of next calendar year", ->
    expect(moment('2015-10-15').fquarter(-3)).toEqual({quarter: 1, year: 2016, nextYear: 2017})
    expect(moment("2015-10-15").fquarter(-3).toString()).toEqual("Q1 2016/17")
  it "December is Q1 of next calendar year", ->
    expect(moment('2015-10-15').fquarter(-3)).toEqual({quarter: 1, year: 2016, nextYear: 2017})
    expect(moment("2015-10-15").fquarter(-3).toString()).toEqual("Q1 2016/17")
