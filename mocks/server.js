'use strict';

const Hapi = require('@hapi/hapi');

const MONTH_IN_SEC = 2592000;

const init = async () => {
  const server = Hapi.server({
    port: 8090,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
        credentials: true
      }
    },
  });

  server.route({
    method: 'GET',
    path: '/voting/1',
    handler: function (request, h) {
      return {
        "status": "In the pipeline!"
      }
    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);

};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();


