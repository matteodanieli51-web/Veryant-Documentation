## isCOBOL EIS

isCOBOL EIS, Veryant’s solution to write web-enabled COBOL programs, is constantly updated to provide more comprehensive web solutions. As of version isCOBOL 2023 R1, the HTTPClient class can set a Proxy server to be used when performing network activity, and a new specific log file has been implemented to log the activity.

### HTTPClient class

HTTPClient is a class that enables COBOL programs to interact with Web Services and HTTP Servers. This class has been updated with this new method signature:

```cobol
public void setProxy (String Ip, Int Port)
```

After invoking this method, the specified proxy server is used for all the following requests performed by the HTTPClient instance.

New configurations have been implemented to trace the HTTPClient activity:

- *iscobol.httpclient.logging=true* to enable logging
- *iscobol.httpclient.logfile=/path/to/logfile* to specify the log pathname

The log includes the request date and time, the request content, the response code, the response headers and the response content. If the file already exists, the new content is appended to it.

This is an example of the log content running the installed sample IP2GEO with the two new configuration settings:

```cobol
===============================
Connection requested at 2022-12-28 - 17:28:07.287
Connecting to: http://ws.cdyne.com/ip2geo/ip2geo.asmx
Request content:
<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://www.w3.org/2003/05/soap-envelope" xmlns:tns="http://ws.cdyne.com/"><soapenv:Body><tns:ResolveIP><tns:ipAddress>209.235.175.10</tns:ipAddress><tns:licenseKey/></tns:ResolveIP></soapenv:Body></soapenv:Envelope>
 
Response code: 200
Response Headers:
HTTP/1.1 200 OK
Cache-Control:no-cache
Pragma:no-cache
Content-Type:application/soap+xml; charset=utf-8
Expires:-1
Server:Microsoft-IIS/10.0
X-AspNet-Version:4.0.30319
X-Powered-By:ASP.NET
Date:Wed, 28 Dec 2022 16:28:06 GMT
Content-Length:658
Response content:
<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><soap:Body><ResolveIPResponse xmlns="http://ws.cdyne.com/"><ResolveIPResult><City>Nashville</City><StateProvince>TN</StateProvince><Country>United States</Country><Organization /><Latitude>36.1114</Latitude><Longitude>-86.869</Longitude><AreaCode>615</AreaCode><TimeZone /><HasDaylightSavings>false</HasDaylightSavings><Certainty>90</Certainty><RegionName /><CountryCode>US</CountryCode></ResolveIPResult></ResolveIPResponse></soap:Body></soap:Envelope>
===============================
Connection requested at 2022-12-28 - 17:39:21.3921
Connecting to: http://ws.cdyne.com/ip2geo/ip2geo.asmx
Request content:
...
```
