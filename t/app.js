// Script to test livepinchClient module

var client = require('../livepinchClient');

var lpc = new client( 'SECRET-API-KEY', '1.0' );

lpc.updateProfile( 'Test-Prof1', { 'ProfAttr1': 1 } );

lpc.pushEvent( 'Test-Prof1', 'Test-Event1', { 'EventAttr1': 'Event1' } );
