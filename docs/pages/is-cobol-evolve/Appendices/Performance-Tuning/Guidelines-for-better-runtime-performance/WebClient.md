### WebClient

To speed up the loading of the application in the browser, you might consider enabling some [Idle instances](../../../../is-cobol-web-client/Applications-Monitoring-and-Configuration/Applications/Change-the-application-configuration/Change-the-application-configuration#idle_instances). When idle instances are enabled, the WebClient server starts the requested number of JVMs before the user connects so, when the user runs the application, the JVM is already available and the application is loaded in the browser more quickly.

If you have an HTML menu that runs several COBOL applications with an embedded WebClient, it’s preferable to load the COBOL programs in div containers using the CALL RUN statement instead of loading the COBOL programs in iframe containers having a separate JVM for each program. These two approaches are demonstrated by the example installed under *sample/webclient/encapsulated* in the isCOBOL SDK. The example includes two web applications:

- *samplemenu*, that uses iframe containers to embed the COBOL programs and starts a separate JVM for each program
- *menurun*, that uses div containers to embed the COBOL programs and starts a separate thread for each program using the CALL RUN statement, using only one JVM. This is the preferable approach.
