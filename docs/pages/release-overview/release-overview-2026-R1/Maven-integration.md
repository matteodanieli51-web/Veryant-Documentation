## Maven integration

Apache Maven is one of the most used build automation and project management tools designed primarily for Java-based projects, though it also supports many other languages and frameworks. At its core, Maven simplifies the process of building, packaging, and deploying software by providing a standardized project structure and a declarative approach to configuration. Instead of relying on complex build scripts, developers describe their project using a Project Object Model (POM), an XML file that defines dependencies, plugins, build goals, and project metadata in a clear and consistent way. One of Maven’s most significant contributions is its powerful dependency management system. Maven automatically downloads and manages libraries from remote repositories, ensuring that projects use the correct versions and that transitive dependencies are handled transparently. This reduces configuration overhead, minimizes version conflicts, and improves build reproducibility across different environments and teams.

With isCOBOL 2026 R1, the Maven build system can be seamlessly integrated into isCOBOL compilation tasks, enabling developers to adopt Maven for building COBOL applications.

For example, the following pom.xml file uses the isCOBOL Maven plugin to compile programs:

```cobol
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.test.isccdemo</groupId>
  <artifactId>iscc-test</artifactId>
  <packaging>jar</packaging>
  <version>1.0-SNAPSHOT</version>
  <name>iscc-test</name>
  <url>http://maven.apache.org</url>
  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
  </properties>  
  
  <repositories>
    <repository>
      <id>veryant-repo</id>
      <name>Private Maven Repo</name>
      <url>https://www.veryant.com/maven-repo</url>
    </repository>
  </repositories>
<pluginRepositories>
    <pluginRepository>
      <id>veryant-repo</id>
      <name>Private Maven Plugin Repo</name>
      <url>https://www.veryant.com/maven-repo</url>
    </pluginRepository>
  </pluginRepositories>  
  
  <dependencies>
  </dependencies>
 <build>
  <plugins> 
    <plugin>
      <groupId>com.iscobol</groupId>
      <artifactId>iscobol-maven-plugin</artifactId>
      <version>2026.1.1173.1</version>
  <dependencies>
    <dependency>
      <groupId>com.iscobol</groupId>
      <artifactId>iscobol</artifactId>
      <version>2026.1.1173.1</version>
    </dependency>
    <dependency>
       <groupId>org.apache.ant</groupId>
       <artifactId>ant</artifactId>
       <version>1.10.14</version>
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
           <destDir>${project.build.directory}/classes</destDir>
           <options>
             <option>-verbose</option>
           </options>
           <force>false</force>
           <filesets>
              <fileset>
                <directory>${basedir}/src</directory>
                <includes>
                  <include>**/*.cbl</include>
                </includes>
              </fileset>
           </filesets>
          </configuration>
        </execution>
      </executions>
    </plugin>
    
  </plugins>
</build>
</project>
```

By executing the Maven command:

```cobol
mvn compile
```

all .cbl source files in the “src” folder are compiled and the .class files are created in the folder target\\classes. When executed for the first time, Maven downloads the dependencies from the Veryant repository, providing the output shown below:

