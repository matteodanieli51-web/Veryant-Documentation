### REST runtime configuration

The following configuration is available for REST web services at run time.

#### Logging

Logging can be enabled globally and exceptions can be set on a per-method basis.

The following properties can be added to iscobol.properties to control REST services logging:

- iscobol.rest.log=0/1 enables or disables logging on a global level
- iscobol.rest.log.{methodname}=0/1 enables or disables logging for the REST service with the specified method name. This overrides the global settings specified above.
- iscobol.rest.log.folder= is used to configure the folder where log files should be generated. The file name is generated dynamically using the following pattern: *{methodname}-{SESSIONID}.log*.

For example: to enable logging for the SONGS web service add the following property:

```cobol
iscobol.rest.log.songs=1
```

To enable logging for all REST web services except for the SONGS web service use the following:

```cobol
iscobol.rest.log=1
iscobol.rest.log.songs=0
```

The log includes a trace of the HTTP request and response. Both header and body are traced. If a runtime error occurs during the service activity, such error is traced in the log as well.

The request body is always logged as a string, so if the content is not in text format (e.g. content-type is "application/x-www-form-urlencoded"), then unreadable characters may appear in the log file.
