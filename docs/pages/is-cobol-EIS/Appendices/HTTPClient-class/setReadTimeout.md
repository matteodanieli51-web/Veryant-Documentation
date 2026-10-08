### setReadTimeout

Specifies the read timeout in seconds.

#### General format

```cobol
void setReadTimeout( timeout )
```

#### Syntax rules

1. *timeout* is a numeric data item or literal.

#### General rules

1. A value of 0 or -1 means undefined. In this case, the default sytem read timeout is used.

#### Example

Set a read timeout of 5 seconds:

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
   http:>setReadTimeout(5).
...
```
