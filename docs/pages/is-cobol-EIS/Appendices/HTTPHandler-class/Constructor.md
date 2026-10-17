### Constructor

Creates a new instance of the HTTPHandler class.

#### General format

```cobol
HTTPHandler
```

#### General rules

1. A reference to HTTPHandler should be defined in the program’s Linkage Section.

#### Example

```cobol
...
configuration section.
repository.
    class HTTPHandler  as "com.iscobol.rts.HTTPHandler"
....
linkage section.
77 objHTTPHandler object reference HTTPHandler.
...
procedure division using objHTTPHandler.
...
```
