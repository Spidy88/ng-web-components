/**
 * Created by nferraro on 8/22/14.
 */

var ngModule = angular.module('sample-app.phone', [ 'ngRoute', 'sample-app.common' ]);
module.exports = ngModule;

var fs = require('fs');
require('./PhoneCtrl');
require('./EmailListCtrl');
require('./EmailDetailCtrl');

ngModule.config( function ( $routeProvider, $locationProvider, $httpProvider ) {
        $routeProvider.when( '/phone', {
                template: fs.readFileSync(__dirname + '/emailList.html', 'utf8'),
                controller: 'EmailListCtrl',
                controllerAs: 'ctrl'
            }
        ).when( '/phone/:id', {
                template: fs.readFileSync(__dirname + '/emailDetail.html', 'utf8'),
                controller: 'EmailDetailCtrl',
                controllerAs: 'ctrl'
            }
        );
    }
);