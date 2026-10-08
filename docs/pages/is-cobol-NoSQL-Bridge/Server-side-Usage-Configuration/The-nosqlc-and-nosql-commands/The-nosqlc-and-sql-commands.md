## The nosqlc and nosql commands

The nosqlc and nosql commands use an embedded Jetty servlet container allowing you to start the servlet out of the box.

The nosqlc command starts the NoSQL Bridge servlet

```cobol
nosqlc [--port=port] [--context-path=cp] [--war=warfile]
```

- Use the *--port* option to specify a custom port. The default port is "8080".
- Use the *--context-path* option to specify a custom context-path. The default context-path is "/".
- Use the *--war* option to specify an alternative veryant-nsb.war. By default, veryant-nsb.war installed in the *nosqlbridge* subdirectory is used.

A successful startup will produce output similar to the following:

```cobol
Starting NoSQL Bridge on port 8080
Context path: /
WAR file: C:\Veryant\NoSQL\nosqlbridge\veryant-nsb.war
```

Now you can navigate to [http://localhost:8080](https://www.example.com) with a web-browser to access the administration page or send POST requests to this URL to use the NoSQL Bridge functions.

Refer to [NoSQL Bridge Administration](../NoSQL-Bridge-Administration/NoSQL-Bridge-Administration) for information on how to configure users and catalogs in the administration page.

Refer to [Functions](../../Functions/Functions) for the list of available functions and their usage.

Replace "localhost" with the machine’s IP address if you wish to access from a remote machine.

The nosql command allows you to create Windows services and Linux daemons, as explained next.
