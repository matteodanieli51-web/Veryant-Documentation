## Connecting to a SSL-enabled web service

In most cases no particular action is required when connecting to a SSL-enabled web service over the https protocol.

In some cases you may need to add the server’s certificate to the local keystore if the certificate is not known by the JVM in use. The following Java exception is usually raised in these cases:

```cobol
Exception: javax.net.ssl.SSLHandshakeException:
sun.security.validator.ValidatorException: PKIX path validation failed:
```

In order to add the server’s certificate to a local keystore, download the server’s .cer file, and create a local keystore for it using the following command:

```cobol
keytool -importcert -file <path_to_.cer_file> -keystore <keystore_file.jks> -alias <keystore_alias>
```

You will be asked to assign a password to the keystore.

At this point you can add the following entries to the isCOBOL configuration (or set them from the program using the SET ENVIRONMENT statement):

```cobol
iscobol.net.ssl.trust_store=<path/to/keystore_file.jks>
iscobol.net.ssl.trust_store_password=<password>
```

When testing, you can instruct HTTPClilent to ignore handshake errors. Instead of following the steps above, you would set the following entry in the isCOBOL configuration:

```cobol
iscobol.http.ignore_certificates=true
```
