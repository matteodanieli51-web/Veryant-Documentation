## WHEN Directive

The WHEN directive is used to build certain columns in the RDBMS that wouldn't normally be built by default. By specifying a WHEN directive in the code, the field (and subordinate fields in the case of a group item) immediately following this directive will appear as an explicit column, or columns, in the database tables.

The database stores and retrieves all fields regardless of whether they are explicit or not. Furthermore, key fields and fields from the largest record automatically become explicit columns in the database table. The WHEN directive is only used to guarantee that additional fields will become explicit columns when you want to include multiple record definitions.

One condition for how the columns are to be used is specified in the WHEN directive. Additional fields that are to become explicit columns in a database table must not be FILLER or occupy the same area as key fields.

```cobol
>>EFD WHEN Conditions [ TABLENAME = TableName ]
```

or

```cobol
$EFD WHEN Conditions [ TABLENAME = TableName ]
```

or

```cobol
*(( EFD WHEN Conditions [ TABLENAME = TableName ] ))
```

or

```cobol
*>(( EFD WHEN Conditions [ TABLENAME = TableName ] ))
```

*Conditions* is a sequence of one or more conditions separated by AND and OR operators:

```cobol
Condition [ {AND} Condition [...[ {AND} Condition ] ] ]
            {OR }                 {OR }
```

*Condition* is

```cobol
{ Field { =  } Value } 
        { <= }
        { <  }
        { >= }
        { >  }
        { != }
{ Field   =    OTHER }
```

*Field* is a previously defined COBOL field. This field must be part of the primary key when you work with isCOBOL DatabaseBridge and c-tree SQL features.

*Value* is an explicit data value enclosed in quotes.

When Field = OTHER is used, the field or fields after OTHER must be used only if the WHEN condition or conditions listed at the same level are not met. OTHER can be used before one record definition, and, within each record definition, once at each level. It is necessary to use a WHEN directive with OTHER in the eventuality that the data in a field doesn't meet the explicit conditions specified in the other WHEN directives, otherwise, the results will be undefined.

When TABLENAME is used, the name of the table is changed at run-time according to the condition defined by the WHEN directive.

When you work with c-tree SQL features, every record definition in a multi-record FD should be mapped with a WHEN directive with TABLENAME.

When multiple conditions are specified in a source code in fixed format, it’s possible that the directive extends over columns 72. In this case, consider splitting the directive on multiple lines as explained in [Splitting a EFD directive on multiple lines](../EFD-Directives/EFD-Directives#splitting-a-efd-directive-on-multiple-lines).

### Example

A COBOL FD structure using the "When" directive with two table names.

```cobol
      >>EFD FILE=INV
       FD  INVOICE.
      >>EFD WHEN INV-TYPE = "A" TABLENAME = INV-HEADER
       01  INV-RECORD-HEADER.
        03 INV-KEY.
           05 INV-TYPE         PIC X.
           05 INV-NUMBER       PIC 9(5).
           05 INV-ID           PIC 999.
        03 INV-CUSTOMER        PIC X(30).
 
      >>EFD WHEN INV-TYPE = "B" TABLENAME = INV-DETAILS
       01  INV-RECORD-DETAILS.
        03 INV-KEY-D.
           05 INV-TYPE-D       PIC X.
           05 INV-NUMBER-D     PIC 9(5).
           05 INV-ID-D         PIC 999.
        03 INV-ARTICLES        PIC X(30).
        03 INV-QTA             PIC 9(5).
        03 INV-PRICE           PIC 9(17).
```

The interface uses two tables named "inv_header" and "inv_details" according to the value of INV-TYPE field.

```cobol
      *>WRITE HEADER ROW
           MOVE "A" TO INV-TYPE
           MOVE 1   TO INV-NUMBER
           MOVE 0   TO INV-ID
           MOVE "acme company" TO INV-CUSTOMER
           WRITE INV-RECORD-HEADER
      *>WRITE DETAIL ROWS
           MOVE "B" TO INV-TYPE
           MOVE 1   TO INV-NUMBER
           MOVE 0   TO INV-ID
           MOVE "floppy disk" TO INV-ARTICLES
           MOVE 10  TO INV-QTA
           MOVE 123 TO INV-PRICE
           WRITE INV-RECORD-DETAILS
```

Running the code above with isCOBOL DatabaseBridge, for example, the EDBI routine fills the INV-RECORD-HEADER record in the "inv_header" table and INV-RECORD-DETAILS in the "inv_details" table.

EFD WHEN can also be used with REDEFINES:

```cobol
      >>EFD FILE=INV
       FD  INVOICE.
       01 REC-INVOICE.
          03 INV-KEY.
             05 INV-TYPE         PIC X.
             05 INV-NUMBER       PIC 9(5).
             05 INV-ID           PIC 999.
      >>EFD WHEN INV-TYPE = "A" TABLENAME = INV-HEADER
          03  INV-RECORD-HEADER.
             05 INV-CUSTOMER        PIC X(30).
      >>EFD WHEN INV-TYPE = "B" TABLENAME = INV-DETAILS
          03  INV-RECORD-DETAILS REDEFINES INV-RECORD-HEADER. 
              05 INV-ARTICLES     PIC X(30).
              05 INV-QTA          PIC 9(5).
              05 INV-PRICE        PIC 9(17).
```

When TABLENAME is not used, all fields are handled in the same table. In this case, fields under WHEN Directive are filled only when the condition is true.

A COBOL FD structure using the "When" directive without TABLENAME.

```cobol
      >>EFD FILE=CUST
       FD  CUST.
       01  CUST-RECORD.
           03 CUST-COD        PIC X(5).
           03 CUST-NAME1      PIC X(35).
           03 CUST-NAME2      PIC X(35).
           03 CUST-CONTACT    PIC 9. |1 for e-mail, 2 for cell phone
           03 CUST-CELL       PIC X(32).
      >>EFD WHEN CUST-CONTACT = "1"      
           03 CUST-EMAIL      PIC X(32) REDEFINES CUST-CELL.
```
