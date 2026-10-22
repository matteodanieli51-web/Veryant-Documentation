### VARYING clause

The VARYING clause establishes counters to enable different source items to be placed in each occurrence of a repeated printable item in report writer.

The VARYING clause also establishes counters to enable a VALIDATE statement to store different occurrences of a data item in different occurrences of a destination data item, or to compare different occurrences of a data item during content or relation validation.

#### General format

```cobol
VARYING { data-name-1 [ FROM arithmetic-expression-1 ] [ BY arithmetic-expression-2 ] } ...
```

#### Syntax rules

1. The entry containing the VARYING clause shall also contain an OCCURS clause or, if the VARYING clause appears in a report group description entry, a multiple LINE or multiple COLUMN clause.
2. Data-name-1 shall not be defined elsewhere in the source element, except as data-name-1 in another VARYING clause of an entry not subordinate to the subject of the current entry.

**NOTE**: Such a reuse refers to a completely independent data item.

This definition of data-name-1 may be referenced only within the current entry or a subordinate entry.

3. Data-name-1 shall not be referenced in arithmetic-expression-1 of the same VARYING clause, but may be referenced in arithmetic-expression-2 of the same VARYING clause or in arithmetic-expression-1 or arithmetic-expression-2 of a VARYING clause in a subordinate entry.

#### General rules

1. Each entry containing a VARYING clause establishes an independent temporary integer data item that shall be large enough to contain the maximum expected value.
2. If the VARYING clause is not specified in a report description entry, it is ignored during the execution of any statement other than a VALIDATE statement.
3. When the data item that is the subject of the entry is processed by the VALIDATE statement or the report item that is the subject of the entry is processed, the content of data-name-1 is established for each repetition of the associated data item during each stage of execution of the VALIDATE statement or each repetition of the report item, as follows:

a. For the first occurrence, the value of arithmetic-expression-1 is moved to data-name-1. If the FROM phrase is absent, 1 is moved to data-name-1.

b. For the second and subsequent occurrences, the value of arithmetic-expression-2 is added to data-name-1. If the BY phrase is absent, 1 is added to data-name-1.

4. Each value of data-name-1, established in this way, persists throughout the processing of the associated occurrence of the data item or report item.

**NOTE**: For example, this allows data-name-1 to be used as a source data item, as a subscript to a source data item or as part of the identifier in the DEFAULT clause.

5. If the evaluation of arithmetic-expression-1 or arithmetic-expression-2 produces a non-integer value and the VARYING clause was specified in a report description entry, the EC-REPORT-VARYING exception condition is set to exist, the execution of the GENERATE statement is unsuccessful, and the content of the print line is undefined.
6. If the evaluation of arithmetic-expression-1 or arithmetic-expression-2 produces a non-integer value and the VARYING clause was not specified in a report description entry, the EC-VALIDATE-VARYING exception condition is set to exist, the execution of the VALIDATE statement is unsuccessful, and the content of the receiving items is undefined.
