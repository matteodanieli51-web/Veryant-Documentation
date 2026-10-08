## isCOBOL EIS

The isCOBOL EIS features have been improved in several areas, such as the HTTPHandler class, webDirect routines, and Stream2Wrk utility.

### HTTPHandler improvements

isCOBOL EIS now allows access to key Servlet objects in both COBOL Servlets and webDirect applications.

The HTTPHandler class provides the following new methods:

- HTTPHandler:>getRequest()
- HTTPHandler:>getResponse()
- HTTPHandler:>getSession()

These methods return the instance of the HTTP Request, Response and Session respectively. For example, these objects can be used to retrieve the IP address of the end user in your Servlet, using the following code:

```cobol
       repository.
           class HTTPHandler as "com.iscobol.rts.HTTPHandler"
           class HTTPRequest as "javax.servlet.ServletRequest"
           .       
       working-storage section.
       77 servlet-request object reference HTTPRequest.
       77 client-ip pic x any length.
       linkage section.
       77 http-handler object reference HTTPHandler.
       procedure division using http-handler.
           set servlet-request to http-handler:>getRequest() 
                               as HTTPRequest.
           set client-ip to servlet-request:>getRemoteAddr().

```

### webDirect improvements

The webDirect routine WD2$SESSION has been enhanced with new properties that return information about the servlet context and the HTTP session of the servlet managing the COBOL application. They are:

- iscobol.wd2.servletcontext.name
- iscobol.wd2.servletcontext.realpath
- iscobol.wd2.servletcontext.path
- iscobol.wd2.servletcontext.serverinfo
- iscobol.wd2.servletcontext.majorversion
- iscobol.wd2.servletcontext.minorversion
- iscobol.wd2.httpsession.id
- iscobol.wd2.httpsession.creationtime

For example, to retrieve the real path of an application deployed in a servlet container, the following code can be used:

```cobol
       working-storage section.
       copy "iscobol.def".
       77 real-path pic x any length.
       procedure division.
           call "wd2$session" using wd2-get-session-value
                                    "iscobol.wd2.servletcontext.realpath"
                                    real-path.
```

Also, the rendering of controls in webDirect has been upgraded to improve screen section display.

### Stream2Wrk improvements

The Stream2Wrk utility provides a new option to specify the name of the root element when processing JSON streams that have no root element.

For example, the following JSON:

```cobol
         {
          "name":"John",
          "age":30,
          "cars":[ "Ford", "BMW", "Fiat" ]
          }
```

would generate the following working-storage structure:

```cobol
       01 json2wrk identified by ''.
          03 name identified by 'name'.
             05 name-data pic x any length.
          03 age identified by 'age'.
             05 age-data pic x any length.
          03 cars identified by 'cars' occurs dynamic capacity cars-count.
             05 cars-data pic x any length.
```

To change, for example, the automatically generated “json2wrk” name created by Stream2Wrk to “allcars”, the following command line can be used:

```cobol
$ stream2wrk json yourfile.json –r allcars
```

The result will be:

```cobol
          01 allcars identified by ''.
             03 name identified by 'name'.
                05 name-data pic x any length.
             03 age identified by 'age'.
                05 age-data pic x any length.
             03 cars identified by 'cars' occurs dynamic capacity cars-count.
                05 cars-data pic x any length. 
```
