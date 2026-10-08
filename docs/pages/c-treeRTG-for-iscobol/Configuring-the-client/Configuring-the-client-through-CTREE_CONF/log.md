### <log\>

The log option indicates whether to log events such as errors that occur in c-tree. This feature might be helpful for diagnostics purposes.

#### Attributes

| Attribute | Description | Synonyms |
| --- | --- | --- |
| file | Specifies the log file name. If omitted the log messages are redirected to the standard error stream (stderr). | n/a |

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| yes | Turns on logging of errors and generic information. | y, true, on, 1 |
| no | Turns off logging. This is the default value. | n, false, off, 0 |

Additionally the log option may accept the following sub-options to specify which event to log:

| Option | Description |
| --- | --- |
| <debug\> | Indicates to log debug information.<br>The following children elements are supported:<br><config\>: include explicit configuration in the log <br><config full="yes"\>: include full configuration in the log |
| <error\> | Indicates to log errors.<br>The following children elements are supported:<br><atend\> : log EOF errors<br><notfound\> : log NOTFOUND errors<br><duplicate\> : log DUPLICATE errors |
| <info\> | Indicates to log generic information. |
| <profile\> | Indicates to log performance profiling information. |
| <warning\> | Indicates to insert a warning into the log file. |

#### Examples

The following example turns on implicit logging of errors and generic information to standard error stream:

```ini
<log>yes</log>
```

The following example turns on explicit logging of errors and generic information to file *mylog.txt*:

```ini
<log file="mylog.txt">
   <error>yes</error>
   <info>yes</info>
</log>
```
