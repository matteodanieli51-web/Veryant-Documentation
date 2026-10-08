### setProxy

Specifies IP and port of a proxy server. Future requests will pass through this proxy server.

#### General format

```cobol
void setProxy( ip, port )
```

#### Syntax rules

1. *ip* is an alphanumeric data item that specifies the proxy server IP address
2. *port* is a numeric data item that specifies the proxy server port.

#### General rules

1. This method can be called before issuing a request with one of these methods: [doDelete](./doDelete), [doDeleteEx](./doDeleteEx), [doGet](./doGet), [doHead](./doHead), [doPatch](./doPatch), [doPatchEx](./doPatchEx), [doPost](./doPost), [doPostEx](./doPostEx), [doPostMultipart](./doPostMultipart), [doPut](./doPut) or [doPutEx](./doPutEx).
2. The proxy remains set for all future requests performed by the HTTPClient instance.

#### Example

Configure a proxy for the next requests:

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
   http:>setProxy("50.112.10.90", "8989").
...
```
