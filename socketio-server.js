var express = require('express');
var http = require ('http');
var app = express ();
var server = http.createServer (app);
var io = require ("socket.io").listen (server);
var catchPhrase = ["Why I oughta..", 
		   "Nyuk Nyuk Nyuk!", 
		   "Poifect!",
		  "Spread Out!",
		  "Say a few syllables!",
		  "Soitenly!"];
app.set ("view engine", "jade");
app.set ("view options", { layout: true});
app.set ("views", __dirname + "/views");



