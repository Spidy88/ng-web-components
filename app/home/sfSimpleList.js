/**
 * Created by Spidy on 8/20/2014.
 */

angular.module('sample-app.home')
    .directive('sfSimpleList', sfSimpleList);

var fs = require('fs');

function sfSimpleList() {
    return {
        restrict: 'E',
        template: fs.readFileSync(__dirname + '/sfSimpleList.html', 'utf8'),
        transclude: true,
        scope: {
            items: '=',
            listener: '=?',
            mode: '@?'
        }
    };
}
