## isCOBOL EIS

isCOBOL EIS, Veryant’s solution to write web-enabled COBOL programs, is constantly updated to provide more comprehensive web solutions. In isCOBOL Evolve 2021R1, the HTTPClient class can consume web services using the PATCH and DELETE methods, passing data in the request body.

### HTTPClient

HTTPClient is a class that allows COBOL programs to interact with Web Services. It has been updated to manage DELETE requests with data in the request body and PATCH requests.

The new method signatures are shown below:

```cobol
public doPatch ( strUrl )
public doPatch ( strUrl, params )
public doPatchEx ( strUrl, content )
public doPatchEx ( strUrl, type, content )
public doPatchEx ( strUrl, type, content, hasDummyRoot )
public doDeleteEx ( strUrl, content )
public doDeleteEx ( strUrl, type, content )
public doDeleteEx ( strUrl, type, content, hasDummyRoot )
```

This provides a more comprehensive coverage of existing REST APIs than ever before.
