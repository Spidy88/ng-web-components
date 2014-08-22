/*
    Server routes for static assets (css, images etc)
 */
module.exports = [
    {
        method: 'GET',
        path: '/js/{p*}',
        handler: {
            directory: {
                path: './dist/js'
            }
        }
    },
    {
        method: 'GET',
        path: '/css/{p*}',
        handler: {
            directory: {
                path: './dist/css'
            }
        }
    }
];