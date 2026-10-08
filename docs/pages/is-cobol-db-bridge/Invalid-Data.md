# Invalid Data

Not all COBOL data is valid for the RDBMS.

DatabaseBridge transforms invalid data in the following way:

- if NULL is read from the database, they're stored as spaces in alphanumeric COBOL items and zero in numeric COBOL items.
- If numeric COBOL fields contain alphabetic digits, spaces, low-values or high-values, they're automatically converted according to the [MOVE](\) statement rules. Space is converted to zero, “A” to 1, and so on... If the -n option is used while parsing EFDs with edbiis, zero will be written when non-numeric data is encountered.
- If a COBOL field for which the [DATE Directive](\) was specified contains zero, spaces or low-values, the date specified by the [iscobol.easydb.min_date](\) configuration property is used.
- If a COBOL field for which the [DATE Directive](\) was specified contains high-values, the date specified by the [iscobol.easydb.max_date](\) configuation property is used.
- If a COBOL field for which the [DATE Directive](\) was specified contains an illegal date (i.e. 31th February), the date specified by the [iscobol.easydb.inv_date](\) configuration property is used.
