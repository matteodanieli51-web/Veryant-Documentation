## isCOBOL EIS

HTTPClient is a class that provides many useful features to communicate with existing HTTP services like Web Service (REST/SOAP) HTTP servers, and HTTPHandler is a class that provides a communication bridge between COBOL programs and HTML5/JavaScript pages using the HTTP protocol. Both classes have been upgraded with new features.

### HTTPClient

The HTTPClient class now allows you to specify the Encoding charset in the following methods:

- displayEx ( stream, hasDummyRoot, charset )
- displayJSON ( json, hasDummyRoot, charset )

The dummyRoot parameter is now supported in the getResponseJSON method:

- getResponseJSON( json, encoding, hasDummyRoot )

hasDummyRoot is an alphanumeric data item or literal hosting a Boolean value. If the Boolean value is TRUE, then the top-level item of Record-Definition is discarded and will not appear in the JSON stream

### HTTPHandler

The dummyRoot parameter is now supported in the acceptEx and acceptFromJSON methods:

- acceptEx( params, hasDummyRoot )
- acceptFromJSON( params, hasDummyRoot )
