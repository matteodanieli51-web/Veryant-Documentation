### COBOL and C Data Types

As in other COBOL implementations, in order to successfully call C language functions from isCOBOL and exchange data, the C and COBOL data storage types must be matched.

For example:

| In COBOL, an integer defined as | would be represented in C, as |
| --- | --- |
| 77  MY-DATA-INT  SIGNED-INT    EXTERNAL | int  my_data_int; |

When mapping C data types to COBOL, you can use COMP-5 or COMP-N as shown below.

| C | COBOL | Data size |
| --- | --- | --- |
| char[n], str[n], tchar[n] | PIC X(n) | n bytes |
| long, int | PIC X(4) COMP-NorPIC S9(9) COMP-5 | 4 bytes |
| dword, ulong, lpxxx, float | PIC X(4) COMP-NorPIC 9(9) COMP-5 | 4 bytes |
| short | PIC X(2) COMP-NorPIC S9(5) COMP-5 | 2 bytes |
| word, ushort | PIC X(2) COMP-NorPIC 9(5) COMP-5 | 2 bytes |

Using COMP-N instead of COMP-5 is recommended for most cases.

C structures can be mapped to COBOL group items as follows:

| C Structure | Equivalent COBOL group item |
| --- | --- |
| struct PERSON {    int age;    long ss;    float weight;    char name[25];} family_member; | 01 PERSON.          03 age    PIC X(4) COMP-N.          03 ss     PIC X(4) COMP-N.          03 weight PIC X(4) COMP-N.          03 name   PIC X(25). |
