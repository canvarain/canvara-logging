## canvara logging

Logging module for canvara.
All the other modules should use this module for logging anything.
This module exposes following functions

- error(message, error)
- warn(message, reason)
- info(message, data) data is optional (the data associated with the info message)
- debug(message, data) data is optional (the data associated with the debug message)

debug information should only be loggeg for application debugging.


> How the logging is performed is abstracted from the application. For Staging or DEV environment this module may log to file or console, but for production this module will log to any file and severe errors to persistenace storage. This will also backup the logs to any cloud storage periodically.


### How to use ?

Add a dependency to canvara-logging module in ```package.json``` file.
```require``` the module and use any one of the above functions.

```
var logging = require('canvara-logging');

logging.error(new Error('email cannot be null or empty'));
```