## COPY

### Format 1

```cobol
COPY library-name [ {IN} path-name ] [ SUPPRESS PRINTING]
                    {OF}
 
                  [ REPLACING { { old-text BY new-text                } } ... ] .
                              { { {LEADING } literal-1 BY {literal-2} } }
                              { { {TRAILING}              {SPACE    } } }
                              { {                         {SPACES   } } }
```

### Format 2

```cobol
COPY RESOURCE resource-name  [ {IN} path-name ] 
                               {OF}
```

Syntax rules

1. The COPY statement must be terminated by a period
2. *Library-name*, *path-name* and *resource-name* must be a nonnumeric literals or user-defined words.
3. COPY statements may be nested in other COPY libraries.
4. Any one of the COPY statements in this structure can include the REPLACING phrase.
5. *Old-text* and *new-text* may be any of the following:

A. A series of text words placed between "==" delimiters.

B. A numeric or nonnumeric literal.

C. A data name, including qualifiers, subscripts and reference modification.

D. Any single text word.

6. *Resource-name* and *path-name* identify a resource file to be included in the resulting object file.

### General rules

#### Format 1

1. Library-name and path-name identify a source file to be included at the location of the COPY statement. If library-name is delimited by quotes, the source copy file is searched using the case specified by the statement. If library-name is not delimited by quotes, the source copy file is searched first using the case specified by the statement, if it’s not found, then it’s searched in all upper-case. For example:

```cobol
COPY "MyFile.Cpy"
```

will search only for *MyFile.Cpy*.

```cobol
COPY MyFile.Cpy
```

will search first for *MyFile.Cpy* and then for *MYFILE.CPY*.

The file extension is converted to upper-case along with the file name only if specified in the source code. File extensions specified through [-ce=Ext1...](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#source-options) compiler option are left unchanged. For example, having

```cobol
COPY MyFile
```

and compiling with *-ce=Cpy* will search first for *MyFile.Cpy* and then for *MYFILE.Cpy*.

2. If the word SUPPRESS appears after library-name and path-name, then the program listing file will not include the contents of the library file or any other library files that may be nested within.
3. The text of the library file is copied unchanged into the source program unless the REPLACING option is used. If the REPLACING option is used, then elements of the library file that match old-text or literal-1 are replaced by new-text or literal-2.
4. The comparison operation to determine text replacement occurs in the following manner:

A. The leftmost library text word that is not a separator comma or a separator semicolon is the first text word used for comparison. Any text word or space preceding this text word is copied into the source text. Starting with the first text word for comparison and first old-text or literal-1 that was specified in the REPLACING phrase, the entire REPLACING phrase operand that precedes the reserved word BY is compared to an equivalent number of contiguous library text words.

B. Old-text matches the library text only if the ordered sequence of text words that forms old-text is equal, character for character, to the ordered sequence of library text words. When the LEADING phrase is specified, literal-1 matches the library text only if the contiguous sequence of characters that forms partial-word-1 is equal, character for character, to the leading characters of the library text word. When the TRAILING phrase is specified, literal-1 matches the library text only if the contiguous sequence of characters that forms literal-1 is equal, character for character, to the trailing characters of the library text word.

C. The following rules apply for the purpose of matching:

i. Each occurrence of a separator comma, semicolon, or space in old-text or in the library text is considered to be a single space. Each sequence of one or more space separators is considered to be a single space.

ii. Except for the content of literals, each alphanumeric character is equivalent to its corresponding national character and each lowercase letter is equivalent to its corresponding uppercase letter.

iii. A compiler directive line in source text shall be considered a single text word that does not match any text word within old-text or literal-1.

iv. Comments or blank lines occurring in the source text and in old-text are ignored.

v. If no match occurs, the comparison is repeated with each next successive old-text or literal-1, if any, in the REPLACING phrase until either a match is found or there is no next successive REPLACING operand.

vi. When all the REPLACING phrase operands have been compared and no match has occurred, the leftmost library text word is copied into the source text. The next successive library text word is then considered as the leftmost library text word, and the comparison cycle starts again with the first old-text or literal-1 specified in the REPLACING phrase. When a match occurs between old-text and the library text, the corresponding new-text is placed into the source text. When a match occurs between partial-word-1 and the library text word, the library text word is placed into the source text with the matched characters either replaced by literal-2 or deleted when literal-2 consists of zero text words. The library text word immediately following the rightmost text word that participated in the match is then considered as the leftmost text word. The comparison cycle starts again with the first old-text or literal-1 specified in the REPLACING phrase.

vii. The comparison operation continues until the rightmost text word in the library text has either participated in a match or been considered as a leftmost library text word and participated in a complete comparison cycle.

D. If the REPLACING phrase is specified, the library text shall not contain a COPY statement and the source text that results from processing the REPLACING phrase shall not contain a COPY statement.

E. Comments or blank lines appearing in new-text are copied into the source text unchanged whenever new-text is placed into the source text as a result of text replacement. Comments or blank lines appearing in library text are copied into the source text unchanged with the following exception: a comment or blank line in library text is not copied if that comment or blank line appears within the sequence of text words that match old-text.

F. The REPLACING phrase can be used to replace substrings.

To make use of this, delimit the substring that will be replaced in the COPY library with quotes. Then use the standard COPY syntax to replace the quoted substring by another substring. The resulting sequence of characters is re-evaluated by the compiler to make a new string.

For example, suppose you have a COPY library called "MYLIB" that contains the following:

```cobol
77 THE-'DUMMY'-DATA-ITEM PIC X(10).
```

and you used this COPY statement:

```cobol
COPY "MYLIB" REPLACING =='DUMMY'== BY ==REAL==.
```

Then the text of "MYLIB" is effectively treated as:

```cobol
77 THE-REAL-DATA-ITEM PIC X(10).
```

5. When the [-sevc](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options.md#source-options) option is used, you may use operating system environment variables as well as configuration properties in the OF phrase of a COPY statement. To reference an environment variable or a configuration property, place a $ in front of it. For example, if you assign ENVPATH to C:\\Develop\\Copybooks, then the statement

```cobol
COPY "CUSTDATA" OF "$ENVPATH".
```

would use the file C:\\Develop\\Copybooks\\CUSTDATA.

To assign ENVPATH in the operating system environment, use *SET ENVPATH=C:\\Develop\\Copybooks* on Windows and *export ENVPATH=C:\\Develop\\Copybooks* on Linux/Unix. To assign ENVPATH as a property in the Compiler configuration, use *iscobol.envpath=C:\\\\Develop\\\\Copybooks*.

You may use multiple environment variables by preceding each one with a $ symbol. Symbol names may contain alphanumeric characters, hyphens, underscores, and dollar signs. If the symbol name is not found in the environment, it is left unchanged (including the initial $ symbol). Symbols are not processed recursively; if the value of a symbol contains a $, the dollars sign is used literally in the final file name.

#### Format 2

6. The effect of a COPY RESOURCE statement is to add resource-name to a list of resources that the compiler embeds into the resulting class file. Conventionally, COPY RESOURCE statements are placed either in Working-Storage or at the end of the program, but any location is acceptable.
7. The resource is compressed before being added to the class file.
8. After *resource-name* has been included in the compiled class file, it can be accessed without case sensitivity by COBOL routines.
9. On case sensitive systems like Linux, having multiple COPY RESOURCE statements that include files with the same name but different case, the compiler will include the last of these files.
