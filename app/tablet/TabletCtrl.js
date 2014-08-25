/**
 * Created by nferraro on 8/22/14.
 */

angular.module('sample-app.tablet')
    .controller('TabletCtrl', [ '$route', '$routeParams', '$location', TabletCtrl ] );

function TabletCtrl( $route, $routeParams, $location ) {
    this.owner = {
        name: "Nick"
    };

    this.emails = [
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

    this.selectEmail = function selectEmail( email ) {
        console.log("Email selected: ", email);
        $location.path( 'tablet/' + email[0].id );
    };

    this.adapter = {
        onSelectionChanged: this.selectEmail
    };
    this.mode = "single";
}