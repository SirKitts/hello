# @sirkitts/hello

[![npm (scoped)](https://img.shields.io/npm/v/@sirkitts/hello.svg)](https://github.com/sirkitts/hello)

### Install ###
```
$ npm install @sirkitts/hello
```

### Usage ###
```
const hello = require("@sirkitts/hello");

hello("World!");
//=> "Hello World!"
```

Hello World!

### Params (optional) ###
```
name        -> string - name of  a person
            -> default ""
            -> if no name, it will display a random greet based on greetingsList

greetings   -> string - commonly used greeting words
            -> default ""

greetingsList   -> list of greetings other than the default greetings
                -> default greetings ["Hello", "Hi", "Welcome", dayGreet]
                -> day greet is based on current time

exclamation -> exclamation point addeed to the end of greetings.
            -> default ""
```

### Samples ###
```
console.log( hello() );
console.log( hello("Jack"));
console.log( hello("John", "Welcome aboard!") );
console.log( hello("Jose", "", ["Hey", "Ahoy there", "No way"], "!") );

```
