## Compiler enhancements

The Compiler supports new syntax to allow inline variable declaration and improved the auto-boxing in Object Oriented Programming. A new compiler option has been implemented to create an external DataMap that declares all data items of DATA DIVISION.

### Inline variable declaration

Many languages such, as C# and Java, support the inline variable declaration syntax that allows you to declare a local variable directly in a code block. This has different advantages, such as:

- no risk of creating conflicts by reusing the same variable in a different code block
- thread safe code related to the variable when running multi-threading programs
- fast code in loops since the inline variables use primitive types

The newest isCOBOL compiler implements primitive type inline variable declaration in the AS clause of PERFORM VARYING statements. For example, code like this:

```cobol
              perform varying in-idx as "int" from 1 by 1 until in-idx > 10000
                  move my-var(in-idx) to back-var(in-idx)
                  ...
              end-perform
```

can be used to declare the in-idx variable, which is not declared in the DATA DIVISION but can be accessed in the code block between PERFORM VARYING and END-PERFORM.

It is basically the equivalent of, but performs better than, the following:

```cobol
       working-storage section.
       01 w-idx      object reference "int".
           ...
              perform varying w-idx from 1 by 1 until w-idx > 10000
                  move my-var(w-idx) to back-var(w-idx)
                  ...
              end-perform
```

The inline variable type declaration follows the same syntax as the OBJECT REFERENCE clause and can reference a Java class name or a logical call name defined in the REPOSITORY.

### Improved auto-boxing

Auto-boxing refers to the capability of mixing Java and primitive types with COBOL variables in the same statement, making source code more readable and flexible. Auto-boxing has been vastly improved in the 2024 R1 release by supporting:

- the comparisons between numeric Java data types and COBOL. For example, code such as:

```cobol
       working-storage  section.
       77 obj-int       object reference "int".
       77 obj-long      object reference "long".
       77 obj-lang-int  object reference "java.lang.Integer".
       77 obj-lang-long object reference "java.lang.Long".
       77 var-num       pic 9(5)v9(3). 
       ... 
           if obj-int > 10
           if obj-int = var-num
           if var-num < obj-lang-long
           perform varying var-num from 1 by 1 until var-num > obj-long
           perform parag2 until obj-lang-int = var-num
           ... 
```

can now be compiled and executed, making it simpler to compare a numeric COBOL data item with other Java data types and primitive types.

- COBOL arithmetic operations on primitive data types and objects. The COBOL statements ADD, SUBTRACT, MULTIPLY, DIVIDE and COMPUTE can now contain Java data types without limitations. For example, code such as:

```cobol
             add 1 to obj-int
             subtract var-num from obj-long
             multiply obj-lang-int by var-num giving obj-lang-long
             divide obj-lang-long by obj-lang-int giving var-num  
             compute obj-lang-long = (var-num * 2) + 1
```

can be used to mix COBOL variables and Java data types in the same statement.

- arithmetic operations in CALL and INVOKE parameters. This is typically useful when passing parameters BY VALUE in CALL and when passing numeric parameters to Java methods. For example, the following code is now allowed:

```cobol
           call "PROG" using by value var-num - 1
                               by value var-num + 1
           if obj-string:>substring(var-num + 1, var-num + 2) = "A"
```

### External DataMap

The new compiler option -edm can create an xml file with the application’s DataMap. This file contains all the fields declared in DATA DIVISION; describing the details, declaration location and usage information. This xml file can be used to perform analysis with external tools or can be imported in a RDBMS system and queried. It can also be used to generate documentation by developers, for example.

Using the compiler option -edo= you can specify the location for the DataMap output file.

For example, compiling with this command:

```cobol
iscc -edm -edo=datamap progcust.cbl
```

a source that contains:

```cobol
       working-storage section.
       77 V1             pic 99.
       01 G1-VARS.
          03 G1-V1       pic 99.
          03 G1-V2       pic x(10).
       linkage section.
       copy "def-params.def".
```

with the copyfile def-params.def containing:

```cobol
       01 DEF-PAR1       pic x(10).
       01 DEF-PAR2.
          03 DEF-PAR-V3  pic 9(5).
```

This xml file can be used by an external tool to inquire all the information relative to every data-item; such as name, offset, length, type and declaration location (FD, Working, Linkage, …). Additional details include whether the field is elementary, boolean, constant, occurs, redefines, external, used by the program, or used as parameter in the USING clause of CALL and INVOKE statements. You can also determine if the data-item is declared in the main source or in a COPY file and also the replacing clause in case of a COPY REPLACING.

The file progcust.xml is created in the datamap folder with the following content:

```cobol
           <program name="PROGCUST">
             <field>
                <name>V1</name>
                <location>WS</location>
                <offset>0</offset>
                <physicalLength>2</physicalLength>
                <dataType>NumUnsigned</dataType>
                <elementary>yes</elementary>
                <usedByProgram>yes</usedByProgram>
                <usedAsParameter>yes</usedAsParameter>
             </field>
             <field>
                <name>G1-VARS</name>
                <location>WS</location>
                <offset>0</offset>
                <physicalLength>14</physicalLength>
                <dataType>Alphanum</dataType>
                <group>yes</group>
                <usedByProgram>no</usedByProgram>
                <usedAsParameter>no</usedAsParameter>
             </field>
                         <field>
                <name>G1-V1</name>
                <location>WS</location>
                <offset>0</offset>
                <physicalLength>2</physicalLength>
                <dataType>NumUnsigned</dataType>
                <elementary>yes</elementary>
                <usedByProgram>no</usedByProgram>
                <usedAsParameter>no</usedAsParameter>
             </field>
             <field>
                <name>G1-V2</name>
                <location>WS</location>
                <offset>2</offset>
                <physicalLength>10</physicalLength>
                <dataType>Alphanum</dataType>
                <elementary>yes</elementary>
                <usedByProgram>no</usedByProgram>
                <usedAsParameter>no</usedAsParameter>
             </field>
             <field>
                <name>DEF-PAR1</name>
                <location>LS</location>
                <offset>0</offset>
                <physicalLength>10</physicalLength>
                <dataType>Alphanum</dataType>
                <elementary>yes</elementary>
                <usedByProgram>yes</usedByProgram>
                <usedAsParameter>no</usedAsParameter>
                <copyFile>p2-params.def</copyFile>
             </field>
             ...
          </program>
```
