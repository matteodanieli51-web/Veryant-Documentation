# WebDirect option

## Introduction

With isCOBOL EIS WebDirect option your organization can leverage existing COBOL syntax to develop and deploy a universally accessible, zero client, rich Internet applications (RIA) using standard COBOL screen sections and existing program procedure flow. No knowledge of object-oriented programming, JavaScript, HTML, or other Web languages is required.

WebDirect is a Java framework for presenting a graphical user interface, composed of elements such as windows, dialogs, menus, text fields and buttons, inside a Web Browser. This technology uses AJAX (asynchronous JavaScript and XML) techniques and the Comet web application model. The web application is deployed as a Servlet and therefore requires a Java-enabled web server, one that implements the Java Servlet specification from Sun Microsystems.

WebDirect takes advantage of ZK libraries, installed with the product. ZK is an event-driven, component-based framework to enable rich user interfaces for Web applications. ZK includes an AJAX-based event-driven engine, a rich component set of XUL and XHTML and a markup language called ZUML (ZK User Interface Markup Language).

The current version of ZK is:

- ZK 9.6.4

### Technical Notes

isCOBOL EIS WebDirect on the client side is a JavaScript application running inside a web browser. This environment has many limitations in comparison with a full GUI environment, e.g. only a few events are generated. JavaScript is a script language so its performance is not as good as compiled languages, although latest generation browsers are improving performance by the use of JIT (Just In Time) compilers.

WebDirect was not developed from scratch; it uses a library, ZK, that hides the JavaScript implementation and exposes a Java API. Veryant interfaces our set of GUI controls with the ones implemented in ZK. As a result, because our controls are similar to those provided by ZK, future updates will require less effort and provide more stable releases interfacing with ZK GUI controls. Alternatively, controls completely different from the ZK controls will require more development and testing time.

The client/server communication is performed through the HTTP protocol; since this protocol is very limited in functionality, a special technique (called "COMET") has been used in order to get the needed functionality. This technology is the up-to-date best technology in this area. However its performance is not as good as native protocols. Just as an example, it uses XML protocols, so it creates bigger messages and it requires considerable computation resources for marshalling.

### Installation Environment

In order to deploy and run programs using WebDirect, the programs' environment must be set up in a servlet container such as Apache Tomcat.

Veryant recommends using Apache Software Foundation Tomcat version 10. Previous Tomcat versions 9 and 8 are still supported, though.

The Apache Tomcat main page is http://tomcat.apache.org/

WebDirect is expected to work also on the following containers:

- IBM WebSphere
- BEA WebLogic
- Oracle OC4J and Oracle OPMN Release 3
- Liferay
- Pluto
- Jetty
- Resin
- WildFly (ex JBoss AS)

### Servlet Container and Web Browser Requirements

WebDirect runs on any web server that supports Servlet 2.3+ and JVM 1.5+.

The web browser must be able to run JavaScript and support Ajax (namely the XMLHttpRequest object). All the most popular web browsers are certified for ZK 9:

- Chrome
- Edge
- Firefox
- Safari
- Opera
