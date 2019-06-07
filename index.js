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

// External dependencies
const express = require( 'express' );

// Internal dependencies
const greeting = require( './routes/greeting' );

/* Application Variables */

const app = express();
const PORT = 8080;

/* Routes */

app.post( '/hello', greeting.hello.endpoint );

/* Launch Server */

app.listen( PORT, function() {

  console.log( 'Listening on port ' + PORT );

} );
