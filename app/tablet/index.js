/**
 * Created by nferraro on 8/22/14.
 */

var ngModule = angular.module('sample-app.tablet', [ 'ngRoute', 'sample-app.common' ]);
module.exports = ngModule;

var fs = require('fs');
require('./TabletCtrl');
require('./EmailListCtrl');
require('./EmailDetailCtrl');

ngModule.config( function ( $routeProvider, $locationProvider, $httpProvider ) {
        $routeProvider.when( '/tablet', {
                template: fs.readFileSync(__dirname + '/emailList.html', 'utf8'),
                controller: 'EmailListCtrl',
                controllerAs: 'ctrl'
            }
        ).when( '/tablet/:id', {
                template: fs.readFileSync(__dirname + '/emailDetail.html', 'utf8'),
                controller: 'EmailDetailCtrl',
                controllerAs: 'ctrl'
            }
        );
    }
);