# TLS/SSL support

Transport Layer Security (TLS) and its predecessor, Secure Sockets Layer (SSL), are cryptographic protocols designed to provide communication security over a connection. All the data being sent is encrypted by one side, transmitted, then decrypted by the other side before processing. This protocol uses asymmetric cryptography, so to enable an SSL connection the Application Server needs to have a Digital Certificate which will allow clients to trust the server authenticity. This Digital Certificate may be issued by a Certificate Authority (CA) or you can create your own Certificate (so called self-signed Certificate): the difference is that many of the Certificate Authorities are known by the JavaTM Runtime Environment (more than 80 in version 8), so that you don't need to install anything on the client, while if you use a self-signed certificate, you must install it on the client too.

isCOBOL Server and LoadBalancer use JSSE (JavaTM Secure Socket Extension). In the Sun/Oracle version you need to get also the JCE (JavaTM Cryptography Extension) in order to get unlimited strength cryptography. In the JSSE specification, certificates are stored in a file called keystore: according to JavaTM documentation:

"A keystore is a database of key material. Key material is used for a variety of purposes, including authentication and data integrity. Generally speaking, keystore information can be grouped into two different categories: key entries and trusted certificate entries. A key entry consists of an entity's identity and its private key, and can be used for a variety of cryptographic purposes. In contrast, a trusted certificate entry only contains a public key in addition to the entity's identity". Thus you need to have a keystore with a key entry (with both private and public key) on the server side and a trusted certificate entry on the client side. JavaTM supports the JKS (JavaTM KeyStore) format and it may contain both key entries and trusted certificate entries. In order to handle this file format the command line program keytool is provided with the standard JDK distribution (a more user friendly tool can be freely downloaded from the Internet, i.e. KeyStore Explorer [(http://keystore-explorer.org/](http://keystore-explorer.org/)).

If you need a Certificate issued by a CA then the procedure to get it may change from one organization to another. In any case you need an SSL certificate importable in a JKS keystore as well as any other Java server application, e.g. Tomcat. Note however that some Java server application may also use different formats while currently isCOBOL Server and LoadBalancer support only the JKS format. So, let's see an example about how to create a self-signed Certificate using the keytool program. You can find all the information about this tool in the Oracle site, [http://docs.oracle.com/javase/8/docs/technotes/tools/unix/keytool.html](http://docs.oracle.com/javase/8/docs/technotes/tools/unix/keytool.html). The keytool program is located in the bin directory under the JavaTM Home.

For the sake of simplicity let's assume that we can invoke the keytool supplying only the name. To create a new keystore from scratch, containing a single self-signed Certificate, execute the following from a terminal command line:

```cobol
keytool -genkeypair -alias iscobol -keyalg RSA
```

After executing this command, you will first be prompted for the keystore password. You can chose any password you like at least 6 characters long. Then you will be asked about general information about this Certificate, such as company, contact name, and so on. This information will be displayed to users who attempt to access a secure page in your application, so make sure that the information provided here matches what they will expect.

Finally, you will be prompted for the key password, which is the password specifically for this Certificate (as opposed to any other Certificates stored in the same keystore file). The keytool prompt will tell you that pressing the ENTER key automatically uses the same password for the key as the keystore. The JSSE framework, and isCOBOL by consequence, requires these passwords to be identical.

If everything was successful, you now have a new file, named ".keystore" under your HOME directory. You can specify a different name and location using the -keystore option or use a different encryption algorithm through the -keyalg option.

Now you can establish a secure connection between client and server by enabling SSL in the configuration as follows:

1. Add the following entries to the Server’s configuration:

```cobol
iscobol.net.ssl.key_store=/path/to/.keystore
iscobol.net.ssl.key_store_password=mypassword
```

2. Add the following entry to the Client’s configuration:

```cobol
iscobol.net.ssl.trust_store=/path/to/.keystore
iscobol.net.ssl.trust_store_password=mypassword
```

If you got a certificate from a CA known by the JavaTM Runtime Environment then you don't need to have that certificate on the client, however you need to instruct the client to use an encrypted connection. In order to do so you have to add the following line in the client configuration file:

```cobol
iscobol.net.ssl.trust_store=*
```

This line instructs the client to use an encrypted communication and to use the standard default keystore to acknowledge the server.

If a LoadBalancer is involved, then SSL must be enabled also in the LoadBalancer configuration by adding the following entries:

```cobol
iscobol.net.ssl.key_store=/path/to/.keystore
iscobol.net.ssl.key_store_password=mypassword
iscobol.net.ssl.trust_store=/path/to/.keystore
iscobol.net.ssl.trust_store_password=mypassword
```

## Example

Let’s assume we have a keystore file named "iscobol.jks" with password "secret".

The file is placed in the "/dev/keystore" folder of a Linux server machine where the isCOBOL Server will be started. The same file is placed in the "C:\\testapp\\keystore" folder of a Windows client where the isCOBOL Client will be launched.

Command to start isCOBOL Server:

```cobol
iscserver -c server.properties
```

Content of server.properties:

```cobol
iscobol.net.ssl.key_store=/dev/keystore/iscobol.jks
iscobol.net.ssl.key_store_password=secret
```

Command to start isCOBOL Client:

```cobol
iscclient -lc local.properties -hostname 192.168.1.100 PROG
```

Content of local.properties:

```cobol
iscobol.net.ssl.trust_store=C:\\testapp\\keystore\\iscobol.jks
iscobol.net.ssl.trust_store_password=secret
```
