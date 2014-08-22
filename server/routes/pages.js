/**
 * Created by nferraro on 8/5/14.
 */

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            return reply.view('home');
        }
    },
    {
        method: 'GET',
        path: '/phone',
        handler: function ( request, reply ) {
            return reply.view('phone');
        }
    }
];