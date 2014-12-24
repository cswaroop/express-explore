var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


// routes

app.get('/stooges/:names?', function(req, res, next) {
    var name = req.params.name;
    
    switch ( name? name.toLowerCase() : '' ) {
	case 'larry':
	case 'curly':
	case 'moe':
	  res.send(name + ' is my favorite stooge');
	  break;
	default:
	  next();
    }
});

app.get('/stooges/*?', function() {
    res.send ('no stooges listed');
});

app.get('/?', function(req, res){
    res.send('hello world');
});


//app.get('/', routes.index);
//app.get('/users', user.list);

//http.createServer(app).listen(app.get('port'), function(){
//  console.log('Express server listening on port ' + app.get('port'));
//});

app.listen(port);
console.log('Listening on port' + port);

