/**
 * Created by nferraro on 8/22/14.
 */

var ngModule = angular.module('sample-app.phone', [ 'ngRoute', 'sample-app.common' ]);
module.exports = ngModule;

var fs = require('fs');
require('./PhoneCtrl');
require('./EmailCtrl');

ngModule.config( function ( $routeProvider, $locationProvider, $httpProvider ) {
        $routeProvider.when( '/phone', {
                template: fs.readFileSync(__dirname + '/emailList.html', 'utf8'),
                controller: 'PhoneCtrl',
                controllerAs: 'phone'
            }
        ).when( '/phone/:id', {
                template: 'Email',
                controller: 'EmailCtrl'
            }
        );
    }
);