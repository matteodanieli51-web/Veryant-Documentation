# COBOL Servlet option (OOP)

## Introduction

One of the initial purposes of the Java language was to enable programmers to make Web pages more interactive by embedding programs called applets. When a browser loads a Web page containing an applet, the browser downloads the applet byte code and executes it on the client machine. However, because of client compatibility, bandwidth, security and other issues, businesses needed an alternative solution where Web pages could be made to interact with server-side instead of client-side Java programs.

Server-side Java programming solves problems associated with applets. A servlet can be thought of as a server-side applet. However, when the code is executed on the server-side, there are no issues with browser compatibility or download times. The servlet byte code runs entirely on the server and only sends information to the client in a form that the client can understand.

Similar to a CGI program, a servlet takes requests from a client such as a Web browser, accesses data, applies business logic, and returns the results.

The servlet is loaded and executed by the Web server, and the client communicates with the servlet through the Web server using HTTP requests. This means that if your Web server is behind a firewall, your servlet is secure.

Servlet technology was developed to improve upon and replace CGI programs. Servlet technology is superior to CGI but uses the same HTML code. So you can switch from CGI programs to servlets on the back-end without having to change the programming on the front-end. Servlets use the CGI protocol.

In addition to Java technology's platform independence and promise of write once, run anywhere, servlets have other advantages over CGI programs:

- Servlets are persistent. They are loaded only once by the Web server and can maintain services such as database connections between requests.
- Servlets are fast. They need to be loaded only once by the Web server. They handle concurrent requests on multiple threads rather than in multiple processes. Thus, applications with servlets perform better and are more scalable than the same applications using CGI programs.
- Servlets are platform and Web server independent.
- Servlets can be used with a variety of clients, not just Web browsers.
- Servlets can be used with a variety of client-side and server-side Web programming techniques and languages.

The isCOBOL EIS introduces a new way to develop COBOL programs that acts like java servlet using *HTTPHandler* class functionality.

One of the most remarkable differences between COBOL servlets and CGI programs is that Web servers automatically maintain user session state for servlets. This means that the COBOL servlet can store user-session specific information in a user session object and retrieve that information on a subsequent call.

The isCOBOL EIS Framework uses this feature to associate the user session with a COBOL thread context. This makes sure that the same instances of COBOL programs get used each time they are called during a particular user session. In other words, COBOL programs called during a particular user session retain their file states and working-storage data between requests from that user session. If desired, the programmer can cancel the program at any time with the CANCEL statement. In fact, at first it will be necessary to cancel old CGI programs because they were written to assume that they have been cancelled between calls. Later, the CANCEL statement can be removed as the old CGI programs are updated to make use of the Stateful nature of COBOL servlets.

