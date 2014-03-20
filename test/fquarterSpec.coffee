describe "Fiscal quarters", ->
  it "Jan is Q4", ->
    expect(moment("2013-01-01").fquarter()).toEqual({quarter: 4, year: 2012, nextYear: 2013})
  it "Feb is Q4", ->
    expect(moment("2013-02-01").fquarter()).toEqual({quarter: 4, year: 2012, nextYear: 2013})
  it "Mar is Q4", ->
    expect(moment("2013-03-01").fquarter()).toEqual({quarter: 4, year: 2012, nextYear: 2013})
  it "Apr is Q1", ->
    expect(moment("2013-04-01").fquarter()).toEqual({quarter: 1, year: 2013, nextYear: 2014})
  it "May is Q1", ->
    expect(moment("2013-05-01").fquarter()).toEqual({quarter: 1, year: 2013, nextYear: 2014})
  it "Jun is Q1", ->
    expect(moment("2013-06-01").fquarter()).toEqual({quarter: 1, year: 2013, nextYear: 2014})
  it "Jul is Q2", ->
    expect(moment("2013-07-01").fquarter()).toEqual({quarter: 2, year: 2013, nextYear: 2014})
  it "Aug is Q2", ->
    expect(moment("2013-08-01").fquarter()).toEqual({quarter: 2, year: 2013, nextYear: 2014})
  it "Sep is Q2", ->
    expect(moment("2013-09-01").fquarter()).toEqual({quarter: 2, year: 2013, nextYear: 2014})
  it "Oct is Q3", ->
    expect(moment("2013-10-01").fquarter()).toEqual({quarter: 3, year: 2013, nextYear: 2014})
  it "Nov is Q3", ->
    expect(moment("2013-11-01").fquarter()).toEqual({quarter: 3, year: 2013, nextYear: 2014})
  it "Dec is Q3", ->
    expect(moment("2013-12-01").fquarter()).toEqual({quarter: 3, year: 2013, nextYear: 2014})

describe "Calendar quarters", ->
  it "Jan is Q1", ->
    expect(moment("2013-01-01").fquarter(1)).toEqual({quarter: 1, year: 2013, nextYear: false})
  it "Feb is Q1", ->
    expect(moment("2013-02-01").fquarter(1)).toEqual({quarter: 1, year: 2013, nextYear: false})
  it "Mar is Q1", ->
    expect(moment("2013-03-01").fquarter(1)).toEqual({quarter: 1, year: 2013, nextYear: false})
  it "Apr is Q2", ->
    expect(moment("2013-04-01").fquarter(1)).toEqual({quarter: 2, year: 2013, nextYear: false})
  it "May is Q2", ->
    expect(moment("2013-05-01").fquarter(1)).toEqual({quarter: 2, year: 2013, nextYear: false})
  it "Jun is Q2", ->
    expect(moment("2013-06-01").fquarter(1)).toEqual({quarter: 2, year: 2013, nextYear: false})
  it "Jul is Q3", ->
    expect(moment("2013-07-01").fquarter(1)).toEqual({quarter: 3, year: 2013, nextYear: false})
  it "Aug is Q3", ->
    expect(moment("2013-08-01").fquarter(1)).toEqual({quarter: 3, year: 2013, nextYear: false})
  it "Sep is Q3", ->
    expect(moment("2013-09-01").fquarter(1)).toEqual({quarter: 3, year: 2013, nextYear: false})
  it "Oct is Q4", ->
    expect(moment("2013-10-01").fquarter(1)).toEqual({quarter: 4, year: 2013, nextYear: false})
  it "Nov is Q4", ->
    expect(moment("2013-11-01").fquarter(1)).toEqual({quarter: 4, year: 2013, nextYear: false})
  it "Dec is Q4", ->
    expect(moment("2013-12-01").fquarter(1)).toEqual({quarter: 4, year: 2013, nextYear: false})

describe "Academic quarters", ->
  it "Jan is Q2", ->
    expect(moment("2013-01-01").fquarter(9)).toEqual({quarter: 2, year: 2012, nextYear: 2013})
  it "Feb is Q2", ->
    expect(moment("2013-02-01").fquarter(9)).toEqual({quarter: 2, year: 2012, nextYear: 2013})
  it "Mar is Q3", ->
    expect(moment("2013-03-01").fquarter(9)).toEqual({quarter: 3, year: 2012, nextYear: 2013})
  it "Apr is Q3", ->
    expect(moment("2013-04-01").fquarter(9)).toEqual({quarter: 3, year: 2012, nextYear: 2013})
  it "May is Q3", ->
    expect(moment("2013-05-01").fquarter(9)).toEqual({quarter: 3, year: 2012, nextYear: 2013})
  it "Jun is Q4", ->
    expect(moment("2013-06-01").fquarter(9)).toEqual({quarter: 4, year: 2012, nextYear: 2013})
  it "Jul is Q4", ->
    expect(moment("2013-07-01").fquarter(9)).toEqual({quarter: 4, year: 2012, nextYear: 2013})
  it "Aug is Q4", ->
    expect(moment("2013-08-01").fquarter(9)).toEqual({quarter: 4, year: 2012, nextYear: 2013})
  it "Sep is Q1", ->
    expect(moment("2013-09-01").fquarter(9)).toEqual({quarter: 1, year: 2013, nextYear: 2014})
  it "Oct is Q1", ->
    expect(moment("2013-10-01").fquarter(9)).toEqual({quarter: 1, year: 2013, nextYear: 2014})
  it "Nov is Q1", ->
    expect(moment("2013-11-01").fquarter(9)).toEqual({quarter: 1, year: 2013, nextYear: 2014})
  it "Dec is Q2", ->
    expect(moment("2013-12-01").fquarter(9)).toEqual({quarter: 2, year: 2013, nextYear: 2014})
