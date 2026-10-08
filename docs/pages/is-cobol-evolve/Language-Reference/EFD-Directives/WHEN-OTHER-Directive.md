## WHEN OTHER Directive

The WHEN OTHER directive is a special form of WHEN directive where no specific field is tested. By specifying a WHEN OTHER directive in the code, the field (and subordinate fields in the case of a group item) immediately following this directive will appear as an explicit column, or columns, in the database tables when all the conditions specified by other WHEN directives are false.

This directive is particularly useful when multiple fields are tested by other WHEN directives, making it difficult to create a condition that is satisfied when all the other conditions are false.

This directive can be used only to map a record definition to a RDBMS table, hence the TABLENAME clause is madatory.

```cobol
>>EFD WHEN OTHER  TABLENAME = TableName
```

or

```cobol
$EFD WHEN OTHER  TABLENAME = TableName
```

or

```cobol
*(( EFD WHEN OTHER  TABLENAME = TableName ))
```

or

```cobol
*>(( EFD WHEN OTHER  TABLENAME = TableName ))
```

### Example

A COBOL FD structure using the "When" directive with two table names.

```cobol
      >>EFD FILE=INV
       FD  INVOICE.
      >>EFD WHEN INV-TYPE = "H" OR INV-TYPE = "A" TABLENAME = INV-HEADER
       01  INV-RECORD-HEADER.
        03 INV-KEY.
           05 INV-TYPE         PIC X.
           05 INV-NUMBER       PIC 9(5).
           05 INV-ID           PIC 999.
        03 INV-CUSTOMER        PIC X(30).
 
      >>EFD WHEN OTHER TABLENAME = INV-DETAILS
       01  INV-RECORD-DETAILS.
        03 INV-KEY-D.
           05 INV-TYPE-D       PIC X.
           05 INV-NUMBER-D     PIC 9(5).
           05 INV-ID-D         PIC 999.
        03 INV-ARTICLES        PIC X(30).
        03 INV-QTA             PIC 9(5).
        03 INV-PRICE           PIC 9(17).
```

We assume that every record that is not a header row (it doesn’t have neither INV-TYPE="H" nor INV-TYPE="A") is a detail row.

The interface uses two tables named "inv_header" and "inv_details" according to the value of INV-TYPE field.

```cobol
      *>WRITE HEADER ROW
           MOVE "H" TO INV-TYPE
           MOVE 1   TO INV-NUMBER
           MOVE 0   TO INV-ID
           MOVE "acme company" TO INV-CUSTOMER
           WRITE INV-RECORD-HEADER
      *>WRITE DETAIL ROWS
           MOVE "D" TO INV-TYPE
           MOVE 1   TO INV-NUMBER
           MOVE 0   TO INV-ID
           MOVE "floppy disk" TO INV-ARTICLES
           MOVE 10  TO INV-QTA
           MOVE 123 TO INV-PRICE
           WRITE INV-RECORD-DETAILS
```

Running the code above with isCOBOL DatabaseBridge, for example, the EDBI routine fills the INV-RECORD-HEADER record in the "inv_header" table and INV-RECORD-DETAILS in the "inv_details" table.
