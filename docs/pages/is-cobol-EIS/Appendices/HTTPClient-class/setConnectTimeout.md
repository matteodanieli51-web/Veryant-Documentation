### setConnectTimeout

Specifies the connection timeout in seconds.

#### General format

```cobol
void setConnectTimeout( timeout )
```

#### Syntax rules

1. *timeout* is a numeric data item or literal.

#### General rules

1. A value of 0 or -1 means undefined. In this case, the default sytem connection timeout is used.

#### Example

Set a connection timeout of 5 seconds:

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
   http:>setConnectTimeout(5).
...
```
