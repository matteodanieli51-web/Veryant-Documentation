## isCOBOL Server Improvements

isCOBOL Thin Client can now be updated without needing any client configuration changes. By properly configuring isCOBOL Server, isUPDATER automatically updates client components.

Client updates can now be configured on isCOBOL Server, using the new iscobol.as.clientupdate.site property, by declaring the HTTP server location where updates are located, such as

```cobol
iscobol.as.clientupdate.site=http://192.168.0.123:10996
```

The above configuration takes advantage of the -hs option of isCOBOL Server which starts an http server on port 10996. Client components are then guaranteed to match the server version.

If minor server updates are not wanted on the clients, these can be skipped by setting the client runtime version to the desired value using the new server configuration property iscobol.as.clientupdate.version, i.e.

```cobol
iscobol.as.clientupdate.version=875.2
```

Single clients can be configured to skip updates with the new client option *–noupdate*

```cobol
iscclient –hostname ipserver –port 10999 –noupdate MYPROG
```
