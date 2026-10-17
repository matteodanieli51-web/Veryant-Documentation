### getResponseXML

Returns the HTTP response parsed with XML rules.

#### Format 1

```cobol
void getResponseXML( xml )
```

#### Format 2

```cobol
void getResponseXML( xml, encoding )
```

#### Syntax rules

1. *xml* is a level 01 data item for which the [IS IDENTIFIED clause](../../../is-cobol-evolve/Language-Reference/Data-Division/Data-Description/IS-IDENTIFIED-clause) has been used.
2. *encoding* is a string literal or data item that specifies the character set to be used while parsing the XML stream. All the canonical names listed in the following Java documentation can be used as value for this property: [http://java.sun.com/javase/6/docs/technotes/guides/intl/encoding.doc.html.](http://java.sun.com/javase/6/docs/technotes/guides/intl/encoding.doc.html)

#### General rules

1. This method should be called after a request performed via one of the following methods: [doGet](./doGet), [doPost](./doPost), [doPostEx](./doPostEx) or [doPostMultipart](./doPostMultipart).

#### Example

Consider the following response:

```cobol
Content-Type : text/xml
Content:
<response><status>OK</status></response>
```

You can read it with the following code:

```cobol
...
   configuration section.
   repository.
       class http-client as "com.iscobol.rts.HTTPClient"
...
   working-storage section.
   77 http object reference http-client.
   01 response identified by "response".
      03 identified by "status".
         05 status-data pic x any length.
...
   procedure division.
...
   http:>getResponseXML(response).
...
```
