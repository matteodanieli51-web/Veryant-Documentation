## DECLARE

```cobol
DECLARE Data-Name-1 AS Type [ = Value-Expression ]
```

### Syntax rules

1. *Data-Name-1* is a User-defined word, as defined in the [Definitions](../Preface/Definitions) section in the Preface of this document.
2. *Type* can be:

A. any Java primitive type to be specified between quotes,

B. any Java class to be specified between quotes or through a logical name mapped in the REPOSITORY paragraph,

C. an elementary typedef.

3. *Value-Expression* is a data-item or literal as defined in the [Definitions](../Preface/Definitions) section in the Preface of this document.

### General rules

1. The DECLARE statement declares one or more local variables within the Procedure Division body. The scope of any inline local variable is from the point of declaration until the end of the innermost containing block, where statement clauses, paragraphs, sections and the whole method are considered to be blocks.
2. Being limited to a specific block the same data name can be used in sibling blocks, but not in nested blocks.
3. The runtime performs autoboxing to make the local variable compatible with the COBOL statement where such variable is referenced. If the Compiler notices that autoboxing is not possible, a type clash severe error is returned.
4. If *Value-Expression* is specified, it’s assigned to *Data-Name-1* with an implicit [SET](./SET) statement.

If *Value-Expression* is omitted, the following implicit initialization occurs:

- primitive 'byte', 'short', 'int', 'long', 'float', 'double' and 'char' data items are set to 0,
- primitive 'boolean' data items are set to false,
- object references are set to null.

### Examples

Define some local variables with different syntaxes and use them

```cobol
       CONFIGURATION SECTION.
       REPOSITORY.
           class JDOUBLE as "java.lang.Double".
       WORKING-STORAGE SECTION.
       77 pic9 is typedef pic 9(5)v99 comp.
       PROCEDURE DIVISION.
       MAIN.
           perform USE-LOCAL-VARS through USE-LOCAL-VARS-EX.
           goback.
       USE-LOCAL-VARS.
           declare gross-price as JDOUBLE = 199.90.
           if gross-price > 0
              declare discount as "int" = 5
              declare net-price as pic9
              compute net-price = gross-price - (gross-price * discount / 100)
              display "Amount to pay: " net-price
           end-if.
      * discount and net-price don't exist anymore at this point
       USE-LOCAL-VARS-EX.
      * gross-price doesn't exist anymore at this point
           exit. 
```
