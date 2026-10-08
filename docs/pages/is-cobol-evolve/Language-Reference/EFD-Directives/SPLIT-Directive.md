## SPLIT Directive

This directive is used to define one or more table splitting points starting where the interface makes a new RDBMS table.

```cobol
>>EFD SPLIT
```

or

```cobol
$EFD SPLIT
```

or

```cobol
*(( EFD SPLIT ))
```

or

```cobol
*>(( EFD SPLIT ))
```

### Example

A COBOL FD structure using the SPLIT directive. In this example three tables named INVOICE, INVOICE_A, and INVOICE_B are created with fields between the split points.

```cobol
FILE SECTION.
FD INVOICE.
01 INV-RECORD-TOP.
   03 INV-KEY.
      05 INV-TYPE PIC X.
      05 INV-NUMBER PIC 9(5).
      05 INV-ID PIC 999.
   03 INV-CUSTOMER PIC X(30).
>>EFD SPLIT
   03 INV-KEY-D.
      05 INV-TYPE-D PIC X.
      05 INV-NUMBER-D PIC 9(5).
      05 INV-ID-B PIC 999.
>>EFD SPLIT
   03 INV-ARTICLES PIC X(30).
   03 INV-QTA PIC 9(5).
   03 INV-PRICE PIC 9(17).
```

This directive is supported for compatibility with third party interfaces. isCOBOL DatabaseBridge and c-tree SQL don’t currently support it.
