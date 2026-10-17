## Deployment through Java Web Start (JavaWS)

Java Web Start (JavaWS) is a technology that allows users to start application software for the Java Platform directly from the Internet using a web browser.

**Note** - Java Web Start is not included in Java SE 11 (18.9 LTS) and later. Developers will need to transition to other deployment technologies. If you’re using Java version 11 or later, consider the [Deployment through automatic client update and istc files](./Deployment-through-automatic-client-update-and-istc-files/Deployment-through-automatic-client-update-and-istc-files).

This chapter explain how to set up JavaWS on the server machine so that users can run the launch script from their browser.

Requirements:

- classes (and dynamic link libraries, if any) must be provided through jar library files
- in order to avoid errors related to security checks performed by the latest JVMs, *Permissions* should be set to "all-permissions" in the MANIFEST file. To achieve it, proceed as follows:

  - create a text file, e.g. *mymanifest.txt* and put the following line into it:

```cobol
Permissions: all-permissions
```

  - add an empty line after it
  - update the jar library files and include the text file as new manifest, for example:

```cobol
jar -ufm iscobol.jar mymanifest.txt
```

- involved jar library files must be signed

Steps:

1. Digitally sign the iscobol.jar file. For more detailed information, read [https://docs.oracle.com/javase/8/docs/technotes/guides/javaws/developersguide/contents.html](https://docs.oracle.com/javase/8/docs/technotes/guides/javaws/developersguide/contents.html)

For development and demonstration you can use a self-signed test certificate. (A trust-worthy certificate can be obtained from a certificate authority, such as VeriSign or Thawte, and should be used when the application is put into production).

For example,

  - Make sure that you have an JDK 1.5 or later keytool and jarsigner in your path. These tools are located in the JDK bin directory.
  - Create a new key in a new keystore as follows:

```cobol
keytool -genkey -keystore myKeystore -alias myself
```

You will get prompted for information about the new key, such as password, name, etc. This will create the myKeystore file on disk.

  - Then create a self-signed test certificate as follows:

```cobol
keytool -selfcert -alias myself -keystore myKeystore
```

This will prompt for the password. Generating the certificate may take a few minutes.

d. Check to make sure that everything is okay. To list the contents of the keystore, use this command:

```cobol
keytool -list -keystore myKeystore
```

It should list something like:

```cobol
Keystore type: jks
Keystore provider: SUN
```

Your keystore contains 1 entry:

```cobol
myself, Tue Jan 23 19:29:32 PST 2001, keyEntry,
Certificate fingerprint (MD5):
C2:E9:BF:F9:D3:DF:4C:8F:3C:5F:22:9E:AF:0B:42:9D
```

  - Finally, sign the JAR file with the test certificate as follows:

```cobol
jarsigner -keystore myKeystore iscobol.jar myself
```

**Note**: For most cases, iscobol.jar contains all of the classes necessary for the client. If your application requires other jar files on the client, then you must also sign those jar files by repeating the jarsigner command line above. However, it may be more convenient to combine everything into one jar file.

2. Edit the *isclient.jnlp* file:

a. Create a file named *isclient.jnlp* with the following contents:

```cobol
<?xml version="1.0" encoding="utf-8"?>
<jnlp codebase="http://127.0.0.1" href="isclient.jnlp">
 <information>
  <title>isCOBOL sample</title>
  <vendor>Veryant</vendor>
 </information>
 <security>
  <all-permissions/>
 </security>
 <resources>
  <j2se version="1.6+"/>
  <j2se version="1.5+"/>
  <jar href="iscobol.jar"/>
 </resources>
 <application-desc main-class="com.iscobol.gui.client.Client">
  <argument>-hostname</argument>
  <argument>192.168.0.17</argument>
  <argument>-port</argument>
  <argument>1234</argument>
  <argument>-c</argument>
  <argument>myapp.properties</argument>
  <argument>MYAPP</argument>
 </application-desc>
</jnlp>
```

  - Change the URL in codebase=”http://127.0.0.1” to the URL location of your jar file on the web server machine. For example, if iscobol.jar is located at http://www.mycompany.com/myapp/iscobol.jar then set codebase="http://www.mycompany.com/myapp"

**Note** - the jnlp pointed by the href attribute is the one that is actually executed.

  - Change title and vendor
  - (Optional) Add additional  lines if you have more than one jar file to deploy to the client.
  - Change the hostname (192.168.0.17), port number (1234), remote properties file (myapp.properties), and program name (MYAPP) to the appropriate values for your isCOBOL Server and COBOL application. You can delete lines relating to optional arguments that you don’t use.

3. Place *isclient.jnlp* and your *iscobol.jar* file in the directory you have chosen on your web server. You may rename *isclient.jnlp*, though the extension should remain *.jnlp*.
4. Configure your web server software to return application/x-java-jnlp-file as the MIME-type (Content-Type) for JNLP files. For example, for Apache Web Server, edit /etc/apache/httpd.conf and add the following line:

```cobol
AddType application/x-java-jnlp-file .jnlp
```

5. Open port 10999 or other port that you choose to run the isCOBOL Server in the firewall settings on your server.
6. Now test your setup by visiting the URL of the .jnlp file (e.g. http://www.mycompany.com/myapp/isclient.jnlp).

If you see the “Java Starting” splash screen and after answering the security warning dialog nothing seems to happen, then there is likely to be a connection or isCOBOL Server configuration problem. To get diagnostic information you can configure Java to show the Java Console. For example, select “Java” from the Windows control panel and select “Java Con­sole/Show Console” on the advanced tab. Then run your test again, the Java console will pop up and the specific error will appear in the console window

### Security issues

Starting with Java 7 Update 51, Java doesn’t allow users to run applications that are not signed (unsigned), self-signed (not signed by trusted authority) or that are missing permission attributes.

If you followed the above steps, then you obtained a self-signed application, that may return one of these errors when ran with a recent Java:

- Java applications are blocked by your security settings.
- Missing Application-Name manifest attribute
- Missing required Permissions manifest attribute in main jar

As a workaround, you can use the Exception Site list feature to run the applications blocked by security settings. Adding the URL of the blocked application to the Exception Site list allows it to run with some warnings. The exception site list is managed in the *Security* tab of the *Java Control Panel*. The list is shown in the tab. To add, edit or remove a URL from the list, click *Edit Site List*.
