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
        path: '/phone/{id?}',
        handler: function ( request, reply ) {
            return reply.view('phone');
        }
    },
    {
        method: 'GET',
        path: '/tablet/{id?}',
        handler: function ( request, reply ) {
            return reply.view('tablet');
        }
    }
];