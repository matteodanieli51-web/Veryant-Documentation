## isCOBOL Code Coverage

### Introduction

Test coverage is a measure used to describe the degree to which the source code of a program is executed when a particular test suite runs. A program with high test coverage, measured as a percentage, has had more of its source code executed during testing, which suggests it has a lower chance of containing undetected software bugs compared to a program with low test coverage.

While an application is running with code coverage, code execution is logged for each program and sub-program. The results are rendered in HTML format at the end of the runtime session.

### Covered and missed blocks

A block is a portion of code that, when executed, is executed consecutively and linearly. This means you can assume that if one part of the block executes, then the rest of the block has been executed as well.

Code that is not executed linearly includes more than one block of code. It is the case, for example, of IF THEN ELSE statements, where the individual clauses in the statement are not executed in a single pass.

Blocks of code that are executed are considered covered, while blocks of code that are not executed are considered missed.

### Restrictions

The isCOBOL code coverage implementation captures only the activity of COBOL classes, so classes that implement the com.iscobol.rts.IscobolClass interface. Other classes are not considered.
