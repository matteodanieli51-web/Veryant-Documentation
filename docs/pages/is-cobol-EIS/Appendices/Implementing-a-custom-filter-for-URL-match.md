## Implementing a custom filter for URL match

A filter is an object that is invoked at the preprocessing and postprocessing of a request.

It is mainly used to perform filtering tasks such as conversion, logging, compression, encryption and decryption, input validation etc.

The servlet filter is pluggable, i.e. its entry is defined in the web.xml file. If we remove the entry of a filter from the web.xml file, the filter will be removed automatically and we don't need to change the servlet.

In this article we explain how to implement a custom filter for URL match.

A complete and working example is installed with isCOBOL under the folder *samples/eis/webservice/bridge/rest*.

First, we’re going to create a class that implements the [Filter](https://tomcat.apache.org/tomcat-8.5-doc/servletapi/javax/servlet/Filter.html) interface. The filtering logic will be implemented in the doFilter() method.

```cobol
       class-id. SusiFilter as "SusiFilter" implements c-filter.
 
       configuration section.
       repository.
           class j-ioexception as "java.io.IOException"
           class c-filter as "javax.servlet.Filter"
           class c-filter-chain as "javax.servlet.FilterChain"
           class c-filter-config as "javax.servlet.FilterConfig"
           class c-ServletException as "javax.servlet.ServletException"
           class c-ServletRequest as "javax.servlet.ServletRequest"
           class c-ServletResponse as "javax.servlet.ServletResponse"
           .
       id division.
       object.
       data division.
       working-storage section.
 
       procedure division.
 
       id division.
       method-id. init as "init".
       linkage section.
       77  cfg object reference c-filter-config.
       procedure division using cfg raising c-ServletException.
       main.
       end method.
 
       id division.
       method-id. c-destroy as "destroy".
       procedure division.
       main.
       end method.
 
       id division.
       method-id. doFilter as "doFilter".
       working-storage section.
       linkage section.
       77  request           object reference c-ServletRequest.
       77  response          object reference c-ServletResponse.
       77  f-chain           object reference c-filter-chain.
 
       procedure division using request response f-chain
                        raising c-ServletException j-IOException.
       MAIN.
      *>   << filtering logic here >> 
       end method.
 
       end object.
```

### Filter logic

Refer to the installed sample for the COBOL code to be written in the *doFilter*() method.

Here is an explanation of the logic implemented in the sample.

Once the REST API has been planned, it needs to be described and mapped so that the isCOBOL runtime can understand it.

To do so, 2 string arrays are used

- tableReq: contains the patterns that define the application's REST API.
- tableReqIsc: contains the translation from the REST API to the standard isCOBOL notation using URL parameters.

Below are 3 samples:

```cobol
 move "GET/.+/songs/last"                  to tableReq(6)
 move "/servlet/SONGS?Operation=L"         to tableReqIsc(6)
 
 move "GET/.+/songs/print"                 to tableReq(7)
 move "/servlet/SONGS?Operation=p"         to tableReqIsc(7)
 
 move "GET/.+/songs/next/[0-9]+"           to tableReq(4)
 move "/servlet/SONGS?Operation=N&id={4}"  to tableReqIsc(4)
```

The matching process is based on regular expression checking.

The tableReq array holds a list of regular expression strings that describe REST URLs and parameters.

The string is composed of three logical parts:

1. The HTTP method (GET / PUT / POST / DELETE)
2. The Webapp name
3. The resource name and parameters needed for the REST call

In this sample the webapp name is matched using the regular expression ".+/" which accepts any string as the only resource used is SONGS.

The parameters are expressed using a combination of fixed strings and the following regular expression patterns:

1. \[0-9\] used to accept numeric parameter, of any length
2. \[a-zA-Z\] used to accpet to accept alphabetic parameter, of any length
3. .+ used to accept any kind of characters, of any length

The tableReqIsc array holds the URL needed by the isCOBOL runtime to perform the REST request. This string may contain placeholders, identified by an integer number enclosed in brackets, which represent the original request’s ordinal parameter, and will be explained below.

REST parameters are usually embedded in the URL (such as /songs/next/3) to request the song following the one with id 3. In this case, the 3 is a variable parameter, while "songs" and "next" are fixed parameters.

The tableReq entry to match this URL is: "GET/.+/songs/next/\[0-9\]+"

The matching process performs the following steps:

1. It determines the tableReq entry that matches the request URL
2. If none is found, a HTTP error 400 BAD REQUEST is returned
3. If one is found, the incoming URL request is split in segments on the "/" character
4. The tableReqIsc arrays is used to rearrange the URL parameters in the resulting isCOBOL URL
5. The request if forwarded to the resulting isCOBOL URL

For example, if the URL /songs/next/10 is requested, it matches the "GET/.+/songs/next/\[0-9\]+" tableReq entry, and the corresponding tableReqIsc entry is "/servlet/SONGS?Operation=N&id={4}".

The REST URL is split into the following 0-based array of parts:

- \[0\] - the request method, in this case "GET"
- \[1\] - the wepapp name, which we will not need
- \[2\] - the resource name, "songs"
- \[3\] - the parameter "next"
- \[4\] - the parameter "10"

The tableReqlsc entry indicates that parameter number 4 needs to be extracted, in this case "10" and the corresponding isCOBOL URL is then composed, yelding the final URL "/servlet/SONGS?Operation=N&id=10".

The request is redirected to this URL, and the isCOBOL program is invoked.

### Filter activation

Once the filter class is ready, your can edit the web.xml descriptor and add the following filter mapping:

```cobol
  <filter>
        <filter-name>isCOBOL filter</filter-name>
        <filter-class>SusiFilter</filter-class>
  </filter> 
  <filter-mapping>
        <filter-name>isCOBOL filter</filter-name>
        <url-pattern>/*</url-pattern>
  </filter-mapping>
```

From now on, all the requests received by the webapp will be processed by SusiFilter.
