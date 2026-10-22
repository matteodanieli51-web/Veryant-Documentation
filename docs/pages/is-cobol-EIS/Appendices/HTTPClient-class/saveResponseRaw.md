### saveResponseRaw

Saves the response received from the web server in the specified file.

#### General format

```cobol
void saveResponseRaw( fileName )
```

#### Syntax rules

1. *fileName* is an alphanumeric data item that specifies the name of the destination file.

#### General rules

1. This method should be called when the response is a binary stream (e.g. a JPEG file).

#### Example

Save the last response to file:

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
   http:>saveResponseRaw("C:/Downloads/foo").
...
```
