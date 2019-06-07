/*****************************************************************************
 *
 * File:
 *   tests/routes/greeting.test.js
 *
 * Author:
 *   Grant Broadwater
 *
 * Description:
 *   Unit tests for all routes in the greeting module
 *****************************************************************************/

const expect = require( 'chai' ).expect;

const { hello } = require( '../../routes/greeting' );

let req = {
  body: {
  }
};

let res = {
  sendCalledWith: '',
  send: function( arg ) {
    this.sendCalledWith = arg
  }
};

describe( 'Greetings Route', function() {

  describe( 'Hello() function', function() {
	
    it( 'Should error out if no name provided', function() {

      hello( req, res);
      expect( res.sendCalledWith.toLowerCase() ).to.contain( 'error' );

    } );

  } );

} );



