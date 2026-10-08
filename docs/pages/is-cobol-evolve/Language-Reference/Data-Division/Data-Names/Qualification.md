### Qualification

Every user-defined name explicitly referenced in a COBOL source program must be uniquely referenced because either:

1. No other name has the identical spelling and hyphenation.
2. It is unique within the context of a REDEFINES clause.
3. The name exists within a hierarchy of names such that reference to the name can be made unique by mentioning one or more of the higher level names in the hierarchy.

These higher level names are called qualifiers and this process that specifies uniqueness is called qualification. Identical user-defined names may appear in a source program; however, uniqueness must then be established through qualification for each user-defined name explicitly referenced, except in the case of redefinition. All available qualifiers need not be specified so-long as uniqueness is established. Reserved words naming the special registers require qualification to provide uniqueness of reference whenever a source program would result in more than one occurrence of any of these special registers.

Regardless of the above, the same data-name must not be used as the name of an external record and as the name of any other external data item described in any program contained within or containing the program which describes that external data record.

#### General formats

##### Format 1:

```cobol
{Data-Name-1   } { {OF} Data-Name-2 } ... [ {OF} File-Name-1 ]
{Condition-Name}   {IN}                     {IN}
```

##### Format 2:

```cobol
Paragraph-Name {OF} Section-Name
               {IN}
```

##### Format 3:

```cobol
Text-Name {OF} Library-Name
          {IN}
```

##### Format 4:

```cobol
LINAGE-COUNTER {OF} File-Name-2
               {IN}
```

##### Format 5:

```cobol
PAGE-COUNTER {OF} Report-Name-2
             {IN}
LINE-COUNTER {OF} Report-Name-2
             {IN}
```

#### General rules

1. For each nonunique user-defined name that is explicitly referenced, uniqueness must be established through a sequence of qualifiers which precludes any ambiguity of reference.
2. A name can be qualified even though it does not need qualification; if there is more than one combination of qualifiers that ensures uniqueness, any such set can be used.
3. IN and OF are synonymous.
4. In Format 1, each qualifier must be the name associated with a level indicator, the name of a [group item](../Concept-of-Levels/Concept-of-Levels) to which the item being qualified is subordinate, or the name of the conditional variable with which the condition-name being qualified is associated. Qualifiers are specified in the order of successively more inclusive levels in the hierarchy.
5. In *Format 1*, *Data-Name-1* or *Data-Name-2* may be a record-name.
6. If explicitly referenced, a paragraph name must not be duplicated within a section. When a paragraph name is qualified by a section name, the word SECTION must not appear. A paragraph name need not be qualified when referred to from within the same section.
7. *Text-Name* is the name of a copybook.
8. *Library-Name* is the name of a directory that contains Text-Name.
9. LINAGE-COUNTER must be qualified each time it is referenced if more than one file description entry containing a LINAGE clause has been specified in the source program.
10. LINE-COUNTER shall be qualified each time it is referenced in the procedure division if more than one report description entry is specified in the source element. In the report section, an unqualified reference to LINE-COUNTER is qualified implicitly by the name of the report in whose report description entry the reference is made. Whenever the LINE-COUNTER of a different report is referenced, LINE-COUNTER shall be qualified explicitly by the report-name associated with the different report.
11. PAGE-COUNTER shall be qualified each time it is referenced in the procedure division if more than one report description entry is specified in the source element. In the report section, an unqualified reference to the PAGE-COUNTER is qualified implicitly by the name of the report in whose report description entry the reference is made. Whenever the PAGE-COUNTER of a different report is referenced, PAGE-COUNTER shall be qualified explicitly by the report-name associated with the different report.
