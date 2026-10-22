### PROPERTY clause

The PROPERTY clause allows to define a property in Object Oriented Programming.

#### General format

```cobol
PROPERTY
```

#### Syntax rules

1. The PROPERTY clause can be specified only in the Working-Storage Section of a factory definition or an object definition.
2. The PROPERTY clause must not be specified for data items subordinate to an OCCURS clause.
3. The PROPERTY clause can be specified only for an elementary item whose name does not require qualification for uniqueness of reference.
4. The data-name for the subject of the entry must not be the same as a property-name defined in a superclass.

#### General rules

1. the PROPERTY clause causes a GET method and a SET method to be defined for the containing factory or object. The implicit definition of these method is as follows:

```cobol
 METHOD-ID. GET PROPERTY data-name.
 DATA DIVISION.
 WORKING-STORAGE SECTION.
 01 WS-data-name data-description.
 PROCEDURE DIVISION RETURNING LS-data-name.
 par-name.
     MOVE data-name TO WS-data-name
     EXIT METHOD.
 END METHOD. 
 
 METHOD-ID. SET PROPERTY data-name.
 DATA DIVISION.
 LINKAGE SECTION.
 01 LS-data-name data-description.
 PROCEDURE DIVISION USING LS-data-name.
 par-name.
     MOVE LS-data-name TO data-name
     EXIT METHOD.
 END METHOD.
```

These methods can be overridden in order to use custom code.
