## isCOBOL EIS

isCOBOL EIS, Veryant’s solution to write web-enabled COBOL programs, is constantly updated to provide more comprehensive web solutions. As of version isCOBOL 2022 R2, the HTTPClient class can consume HEAD requests to retrieve only header fields.

### HTTPClient

HTTPClient is a class that enables COBOL programs to interact with Web Services. This class has been updated with these new method signatures:

```cobol
public void doHead (String strUrl, HTTPData.Params p)
public void doHead (String strUrl)
```

The new methods will perform an HTTP HEAD request on the provided URL and using optional HTTP parameters.

The HTTP HEAD method requests HTTP headers from the server as if the document was requested using the HTTP GET method. The only difference between HTTP HEAD and GET requests is that for HTTP HEAD, the server only returns headers without the body.

The HTTP HEAD method is much faster than the HTTP GET method because much less data is transferred in HEAD requests. Browsers use the HEAD method to update information about cached resources to check if the resource has been modified since the last time it was accessed. If the resource has not been modified, browsers reuse the local copy without issuing a new request. Otherwise, they request an updated version of the resource with a GET request.

The HEAD method can be also used to check if a file on the server exists, without actually downloading it if not really necessary.
