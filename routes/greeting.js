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

  hello: function( req, res ) {
  
    if( !req.body.name ) {
    
      res.send( "Error: Name is a required parameter" );

    }

  }

}
