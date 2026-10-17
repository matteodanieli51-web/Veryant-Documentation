## isCOBOL Server Improvements

Starting from isCOBOL 2015R1, isCOBOL Server was improved to provide more functionality, better performance and less uses of memory.

- Encrypted SSL connections

SSL is an industry standard and is used by millions of websites in the protection of their online transactions with their customers. Users that need that all data passed between the isCOBOL Server and isCOBOL Thin Client remain private and integral can take advantage of this SSL standard support.

Additional isCOBOL property are provided to specify keystore, keystore password, truststore and truststore password.

On the server side:

```cobol
iscobol.net.ssl.key_store=path
iscobol.net.ssl.key_store_password=pwd
```

On the client side:

```cobol
iscobol.net.ssl.trust_store=path or *
iscobol.net.ssl.trust_store_password=pwd
```

• Enhanced configuration settings

It is possible to define a new property named iscobol.as.password_file to set a customized password_file. This allows using the same password files from different Application Servers started on different folders ad running on the same server:

```cobol
iscobol.as.password_file=/etc/mypwd.properties
```

- Enhanced internal lock manager

The property iscobol.file.index.autolock_allowed is now supported also in Application Server when running with the InternalLockManager.

- Optimized network performance

On high latency networks, where the round-trip delay time is high it is important to try to reduce the total number of packet used. Starting from isCOBOL 2015R1, many areas were improved in the Application Server traffic in order to increasing screen performances.

For example on DISPLAY screen-section and ACCEPT statements we used xx% less number of packets. Also INQUIRE statement, that usually break any optimizer option forcing communication, was optimized avoiding to ask the property value on the client side where possible.

Many TCP-IP round-trips were removed at startup time where it is necessary to send from the server to the client all configuration setting. This optimization reducing the time spent to the isCOBOL Thin client to go live.
