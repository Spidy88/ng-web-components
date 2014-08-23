/**
 * Created by Spidy on 8/22/2014.
 */

angular.module('sample-app.phone')
    .controller('EmailDetailCtrl', [ '$route', '$routeParams', '$location', EmailDetailCtrl ] );

function EmailDetailCtrl( $route, $routeParams, $location ) {
    var that = this;
    var emails = [
        {
            id: 3,
            from: 'Santa',
            subject: 'Nice try. Better luck next year.',
            body: 'Hey Nick, I know you tried extra hard to be good this year but I hardly consider partaking in only half as many practical jokes constitutes the nice list. Better luck next year, enjoy the nice warm coal.'
        },
        {
            id: 2,
            from: 'Sandy Shorts',
            subject: 'You are gonna pay',
            body: 'If you think putting sand down my pants EVERY TIME you see me is ok, then think again! You\'ll pay for what you\'ve done.'
        },
        {
            id: 1,
            from: 'Bosco Griggs',
            subject: 'I dare you',
            body: 'I dare you for a full year to put sand down Sandy Shorts briches every time you see her. I\'ll give you my XBOX if you do!'
        }
    ];

    this.email = {};
    for ( var i = 0; i < emails.length; i++ ) {
        if ( emails[i].id == $routeParams.id ) {
            this.email = emails[i];
            break;
        }
    }
}