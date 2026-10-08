## Limits and Ranges

isCOBOL has the following limits:

| | |
| :--- | :--- |
| Maximum program size | Limited by Java specifications. Use the [-big](\) compiler option if you encounter the "too many constants" Java error |
| Maximum Record Size | File handler dependent [^1] |
| Number of Indexed Keys | File handler dependent [^1] |
| Number of Segments per Key | File handler dependent [^1] |
| Maximum Indexed Key Size | File handler dependent [^1] |
| Maximum Sort Key Size | File handler dependent [^1] |
| Maximum duplicate keys | File handler dependent [^1] |
| Maximum Alphanumeric Data Item Size | 2,147,483,647 bytes (2GB) |
| Maximum Numeric Data Item Size | 31 digits |
| Maximum Numeric Edited Data Item Size | 2,147,483,648 bytes (2GB) |
| Maximum Table Indexes | Unlimited |
| Maximum Open Files/Process | Limited only by the operating system |
| Maximum Paragraph Size | Limited by Java specifications. Use the [-sns=Statements](\) compiler option if you encounter the "code too large" Javaerror |
| Maximum Picture String | Unlimited |
| Maximum Literal Size | Unlimited |
| SPECIAL-NAMES Switches | 26 |
| Maximum number of OCCURS | 2,147,483,647 |
| Maximum recursive CALL depth | Limited by Java configuration.<br>Use the [-Xss 'size'](\) Java option to resize the threads stack |
| Maximum iterations in a *PERFORM n TIMES* statement | Unlimited |
| Maximum number of Linkage Section level-01 data items per program | Unlimited |
| Maximum number of parameters in a CHAIN statement | Unlimited |
| | |

[1^]: There is no check done at compile time. You might have an error at runtime if you exceed the limit of the current indexed file handler. See [Comparison between JISAM and c-treeRTG](\) for the limits of JISAM and c-treeRTG file handlers. Refer to the third party file handler documentation if you’re using a different file handler (i.e. Btrieve or Vision).
