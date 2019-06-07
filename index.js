/*****************************************************************************
 *
 * File:
 *   Index.js
 *
 * Author:
 *   Grant Broadwater
 *
 * Description:
 *   Entry point for the tdd-express-example server
 *
 *****************************************************************************/

/* Dependencies */

const express = require( 'express' );

/* Application Variables */

const app = express();
const PORT = 8080;

/* Routes */

app.get( '/', function( req, res ) {

  res.send( 'Hello, world!' );

} );

/* Launch Server */

app.listen( PORT, function() {

  console.log( 'Listening on port ' + PORT );

} );
