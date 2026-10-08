### getReadTimeout

Returns the current read timeout in seconds.

#### General format

```cobol
java.lang.Double getReadTimeout()
```

#### General rules

1. A value of 0 or -1 means undefined. In this case, the default sytem read timeout is used.

#### Example

Get the current read timeout:

```cobol
...
   configuration section.
   repository.
       class http-client as "com.iscobol.rts.HTTPClient"
...
   working-storage section.
   77 http object reference http-client.
   77 rtimo pic 9(9)v99.
...
   procedure division.
...
   set rtimo to http:>getReadTimeout().
...
```
