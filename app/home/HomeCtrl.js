/**
 * Created by nferraro on 8/8/14.
 */

angular.module('sample-app.home')
    .controller('HomeCtrl', [ HomeCtrl ] );

function HomeCtrl() {
    var that = this;

    this.junk = [
        {
            id: 1,
            label: 'Spare Tire'
        },
        {
            id: 2,
            label: 'Broken Rake'
        },
        {
            id: 3,
            label: 'Paint Supplies'
        },
        {
            id: 4,
            label: 'Tree House'
        },
        {
            id: 5,
            label: 'Halloween Decor'
        }
    ];

    this.selectedJunk = [];

    this.updateSelectedJunk = function updateSelectedJunk( items ) {
        console.log("Selection changed from: ", that.selectedJunk, " to ", items);

        while ( that.selectedJunk.length ) {
            that.selectedJunk.pop();
        }

        for ( var i = 0; i < items.length; i++ ) {
            that.selectedJunk.push(items[i]);
        }
    };

    this.adapter = {
        onSelectionChanged: this.updateSelectedJunk
    };

    this.changeItems = function changeItems() {
        console.log("Changing items");
        this.junk = [
            {
                id: 5,
                label: 'Halloween Decor'
            },
            {
                id: 10,
                label: 'Skis'
            },
            {
                id: 11,
                label: 'Tennis Racket'
            },
            {
                id: 12,
                label: 'Video Game'
            }
        ];
    };
}