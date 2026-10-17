## isCOBOL EIS improvements

### COBOL Java-Bean client generation

The compiler can now generate clients for web services (REST or SOAP) that can be used in a COBOL or Java context. While generating the service bridge program, the compiler can now also generate a client Bean for easy web service testing, for example is a JavaServer Page (JSP).

For example, if the Service Bridge is used to generate a Rest web service, the bean must be configured as

```cobol
iscobol.compiler.servicebridge.bean=rest
```

while if a SOAP web service was generated, then the configuration should be

```cobol
iscobol.compiler.servicebridge.bean=soap
```

Other configuration options can be set to further customize code generation

```cobol
iscobol.compiler.servicebridge.bean.prefix=prefix (default bean)
iscobol.compiler.servicebridge.bean.url=shttp://myip:8081/myservices (default "http://localhost:8080/services")
```

### Log http requests and responses

Http requests and responses handled by the HTTPHandler class can now be logged with new configuration options:

```cobol
iscobol.soap.log=true
```

globally enables logging of web service methods. Set

```cobol
iscobol.soap.log.methodname=true
```

to enable or disable logging for the SOAP service with the specified method name, overriding the global setting where needed.

```cobol
iscobol.soap.log.folder=/path
```

sets the folder where .log files are generated.

Logging can be fine-tuned by globally enabling or disabling logging for every implemented method in the web service, and overriding settings for individual methods.

The new log feature aids in debugging SOAP web services by logging the raw HTTP requests received from clients, including HTTP headers and SOAP XML, before they are parsed by the runtime, and the raw SOAP XML responses sent back to the clients.

Following is a sample of the data logged by the new feature:

```cobol
===============================
Request received at 2016-12-354 - 11.14.53.0758
Begin request id:1mj2hvpsysi7wne8lbwev9wb
Request headers:
User-Agent=Java/1.8.0_65
Connection=keep-alive
Host=127.0.0.1:55171
Accept=text/html, image/gif, image/jpeg, *; q=.2, */*; q=.2
Content-Length=1335
Content-Type=application/soap+xml; charset=utf-8
Request body:
Input Request
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://tempuri.org/SONGS">
<soapenv:Body>
<tns:SONGS>
<tns:lnk_op_code>F</tns:lnk_op_code>
<tns:lnk_song_data_in>
…
</tns:lnk_sd_authors_in>
</tns:lnk_song_data_in>
</tns:SONGS>
</soapenv:Body>
</soapenv:Envelope>
 
Output Response generated at 2016-12-354 - 11.14.53.0771
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://tempuri.org/SONGS">
<soapenv:Body>
<tns:SONGSResponse>
<tns:lnk_song_data_out>
<tns:lnk_sd_id_out>1</tns:lnk_sd_id_out>
<tns:lnk_sd_title_out>Let It Be </tns:lnk_sd_title_out>
<tns:lnk_sd_length_out>4:03 </tns:lnk_sd_length_out>
<tns:lnk_sd_artist_out>Beatles </tns:lnk_sd_artist_out>
<tns:lnk_sd_album_out>Let It Be </tns:lnk_sd_album_out>
<tns:lnk_sd_genre_out>Pop </tns:lnk_sd_genre_out>
<tns:lnk_sd_label_out>Apple Records </tns:lnk_sd_label_out>
<tns:lnk_sd_year_out>1970</tns:lnk_sd_year_out>
<tns:lnk_sd_authors_out>
<tns:lnk_sd_author_out>Paul McCartney </tns:lnk_sd_author_out>
</tns:lnk_sd_authors_out>
…
</tns:lnk_song_data_out>
<tns:lnk_return_status>
<tns:lnk_status>OK</tns:lnk_status>
<tns:lnk_file_status/>
<tns:lnk_status_message>Operation successful </tns:lnk_status_message>
</tns:lnk_return_status>
</tns:SONGSResponse>
</soapenv:Body>
</soapenv:Envelope>
```
