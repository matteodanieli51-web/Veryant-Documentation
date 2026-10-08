### OBJECT-COMPUTER Paragraph

The original purpose of the OBJECT-COMPUTER Paragraph was to describe the computer on which the program is to be executed. Now, its only purpose is to alter non-numeric comparison rules for the whole program.

#### General format

```cobol
OBJECT-COMPUTER.
 
  [ Comment .]
 
  [ PROGRAM COLLATING SEQUENCE IS alphabet-name ]
```

#### Syntax rules

1. *Comment* is a commentary entry, as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.
2. *alphabet-name* is a [User-defined word](../../Preface/Definitions#user-defined-word) that describes the collating sequence of the object machine.

#### General rules

1. The COLLATING SEQUENCE clause specifies the collating sequence for any alphanumeric comparisons done in the program. The sequence of the characters in the alphabet determines the sequence for character comparisons. It also specifies the default collating sequence for the SORT verb.
