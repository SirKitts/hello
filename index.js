function getDayGreetings() {
  const d = new Date();
  const hour = d.getHours();

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
