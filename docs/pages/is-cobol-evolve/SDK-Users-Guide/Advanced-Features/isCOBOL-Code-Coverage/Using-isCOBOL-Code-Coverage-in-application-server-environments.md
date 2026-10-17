### Using isCOBOL Code Coverage in application server environments

#### Thin client

In a thin client environment it is possible to analyze the application server (isCOBOL Server) activity by starting the server process with the same -javaagent option used for the runtime. E.g.:

```cobol
iscserver -J-javaagent:/path/to/isprofiler.jar=coverage;[options]
```

The Coverage output is shown when the whole application server is terminated or when the [CCOV-FLUSH](\) function of [C$COVERAGE](\) is called, and it includes the analysis of all clients activities mixed together, therefore, if you need to analyze some programs in a thin client environment, you should use a dedicated application server with only one client connected.

#### Tomcat and other application servers

In an application server environment like Tomcat it is possible to profile the programs’ activity by starting the server process with the same -javaagent option used for the runtime. Add the following Java option to the startup options of your application server.:

```cobol
-javaagent:/path/to/isprofiler.jar=coverage;[options]
```

The isprofiler.jar agent implements both the Code Coverage and the Profiler tools. See [Using Code Coverage and Profiler together](./Running-an-application-with-isCOBOL-Code-Coverage-from-the-command-line#using-code-coverage-and-profiler-together) for information on how to use them together.

The following libraries should be shared among all the webapps:

- asm-9.6.jar
- asm-tree-9.6.jar
- isprofiler.jar
- jacoco-core-0.8.11.jar

You can either copy them to the Tomcat’s lib directory or you can add them to the CLASSPATH setting.

When you use coverage features under a servlet container, no report is generated at the closing of the JVM. The generation of the reports is delegated to the [C$COVERAGE](\) library routine:

- Call the [CCOV-SET](\) function to specify the name of the report file.
- Call the [CCOV-FLUSH](\) function to stop the coverage activity and generate the report file.

It’s good practice to call these functions in the main program of the servlet or in a ServletContextListener class, so the whole session is analyzed.

It’s strongly suggested to have only one session of the webapp running with coverage. If there are multiple sessions of the same webapp running with coverage, the report will not be accurate as it collects information from multiple sessions.

Example of ServletContextListener written in object oriented COBOL that allows you to coverage the webapp activity:

```cobol
       identification division.
       class-id. awebxcontextlistener as 
                    "AwebxContextListener"
                    implements servletcontextlistener.
       environment division.
       configuration section.
       repository.
          class servletcontextlistener as
             "javax.servlet.ServletContextListener"
          class servletcontextevent as
             "javax.servlet.ServletContextEvent"
             .
       identification division.
 
       factory.
       
       working-storage section.
       copy "iscobol.def".
       
       end factory.
       
       identification division.
 
       object.      
 
       procedure division.
       
       identification division.
       method-id. contextInitialized as "contextInitialized".
       linkage section.
       01 evt object reference servletcontextevent.
       
       procedure division using evt.
       main.
            call "c$coverage" using ccov-set "html" 
                             "/tmp/coverage_reports".
            goback.
            
       end method.
       
       identification division.
       method-id. contextDestroyed as "contextDestroyed".
       linkage section.
       01 evt object reference servletcontextevent.
       
       procedure division using evt.
       main.
           call "c$coverage" using ccov-flush.
           goback.
            
       end method.
 
       end object.
 
       end class.
```

#### Troubleshooting

The following exception may occur while running programs under Code Coverage:

```cobol
org.objectweb.asm.MethodTooLargeException: Method too large: PROGRAM.PARAGRAPH ()I
```

The reason is that the Coverage feature adds on the fly some instructions to the methods in your class, it’s like if you added some COBOL statements to the program’s paragraphs. If a method grows too much, it can lead to the above error. In order to get rid of it, recompile your program with the [\-sns=Statements](../../Compiler-and-Runtime/Compiler/Compiler-Options#source-options) option.
