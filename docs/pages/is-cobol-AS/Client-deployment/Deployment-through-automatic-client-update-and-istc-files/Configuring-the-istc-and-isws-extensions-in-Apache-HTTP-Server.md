### Configuring the istc and isws extensions in Apache HTTP Server

When users install isCOBOL on a Windows host, the .istc and .isws file extensions are associated with the thin client executable (isclient.exe) and the software updater executable (isupdater.exe) respectively. As a result, when your browser downloads one of these files, it uses these associations to invoke the isCOBOL Client or isUpdater.

Unfortunately istc and isws files are treated as text stream by web browsers unless the web server where they’re deposited is configured appropriately.

Without this correct configuration, the web browser will display the file content instead of invoking the proper isCOBOL executable.

Below we explain how to configure the Apache HTTP Server to send istc and isws files as binary streams instead of text streams, so that the browser will download them instead of displaying their content.

Apache HTTP Server is the most common HTTP server, so the information in this chapter should be beneficial for most of the web servers.

1. Edit the file conf/httpd.conf

  - Enable the mod_headers module, so change the line

```cobol
#LoadModule headers_module modules/mod_headers.so
```

to

```cobol
LoadModule headers_module modules/mod_headers.so
```

  - Add the following file matching rules at the bottom of the file

```cobol
<FilesMatch "\.(?i:istc)$">
   ForceType application/octet-stream
   Header set Content-Disposition attachment
</FilesMatch>
 
<FilesMatch "\.(?i:isws)$">
   ForceType application/octet-stream
   Header set Content-Disposition attachment
</FilesMatch>
```

2. (Re)start the Apache HTTP Server

After these steps, the web browsers will react differently when pointing a istc or isws file. Instead of showing the file content, they will trigger the download or the execution of the file.
