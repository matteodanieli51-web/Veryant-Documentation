### Files in factory objects

When a file is specified in a factory, this means that the factory definition contains the FILE-CONTROL paragraph and FILE SECTION. One or more of the factory methods will contain the file processing statements such as [OPEN](../../Procedure-Division-Statements/OPEN), [CLOSE](../../Procedure-Division-Statements/CLOSE), [READ](../../Procedure-Division-Statements/READ) and [WRITE](../../Procedure-Division-Statements/WRITE). All of the factory methods have visibility to the data on the file without the use of the EXTERNAL clause.

### Inherited Factory Object Definitions

It is important to note that when a class that contains a file specified in the factory object definition is inherited, each direct or indirect descendent also inherits the file specification. As in the case of inherited object definition above, the factory objects of each of these subclasses have their own file connector unless the EXTERNAL clause is specified for the file. Dynamic file assignment or file sharing may be used to resolve conflicts in accessing the physical files associated with these file connectors.
