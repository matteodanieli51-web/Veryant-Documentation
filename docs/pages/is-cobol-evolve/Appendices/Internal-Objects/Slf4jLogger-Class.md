## Slf4jLogger Class (com.iscobol.logger.Slf4jLogger)

The isCOBOL runtime can trace the runtime activity into a log file. There are different trace levels available. Depending on the trace level environment settings, called programs, file i/o and SQL can be included in the trace or discarded. The trace level is set through the property [iscobol.tracelevel](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties).

By default the trace is saved to a disk file whose name is specified by the configuration property [iscobol.logfile](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties). Another option is to have the runtime send all the trace information to a class that implements the *com.iscobol.logger.Logger* interface. In this case, the class should manage the trace information by saving it to file or by performing other actions.

The class name must be specified through the configuration property [iscobol.logclass](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties). When this property is set, the runtime sends the trace information to the class specified by the property instead of writing the information to the file indicated by the [iscobol.logfile](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) property.

Currently there is only one class that implements the *com.iscobol.logger.Logger* interface; this class is included in the isCOBOL runtime library, it’s named *com.iscobol.logger.Slf4jLogger* and it’s a bridge to the Self4J logger.

In order to use this class, set:

```ini
iscobol.logclass=com.iscobol.logger.Slf4jLogger
```

### Example using Log4j 2

In the following example we make the isCOBOL runtime send the trace information to the Slf4jLogger class that will produce a log split into multiple gzipped files. It creates a new file every time the log size reaches 1 MB. The writing to the log is asynchronous.

#### Classpath setting

The following additional libraries must appear in the Classpath for a correct result:

| Library | Description |
| --- | --- |
| slf4j-api-2.0.6.jar | The Slf4j API |
| log4j-slf4j2-impl-2.20.0.jar | The Slf4j bridge to Log4j |
| log4j-api-2.20.0.jar<br>log4j-core-2.20.0.jar | The Log4j 2 API |

These libraries are not distributed along with isCOBOL. They must be downloaded separately from [http://www.slf4j.org](http://www.slf4j.org) and [https://logging.apache.org/log4j/2.x](https://logging.apache.org/log4j/2.x).

#### Log4j 2 configuration

A file named *log4j2.xml* must appear in the Classpath. Put the following content into it in order to activate rolling and zipping of the log file:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Configuration>
  <Appenders>
    <RollingRandomAccessFile name="RandomAccessFile" fileName="isc.log" filePattern="isc-%d{yyyy-MM-dd}-%i.gz" immediateFlush="false" append="true">
      <PatternLayout>
        <Pattern>%d{yyyy-MM-dd HH:mm:ss} - %m%n</Pattern>
      </PatternLayout>
      <Policies>
        <SizeBasedTriggeringPolicy size="1 MB"/>
      </Policies>
    </RollingRandomAccessFile>
  </Appenders>
  <Loggers>
    <Root level="info" includeLocation="false">
      <AppenderRef ref="RandomAccessFile"/>
    </Root>
  </Loggers>
</Configuration>
```

**Note** - Refer to Log4j 2 documentation for more information about the above entries and other possible entries.

#### Runtime

For this example, we’re going to run the isCOBOL I/O performance test, installed along with isCOBOL. You can find it in the isCOBOL installation directory under the *sample/io-performance* subdirectory.

Run the following command:

```shell
iscrun -J-Discobol.tracelevel=11 -J-Discobol.logclass=com.iscobol.logger.Slf4jLogger IO_INDEXED
```

If everything was configured correctly, you should find a similar list of files in the current folder:

```cobol
isc-2022-11-10-1.gz
isc-2022-11-10-2.gz
isc.log
```

**Note** - your file names will be different, using the current date you ran the test.
