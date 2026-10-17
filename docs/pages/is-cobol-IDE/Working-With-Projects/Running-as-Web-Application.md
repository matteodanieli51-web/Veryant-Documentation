## Running as Web Application

isCOBOL IDE also offers the ability to launch the program as a web application. This feature is useful if you’re developing programs that you plan to install into a servlet container (like Tomcat) to work as web applications.

To run the program as a web application:

1. Click on *Run* menu.
2. Select *Run As*.
3. Select *isCOBOL EIS WebDirect*.

To debug the program as a web application:

1. Click on *Run* menu.
2. Select *Debug As*.
3. Select *isCOBOL EIS WebDirect*.

#### CSS files

isCOBOL IDE automatically loads the 'iscobol.css' file embedded in the wd2 plugin. It is not necessary to copy it into the isCOBOL project. If the user does manually copy a 'iscobol.css' file under the 'resources/css' folder of the isCOBOL project, that file will be used.

The css file referred to with the [iscobol.wd2.additional_stylesheet](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#webdirect-configuration) variable, if present, must be placed in the 'resources/css' folder of the project.
