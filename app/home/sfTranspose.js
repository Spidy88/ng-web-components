/**
 * Created by nferraro on 8/14/14.
 */

angular.module('sample-app.home')
    .directive('sfTranspose', sfTranspose);

function sfTranspose() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs, ctrl, transcludeFn) {
            transcludeFn(scope, function(clone) {
                element.empty();
                element.append(clone);
            });
        }
    };
}