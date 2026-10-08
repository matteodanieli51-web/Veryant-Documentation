## ENTRY

### General Format

```cobol
ENTRY Entry-Name [ USING [ BY { VALUE     } ]{ Identifier } ... ]
                              { REFERENCE }
```

### Syntax rules

1. *Entry-Name* is a non-numeric literal.
2. *Identifier* is a data item defined with a level-number of 01 or 77 and it must appear in the Linkage Section.
3. Each *Identifier* cannot appear more than once in the USING phrase.

### General rules

1. The Linkage Section is referenced for parameters in the USING phrase.
2. The ENTRY point must be loaded and present in memory before a CALL statement referencing the ENTRY point is used. Once loaded, COBOL programs may be called by any of their ENTRY point names. Name matching logic is not case sensitive.
3. Both the BY REFERENCE and the BY VALUE phrases are transitive across the parameters that follow them until another BY REFERENCE or BY VALUE phrase is encountered. If neither the BY REFERENCE nor the BY VALUE phrase is specified prior to the first parameter, the BY REFERENCE phrase is assumed.

### Examples

Program with several entry points and program to call the different entry-points

```cobol
program-id. testentry.
 
linkage section.
01 par-1  pic x(5).
01 par-2  pic x(5).
01 par-3  pic 9(5).
 
procedure division.
main.
 perform finish.
 entry "tentry1" using par-1
    perform p-entry1.
 entry "tentry2" using par-2
    perform p-entry2. 
 entry "tentry3" using par-1 par-3
    perform p-entry3.
 
finish.
  goback.
 
p-entry1.
  display message "Entry 1 : " par-1
  perform finish.
 
p-entry2.
  display message "Entry 2 : " par-2
  perform finish.
 
p-entry3.
  display message "Entry 3 : " par-1 ", " par-3
  perform finish.
```

```cobol
program-id. callentry.
 
working-storage section.
01 ws-par-1  pic x(5) value "hello".
01 ws-par-2  pic x(5) value "bye".
01 ws-par-3  pic 9(5) value 12345.
 
procedure division.
main.
  call "testentry"
  call "tentry3" using ws-par-1 ws-par-3
  call "tentry2" using ws-par-2
  call "tentry1" using ws-par-1
  goback.
```
