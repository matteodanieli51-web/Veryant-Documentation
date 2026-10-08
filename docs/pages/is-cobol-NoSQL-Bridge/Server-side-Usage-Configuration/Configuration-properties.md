## Configuration properties

The properties listed below are useful to configure the NoSQL Bridge when it’s running as a service or when it’s embedded in an external servlet container like Tomcat, as in these cases command line options can’t be used.

| Property | Meaning |
| --- | --- |
| nosql.port | This property specifies the port on which NoSQL Bridge listens for HTTP connections. <br> The default value is 8080. |
| nosql.context_path | This property specifies the the portion of a URL that identifies the NoSQL Bridge application within the web server. It follows the domain name and port number and serves as the base path under which all resources are accessed. <br> The default value is "/". |
| nosql.war | This property allows you to specify a custom location for the veryant-nsb.war library. |
