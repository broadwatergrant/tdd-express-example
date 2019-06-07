/*****************************************************************************
 *
 * File:
 *   routes/greeting.js
 *
 * Author:
 *   Grant Broadwater
 *
 * Description:
 *   Module to respond to a request with a greeting
 *
 *****************************************************************************/

// Comprehensive list of all possible errors returned by the hello endpoint
let helloErrors = {
  noNameProvided: "Error: Name is a required parameter",
  unrecognizedLanguage: "Error: Supported languages are: en, es, de"
};

// Public facing endpoint
function helloEndpoint( req, res, next ) {

  // Guards
  if ( !req.body || !req.body.name ) {
    res.send( helloErrors.noNameProvided );
    return;
  }

  // Local variables
  const name = req.body.name;
  const lang = req.body.language || 'en';

  switch ( lang ) {
    case 'en':
      return res.send( "Hello, " + name );
    default:
      return res.send( helloErrors.unrecognizedLanguage );
  }

};

module.exports = {

  // Hello endpoint
  hello: {
    error: helloErrors,
    endpoint: helloEndpoint
  }
};
