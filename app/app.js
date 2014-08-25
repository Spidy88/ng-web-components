/*
 * Main module of the application.
 */

'use strict';

var app = angular.module('sample-app', [
    'ngTouch',
    'sample-app.home',
    'sample-app.phone',
    'sample-app.tablet'
]);

module.exports = app;

require('./common');
require('./home');
require('./phone');
require('./tablet');

app.config( function( $routeProvider, $locationProvider, $httpProvider ) {
    $locationProvider.html5Mode( true );
});