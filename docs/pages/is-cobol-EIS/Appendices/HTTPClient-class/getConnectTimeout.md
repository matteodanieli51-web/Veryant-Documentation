### getConnectTimeout

Returns the current connection timeout in seconds.

#### General format

```cobol
java.lang.Double getConnectTimeout()
```

#### General rules

1. A value of 0 or -1 means undefined. In this case, the default sytem connection timeout is used.

#### Example

Get the current connection timeout:

```cobol
...
   configuration section.
   repository.
       class http-client as "com.iscobol.rts.HTTPClient"
...
   working-storage section.
   77 http object reference http-client.
   77 ctimo pic 9(9)v99.
...
   procedure division.
...
   set ctimo to http:>getConnectTimeout().
...
```
