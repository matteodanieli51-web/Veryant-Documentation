## RESUME

### General Format

```cobol
RESUME Procedure-Name
```

### Syntax rules

1. Procedure-Name is a nonnumeric literal or an alphanumeric data item.

### General rules

1. A declarative procedure is said to complete normally unless a RESUME statement occurs.

### Examples

```cobol
DECLARATIVES.
SectionName  SECTION.
    USE  AFTER  STANDARD  ERROR  PROCEDURE  ON  FileName.
    RESUME  ParagraphName
END  DECLARATIVES.
```
