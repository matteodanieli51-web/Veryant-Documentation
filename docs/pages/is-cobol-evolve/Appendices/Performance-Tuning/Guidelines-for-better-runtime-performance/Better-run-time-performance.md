### Better run time performance

Before tuning run time performances, ensure that you’re using optimized class files. For example, programs compiled in debug mode are slower than programs compiled without debug information. Read [Compile-time optimizations](./Compile-time-optimizations) for details.

Run time performance is influenced by memory issues. Operations made in memory without swapping to disk are better performing. Java tries to gain memory by periodically performing a cleaning procedure called Garbage Collector; during this procedure performance is slower. The more memory you provide to Java and isCOBOL, the more operations will be made in memory and Java will not invoke the Garbage Collector if enough memory is available.

#### No logging

Logging the Runtime activity to file has a cost in terms of disk i/o. If the Runtime must record every operation on a disk file, it will loose time doing it. Therefore, it’s strongly suggested to disable the isCOBOL logging by changing the configuration in one of the following three ways:

- avoid having *iscobol.tracelevel* set in the configuration or
- set *iscobol.tracelevel*=0 in the configuration or
- put an hash sign before *iscobol.tracelevel* in the configuration file

#### Tuning the JVM memory

The JVM memory is controlled mainly by five options:

| | |
| --- | --- |
| -Xms<size\> | Set initial Java heap size.<br>This value must be a multiple of 1024 and greater than 2 MB. |
| -Xmx<size\> | Set maximum Java heap size.<br>This value must be a multiple of 1024 and greater than 2 MB. |
| -Xss<size\> | Set java thread stack size. |
| -XX:MaxMetaspaceSize=<size\> | Set the metaspace size. |
| -XX:CompressedClassSpaceSize=<size\> | Complement of MaxMetaspaceSize. Compressed Class Space contains an internal representation of Java classes, while Metaspace holds all the rest of the metadata: methods, constant pools, annotations, etc. |
| | |

Size is expressed in bytes by default. Append the letter k or K to indicate kilobytes, m or M to indicate megabytes, g or G to indicate gigabytes.

For example, in order to specify a memory limit of 512 MB, you use:

```cobol
iscrun -J-Xmx512m PROGRAM_NAME
```

We recommend running your application on 64 bit systems, so the memory amount for Java can be increased over the 2GB maximum amount of memory per process limit on 32 bit systems.

In order to know what are the default values for heap size and thread stack size as well as check if the above options changed these values, you can use the -*XX:+PrintFlagsFinal* Java option. E.g.

```cobol
iscrun -J-Xmx512m -J-XX:+PrintFlagsFinal PROGRAM_NAME
```

Look for these entries in the resulting console output: *InitialHeapSize*, *MaxHeapSize* and *ThreadStackSize*.

Giving Java more memory it’s not always the best option. The proper amount of memory for the JVM depends on the environment. To be precise, it depends on the number of concurrent JVMs running and their work. For example, in an environment where several JVMs are running but they do a small amount of work, it’s good practice to keep the memory usage low, because having all the JVMs allocate a lot of memory may saturate the operating system memory. Known scenarios with several JVMs running are:

- a Linux server where several clients connect via Telnet or SSH and run character based programs with Charva,
- a Windows server where several clients connect via Terminal Server and run either an isCOBOL runtime or an isCOBOL Client,
- a web server with WebClient, as WebClient starts a JVM for every session.

