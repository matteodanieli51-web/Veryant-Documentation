### SOURCE-COMPUTER Paragraph

The original purpose of the SOURCE-COMPUTER Paragraph was to describe the computer on which the program is compiled. Now, its only purpose is to enable the WITH DEBUGGING mode.

#### General format

```cobol
SOURCE-COMPUTER.
 
  [ Comment [ WITH DEBUGGING MODE ].]
```

#### Syntax rules

1. *Comment* is a commentary entry, as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.

#### General rules

1. When WITH DEBUGGING MODE is specified, the "D" character in the indicator area is no longer considered as comment marker, and those lines are executed.
2. If WITH DEBUGGING MODE is specified and the program is compiled with the [-cv](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#common-options) option, the Format 3 [SKIP3 skips three lines before the next line](\) statement can be used.
