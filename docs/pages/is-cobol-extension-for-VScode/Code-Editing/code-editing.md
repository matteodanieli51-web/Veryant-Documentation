# Code Editing

The Veryant isCOBOL extension is designed for COBOL code developed with FREE FORMAT style, and is not fully prepared for FIXED FORMAT. Comment lines are treated as \*> and not as \* which is typically used in FIXED mode.

The Veryant isCOBOL extension offers the following features:

## Syntax coloring

COBOL keywords, strings and identifiers are colored with different colors so you can easily notice typo errors like misspelled keywords or unclosed strings. The syntax coloring also makes the source code easier to view.

![](../images/vs-syntax-coloring.png)

## Vertical bars

Vertical bars are shown in the editor to help you aligning the code in the COBOL source format areas.

Different vertical bars are shown depending on the current source format.

The source format is retrieved from compiler options as follows:

| Option | Source Format | Vertical Bars Locations |
| --- | --- | --- |
| Option | Source Format | Vertical Bars Locations |
| -sa | ANSI/Fixed | Bars at column 7, 8, 12 and 73 |
| -sf | Free | No bars |
| -st | Terminal | Bars at column 2 and 5 |
| -sv | Variable | Bars at column 7, 8 and 12 |

If no source format option was used, then the editor assumes the source format as follows:

• if the character at line 1 column 1 of the source file is an asterisk, then the Terminal format is assumed,

• otherwise the ANSI/Fixed format is assumed.

You can switch the vertical bars anytime with the following commands from the command palette:

• *isCOBOL: remove rulers for free format*

• *isCOBOL: set the rulers for ANSI format*

• *isCOBOL: set the rulers for terminal format*

• *isCOBOL: set the rulers for variable format*

![](../images/vs-rulers.png)

## Variable suggestion

Variables are suggested on several COBOL commands, such as MOVE, IF, SUBTRACT, ADD and others. Constants are also considered, each one appearing with a different icon on IntelliSense.

![](../images/vs-variable-suggestion.png)

## Paragraph suggestion and documentation

This extension suggests paragraphs based on what is typed on perform clause.

![](../images/vs-paragraph-suggestion.png)

## Code highlight

When you click over some COBOL keywords, the related keywords are highlighted for better understanding.

![](../images/vs-code-highlight.png)

## Peek definition

You can also peek at COBOL variable and paragraph definitions.

![](../images/vs-peek-def.png)

## Formatter and loop completion

The Language Server provides automatic formatting for several COBOL clauses.

## IntelliSense for variable declaration

The variable declaration is done in two steps so that the extension parses the picture and generates the most appropriate value in the VALUE clause.