**Note** - in these scenarios you might also consider using [Eclipse OpenJ9 VM](https://www.eclipse.org/openj9/), as this Java virtual machine is more lightweight.

Alternatively, in an environment where only one JVM is running and it does a huge amount of work, it’s OK to keep the memory usage high. The typical scenario of this kind is a server where the isCOBOL Server is running and several isCOBOL Clients connect to it from other computers in the network.

#### Reduce the number of running JVMs, if possible

Some applications manage tasks by instantiating dedicated runtime processes. This approach is good when the runtime is light, that is not the case of the isCOBOL runtime. Being written in Java, the isCOBOL runtime requires more time to start. For this reason, you should consider reducing the number of isCOBOL runtimes that are started. If your application instantiates runtimes to run programs, e.g.

```cobol
call "system" using "iscrun PROG1".
call "system" using "iscrun PROG2".
call "system" using "iscrun PROG3".
call "system" using "iscrun PROG4".
```

Consider to use CALL RUN statements instead, e.g.

```cobol
call run "PROG1".
call run "PROG2".
call run "PROG3".
call run "PROG4".
```

In this way the whole process runs in the same JVM and you save the time spent in the instantiation of new JVMs.

**Note** - the asynchrony of CALL RUN is controlled by the [iscobol.call_run.sync (boolean)](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#call_run_sync) configuration property. When running anynchronously, you should ensure that a STOP RUN doesn’t occur before all the programs called via CALL RUN have terminated. You can verify if some programs are still active by calling the [C$NCALLRUN](../../Library-Routines/C$NCALLRUN) library routine.

A similar approach may be adopted to replace shell scripts that launch several runtime processes, e.g.

```cobol
#!/bin/sh
$ISCOBOL/bin/iscrun PROG1
$ISCOBOL/bin/iscrun PROG2
$ISCOBOL/bin/iscrun PROG3
$ISCOBOL/bin/iscrun PROG4
```

Would perform much better as:

```cobol
#!/bin/sh
$ISCOBOL/bin/iscserver -tr &
$ISCOBOL/bin/trun PROG1
$ISCOBOL/bin/trun PROG2
$ISCOBOL/bin/trun PROG3
$ISCOBOL/bin/trun PROG4
```

For more information on the above commands see [Batch processing through isCOBOL Server (TurboRun)](../../../../is-cobol-AS/Batch-processing-through-isCOBOL-Server/Batch-processing-through-isCOBOL-Server).

#### More memory to isCOBOL

isCOBOL can allocate more memory for arrays and sort works.

To provide more memory for array handling, set the property [iscobol.array_cache](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#array_cache) in the isCOBOL configuration. Veryant recommends to set it to the maximum number of OCCURS in the application. If memory consumption is slowing performance then set to a lower value and in this case, a prime number is recommended to reduce collisions by making a more even hash distribution.

The default is 101. There is no maximum value, but higher values consume more memory.

To provide more memory for sorting procedures, set the property [iscobol.sort.memsize](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#sort_memsize) in the isCOBOL configuration. Veryant recommends to increase the sort memory to a value of 32 MB:

```cobol
iscobol.sort.memsize=33554432
```

The above setting improves performance of the [SORT](../../../Language-Reference/Procedure-Division-Statements/SORT) verb, the [ISSORT (External Sort)](../../../SDK-Users-Guide/Utilities/ISSORT) utility and the [C$SORT](../../Library-Routines/C$SORT) routine.

#### Class loading optimizations

Each time a new class is loaded into the JVM, a certain amount of time is spent to perform the necessary operations. While working with isCOBOL a new class is loaded each time a COBOL program is called the first time and each time a COBOL program uses a class (a runtime feature or an external Java class) that has not been loaded yet.

The class loading process can be optimized in the following ways:

1. Using the Java option

- -Xverify:none

With this option you instruct the JVM to not verify the correctness of the bytecode. Avoiding such verification, the JVM loads the classes faster.

2. Setting the CLASSPATH instead of [iscobol.code_prefix](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#code_prefix) to tell where your programs are stored.

When the code_prefix is set, the isCOBOL runtime performs some operations to find the class on disk and check if the class needs to be reloaded or not. These operations have a cost. Letting Java load your programs as standard Java classes from the CLASSPATH makes the classes load faster. The disadvantage is that the classes descriptions are kept in memory so you can’t update a program by just replacing the class file while the COBOL application is running, you also need to close and restart the JVM (in thin client you need to restart the isCOBOL Server).

Instead of setting the CLASSPATH you may consider setting *iscobol.code_prefix.reload=0* along with the code_prefix. In this way it is still possible to reload a updated class from disk without restarting the JVM, but the process is not automatic. It’s your duty to unload the program class from the JVM memory calling the [C$UNLOAD](../../Library-Routines/C$UNLOAD) library routine. After it, the class will be reloaded from disc at the next CALL. This approach makes the runtime access the disc only when actually necessary and not every time a CALL is performed.

3. store your classes in jar libraries instead of folders. See [JAR Files and the Jar Utility](../../../Introduction/Basics/isCOBOL-Java/JAR_Files-JAR_Utility) for details.
4. preload folders and jar libraries by calling the [C$PRELOAD](../../Library-Routines/C$PRELOAD) routine or preload a subset of programs by setting [iscobol.runtime.preload \*](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#runtime_preload) in the configuration.

#### Disable check for numeric content

Making the runtime check for the content of numeric data items may slow down performance a little. For this reason, the property [iscobol.check.numeric_content \*](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#check_numeric_content) should be enabled only during development and test, and then disabled for production.

#### Additional JVM optimizations

Where available, you should think about using the following Java options:

- -server

This option is usually available only with the JDK (the JRE doesn’t provide it). It causes Java to work in server mode instead of the default client mode. The server mode causes background operations (such as file i/o) to be better performing.

- -Xnoclassgc

This option disables the garbage collection. By default the JVM unloads a class from memory when there are no live instances of that class left, but this can degrade performance. Turning off class garbage collection eliminates the overhead of loading and unloading the same class multiple times. If a class is no longer needed, the space that it occupies on the heap is normally used for the creation of new objects. However, if you have an application that handles requests by creating a new instance of a class and if requests for that application come in at random times, it is possible that when the previous requester is finished, the normal class garbage collection will clean up this class by freeing the heap space it occupied, only to have to re-instantiate the class when the next request comes along. In this situation you might want to use this option to disable the garbage collection of classes.

With the JVM provided by IBM, the following option can also be used:

- -Xshareclasses

This option make classes shared between JVM processes. This feature improves performance since class byte code needs to be loaded only once. Class byte code is loaded into a shared cache. This cache is then accessed by multiple JVMs to run the class bytecode. Currently, in Windows and UNIX, a cache is implemented as a memory mapped file. Because the byte code is cached in a file, it reduces demand for memory. Every cache has a name. A JVM must attach itself to a cache to share classes from it. This is done using the -Xshareclasses argument. For example:

```cobol
iscrun -J-Xshareclasses:name=myCache PROGRAM
```

When this command is run for the first time, a cache called myCache is created. Classes (core Java classes and application classes) are cached there. If another JVM is launched with the same command line, classes will be shared between processes. A cache lives beyond the life time of a JVM. It can be explicitly deleted. It is also deleted when the OS is rebooted.

#### Latest Java version

Oracle implements performance improvements in every new version of Java. For this reason it’s suggested to use the latest stable Java version available.
