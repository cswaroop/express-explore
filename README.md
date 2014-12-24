How to create express app?
==========================

Assuming you have latest node installed

* `npm install -g express-generator`

This will bring a new command `express` in your console.  Use it to create a new application

* `express myApp` or you can create a new dir of your choice and  `cd <your_dir>` and do a `express .`

* `npm install express`
* `npm install jade`
* `npm install socket.io`



Routes
======

* `/stooges/[name]`
  Expecting the name of one of the stooges as input
* `/stooges/`
  A fallback from the previous route, in case the name provided was not found
* `/`
  A default route used to access the application's home page

