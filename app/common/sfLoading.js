/**
 * Created by nferraro on 8/22/14.
 */

angular.module('sample-app.common')
    .directive('sfLoading', sfLoading);

var fs = require('fs');

function sfLoading() {
    return {
        restrict: 'E',
        template: '<div ng-show="{{isLoading}}">Loading</div>',
        scope: {
            isLoading: '='
        }
    };
}
