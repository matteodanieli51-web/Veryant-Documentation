## Common issues in EIS environment

### Tomcat startup errors

If a connection error occurs and the browser cannot load the page with the COBOL application, ensure that Tomcat is correctly started.

Information on Tomcat startup errors can be found in *catalina.<currentdate\>.log* file in Tomcat's logs directory.

### Unable to deploy a war file whose size is greater than 50 MB

By default Tomcat doesn’t allow you to upload war files greater than 50 MB in the Manager webapp. This limit can be increased by editing the file *webapps/manager/WEB-INF/web.xml*, where you will find this section:

```cobol
    <multipart-config>
      <!-- 50 MiB max -->
      <max-file-size>52428800</max-file-size>
      <max-request-size>52428800</max-request-size>
      <file-size-threshold>0</file-size-threshold>
    </multipart-config>
```

Increase the value of *max-file-size* and *max-request-size* as desired and restart Tomcat to make the change effective.

An alternative approach to deploy your webapp is by copying the war file to the *webapps* directory. Tomcat will automatically detect the change of the directory content and will unpack the war. This will bypass the Tomcat Manager app and its limits.

### Blank page with EIS WebDirect

If an empty screen appears in place of the COBOL application, it could mean that WebDirect could not initialize the program correctly. Error messages that help troubleshooting the cause of the problem can be found in the *stdout_<currentdate\>.log, stderr_<currentdate.log\>* and *localhost.<currentdate\>.log* files in Tomcat's logs directory.

"Missing License" is a common problem that causes blank screen. Check that the *iscobol.eis.license.2026* property is set in /etc/iscobol.properties or in the web application's WEB-INF/classes/iscobol.properties file.

The blank page may also be caused by the application waiting for Debugger, if iscobol.rundebug property is set in the configuration.

Also, the blank page may be caused by the web application terminating before the first DISPLAY, for example due to i/o errors. Remote debugging can help in this case.

### HTTP errors

When an error occurs in the web application, it usually causes HTTP ERRORS like 404 and 500.

In order to retrieve the full Exception stack, consult the log files in Tomcat's *logs* directory.

### Preventing errors related to the UI in EIS Servelt and Web Service environments

In an EIS environment, a COBOL program may occasionally perform a DISPLAY or ACCEPT operation on the user interface. This could happen, for example, if you reuse existing code that was previously used in a Desktop environment. These operations are not supported by Servlets and Web Services and may lead to unexpected behaviors and errors. In order to prevent these error conditions, Veryant recommends adding [-whttp](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#whhtp) to your compiler options when you compile programs for the EIS environment.

### Tuning and monitoring Tomcat with VisualVM

VisualVM is a Java virtual machine monitoring, troubleshooting, and profiling tool.

See [Tuning and monitoring the Java Virtual Machine with VisualVM](../../is-cobol-evolve/Appendices/Troubleshooting/Tuning-and-monitoring-the-Java-Virtual-Machine-with-VisualVM/Tuning-and-monitoring-the-Java-Virtual-Machine-with-VisualVM) for information on VisualVM and how to use it to monitor the Tomcat activity, collecting dumps and more.
