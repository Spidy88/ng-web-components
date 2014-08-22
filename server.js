/*
    Server setup and start.

    Uses the manifest and pack configuration of HapiJS:
    https://github.com/spumko/hapi/blob/master/docs/Reference.md#hapipack
 */

var Hapi = require('hapi'),
    Path = require('path'),
    ejs = require('ejs' ),
    manifest = {
      servers: [
          {
              port: 8008,
              host: "0.0.0.0",
              options: {
                  views: {
                      engines: {
                          'ejs': ejs
                      },
                      path: './server/views',
                      "isCached": false
                  },
                  debug: {
                      request: [
                          'hapi', // log request,handler,response flow
                          'error' // logs tagged with error
                      ]
                  }
              }
          }
      ],
      plugins: {
          './plugins/routes': {}
      }
  }

Hapi.Pack.compose(manifest, { relativeTo: Path.join(__dirname, 'server') }, function (err, pack) {

    pack.start(function () {
        pack.log(['debug', 'hapi'], 'server running');
    });
});