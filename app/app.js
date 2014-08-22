/*
 * Main module of the application.
 */

'use strict';

var app = angular.module('sample-app', [
    'ngTouch',
    'sample-app.home',
    'sample-app.phone'
]);

module.exports = app;

require('./common');
require('./home');
require('./phone');

app.config( function( $routeProvider, $locationProvider, $httpProvider ) {
    $locationProvider.html5Mode( true );
});