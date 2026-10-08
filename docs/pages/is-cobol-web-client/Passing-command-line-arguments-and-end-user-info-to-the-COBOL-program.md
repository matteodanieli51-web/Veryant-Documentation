# Passing command line arguments and end user info to the COBOL program

In the "Program name and arguments" field, the following variables can be used:

| | |
| --- | --- |
| ${clientId\} | WebClient specific unique browser identifier |
| ${clientIp\} | IP address of browser that started this application |
| ${clientLocale\} | Locale of browser that started this application |
| ${customArgs\} | Parameters specified via the "args" parameter in the URL. <br><br>The value of "args" matches the parameters that you would pass on the command line when running the isCOBOL Client from a command prompt. Multiple parameters must be separated by "%20" that matches the space you would use on the command line. For example, a URL like:<br>http://.../?args=ABC%20123<br>matches a command like:<br>iscclient PROG ABC 123 |
| ${user\} | WebClient specific logged in user name |
| ${webclient.rootDir\} | Root directory used to resolve relative paths |
| | |

In addition to the above variables, you can reference every operating system environment variable and every Java property by decorating their name with “${}”. For example ${path} will contain the value of the Path environment variable (%PATH% on Windows, $PATH on Linux/Unix), while ${java.version} will contain the value of the Java version number as returned by the statement java.lang.System.getProperty("java.version").

These variables are received by the COBOL program as chaining parameters in the order they appear in the field "Program name and arguments". Since customArgs generates a variable number of chaining parameters for the COBOL program, it’s good practice to put it at the end of the list, if used.

For example, if you set

| | |
| --- | --- |
| Program name and arguments | PROG ${clientIp\} ${customArgs\} |
| | |

Use a URL like this to pass 'ABC' and '123' as command line arguments:

```cobol
http://yourwebsite/yourapp/?args=ABC%20123
```

Use the following COBOL code to receive the IP address of the end user and the two command line parameters:

```cobol
program-id. prog.
...
working-storage section.
...
77  wrk-clientIp pic x any length.
77  wrk-param-1  pic x any length.
77  wrk-param-2  pic x any length.
...
procedure division chaining wrk-clientIp
                            wrk-param-1 
                            wrk-param-2
                            .
```
