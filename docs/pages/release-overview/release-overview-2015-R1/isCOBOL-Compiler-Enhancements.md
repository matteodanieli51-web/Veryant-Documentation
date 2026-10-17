## isCOBOL Compiler Enhancements

The isCOBOL Evolve 2015 R1 release includes many changes on the isCOBOL Compiler that improve its power and flexibility simplifying some areas of migration to isCOBOL from other COBOLs.

- Index search for similar words

The START statement was improved to allow the search of similar keys. For example: If a user searches an index file for the word "Verynt" and there is a word "Veryant" in the index the search engine or the program may ask the user the question "Do you mean Veryant ? "as it happens with most search engines on the web.

The implementation uses a Damerau-Levenshtein distance algorithm to calculate the "distance" between two strings and determine how many steps it takes to transform one string into another. APPROX new clause is supported in the LIKE operator to allow searches with approximate string matching.

Example:

```cobol
       77 w-company-name pic x any length.
       77 w-approx-lev   pic 9.
 
..
 
       move "Verynt" to w-company-name.
       move w-company-name to company-name.
       move 1 to w-approx-lev.
       start file-company key > company-name
           while like trimmed approx w-approx-lev
           case-insensitive company-name
       perform until file-status not = "00"
          read file-company next not at end 
             if company-name
                like trimmed approx w-approx-lev
                case-insensitive w-company-name
                display "found the company: " company-name
             end-if
          end-read
       end-perform.
```

The above example will start the file containing the company names with the APPROX syntax, and it will check with the IF statement if the company-name match with the given string. So “Veryant” will be a good result because it is approximate to “Verynt”.

- Object Oriented syntax improvements

The INVOKE and OBJECT REFERENCE syntax are now enhanced to support the dynamic method of name invocation. The implementation follows ANSI2002 rules on “Universal Object” argument. In practice, declaring an OBJECT REFERENCE without the ClassName, makes the object become a Universal Object. The method name invoked can then be set in a variable to take advantage of the dynamic method name.

Code example:

```cobol
           repository.
               class cstring as "java.lang.String"
               class cinteger as "java.lang.Integer"
               .
           working-storage section.
           01  ostr object reference cstring.
           01  universalObject object reference.
           01  wsmethodname pic x(20).
           procedure division.
               set ostr = "hello world"
               move "substring" to wsmethodname
               invoke ostr wsmethodname using 2 8 returning universalObject
               display universalObject:>toString
               set universalObject to null
               set universalObject to cinteger:>new(3)
               display universalObject:>toString
               .
```

- New compiler options

The isCOBOL 2015 R1 compiler introduces new options

-ssnl to convert subroutine names to lower case;

-ssnu to convert subroutine names to upper case;

-cnlz to have leading zeros shown in character numeric display;

-cfp36 allows the intermediate results to always be calculated to 36 digits;

-wdbz shows warnings for possible divide by zero without ON SIZE ERROR;

-ssnl and –ssnu, could be useful during MicroFocus migrations when C routines are called.

Thereby, it allows those options at the compile time to force upper/lower case name of C routines to be called.

-cnlz helps all character base applications that need to have leading zeros shown when a numeric field is displayed on the screen. The isCOBOL default behavior is to remove leading zeroes during DISPLAY statement. Some COBOL implementers have different default behavior so these options simplify the migration to isCOBOL.

-cpf36 forces isCOBOL runtime to make intermediate calculations using 36 digits instead of 20 digits. COBOL programs that need calculation and better precision can take advantage of this option.

-wdbz produces a warning to easily identify cases where COMPUTE or DIVIDE statements are used without ON SIZE ERROR clause. Having COMPUTED or DIVIDE statement without ON SIZE ERROR could produce unexpected results or runtime errors in case of divide by zero.

- Enhanced supported syntax

ACCEPT FROM WINDOW allow now to specify OF THREAD H-THREAD to receive the window handle of specified thread. This allow to easily retrieve from a different thread running (for example the main menu of the application), the window handle of a separated thread (for example a called program in thread mode) to set the input window as required.

Example:

```cobol
accept hwin-pgm from window of Thread22
set input window to hwin-pgm
```

- Enhanced External File Descriptors (.xml or .iss)

Complex conditions are now fully supported with AND, OR syntax.

Examples:

```cobol
      *(( efd when field-type = 1 or 
                   field-type = 2 and 
                   field-zone = 1 tablename=custzone1 ))
                   ..
 
      *(( efd when field-type = other and 
                   field-cust >= 100 tablename=othercust ))
```

New property to define default Julian base date

A new property named iscobol.compiler.iss_julian_base was providing to setup the default base date for all Julian date defined.

For example if you have defined some Julian date on FD like:

```cobol
      $EFD DATE=JJJJJ
               03 arc-d pic 9(5).
```

Setting in isCOBOL properties file a property like:

```cobol
iscobol.compiler.iss_julian_base=19000101
```

This means that all Julian dates will use 1 January 1900 as Julian base date. If the property is not set, no date is registered in the iss dictionary and so CTreeSQL will use the 1 March 1700.

- Enhanced compatibility with other COBOLs

In addition to the above compiler options, starting from isCOBOL 2015 R1, ESQL built-in pre-compiler, now supports square brackets and dots in stored procedure names. A new library routine named C$XML was added to simplify migration from ACUCOBOL-GT. Starting from the beginning, isCOBOL was equipped with a powerful and native way to support XML streams.
