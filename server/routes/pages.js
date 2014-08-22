/**
 * Created by nferraro on 8/5/14.
 */

module.exports = [
    {
        method: 'GET',
        path: '/{page?}',
        handler: function (request, reply) {
            return reply.view('home');
        }
    }
];