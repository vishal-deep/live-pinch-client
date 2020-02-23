# NodeJs library for APIs of livepinch.com
## Refer https://docs.livepinch.com/api/ for more info

### Functions:
#### new ( constructor )
- Arguments: apiKey, apiVersion
#### updateProfile
- Arguments: profileKey, profileAttributes
#### pushEvent
- Arguments: profileKey, eventName, eventAttributes

#### Example
```
var livePinchClient = require('../livepinchClient');

var client = new livePinchClient( 'SECRET-API-KEY', '1.0' );

client.updateProfile( 'Test-Prof1', { 'ProfAttr1': 1 } );

client.pushEvent( 'Test-Prof1', 'Test-Event1', { 'EventAttr1': 'Event1' } );
```

### Refer https://docs.livepinch.com/api/ for more info
