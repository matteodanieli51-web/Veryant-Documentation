# Web Service option

## Introduction

A Web Service is a software system designed to support interoperable machine-to-machine interaction over a network.

Many organizations use multiple software systems for management. Different software systems often need to exchange data with each other, and a web service is a method of communication that allows two software systems to exchange this data over the internet. The software system that requests data is called a service requester or consumer, whereas the software system that would process the request and provide the data is called a service provider or producer.

Different software might be built using different programming languages, and hence there is a need for a method of data exchange that doesn't depend upon a particular programming language. Most types of software can, however, interpret *XML* or *JSON* tags. Thus, web services can use *XML* or *JSON* files for data exchange.

Two predominant web services frameworks, *REST* and *SOAP*, are used in web site development.

*REST* (Representational State Transfer) and *SOAP* (Simple Object Access Protocol) provide mechanisms for requesting information from resources, *REST*, or from endpoints, *SOAP*. Perhaps the best way to think of these technologies is as a method of making a remote procedure call against a well-defined API. *SOAP* has a more formal definition mechanism called WSDL, Web Services Definition Language, and is more complex to implement. *REST* uses the standard *HTTP* request and response mechanism, simplifying implementation and providing for a more flexible, loose coupling of the client and server. Note that *REST* also supports the transfer of non-XML messages such as *JSON* (JavaScript Object Notation).
