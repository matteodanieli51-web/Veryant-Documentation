## Apache Maven integration

Apache Maven is a widely used build automation and project management tool designed primarily for Java-based projects, though it also supports many other languages and frameworks. At its core, Maven simplifies the process of building, packaging, and deploying software by providing a standardized project structure and a declarative approach to configuration. Instead of relying on complex build scripts, developers describe their project using a Project Object Model (POM), an XML file that defines dependencies, plugins, build goals, and project metadata in a clear and consistent way.

One of Maven’s most significant contributions is its powerful dependency management system. Maven automatically downloads and manages libraries from remote repositories, ensuring that projects use the correct versions and that transitive dependencies are handled transparently. This reduces configuration overhead, minimizes version conflicts, and improves build reproducibility across different environments and teams.

### Compiling

To compile COBOL programs through Maven:

1. Add the Veryant repository to the POM:

```cobol
  <repositories>
    <repository>
...
      <id>veryant-repo</id>
      <name>Private Maven Repo</name>
      <url>https://www.veryant.com/maven-repo</url>
    </repository>
...
  </repositories>
 
  <pluginRepositories>
...
    <pluginRepository>
      <id>veryant-repo</id>
      <name>Private Maven Plugin Repo</name>
      <url>https://www.veryant.com/maven-repo</url>
    </pluginRepository>
...
  </pluginRepositories> 
```

2. Add the isCOBOL plugin to the build section of the POM and configure it as follows:

```cobol
  <build>
  ...
  <plugins> 
  ...
    <plugin>
      <groupId>com.iscobol</groupId>
      <artifactId>iscobol-maven-plugin</artifactId>
      <version><!-- Type here the version and build number, e.g. '2026.1.1170' --></version>
  <dependencies>
    <dependency>
      <groupId>com.iscobol</groupId>
      <artifactId>iscobol</artifactId>
      <version><!-- Type here the version and build number, e.g. '2026.1.1170' --></version>
    </dependency>
    <dependency>
       <groupId>org.apache.ant</groupId>
       <artifactId>ant</artifactId>
       <version><!-- Type here the Ant version you wish to use, e.g. '1.10.14' --></version>
    </dependency>
  </dependencies>
      <executions>
        <execution>
          <id>compile-cobol</id>
          <phase>compile</phase>
          <goals>
            <goal>compile</goal>
          </goals>
          <configuration>
           <destDir><!-- Type here the output directory for compiled classes, e.g. '${project.build.directory}/classes' --></destDir>
           <options>
   <!-- Add here an option element for each compiler option you wish to use, i.e. to use -d and -smat, add:
             <option>-d</option>
             <option>-smat</option>
               -->
           </options>
           <force>false</force>
           <filesets>
              <fileset>
                <directory><!-- Type here the source directory for compiled classes, e.g. '${basedir}/src' --></directory>
                <includes>
                  <include>**/*.cbl</include>
                </includes>
              </fileset>
           </filesets>
          </configuration>
        </execution>
      </executions>
    </plugin>
    ...
  </plugins>
  ...  
</build>
```

### Example

An example of Apache Maven integration is provided along with the isCOBOL SDK.

You can find a pom.xml file under the *sample/build-automation/maven* directory.

Having Apache Maven installed in the system, you can change to that directory and issue the command:

```cobol
mvn compile
```

It will compile all the programs in the src directory and store the resulting classes in the *target/classes* directory.

For more information, setup files and install instructions for Apache Maven, visit the official web site [https://maven.apache.org](https://maven.apache.org/).
