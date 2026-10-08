### Variable

The Variable format divides the COBOL source row into areas as in Fixed format. The only difference from Fixed format is that the B area has no fixed right margin, though for practical purposes this implementation restricts the maximum length of a source line to 250 single-byte or 125 double-byte characters:

| | |
| --- | --- |
| Columns 1 to 6 | Sequence number |
| Column 7 | Indicator area |
| Columns 8 to 11 | Area A |
| Coulmns 12 to 250 | Area B |
| | |

- Division headers, section headers and paragraph names must start in Area A.
- Level numbers can appear either in Area A or Area B.
- All other COBOL text must start in Area B.
- Comments are identified by an asterisk, a slash or a dollar sign in the Indicator area (in this case the whole row is commented) or by a pipe in Area B (in this case only the text after the pipe is commented). Putting a star in column 1 creates a comment that will not be included in the list.
- Conditional debugging lines are identified by the "D" character in the Indicator area. These lines are treated as comment unless WITH DEBUGGING MODE is specified in the [SOURCE-COMPUTER Paragraph](\).
- All text before column 7 and after column 250 is ignored by the Compiler.

#### Line continuation

Sentences, entries, phrases, and clauses that continue in Area B of subsequent lines are called continuation lines. A hyphen in a line's indicator area causes the first nonblank character in Area B to be the immediate successor of the last nonblank character of the preceding line. This continuation excludes intervening comment lines and blank lines.

If the continued line ends with a nonnumeric literal without a closing quotation mark, the first nonblank character in Area B of the continuation line must be a quotation mark. The continuation starts immediately after the quotation mark. All spaces at the end of the continued line are part of the literal.

If the indicator area of the continuation line is blank, the compiler treats the last nonblank character of the preceding line as if it were followed by a space.

If the indicator area of the continuation line is blank, but the rest of the line is not blank, the compiler considers the current literal as closed and raises the informational error #[287](\).
