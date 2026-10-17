## Source Formats

isCOBOL supports four types of source format:

- [Fixed](./Fixed)
- [Free](./Free)
- [Terminal](./Terminal)
- [Variable](./Variable)

You can force the compiler to treat the source files with the rules of a specific source format using [Source Options](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#source-options) or the [SOURCE Directive](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Directives/SOURCE-Directive), as summarized in the below table:

| Source Format | Option to force it | Directive to force it |
| --- | --- | --- |
| Fixed | -sa | >>SOURCE FORMAT FIXED |
| Free | -sf | >>SOURCE FORMAT FREE |
| Terminal | -st | >>SOURCE FORMAT TERMINAL |
| Variable | -sv | >>SOURCE FORMAT VARIABLE |

When no option or directive is used, the compiler tries to understand the source format with the following criteria:

1. Find the first line that is not empty and doesn’t have an asterisk in both column 1 and column 7.
2. Check the content of the line:
- if it includes "\*>" anywhere, then the Free format is assumed, else
- if the first byte is an asterisk, then the Terminal format is assumed, else
- if the first byte is either a number from 0 to 9 or space, then the Fixed format is assumed, else
- the Free format is assumed.
