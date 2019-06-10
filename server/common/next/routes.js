const routes = require('next-routes');
                                                    // Name   Page      Pattern
module.exports = routes()                           // ----   ----      -----
.add('home', '/', 'index')                          // home   index     /
.add('about')                                       // about  about     /about
