## C$REGEXP

The C$REGEXP routine allows you to search strings using regular expressions.

A simple use of C$REGEXP is outlined in the following steps.

1. Validate and compile your regular expression with [CREGEXP-COMPILE](./CREGEXP-COMPILE). You should check the result to handle possible errors in the expression.
2. Use [CREGEXP-MATCH](./CREGEXP-MATCH) to apply a compiled regular expression to a string to search for a match. You may need to do this iteratively to find all matches in the string.
3. Use [CREGEXP-NUMGROUPS](./CREGEXP-NUMGROUPS) and [CREGEXP-GETMATCH](./CREGEXP-GETMATCH) to work with subexpression matches.
4. Release the memory used by this routine with [CREGEXP-RELEASE-MATCH](./CREGEXP-RELEASE-MATCH) and [CREGEXP-RELEASE](./CREGEXP-RELEASE).

### Syntax

```cobol
 CALL "C$REGEXP" USING opCode
                       parameters
                GIVING returnCode
```

### Parameters

|  |  |  |
| --- | --- | --- |
| *opCode* | Specifies the operation to perform.<br>Valid values, defined in [iscobol.def](../../Copybooks/iscobol.def), are: |  |
|  | [CREGEXP-GET-LEVEL](./CREGEXP-GET-LEVEL) | Tells if regular expressions are supported. |
|  | [CREGEXP-COMPILE](./CREGEXP-COMPILE) | Validates a regular expression. |
|  | [CREGEXP-MATCH](./CREGEXP-MATCH) | Applies a regular expression to a string. |
|  | [CREGEXP-RELEASE-MATCH](./CREGEXP-RELEASE-MATCH) | Frees memory that is allocated by CREGEXP-MATCH. |
|  | [CREGEXP-RELEASE](./CREGEXP-RELEASE) | Frees memory allocated by CREGEXP-COMPILE. |
|  | [CREGEXP-NUMGROUPS](./CREGEXP-NUMGROUPS) | Returns the number of substrings that matched any subgroups in the regular expression. |
|  | [CREGEXP-GETMATCH](./CREGEXP-GETMATCH) | Returns a set of indices into a string passed to CREGEXP-MATCH that match the subexpression of the regular expression. |
|  | [CREGEXP-LAST-ERROR](./CREGEXP-LAST-ERROR) | Returns the last error. |
| *parameters* | Parameters depend on the opcode. |  |

### Return code:

Unless otherwise noted, each operation returns a value or a status in the *returnCode* data item. Its contents vary by operation and the result of the operation.

### Examples:

**Example -** Use regular expressions to check if a text string contains non-ASCII characters

```cobol
       working-storage section.
       copy "iscobol.def".
       01 h-regex handle.
       01 h-match handle.
       01 reg-expr       pic x(32).
       01 eng-phrase     pic x(64)
                         value "Today is a beautiful day".
       01 ita-phrase     pic x(64)
                         value "Oggi è una bella giornata".
       01 text-to-parse  pic x(64).
       01 match-start    pic 99.
       01 match-end      pic 99.
       01 err-msg        pic x(64).

       procedure division.
       main.
      *check if regexp are supported
          call "c$regexp" using cregexp-get-level.
          if return-code = 0
              display "regular expressions not supported."
              stop run
          end-if.
      *compile the regexp
          string "[^\x00-\x7F]+" x"00" into reg-expr.
          call "c$regexp" using cregexp-compile, reg-expr
                         giving h-regex
          if h-regex = 0
             call "c$regexp" using cregexp-last-error, err-msg
             display return-code " " err-msg
             stop run
          end-if.
      *test eng-phrase for non-ASCII characters
          move eng-phrase to text-to-parse.
          perform check-text.
      *test ita-phrase for non-ASCII characters
          move ita-phrase to text-to-parse.
          perform check-text.
      *release regexp memory and exit
          call "c$regexp" using cregexp-release, h-regex.
          goback.

       check-text.
          display "'" function trimr(text-to-parse) "' " no advancing
          move 0 to match-start.
          call "c$regexp" using cregexp-match, h-regex, text-to-parse
                                0, match-start, match-end
                         giving h-match.
          if h-match = 0
              display "doesn't contain non-ASCII characters"
          else
              display "contains non-ASCII characters, i.e. '"
                    text-to-parse(match-start:match-end - match-start)
                    "'"
          end-if.
          call "c$regexp" using cregexp-release-match, h-match.
```
