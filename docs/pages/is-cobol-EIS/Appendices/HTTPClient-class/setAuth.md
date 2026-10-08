### setAuth

Specify authentication via token (also called Bearer authentication) or via user and password.

#### Format 1

```cobol
void setAuth( tok )
```

#### Format 2

```cobol
void setAuth( user, password )
```

#### Syntax rules

1. *tok* is an alphanumeric data item that contains token authentication.
2. *user* is an alphanumeric data item that contains user name for the authentication.
3. *password* is an alphanumeric data item that contains user name for the authentication.

#### General rules

1. This method should be called before a request performed via one of the following methods: [doGet](./doGet), [doPost](./doPost), [doPostEx](./doPostEx) or [doPostMultipart](./doPostMultipart).

#### Example

Specify user and password to authenticate at the next request:

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
   http:>setAuth("user1", "secret").
...
```