```cobol
[INFO] Scanning for projects...
[INFO]
[INFO] --------------------< com.test.isccdemo:iscc-test >----------
[INFO] Building iscc-test 1.0-SNAPSHOT
[INFO] from pom.xml
[INFO] --------------------------------[ jar ]----------------------
Downloading from veryant-repo: https://www.veryant.com/maven-repo/com/iscobol/iscobol-maven-plugin/2026.1.1173.1/iscobol-maven-plugin-2026.1.1173.1.pom
Downloaded from veryant-repo: https://www.veryant.com/maven-repo/com/iscobol/iscobol-maven-plugin/2026.1.1173.1/iscobol-maven-plugin-2026.1.1173.1.pom (484 B at 379 B/s)
Downloading from veryant-repo: https://www.veryant.com/maven-repo/com/iscobol/iscobol-maven-plugin/2026.1.1173.1/iscobol-maven-plugin-2026.1.1173.1.jar
Downloaded from veryant-repo: https://www.veryant.com/maven-repo/com/iscobol/iscobol-maven-plugin/2026.1.1173.1/iscobol-maven-plugin-2026.1.1173.1.jar (13 kB at 41 kB/s)
[INFO]
[INFO] --- resources:3.3.1:resources (default-resources) @ iscc-test
[INFO] skip non existing resourceDirectory: \Veryant\isCOBOL_SDK2026R1\sample\build-automation\maven\src\main\resources
[INFO]
[INFO] --- compiler:3.13.0:compile (default-compile) @ iscc-test ---
[INFO] No sources to compile
[INFO]
[INFO] --- iscc:2026.1.1173.1:compile (compile-cobol) @ iscc-test --
Downloading from veryant-repo: https://www.veryant.com/maven-repo/com/iscobol/iscobol/2026.1.1173.1/iscobol-2026.1.1173.1.pom
Downloaded from veryant-repo: https://www.veryant.com/maven-repo/com/iscobol/iscobol/2026.1.1173.1/iscobol-2026.1.1173.1.pom
Downloading from veryant-repo: https://www.veryant.com/maven-repo/com/iscobol/iscobol/2026.1.1173.1/iscobol-2026.1.1173.1.jar
Downloaded from veryant-repo: https://www.veryant.com/maven-repo/com/iscobol/iscobol/2026.1.1173.1/iscobol-2026.1.1173.1.jar
[INFO] isCOBOL Maven plugin Execution...true
[INFO] I --> C:\Veryant\isCOBOL_SDK2026R1\sample\build-automation\maven\src\IO-INDEXED.cbl
[INFO] I --> C:\Veryant\isCOBOL_SDK2026R1\sample\build-automation\maven\src\IO-LINESEQUENTIAL.cbl
[INFO] I --> C:\Veryant\isCOBOL_SDK2026R1\sample\build-automation\maven\src\IO-PERFORMANCE.cbl
[INFO] I --> C:\Veryant\isCOBOL_SDK2026R1\sample\build-automation\maven\src\IO-RELATIVE.cbl
[INFO] I --> C:\Veryant\isCOBOL_SDK2026R1\sample\build-automation\maven\src\IO-SEQUENTIAL.cbl
[INFO] Compiling 5 source files
[INFO] -------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] -------------------------------------------------------------
[INFO] Total time: 10.937 s
[INFO] Finished at: 2026-01-26T11:11:52+01:00
[INFO] -------------------------------------------------------------
```

In successive runs, since the plugin is already installed and the dependencies have been downloaded, compilation occurs only if any of the source files have been modified. If no source files have changed, the output will be:

```cobol
[INFO] Scanning for projects...
[INFO]
[INFO] --------------------< com.test.isccdemo:iscc-test >------------------
[INFO] Building iscc-test 1.0-SNAPSHOT
[INFO] from pom.xml
[INFO] --------------------------------[ jar ]------------------------------
[INFO]
[INFO] --- resources:3.3.1:resources (default-resources) @ iscc-test ---
[INFO] skip non existing resourceDirectory C:\Veryant\isCOBOL_SDK2026R1\sample\build-utomation\maven\src\main\resources
[INFO]
[INFO] --- compiler:3.13.0:compile (default-compile) @ iscc-test ---
[INFO] No sources to compile
[INFO]
[INFO] --- iscc:2026.1.1173.1:compile (compile-cobol) @ iscc-test ---
[INFO] isCOBOL Maven plugin Execution...true
[INFO] ---------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ---------------------------------------------------------------------
[INFO] Total time: 1.649 s
[INFO] Finished at: 2026-01-26T11:29:58+01:00
[INFO] ---------------------------------------------------------------------
```
