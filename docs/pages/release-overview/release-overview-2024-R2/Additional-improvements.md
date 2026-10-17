## Additional improvements

The isCOBOL 2024 R2 release contains additional improvements on configuration properties, EIS Servlets, COBOL WOW optimization and EsqlRuntime class.

### New configurations

The Profiler utility has been enhanced with the following new configurations:

- *iscobol.profiler.enable=false* to start the program with the profiler disabled. This is useful when running applications with a user interface and it’s important to avoid profiling during user interaction. When a program that needs to be profiled is called, the called program can perform a CALL to the C$PROFILER library to enable the profiler, providing more accurate results.

- *iscobol.profiler.elapse_time=n* to sets a timeout in seconds for a profiler flush. This is useful when running batch programs that take a long time but for the developer’s analysis it’s enough to collect the first n seconds or minutes of the execution. With this configuration set, after the elapsed time the profiler flushes the results, and the program keeps running until completion.

The CALL PROGRAM has been enhanced with a new configuration:

- *iscobol.call_program.set_switches=true* to set switches in CALL PROGRAM statement with syntax /A/B. When this configuration is set a statement like this:

```cobol
CALL PROGRAM "MYPROG/A/D".
```

executes the MYPROG program and activates its switch "A" and switch "D". Without this option, performing the CALL above would try to invoke program D inside a folder MYPROG/A.

### EIS Servlets

EIS Servlets manage sessions using what’s called “jsessionid” which acts as an identifier for the session. It is usually stored as a cookie in the browser, but in some scenarios that may not be the desired way. For example, multiple tabs on the same page share cookies so all tabs share the same session on the server.

To provide independent tabs a different session tracking solution is needed.

By modifying the web.xml file associated with the web application, the tracking mode can be overridden, as shown by the code snippet below.

```cobol
<session-config>
   <tracking-mode>URL</tracking-mode>
</session-config>
```

With this configuration, the session tracking mode switches from cookies to URL. isCOBOL EIS Servlet checks the invoked URL for the presence of a jsessionid query parameter, and executes an URL redirection if none is found, appending the string ";jsessionid=" to the original URL where  is the id of the session.

The setting written in the web.xml file causes the creation of a new session of each call to our servlet that lacks the jsessionid parameter but will switch to the provided session when a matching sessionid is located.

Each browser tab can then specify a different jsessionid parameter allowing different sessions to be used.

Be mindful when using such a feature, since the session id will be visible in the URLs and can be replicated with copy and paste and stored in proxy server logs, web server logs and browser history. This could allow an attacker to grab a valid session ID and get access to your users’ sessions.

### COBOL WOW optimization

Applications migrating from RM/COBOL WOW can now be optimized by calling the new WOWSTARTBUFFERING and WOWSTOPBUFFERING routines to enable the buffering system during WOW calls. This is especially useful when running in ThinClient or WebClient environments, as it reduces the TCP communication overhead to improve responsiveness. After the WOWSTARTBUFFERING routine is called all following CALLs to WOW routines are buffered by the isCOBOL Server. When the WOWSTOPBUFFERING routine is called, the updates are sent to the client, causing the user interface to update and repaint as needed and providing a smoother user experience. This feature is similar to the corresponding MASS-UPDATE feature used for Screen programs.

A code snippet like this:

```cobol
           CALL WOWSTARTBUFFERING USING WIN-RETURN
           CALL WOWSETPROP USING WIN-RETURN CT1 "VISIBLE" 0
           PERFORM UNTIL EXIT
           ...
           CALL AXSETINDEXPROP USING WIN-RETURN CT1 "CellText" WCOL0 WLIN1 0
           CALL AXSETINDEXPROP USING WIN-RETURN CT1 "CellText" WCOL1 WLIN1 1
           CALL AXSETINDEXPROP USING WIN-RETURN CT1 "CellText" WCOL2 WLIN1 2
           ...
           END-PERFORM 
           CALL WOWSETPROP USING WIN-RETURN CT1 "VISIBLE" 1
           CALL WOWSTOPBUFFERING USING WIN-RETURN
```

loads an entire ctGrid with minimal TCP overhead.

### EsqlRuntime class

The com.iscobol.rts.EsqlRuntime class contains a new method named getResultSet to retrieve the ResultSet object of a Cursor. This object can then be passed to methods in Java classes that require such objects. The method signature of the implemented method is:

```cobol
public static ResultSet getResultSet(String cursorName)
```

and this is a code snippet on how to use it after the cursor is opened:

```cobol
       repository.
       class ESQLRuntime as "com.iscobol.rts.EsqlRuntime"
       class ResultSet as "java.sql.ResultSet"
       ...
       77 obj-rs object reference ResultSet.
       ...
           EXEC SQL 
              OPEN CUR 
           END-EXEC.
           set obj-rs to ESQLRuntime:>getResultSet("CUR")
       ...
```
