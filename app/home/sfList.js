/**
 * Created by nferraro on 8/8/14.
 */

require('./sfTranspose');

angular.module('sample-app.home')
    .directive('sfList', sfList);

var MODES = {
        NONE: "none",
        SINGLE: "single",
        MULTI: "multi"
    },
    DEFAULT_MODE = MODES.NONE;

var fs = require('fs');

function sfList() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            items: '=',
            listener: '=?',
            mode: '@?'
        },
        link: sfListLink
    };

    function sfListLink( scope, element, attrs, controller, transcludeFn ) {
        var selectedItems = [],
            mode = MODES.NONE,
            listener;

        scope.selectItem = selectItem;
        scope.isSelected = isSelected;

        scope.$watchCollection( 'items', updateSelectedItems );
        scope.$watch( 'mode', updateSelectionMode );
        scope.$watch( 'listener', updateListener );

        transcludeFn(scope, function(clone) {
            element.append(clone);
        });

        function updateSelectedItems( value ) {
            var newSelectedItems = [];

            for ( var i = 0; i < selectedItems.length; i++ ) {
                for ( var j = 0; j < value.length; j++ ) {
                    if ( selectedItems[i].id === value[j].id ) {
                        newSelectedItems.push( selectedItems[i] );
                        break;
                    }
                }
            }

            if ( selectedItems.length !== newSelectedItems.length ) {
                selectedItems = newSelectedItems;
                notifySelectionListener();
            }

            selectedItems = newSelectedItems;
        }

        function updateSelectionMode( value ) {
            var validMode = false,
                oldMode = mode,
                newMode = value;

            // Validate new mode value
            for ( var m in MODES ) {
                if ( MODES[m] === value ) {
                    validMode = true;
                    break;
                }
            }

            // Default value if not set or is invalid
            if ( !value || !validMode ) {
                value = MODES.NONE;
            }

            // If the directive is going from multi select to single or none select
            if ( (oldMode === MODES.MULTI && newMode !== MODES.MULTI) || (oldMode === MODES.SINGLE && newMode === MODES.NONE) ) {
                // Clear selection if none select or single select with more than 1 item currently selected
                if ( (newMode === MODES.SINGLE && selectedItems.length > 1) || newMode === MODES.NONE ) {
                    clearSelection();
                }
            }

            mode = newMode;
        }

        function updateListener(value) {
            listener = value;
        }

        function selectMultiple(item) {
            for (var i = 0; i < selectedItems.length; i++) {
                // If item is already in list, deselect it
                if ( selectedItems[i].id === item.id ) {
                    selectedItems.splice(i, 1);
                    notifySelectionListener();
                    return;
                }
            }

            // If we've made it this far, it is not on the list. Add it!
            selectedItems.push(item);
            notifySelectionListener();
        }

        function selectSingle(item) {
            selectedItems = [ item ];
            notifySelectionListener();
        }

        function selectNone(item) {
            selectSingle(item);
            selectedItems = [];
        }

        function selectItem(item) {
            if (mode === MODES.MULTI) {
                selectMultiple(item);
            } else if (mode === MODES.SINGLE) {
                selectSingle(item);
            } else {
                selectNone(item);
            }
        }

        function clearSelection() {
            selectedItems = [];
            notifySelectionListener();
        }

        function isSelected(item) {
            for (var i = 0; i < selectedItems.length; i++) {
                if (item.id === selectedItems[i].id) {
                    return true;
                }
            }

            return false;
        }

        function notifySelectionListener() {
            if (listener && listener.onSelectionChanged) {
                listener.onSelectionChanged(selectedItems);
            }
        }
    }
}
