### setParameter

Sets HTML parameters.

#### General format

```cobol
void setParameter( name, value )
```

#### Syntax rules

1. *name* is an alphanumeric data item that specifies the name of the parameter to set
2. *value* is an alphanumeric data item that specifies the value for the parameter

#### General rules

1. This method should be called before [doPost](./doPost) to prepare parameters to be passed.

#### Example

Set user and password parameters, then issue a POST request to the login page:

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
   http:>setParameter("user", "admin").
   http:>setParameter("pwd", "2eec6fa53d1cce9321efac977e60d705").
   http:>doPost("http://example.com/login")
...
```
