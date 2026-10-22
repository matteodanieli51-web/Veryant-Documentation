## Useful definitions

### User Agent / Client

The program that is used to request information from a server. This program is frequently a web browser, but it could be any program on the user's machine.

### HTTP

Hypertext Transport Protocol, a standard encoding scheme used to transmit requests to web servers and receive responses from web servers. HTTPS is a secure version of HTTP.

### Request

An HTTP packet that contains a command issued by the user agent. A request may simply GET a file from a web server, PUT a file to the web server, DELETE a file from the web server, or may POST data (such as a form) to the server, or it may cause a program to be run on the server. GET and POST are by far the most frequently used commands.

### URL

Uniform Resource Locator, the location of a resource on the internet. A URL consists of a scheme (in this context, HTTP or HTTPS), the name of a machine, and a path to a file. For example, https://www.veryant.com/eis/index.html specifies the file called index.html from directories on a server machine veryant.com using the HTTP scheme. When this is typed into a web browser, the browser issues a HTTP GET request on this file.

### REST

REST (Representational State Transfer) is an architectural style for distributed hypermedia systems and can be used to implement web services. While there is not a formal standard like SOAP, it is based on the four principle HTTP request types (GET, PUT, POST and DELETE), and URLs. In a REST architecture, a request payload be in any format desired, including XML or JSON.

### Web Server

A program that runs on a server and listens for HTTP requests. When a request is received, the web server processes the request or sends it on to another program (such as JEE Container like Tomcat) for processing.

### Web Service (or WS)

A software system designed to support interoperable machine-to-machine interaction over a network

### Servlet Container

A process that handles the execution of COBOL Servlets, turning them into a web page that the web server can deliver back to the client.

### Response

A HTTP packet that contains the response to the request. The response may be text, to be displayed in a web browser, or data encapsulated for consumption by the requesting program.

### Session

Requests are stateless, that is, the web server processes each request as if it had never received a previous request from the same user agent. A session is a BIS concept that allows sequential requests from the same user agent to be grouped together and preserves state information across requests on the server.

### AJAX

Ajax (an acronym for Asynchronous JavaScript and XML) is a group of interrelated web development techniques used on the client-side to create asynchronous web applications

### JS

JavaScript source code, or based on JavaScript source code

### SOAP

(from [http://www.w3.org/TR/2007/REC-soap12-part1-20070427](http://www.w3.org/TR/2007/REC-soap12-part1-20070427)): a SOAP message is specified as an XML infoset whose comment, element, attribute, namespace and character information items are able to be serialized as XML 1.0. Note, requiring that the specified information items in SOAP message infosets be serializable as XML 1.0 does NOT require that they be serialized using XML 1.0. A SOAP message Infoset consists of a document information item with exactly one member in its \[children\] property, which MUST be the SOAP Envelope element information item (see 5.1 SOAP Envelope). This element information item is also the value of the \[document element\] property. The \[notations\] and \[unparsed entities\] properties are both empty. The Infoset Recommendation \[XML InfoSet\] allows for content not directly serializable using XML; for example, the character #x0 is not prohibited in the Infoset, but is disallowed in XML. The XML Infoset of a SOAP Message MUST correspond to an XML 1.0 serialization \[XML 1.0\].

### WSDL

(from [https://www.w3.org/TR/2001/NOTE-wsdl-20010315](https://www.w3.org/TR/2001/NOTE-wsdl-20010315)): A WSDL document defines services as collections of network endpoints, or ports. In WSDL, the abstract definition of endpoints and messages is separated from their concrete network deployment or data format bindings. This allows the reuse of abstract definitions: messages, which are abstract descriptions of the data being exchanged, and port types which are abstract collections of operations. The concrete protocol and data format specifications for a particular port type constitutes a reusable binding. A port is defined by associating a network address with a reusable binding, and a collection of ports define a service.
