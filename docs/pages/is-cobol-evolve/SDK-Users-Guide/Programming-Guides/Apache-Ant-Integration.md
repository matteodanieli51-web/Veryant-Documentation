## Apache Ant integration

Apache Ant is a Java library and command-line tool whose mission is to drive processes described in build files as targets and extension points dependent upon each other. The main known usage of Ant is the build of Java applications. Ant supplies a number of built-in tasks allowing to compile, assemble, test and run Java applications. Ant can also be used effectively to build non Java applications.

In this chapter we explain how to use Ant to build and run an isCOBOL application.

### Basic concepts

Before you read, you should get familiar with these concepts:

| | |
| --- | --- |
| Buildfile | Apache Ant's buildfiles are written in XML. Each buildfile contains one project and at least one (default) target. Targets contain task elements. Each task element of the buildfile can have an id attribute and can later be referred to by the value supplied to this. The value has to be unique. |
| Project | Each project defines one or more targets. A target is a set of tasks you want to be executed. When starting Ant, you can select which target (or targets) you want to have executed. When no target is given, the project's *default* is used. |
| Target | A target is a container of tasks that cooperate to reach a desired state during the build process.Targets can depend on other targets and Apache Ant ensures that these other targets have been executed before the current target. For example you might have a target for compiling and a target for creating a distributable. You can only build a distributable when you have compiled first, so the distribute target depends on the compile target. |
| Task | A task is a piece of code that can be executed. There is a set of [built-in tasks](https://ant.apache.org/manual/tasklist.html), but it is also very easy to write your own. Below you will find information about how to create a task that executes the isCOBOL Compiler. |
| FileSet | A FileSet is a group of files. These files can be found in a directory tree starting in a base directory and are matched by patterns |
| | |

### Compiling

In order to compile COBOL programs using Ant, the following task must be defined in the build file:

```cobol
<taskdef name="iscc" classname="com.iscobol.ant.iscc"/>
```

The class indicated in this task is included in the iscobol.jar library. This library must be available in the Classpath when the task runs.

The iscc task supports the following attributes:

| Attribute | Meaning | Default value |
| --- | --- | --- |
| javac | Path to an external javac compiler to be used |  |
| javacOptions | Java complier options to be used, i.e. -classpath to point to the iscobol.jar library where com.iscobol.ant.iscc is stored <br>Don’t use wildcards in the -classpath value, but specify each single jar library. Wildcards are not supported in this context. |  |
| nosummary | Set it to "false" to have the Compiler outcome printed on the console | "true" |
| nowarn | Set it to "true" to suppress Compiler warnings | "false" |
| noerr | Set it to "true" to suppress Compiler errors. Note that Severe errors will not be suppressed anyway | "false" |
| force | Set it to "true" to compile programs even if they’re not out of date | "false" |
| options | isCOBOL Compiler options, i.e. "-cm -dcm"<br>See [Compiler Options](../Compiler-and-Runtime/Compiler/Compiler-Options) for the list of all the available options. <br>Use "-c=/path/to/your.properties" to specify the Compiler configuration file. <br>You should not use the "-od" option, but set the destDir attribute instead | "-jc" |
| FailOnError | Set it to "false" to continue the build process even if a Severe error occurs. By default, the build process stops in this case | "true" |
| destDir | Path where the compiled class files will be stored |  |

The iscc task will include one or more FileSet elements that tell which source files must be compiled.

The following snippet shows how to compile the HELLO-WORLD.cbl program in debug mode:

```cobol
<iscc 
     javacOptions="-classpath ${iscobol-classpath-prop} "
     nosummary="false"
     nowarn="true"
     noerr="true"
     force="true"
     options="-d"
     failOnError="true"
     destDir="${build.dir}">
    <fileset dir="${src.dir}">
       <include name="HELLO-WORLD.cbl"/>
    </fileset>
</iscc>
```

### Running

In order to run or debug a COBOL program using Ant, you can configure a [Java](https://ant.apache.org/manual/Tasks/java.html) build-in task to run the isCOBOL Runtime class (com.iscobol.invoke.Isrun), e.g.

```cobol
<java classname="com.iscobol.invoke.Isrun"
      fork="true" 
      classpath="${iscobol-classpath-prop}" >
      <arg value="-d" /> <!-- remove this arg to run without Debugger --> 
      <arg value="HELLO_WORLD" /> 
</java>
```

**Note** - Don’t use wildcards in the classpath value, but specify each single jar library. Wildcards are not supported in this context.

### Example

An example of Apache Ant integration is provided along with the isCOBOL SDK.

You can find a build.xml file under the *sample/build-automation/ant* directory.

Having Apache Ant installed in the system, you can change to that directory and issue the command:

```cobol
ant compile
```

It will compile all the programs in the *src* directory and store the resulting classes in the *classes* directory.

In order to run the sample container using Ant, issue the command:

```cobol
ant run
```

For more information, setup files and install instructions for Apache Ant, visit the official web site [https://ant.apache.org](https://ant.apache.org).
