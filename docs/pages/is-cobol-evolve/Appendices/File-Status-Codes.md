# File Status Codes

The table below shows all file status codes. Set the [iscobol.file.status \*](../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file_status) property to specify which file status codes to use.

Regardless of which set of status codes is being used:

- Any code that starts with a "0" is considered successful.
- Any code that starts with a "1" is considered to be an "at end" condition.
- Any code starting with a "2" is considered to be an "invalid key" condition.

| 2002 | 85 | 74 | VAX | DG | IBM | MF | MS | Condition |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 00 | 00 | 00 | 00 | 00 | 00 | 00 | 00 | Operation successful. |
| 02 | 02 | 02 | 00 | 00 | 00 | 02 | 02 | The current key of reference in the record just read is duplicated in the next record (read next) or the operation added a duplicate key to the file where duplicates were allowed (write, rewrite). <br><br>**Note** - this status is returned only by Vision and DCI file handlers. |
| 04 | 04 | 04 | 04 | 04 | 04 | 04 | 04 | Wrong record length in READ statement. |
| 05 | 05 | 00 | 05 | 00 | 10 | 05 | 05 | Optional file missing and Optional file created. |
| 0D | 0D | 0D | 0D | 0D | 0D | 0D | 0D | Command execution failed. |
| 10 | 10 | 10 | 13 | 10 | 10 | 10 | 10 | End/begin of file. |
| 22 | 22 | 22 | 22 | 22 | 22 | 22 | 22 | Duplicate record. |
| 23 | 23 | 23 | 23 | 23 | 23 | 23 | 23 | Record not found. |
| 24 | 24 | 24 | 24 | 24 | 24 | 24 | 24 | Invalid write. |
| 30 | 30 | 30 | 30 | 30 | 30 | 30 | 95 | Permanent I-O error / Invalid path / No write permissions. |
| 35 | 35 | 94 | 35 | 91 | 93 | 35 | 30 | Missing file. |
| 37, 07 | 37, 07 | 90, 07 | 39, 07 | 91, 07 | 93 | 9\u001F | 37,07 | Invalid permissions. |
| 37, 09 | 37, 09 | 95, 09 | 37, 09 | 91, 09 | 93 | 37, 09 | 37,09 | Invalid open mode. |
| 38 | 38 | 93, 03 | 38 | 92 | 93 | 38 | 38 | File closed with lock. |
| 39,xx | 39,xx | 94,xx | 39,xx | 9A,xx | 95,xx | 39,xx | 91,xx | File mismatch. <br><br>xx might be set to one of the following values:<br>00 - unknown cause of mismatch<br>01 - generic mismatch reported by the host file system<br>02 - mismatch on the maximum record size<br>03 - mismatch on the minimum record size<br>04 - mismatch on the number of keys or in keys structure <br><br>**Note** - keys structure is checked only if [iscobol.file.index.check_all_keys (boolean)](../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file_index_check_all_keys) is set to true in the configuration. |
| 41 | 41 | 92 | 41 | 91 | 93 | 41 | 41 | File is already opened. |
| 42 | 42 | 91 | 42 | 92 | 92 | 42 | 42 | file not open during CLOSE. |
| 42 | 42 | 91 | 94 | 91 | 92 | 42 | 42 | file not open during UNLOCK. |
| 43 | 43 | 90,02 | 43 | 92 | 23 | 43 | 21 | invalid delete/rewrite in sequential mode. |
| 44 | 44 | 97 | 44 | 92 | 21 | 44 | 44 | record size changed. |
| 46 | 46 | 96 | 46 | 92 | 21 | 46 | 46 | no current record defined. |
| 47 | 47 | 91,02 | 47, 02 | 92, 02 | 13 | 47 | 47 | file not open during START/READ. |
| 47, 01 | 47, 01 | 90, 01 | 47, 01 | 92, 01 | 13 | 47, 01 | 47,01 | File not open for input or I-O. |
| 48, 01 | 48, 01 | 90, 01 | 48, 01 | 92, 01 | 13 | 48, 01 | 48,01 | File not open for output or I-O. |
| 48, 02 | 48, 02 | 91, 02 | 48, 02 | 92, 02 | 13 | 48, 02 | 48,02 | File not open during WRITE statement. |
| 49, 01 | 49, 01 | 90, 01 | 49, 01 | 92, 01 | 13 | 49, 01 | 49,01 | File not open for I-O. |
| 49, 02 | 49, 02 | 91, 02 | 49, 02 | 92, 02 | 13 | 49, 02 | 49,02 | File not open during REWRITE/DELETE statement. |
| 51 | 99 | 99 | 92 | 94 | 23 | 9D | 94 | Record locked. |
| 53 | 9C | 9C | 9C | 9C | 23 | 9\u00D5 | 53 | No more locks available. |
| 61 | 93 | 93 | 91 | 94 | 93 | 9A | 94 | File locked by another user. |
| 94, 10 | 94, 10 | 94, 10 | 97 | 97, 10 | 93 | 9\u000E | 94,10 | Too many files opened. |
| 98 | 98 | 98 | 98 | 98 | 98 | 98 | 98 | File corrupt. |
| 9B | 9B | 9B | 9B | 9B | 23 | 9B | 9B | Operation not supported by the current file handler. |
| 9D <span id="9D"></span> | 9D | 9D | 9D | 9D | 9D | 9D | 9D | No remappable error. <br><br>This error is usually followed by a secondary code and an error message that can be retrieved through the [C$RERR](./Library-Routines/C$RERR) routine. The same extended information is also stored in the runtime log if [iscobol.tracelevel](../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#tracelevel) includes the value 8 (trace file activity). |
| 9E | 9E | 9E | 9E | 9E | 9E | 9E | 9E | Transaction Error Codes. |
| 9N,xx | 9N,xx | 9N,xx | 9N,xx | 9N,xx | 9N,xx | 9N,xx | 9N,xx | Network error under [isCOBOL File Server](../../is-cobol-AS/isCOBOL-File-Server/isCOBOL-File-Server).<br>xx might be set to one of the following values:<br>00 - general error<br>01 - invalid initialization<br>02 - no method found<br>03 - missing parameter<br>04 - invalid header received<br>05 - Communication problems<br>06 - Exception in response<br>07 - Timeout<br>08 - Invalid IOR string<br>09 - Invalid type description<br>10 - Server side exception<br>11 - Connection closed |
| 9X | 9X | 9X | 9X | 9X | 9X | 9X | 9X | Missing encryption key. This error is returned only by JIsam. |
| 9? | 9? | 9? | 9? | 9? | 9? | 9? | 9? | Extended status, check the next list of status for details. |

## Extended File Status Codes

Instead of one of the above file status codes, an extended status can be returned. The status is composed by the number 9 followed by a letter or symbol. The character after the 9 is the representation of the extended file status using ASCII encoding. For example, 9i is the same as file status 9 with extended status 105 (i.e. EXFS=105) because 'i' is 105 in ASCII.

The following table lists the most common extended codes.

| Code | Condition |
| --- | --- |
| 100 | Duplicate record. |
| 101 | File not open. |
| 102 | Illegal argument. |
| 103 | Illegal key description. |
| 104 | Too many files open. |
| 105 | Bad isam file format. |
| 106 | Non-exclusive access. |
| 107 | Record locked. |
| 108 | Key already exists. |
| 109 | Is primary key. |
| 110 | End/begin of file. |
| 111 | No record found. |
| 112 | No current record. |
| 113 | File locked. |
| 114 | File name too long. |
| 115 | Unknown error. |
| 116 | Can't allocate memory. |
| 117 | Bad custom collating. |
| 118 | Cannot read log file record. |
| 119 | Record format of transaction-log file cannot be recognized. |
| 120 | Cannot open transaction-log file. |
| 121 | Cannot write to transaction-log file. |
| 122 | Not in transaction. |
| 123 | Unknown error. |
| 124 | Beginning of transaction not found. |
| 125 | Operation incompatible with open mode |
| 126 | Function not supported |
| 127 | Disk full |
| 128 | Record changed. |
| 129 | No more locks available. |
| 130 | Missing file. |
| 131 | Invalid permission. |
| 132 | File exists. |
| 133 | System error |
| 134 | Unknown error. |
| 135 | Unknown error. |
| 136 | Unknown error. |
| 137 | Unknown error. |
| 138 | Unknown error. |
| 139 | Unknown error. |
| 140 | Unknown error. |
| 141 | Unknown error. |
| 142 | Unknown error. |
| 143 | Unknown error. |
| 144 | Unknown error. |
| 145 | Boundary violation. |
| 146 | Unknown error. |
| 147 | Unknown error. |
| 148 | Unknown error. |
| 149 | Unknown error. |
| 150 | Too many connections. |
| 151 | Malformed url. |
| 152 | Error on connection: error in iserrio. |
| 153 | Error on connection: no permission. |

## XML File Status Codes

The following numeric status codes are returned for an [XML File](../Language-Reference/Environment-Division/Input-Output-Section/File-Control-Paragraph#xml-file).

| Code | Condition |
| --- | --- |
| >0 | After a successful READ action, the ordinal number of the record read is returned as the status code. After a successful WRITE action, the size of the XML file written is returned as the status code. |
| 0 | Success. The XML I/O action is performed without problem. |
| -1 | The XML I/O action is trying to access an XML stream that is not opened. |
| -2 | This is an invalid XML I/O action. |
| -3 | Invalid mode is specified in the OPEN statement. |
| -4 | The XML stream cannot be opened. |
| -5 | The XML I/O action is attempting to access an internal DOM (Document Object Model) representation which is not present. DOM enables you to create and modify HTML pages and XML documents as full-fledged program objects. |
| -6 | An invalid KEY is specified in the XML I/O action. |
| -7 | The end of the XML stream has been reached. |
| -8 | This is an invalid position to insert the specified XML item |
| -9 | The current record read is not a well-formed XML document. |
| -10 | The internal DOM representation is not written out to any XML stream and has been cleared after a READ statement or a CLOSE statement. |
| -11 | There is a problem reading an XML stream that is a URL. |
| -12 | There is a problem writing to an XML stream that is a URL |
| -13 | There is a problem reading an XML stream that is not a URL. |
| -14 | There is a problem writing to an XML stream that is not a URL. |
| -15 | There is a problem closing an XML stream. |
