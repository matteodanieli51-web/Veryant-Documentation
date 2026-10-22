## OBJECT Paragraph

The OBJECT Paragraph introduces the object definition.

Method-Id-Paragraph defines methods that refer to a specific instance of an object. An instance of the native class must be created before using an object method.

### General format

```cobol
{IDENTIFICATION} DIVISION.
{ID            }
 
OBJECT.
 
  [ Environment Division ]
 
  [ Data Division ]
 
  Procedure Division
 
END OBJECT.
```
