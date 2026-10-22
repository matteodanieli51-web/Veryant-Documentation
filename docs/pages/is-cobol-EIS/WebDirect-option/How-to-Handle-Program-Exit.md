## How to Handle Program Exit

By default, when the program terminates due to a GOBACK statement, the last screen remains in the web browser, but is no longer active. This may result in the impression that the program hung, while it was just terminated.

The proper way to handle the program exit is by redirecting the browser to a different web page. This may be the page from which the application was launched, the home page of your website or another of your choosing.

This objective is achieved through JavaScript.

In order to make WebDirect execute JavaScript code:

- define a variable in the Working-Storage Section

```cobol
       77 MY-JAVA-SCRIPT PIC X ANY LENGTH
                         VALUE '<script type="text/javascript">
      -                        'form = document.createElement("form");
      -                        'form.method = "GET";
      -                        'form.action = "https://www.veryant.com";
      -                        'form.target = "_self";
      -                        'document.body.appendChild(form);
      -                        'form.submit();
      -                        '</script>'.
```

The above code redirects the browser to Veryant's home page. Change the URL according to your needs.

- In the Procedure Division, call [WD2$RUN_JS](../../is-cobol-evolve/Appendices/Library-Routines/WD2$RUN_JS), passing this variable, when you want the JavaScript to be executed:

```cobol
CALL "WD2$RUN_JS" USING MY-JAVA-SCRIPT
```

When a program is running and the user closes the browser window or someone stops the web or application server, an exception with value 91 in crt-status is sent to program in order to terminate the ACCEPT.

**Note**: always remember to use GOBACK instead of STOP-RUN to make the program exit.
