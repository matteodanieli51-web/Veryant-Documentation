## Deployment in Tomcat

The NoSQL Bridge servlet can be deployed in any Java servlet container based on Jakarta.

To deploy NoSQL Bridge in Tomcat:

1. Browse to the Tomcat admin page (i.e. [http://localhost:8080/manager/html](https://www.example.com)).
2. Scroll down to the "WAR file to deploy" section.
3. Click the "Choose File" button and select the *veryant-nsb.war* archive from the NoSQL Bridge installation directory. The library is stored in the *nosqlbridge* subdirectory.
4. Click the "Deploy" button.

Now you can navigate to [http://localhost:8080/veryant-nsb](https://www.example.com) with a web-browser to access the administration page or send POST requests to this URL to use the NoSQL Bridge functions.

Refer to [NoSQL Bridge Administration](./NoSQL-Bridge-Administration/NoSQL-Bridge-Administration) for information on how to configure users and catalogs in the administration page.

Refer to [Functions](../Functions/Functions) for the list of available functions and their usage.

Replace "localhost" with the machine’s IP address if you wish to access from a remote machine.
