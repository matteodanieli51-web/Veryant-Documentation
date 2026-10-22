## Configure Tomcat to use the isCOBOL EIS framework

$CATALINA_HOME is the Tomcat installation directory. The default location on Windows is:

```cobol
C:\Program Files\Apache Software Foundation\Tomcat 10
```

To configure Tomcat to use the isCOBOL Runtime Framework on Windows you can change the value of the shared.loader property in *$CATALINA_HOME/conf/catalina.properties* to the following:

```cobol
shared.loader=/program\ files/veryant/iscobol_sdk2026R1/lib/iscobol.jar
```

On Unix, set the CLASSPATH in Tomcat's startup environment to include iscobol.jar. For example, on Linux add the following line to /etc/tomcat10/tomcat10.conf or other script called during the Tomcat startup:

```cobol
CLASSPATH=$ISCOBOL/lib/iscobol.jar:$CLASSPATH; export CLASSPATH
```

Make sure that you have a valid license for isCOBOL Evolve in /etc/iscobol.properties (i.e. iscobol.license.=) or in the iscobol.properties in the home directory for the user that starts Tomcat.

### Disable persistence across restarts

Whenever Apache Tomcat is shut down normally and restarted, or when an application reload is triggered, the standard Manager implementation will attempt to serialize all currently active sessions to a disk file located via the pathname attribute. All such saved sessions will then be deserialized and activated (assuming they have not expired in the mean time) when the application reload is completed. In order to successfully restore the state of session attributes, all such attributes must implement the java.io.Serializable interface. Since not all isCOBOL classes are serializable, we strongly suggest you disable this persistence feature.

To disable this persistence feature, create a Context configuration file for your web application and add the following element there:

```cobol
<Manager pathname="" />
```

**Note** - The file *context.xml* in the Tomcat home directory already includes the above entry, but it’s commented. You can easily disable the persistence for all your web applications by removing the comment markers around the entry.

### Considering an alternative Tracking Mode

In Tomcat, the *tracking-mode* element in the *web.xml* configuration file is used to specify how session tracking should be handled. Session tracking is essential for maintaining state across multiple requests from the same client, which is crucial for applications like online shopping carts or user login sessions.

There are three main session tracking modes you can configure:

- COOKIE: This mode uses cookies to track sessions. A unique session ID is stored in a cookie on the client’s browser. This is the most common and preferred method because it doesn’t require any changes to the URLs or forms in your application.
- URL: This mode appends the session ID to the URL. This can be useful if cookies are disabled on the client’s browser. However, it can make URLs look messy and can expose session IDs in logs or bookmarks.
- SSL: This mode uses SSL (Secure Sockets Layer) to track sessions. It is less common and typically used in very specific security contexts.

Although the COOKIE tracking mode is the preferred one, in some scenarios the URL tracking mode might be considered. For example, multiple tabs on the same page share cookies so all tabs share the same session on the server when the tracking mode is COOKIE.

To provide independent tabs, the URL tracking mode can be used.

By modifying the *web.xml* file associated with the web application as follows:

```cobol
 <session-config>
   <tracking-mode>URL</tracking-mode>
 </session-config>
```

the session tracking mode switches from COOKIE to URL. isCOBOL EIS Servlet checks the invoked URL for the presence of a jsessionid query parameter, and executes an URL redirection if none is found, appending the string ";jsessionid=<sessionId\>" to the original URL where <sessionId\> is the id of the session.

The URL tracking mode causes the creation of new session of each call to isCOBOL EIS servlet that lacks the jsessionid parameter but will switch to the provided session when a matching sessionid is found.

In this way each browser tab can specify a different jsessionid parameter allowing different sessions to be used.

**Note** - Be careful when using the URL tracking mode, since the session id will be visible in the URLs and can be easily copied or stored in proxy server logs, web server logs and browser history. This could allow an attacker to grab a valid session ID and get access to your users’ sessions.

### Data access

When using a file handler that includes native parts (e.g. DCI, c-tree or Vision) we suggest using a File Connector, if available.

However, the c-tree file handler is also certified to work without the need of a File Connector if installed and configured as follows:

- copy *iscobol.jar* to the webapp’s WEB-INF/lib folder
- copy *ctree-rtg.jar* to the Tomcat’s lib folder
- set *iscobol.file.index=ctreej* in the webapp configuration (WEB-INF/classes/iscobol.properties)
- set *java.library.path* in Tomcat’s configuration to point the folder where the ctree dynamic library is stored (i.e. on Windows use *-Djava.library.path=C:\\Veryant\\isCOBOL\_SDK2026R1\\bin*)

### Relative paths

Relative paths used by COBOL programs in EIS environment are relative to the webapp directory except for iscobol.code_prefix paths that are relative to the Tomcat working directory.
