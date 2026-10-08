### SOAP runtime configuration

The following configuration is available for SOAP web services at run time.

#### WSDL Location

The download of the WSDL file can be achieved using a URL such as:

```cobol
http://localhost:8080/test/servlet/SONGS?wsdl
```

where test is the webapp name and SONGS is the web service name. The download is requested via the ?wsdl parameter.

On the server the property [iscobol.soap.wsdl.location](../../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#soap_wsdl_location) controls the location of the wsdl file. It should point to a file system path where wsdl files are copies, ie:

```cobol
iscobol.soap.wsdl.location=/opt/tomcat/wsdl_files
```

The servlet appends the webservice name and ".wdsl" to this path to form a path name, which, if found, is then downloaded. If the file is not found or the property is not set, and http error 404 is returned.

#### Logging

Logging can be enabled globally and exceptions can be set on a per-method basis.

The following properties can be added to *iscobol.properties* to control SOAP services logging:

- iscobol.soap.log=0/1 enables or disables logging on a global level
- iscobol.soap.log.{methodname}=0/1 enables or disables logging for the SOAP service with the specified method name. This overrides the global settings specified above.
- iscobol.soap.log.folder= is used to configure the folder where log files should be generated. The file name is generated dynamically using the following pattern: *{methodname}-{SESSIONID}.log*.

For example: to enable logging for the SONGS web service add the following property:

```cobol
iscobol.soap.log.songs=1
```

To enable logging for all SOAP web services except for the SONGS web service use the following:

```cobol
iscobol.soap.log=1
iscobol.soap.log.songs=0
```

The log includes a trace of the HTTP request and response. Both header and body are traced. If a runtime error occurs during the service activity, such error is traced in the log as well.

If a SOAP envelope cannot be successfully extracted from the request, an exception log is written on standard error (catalina.out if using Tomcat). In the log there will be the exception message and the HTTP request data.
