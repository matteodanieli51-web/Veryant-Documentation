### Fixed

The Fixed format (also known as the Ansi format) divides the COBOL source row into 72 columns, that are used in the following way:

| | |
| --- | --- |
| Columns 1 to 6 | Sequence number |
| Column 7 | Indicator area |
| Columns 8 to 11 | Area A |
| Coulmns 12 to 72 | Area B |
| | |

- Division headers, section headers and paragraph names must start in Area A.
- Level numbers can appear either in Area A or Area B.
- All other COBOL text must start in Area B.
- Comments are identified by an asterisk, a slash or a dollar sign in the Indicator area (in this case the whole row is commented) or by a pipe in Area B (in this case only the text after the pipe is commented).
- Conditional debugging lines are identified by the "D" character in the Indicator area. These lines are treated as comment unless WITH DEBUGGING MODE is specified in the [SOURCE-COMPUTER Paragraph](../../Environment-Division/Configuration-Section/Source-computer).
- All text before column 7 and after column 72 is ignored by the Compiler.

**Note** - this source format is affected by the [-sl](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#source-options) compiler option and by the [IMP MARGIN-R IS AFTER END OF RECORD Directive](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Directives/IMP-MARGIN-R-IS-AFTER-END-OF-RECORD-Directive.md). When one of them is used, Area B is no longer limited to column 72; it has no limit.

#### Line continuation

Sentences, entries, phrases, and clauses that continue in Area B of subsequent lines are called continuation lines. A hyphen in a line's indicator area causes the first nonblank character in Area B to be the immediate successor of the last nonblank character of the preceding line. This continuation excludes intervening comment lines and blank lines.

If the continued line ends with a nonnumeric literal without a closing quotation mark, the first nonblank character in Area B of the continuation line must be a quotation mark. The continuation starts immediately after the quotation mark. All spaces at the end of the continued line are part of the literal.

If the indicator area of the continuation line is blank, the compiler treats the last nonblank character of the preceding line as if it were followed by a space.

If the indicator area of the continuation line is blank, but the rest of the line is not blank, the compiler considers the current literal as closed and raises the informational error #[287](\).
