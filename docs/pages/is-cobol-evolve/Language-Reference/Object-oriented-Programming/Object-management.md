## Object management

As mentioned previously, objects are allocated at runtime and are accessed only through object references. An object is created by invoking a method in a factory object. The object continues to exist until it can no longer be accessed. The object can no longer be accessed when no object reference data item references that object.

### Example 1

The following code creates two String objects, displays their length and deallocates them.

```cobol
       CONFIGURATION SECTION.
       REPOSITORY.
           CLASS JSTRING AS "java.lang.String"
           CLASS JSYSTEM AS "java.lang.System"
           .
 
       WORKING-STORAGE SECTION.
       77 STR1 OBJECT REFERENCE JSTRING.
       77 STR2 OBJECT REFERENCE JSTRING.
       77 STR3 OBJECT REFERENCE JSTRING.
 
       PROCEDURE DIVISION.
       MAIN.
      * allocate String object from factory method
           SET STR1 TO JSYSTEM:>getProperty ( "user.dir" )
      * allocate String object by instantiating it
           SET STR2 TO JSTRING:>new("Some text").
      * allocate String object through autoboxing
           SET STR3 TO "A string".
      * use the lenght() method of the String objects
           DISPLAY STR1:>length().
           DISPLAY STR2:>length().
           DISPLAY STR3:>length().
      * deallocate the String ojbects and exit
           SET STR1 TO NULL.
           SET STR2 TO NULL.
           SET STR2 TO NULL.
           GOBACK.
```

### Example 2

This is a shorter form of the above example, where objects are implicitly allocated through their Working-Storage definition, allowing you to save Procedure Division code.

```cobol
       CONFIGURATION SECTION.
       REPOSITORY.
           CLASS JSTRING AS "java.lang.String"
           CLASS JSYSTEM AS "java.lang.System"
           .
 
       WORKING-STORAGE SECTION.
       77 STR1 OBJECT REFERENCE JSTRING VALUE JSYSTEM:>getProperty ( "user.dir" ).
       77 STR2 OBJECT REFERENCE JSTRING VALUE JSTRING:>new("Some text").
       77 STR3 OBJECT REFERENCE JSTRING VALUE "A string".
 
       PROCEDURE DIVISION.
       MAIN.
      * use the lenght() method of the String objects
           DISPLAY STR1:>length().
           DISPLAY STR2:>length().
           DISPLAY STR3:>length().
      * deallocate the String ojbects and exit
           SET STR1 TO NULL.
           SET STR2 TO NULL.
           SET STR3 TO NULL.
           GOBACK.
```
