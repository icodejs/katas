/*
  Write a function which returns the day of the week for a specified date.

  While this sounds straight forward the years this function will be testing against are only within the range of 1-99.

  Any date range past 99 or before 1 will not have unit tests against.

  All dates in the unit tests used will be in the format of DD-MM-YYYY.

  17th of February 5 will be passed as '17-02-0005', though '17-2-5' should work just the same.

  Example:

  getGoodOldDay('19-11-0017'); // Returns Sunday
  getGoodOldDay('5-7-53'); // Returns Saturday
  Note/Hint:

  If in doubt, check the full date you are about to return the day of the week for.

  Solutions:

  function getGoodOldDay(input){
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dateInput = input.split('-').map(function(e){return +e;});
    var date = new Date();
    date.setFullYear(dateInput[2], dateInput[1]-1, dateInput[0]);
    return days[date.getDay()];
  };

  function getGoodOldDay(input){
      var date = input.split('-');
      date = new Date(date[2], date[1]-1, date[0]);
      switch (date.getDay())
      {
        case 0: var day = 'Saturday'; break;
        case 1: var day = 'Sunday'; break;
        case 2: var day = 'Monday'; break;
        case 3: var day = 'Tuesday'; break;
        case 4: var day = 'Wednesday'; break;
        case 5: var day = 'Thursday'; break;
        case 6: var day = 'Friday'; break;
      }
      return day;
  }
 */

function getGoodOldDay(input) {
  const [ d, m, y ] = input.split('-').map(v => parseInt(v, 10));
  let date = new Date(y, (m - 1), d);

  date.setFullYear(y);

  return [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ][date.getDay()];
}

export default getGoodOldDay;
