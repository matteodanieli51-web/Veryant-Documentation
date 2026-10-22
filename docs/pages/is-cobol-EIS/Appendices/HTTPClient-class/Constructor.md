### Constructor

#### General Format

```cobol
HTTPClient
```

#### General rules

A reference to HTTPHandler should be defined in the program’s Working-Storage Section.

#### Example

Create a new HTTPClient:

```cobol
...
   configuration section.
   repository.
       class http-client as "com.iscobol.rts.HTTPClient"
...
   working-storage section.
   77 http object reference http-client.
...
   procedure division.
...
   set http to http-client:>new().
...
```
