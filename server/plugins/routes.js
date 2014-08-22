/*
 Simple plugin to register the application routes
 */

var pageRoutes = require('../routes/pages' ),
    assetRoutes = require('../routes/assets');

exports.register = function( plugin, options, next ) {
    plugin.route( pageRoutes.concat(assetRoutes) );
    next();
};

exports.register.attributes = {
    name: 'routes',
    version: require('../../package').version
};