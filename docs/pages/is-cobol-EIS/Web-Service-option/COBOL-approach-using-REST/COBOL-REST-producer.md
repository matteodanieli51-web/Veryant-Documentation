### COBOL REST producer

In order to develop a COBOL REST producer (server-side), to process requests and provide data, the COBOL program has to be transformed to be executed like a Web Service REST. This objective is achieved through the *HTTPHandler* class that allows communication with HTML pages through AJAX retrieving data and printing results.

In the isCOBOL sample folder you will find the folder eis/webservices/rest that contains an example of a COBOL REST producer (REST Web Service) and an example of a COBOL REST consumer to be used to test the service.

In the server folder there is a COBOL source program called "ISFUNCTIONS.cbl" that exposes two services: ISFUNCTION_GETZIP and ISFUNCTION_GETCITY that allow searching a US city name by zip code or by name.

This program has three entries:

- MAIN, the default entry where the values to be used are loaded from the JSON stream:

```cobol
           move "94101"         to  a-zipcode(1).
           move "San Francisco" to  a-city(1).
           move "San Francisco" to  a-county(1).
           move "California"    to  a-state(1).
 
           move "92123"         to  a-zipcode(2).
           move "San Diego"     to  a-city(2).
           move "San Diego"     to  a-county(2).
           move "California"    to  a-state(2).
 
           move "10001"         to  a-zipcode(3).
           move "New York"      to  a-city(3).
           move "New York"      to  a-county(3).
           move "New York"      to  a-state(3).
 
           move "89044"         to  a-zipcode(4).
           move "Las Vegas"     to  a-city(4).
           move "Clark"         to  a-county(4).
           move "Nevada"        to  a-state(4).
 
           move "Program Loaded" to ok-message;;
           comm-area:>displayJSON (ok-page).
           goback.
```

- ISFUNCTION_GETZIP, a COBOL entry point that receives into *isfunction-getZipCode* working storage structure, a name of a US city and returns the zip code into *isfunction-returnZipCode* as JSON stream using *displayJSON*() method:

```cobol
           entry "ISFUNCTION_GETZIP" using comm-area.
 
           comm-area:>accept (isfunction-getZipCode).
 
           move 1 to idx.
           search array-data varying idx
              at end 
                 move "Zip code not Found"  to returnZipCode
              when city-zipCode = a-city(idx)
                 move a-zipcode(idx)  to returnZipCode
           end-search.
 
           comm-area:>displayJSON (isfunction-returnZipCode).
 
         goback.
```

where *isfunction-getZipCode* working storage structure is defined like:

```cobol
       01  isfunction-getZipCode identified by "".
           03 identified by "get_Zip_Code".
              05 city-zipCode  pic x any length.
```

and *isfunction-returnZipCode* working storage structure is defined like:

```cobol
       01  isfunction-returnZipCode identified by "".
           03 identified by "Zip_Code".
              05 returnZipCode  pic x any length.
```

- ISFUNCTION_GETCITY, a COBOL entry point that receives into *isfunction-getCity* working storage structure, a zip code of a US city and return the city name into *isfunction-retrievedCity* variable as JSON stream using displayJSON() method:

```cobol
           entry "ISFUNCTION_GETCITY" using comm-area.
 
           comm-area:>accept (isfunction-getCity). 
 
           move 1 to idx.
           search array-data varying idx
              at end 
                 move "City not Found"  to returnCity
              when zipCode-city(1:5) = a-zipcode(idx)
                 move a-city(idx)  to returnCity
           end-search.
 
           comm-area:>displayJSON (isfunction-retrievedCity).
 
           goback.
```

where *isfunction-getCity* working storage structure is defined like:

```cobol
       01  isfunction-getcity identified by "".
             03 identified by "get_City".
                05 zipCode-city  pic x any length.
```

and *isfunction-retrievedCity* working storage structure is defined like:

```cobol
       01  isfunction-retrievedCity identified by "".
           03 identified by "City".
              05 returnCity  pic x any length.
```

In order to have this ISFUNCTIONS.cbl working correctly, it should be deployed inside a Java Servlet container like Tomcat, WildFly (ex JBoss AS), IBM WebSphere or BEA WebLogic.
