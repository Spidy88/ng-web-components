/*
 * Main module of the application.
 */

'use strict';

module.exports = angular.module('sample-app', [
    'ngTouch',
    'sample-app.home'
]);

require('./home');