module.exports = function (server) {

	// Define the route
	var index = function (request) {
			request.reply.view('index.html', { });
		}

	var can_require_shared = function (request) {
			request.reply.view('can_require_shared/index.html', { });
		}

	var ang_require_shared = function (request) {
			request.reply.view('ang_require_shared/index.html', { });
		}
		
// 		var config = {cache: { expiresIn: 100 }}

	server.route([
		{ method: 'GET', path: '/', handler: index },
		{ method: 'GET', path: '/can_require_shared/', handler: can_require_shared },
		{ method: 'GET', path: '/ang_require_shared/', handler: ang_require_shared }
	]);
	
	server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
        directory: { path: './public', listing: false, index: true }
    }
	});

}