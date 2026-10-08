## Running as Client Application

isCOBOL IDE offers the ability to launch the program in a thin client environment.

### Server setup

1. Click on *Window* menu
2. Select *Preferences*
3. Choose *isCOBOL / Tools / Server / Class Path* from the tree
4. Click the *Add Class Folder* button and choose the output folder of your project
5. Optionally add other jars and folders that are necessary to the program (e.g. a JDBC driver library)
6. Click OK
7. Click on *isCOBOL Tools* menu
8. Select *isCOBOL Server / Start*

### Client setup

1. Click on *Run* menu
2. Select *Run Configurations*...
3. Select *isCOBOL Client Application* from the tree and click on the *New* button at the top of the tree
4. Compile the fields as follow:

- **Name**: free text, this is the name that will appear in the Run As list once we save modifications
- **Arguments**: name of the program in the project output folder that you want to run. Be sure to type an upper-case name without .class extension. The name of the program might be followed by command-line arguments you want to pass to the program.

**Note**: you can use the same panel to create launch commands that point to existing isCOBOL Server processes listening in the network rather than connecting to the internal isCOBOL Server started by the IDE. In this case you have to compile also the other fields.

5. Click on *Run* button
