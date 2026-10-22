## FACTORY Paragraph

The FACTORY Paragraph introduces the factory definition.

Method-Id-Paragraph defines methods that may return an instance of the native class. Factory methods usually create new instances of private objects that are unknown to the caller. This allows for the accomplishment of several objectives, such as preventing the creation of invalid objects, automatically choosing the proper object to be instantiated, keeping track of a created object or doing some pre- or post-processing on newly created objects.

Factory methods should not use the status of an object instance.

### General format

```cobol
{IDENTIFICATION} DIVISION.
{ID            }
 
FACTORY.
 
  [ Environment Division ]
 
  [ Data Division ]
 
  [ PROCEDURE DIVISION.
 
    [ METHOD-ID Paragraph ] ... ]
 
END FACTORY.
```
