# Logging

WebClient generates and updates the following log files in the working directory:

| | |
| --- | --- |
| audit.log | This log traces the access to the configuration. It is useful if more than one user can access to the configuration. |
| stats.log | This log stores the statistics of applications usage. Only the activity of connections coming from foreign machines is traced, the activity on localhost is not traced. This information is reflected by the charts shown in the Dashboard. |
| webclient.log | This log traces the startup of the WebClient service and the COBOL applications. Java exceptions, if any, are stored in this log, so this is the first thing to check if you experience odd behaviors. |
| | |

When WebClient is restarted, the above files are not initialized, the new log content will be appended to them.

The logging feature is implemented via [Log4j](https://logging.apache.org/log4j/2.x/) with the *log4j.properties* configuration file stored in the *WEB-INF/classes* directory of *webclient/webclient-server.war*. The settings in *log4j.properties* are suitable for most environments, but you may want to review them in some cases.
