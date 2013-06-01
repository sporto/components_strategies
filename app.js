var Hapi = require('hapi');

var options = {
	views: {
		path: 'views',
		engines: {
			html: 'ejs'
		}
	}
};

// Create a server with a host, port, and options
var server = new Hapi.Server('localhost', 8080, options);

require('./routes')(server);

// Start the server
server.start();