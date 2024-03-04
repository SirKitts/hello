function getDateAndTimeToday() {
  const date = new Date();
  const time = new Date().toTimeString().split(" ");
  
  const month = date.getMonth()+1;
  const monthStr = (month < 10) ? "0"+month : month;

  const day = date.getDate();
  const dayStr = (day < 10) ? "0"+day : day;

  let offset = "0";
  if (time[1].includes("+")) {
    offset = Math.abs(parseInt(time[1].split("+")[1].substring(0,2)));
  } else {
    offset = -Math.abs(parseInt(time[1].split("-")[1].substring(0,2)));
  }

  const hrs = Math.abs(date.getHours() + offset);
  const mins = date.getMinutes();
  const secs = date.getSeconds();
  const hrsStr = (hrs < 10) ? "0"+hrs : hrs;
  const minsStr = (mins < 10) ? "0"+mins : mins;
  const secsStr = (secs < 10) ? "0"+secs : secs;

  const currentDate = [date.getFullYear(), monthStr, dayStr].join("-");
  const currentTime = [hrsStr, minsStr, secsStr].join(":");
  const localeDateTime = [currentDate, currentTime].join(" ");

  return new Date(localeDateTime);
};

function getDayGreetings() {
  let today = new Date(getDateAndTimeToday());
  let time = new Date().toTimeString().split(" ");

  let offset = "0";
  if (time[1].includes("+")) {
    offset = Math.abs(parseInt(time[1].split("+")[1].substring(0,2)));
  } else {
    offset = -Math.abs(parseInt(time[1].split("-")[1].substring(0,2)));
  }
  
  let hour = today.getHours() - offset;
  if (hour < 0 ) {
    hour = hour * -1;
  }

  if (hour >= 17 ) {
    return 'Good evening'
  } else if (hour >= 11 ) {
    return 'Good afternoon';
  } else {
    return 'Good morning';
  }
};

function hello(name, greetings = "", greetingsList = [], exclamation = "") {
  const dayGreet = getDayGreetings();
  const greetList = ["Hello", "Hi", "Welcome", dayGreet];

  let greetElement = greetList[Math.floor(Math.random() * greetList.length)];

  if (greetingsList.length > 0) {
    greetElement = greetingsList[Math.floor(Math.random() * greetingsList.length)];
  }

  return [(greetings || greetElement) + exclamation, name].join(" ");
};

module.exports = hello;
