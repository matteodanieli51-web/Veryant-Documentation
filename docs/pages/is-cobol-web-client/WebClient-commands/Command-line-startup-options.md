## Command-line startup options

The WebClient commands support the following command line options:

| Option | Description | Default value |
| --- | --- | --- |
| -c<arg\>  | Configuration file name.<br>A relative path is resolved from the WebClient’s bin directory | webclient/webclient.config in the WebClient installation directory |
| -d<arg\>  | Create a new temp folder for every intsance | false |
| -h<arg\>  | Local interface address where the web server will listen | 0.0.0.0 |
| -kp<arg\>  | Keystore password |  |
| -ks<arg\>  | Keystore file location for SSL configuration |  |
| -p<arg\>  | HTTP port where the web server will listen. If 0 HTTP is disabled. | 8080 |
| -s<arg\>  | HTTPS port where the web server will listen.If 0 HTTP is disabled. |  |
| -t<arg\>  | The temp folder will be created for the WebClient server.<br>A relative path is resolved from the WebClient’s bin directory | webclient/tmp in the WebClient installation directory |
| -tc<arg\>  | Clean the temp folder before WebClient start | true |
| -tp<arg\>  | Truststore password |  |
| -ts<arg\>  | Truststore file location for SSL configuration |  |
| -id<arg\>  | Server id (visible in admin console) |  |
| -ctx<arg\>  | Context path where WebClient is deployed. | Random uuid |
| -pf<arg\>  | Properties file name.<br>A relative path is resolved from the WebClient’s bin directory | webclient/webclient.properties in the WebClient installation directory |
| -clustersessionpool | Start an embedded SessionPool along with the Cluster.<br>Available only for the [webcclient-cluster](./webcclient-cluster) and the [webclient-cluster](./webclient-cluster) commands |  |

**Note** - hostname, ports and SSL configuration defaults are inherited from the jetty.properties configuration file and can be overridden by these command-line options. The values listed in this table reflect the content of the default jetty.properties file installed with isCOBOL and might be different if you edited that file.

### Example

In order to start WebClient on the HTTP port 12345 using C:\\Develop\\mywebclient.config as configuration file, use the command:

```cobol
webcclient -p 12345 -c C:\Develop\mywebclient.config
```
