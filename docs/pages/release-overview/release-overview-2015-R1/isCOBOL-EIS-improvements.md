## isCOBOL EIS improvements

- Simplified the migration from legacy CGI programs

The IS EXTERNAL-FORM clause associates a group item with HyperText Markup Language (HTML) data using the Common Gateway Interface (CGI) specification, is now supported.

```cobol
01 MY-FORM IS EXTERNAL-FORM.
03 CGI-VAR1 PIC X(20) IDENTIFIED BY "Name".
03 CGI-VAR2 PIC X(50) IDENTIFIED BY CGI-VAR1.
```

isCOBOL already provided a more powerful syntax but having EXTERNAL-FORM clause could dramatically speed-up migration of existing CGI COBOL programs to isCOBOL.

- Embedded HTML support

Embedded HTML is another option to enable you to output HTML directly from a COBOL CGI program. Using Embedded HTML, you can output HTML statements, complete or partial HTML pages, or a combination of both, without including any special data declarations. HTML files that contains substitution marker can be merge with COBOL variable data.

```cobol
EXEC HTML
Customer Name :cust-name <BR>
END-EXEC
```

Embedded HTML support is enabled in isCOBOL compiler turned on the HTML precompiler with a special option -exec=html.

Support of Embedded HTML could dramatically speed-up migration of existing CGI COBOL programs to isCOBOL.

- Enhanced HTTP classes

Enhanced HTTPHandler class adding the ability to process html string with the new method:

```cobol
processHtmlString(htmlString)
```

This method is similar to the existing processHtmlFile() method, the difference is that the HTML code is contained in the alphanumeric variable txt instead of in a external file.

var must be an XML variable whose names correspond to the embedded values in the string. Example:

```cobol
       01  params identified by "_".
           02 identified by "Counter".
              03 Counter pic z(8)9.
           …
           lnk-area:>processHtmlString (
              "<H1>This page has been accessed %%Counter%% times.</H1>"
              params)
```

Enhanced HTTPClient class to post Multipart and download binary file with the new methods:

```cobol
doPostMultipart (siteAddress, parameters)
saveResponseRaw (fileName)
```

The first method is analogous to doPost, however it send the parameters using the multipart/form-data protocol.

The second method allows to save the response received from the web server in the specified binary file. Example:

```cobol
httpclient:>saveResponseRaw(fileName)
```

Enhanced HTTPData.Params class to add files in parameters with the new methods:

```cobol
addFile (fieldName, fileName, mimeType)
addFile (fieldName, fileName)
```

These methods allow to use the previous doPostMultipart method in HTTPClient class. The latter set the mime type of the file as "application/octet-stream". Example:

```cobol
           set pars = http-params:>new
                    :>add ("param1", 1)
                    :>addFile ("upfile_0", "myfile.txt")
           set httpclient = http-client:>new.
           httpclient:>doPostMultipart (
              "http://www.mywebsite.com/index.php?Section=n"
              pars
              ).
```
