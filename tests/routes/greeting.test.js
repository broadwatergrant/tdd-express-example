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

/* Dependencies */

const expect = require( 'chai' ).expect;
const { hello } = require( '../../routes/greeting' );

/* Route(s) Under Test */

describe( 'Greetings Route', function () {

  /* Test Variables */
  function BaseReq() {
    this.body = {}
  };

  let expectedEnglishGreeting = "Hello";
  let expectedSpanishGreeting = "Hola";
  let expectedGermanGreeting = "Hallo";
  let testName = 'Grant';

  let res = {
    sendCalledWith: '',
    send: function ( arg ) {
      this.sendCalledWith = arg
    }
  };

  /* Endpoints Under Test */

  describe( 'Hello() function', function () {

    /* Test Cases */

    // Test case 1
    it( 'Should error out if no name provided', function () {

      // Test case variables
      let req = new BaseReq();

      // Run function under test
      hello.endpoint( req, res );

      // Verify
      expect( res.sendCalledWith ).to.equal( hello.error.noNameProvided );

    } );

    // Test case 2
    it( 'Should reject invalid language', function () {

      // Test case variables
      let req = new BaseReq();

      // Initialize
      req.body.name = testName;
      req.body.language = 'bad-input';

      // Run function under test
      hello.endpoint( req, res );
      expect( res.sendCalledWith ).to.equal( hello.error.unrecognizedLanguage );

    } );

    // Test case 3
    it( 'Should respond in English by default', function () {

      // Test case variables
      let req = new BaseReq();

      // Initialize
      req.body.name = testName;

      // Run function under test
      hello.endpoint( req, res );
      expect( res.sendCalledWith ).to.equal( expectedEnglishGreeting + ', ' + testName );

    } );

  } );

} );



