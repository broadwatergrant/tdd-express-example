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

module.exports = {

  // Hello endpoint
  hello: {

    error: {
      noNameProvided: "Error: Name is a required parameter",
      unrecognizedLanguage: "Error: Supported languages are: en, es, de"
    },

    // Public facing endpoint
    endpoint: function ( req, res ) {

      // Guards
      if ( !req.body.name ) {
        res.send( this.error.noNameProvided );
        return;
      }

      // Local variables
      const name = req.body.name;
      const lang = req.body.language || 'en';

      switch ( lang ) {
        case 'en':
          return res.send( "Hello, " + name );
        default:
          return res.send( this.error.unrecognizedLanguage );
      }

    }
  }
};
