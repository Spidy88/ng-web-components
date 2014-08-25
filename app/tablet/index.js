/**
 * Created by nferraro on 8/22/14.
 */

var ngModule = angular.module('sample-app.tablet', [ 'ngRoute', 'sample-app.common' ]);
module.exports = ngModule;

var fs = require('fs');
require('./TabletCtrl');
require('./EmailCtrl');

ngModule.config( function ( $routeProvider, $locationProvider, $httpProvider ) {
        $routeProvider.when( '/tablet/:id', {
                template: fs.readFileSync(__dirname + '/email.html', 'utf8'),
                controller: 'EmailCtrl',
                controllerAs: 'ctrl'
            }
        );
    }
);