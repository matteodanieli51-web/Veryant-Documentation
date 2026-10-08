### Java Program Converted to isCOBOL

Here is the example Java program used in this document after being translated to Object Oriented COBOL:

```cobol
       PROGRAM-ID. webcontent.
       CONFIGURATION SECTION.
       REPOSITORY.
           class jBufferedReader    as "java.io.BufferedReader"
           class jInputStreamReader as "java.io.InputStreamReader"
           class jURL               as "java.net.URL"
           class jURLConnection     as "java.net.URLConnection"
           class jString            as "java.lang.String"
           .
       WORKING-STORAGE SECTION.
       77  url       object reference jURL.
       77  uc        object reference jURLConnection.
       77  bf        object reference jBufferedReader.
       77  inputLine object reference jString.
       PROCEDURE DIVISION.
       main.
           try
             set url to jURL:>new ("https://www.veryant.com") 
             set uc  to url:>openConnection() 
             set bf  to jBufferedReader:>new
                        (jInputStreamReader:>new(uc:>getInputStream()))
             perform until exit
                set inputLine to bf:>readLine()
                if  inputLine = null
                    exit perform
                end-if
                display inputLine upon sysout
             end-perform
           catch exception
             exception-object:>printStackTrace()
           end-try.
           GOBACK.
 
```
