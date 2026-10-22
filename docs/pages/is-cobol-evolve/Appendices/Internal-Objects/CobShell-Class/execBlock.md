### execBlock

Executes a named block of code in the JOE script.

#### Format 1

```cobol
java.lang.Object execBlock (Block-Name)
```

#### Syntax rules

- *Block-Name* is a alphanumeric data item or string literal.

#### General rules

- *Block-Name* should point to the name of one of the [Blocks](../../../SDK-Users-Guide/Utilities/JOE/Blocks) included in the script.

#### Code example

```cobol
       configuration section.
       repository.
           class cobshell as "com.iscobol.cobshell.CobShell"
       ...
       working-storage section.
       77  joe object reference cobshell.
       ...
       procedure division.
       ...
           try
              joe:>execBlock ("showVersion")
           catch exception
              display exception-object
           end-try.
```

#### Format 2

```cobol
java.lang.Object execBlock (Block-Name, Arguments)
```

#### Syntax rules

- *Block-Name* is a alphanumeric data item or string literal.
- *Arguments* is a variable number of java.lang.Object instances. COBOL data items and literals can be used as well.

#### General rules

- *Block-Name* should point to the name of one of the [Blocks](../../../SDK-Users-Guide/Utilities/JOE/Blocks) included in the script.
- *Arguments* are passed to the block.

#### Code example

```cobol
       configuration section.
       repository.
           class cobshell as "com.iscobol.cobshell.CobShell"
       ...
       working-storage section.
       77  joe object reference cobshell.
       77  joe-result        pic x any length.
       77  w-id              pic x any length.
       ...
       procedure division.
       ...
           try
              set joe-result to joe:>execBlock ( "checkID",
                                                  w-id )
              display joe-result
           catch exception
              display exception-object
           end-try.
```
