## DISPLAY-OF

The DISPLAY-OF function returns a character string containing the alphanumeric character representation of a national character string.

### Syntax 1

```cobol
function display-of (arg-1, [arg-2])
```

### Syntax 2

```cobol
$display-of (arg-1, [arg-2])
```

### Arguments

- *arg-1* must be a national data item or literal.
- *arg-2* can be either
  - an alphanumeric data item or literal, one character in length,
  - a numeric item or literal.

### Result

If arg-2 is either alphanumeric or omitted, the function returns a character string with each national character of arg-1 converted to its corresponding alphanumeric character representation. For those characters in arg-1 that have no corresponding alphanumeric character representation, arg-2 is used; if arg-2 was omitted, then ‘?’ is used.

If arg-2 is numeric, the function returns an alphanumeric character string consisting of the content of arg-1 converted to a specific code page representation. Arg-2 must be a valid CCSID number. isCOBOL currently supports the following CCSID values:

| CCSID | Description |
| --- | --- |
| 37 | USA, Canada (Bilingual, French), Netherlands, Portugal, Brazil, Australia |
| 273 | IBM Austria, Germany |
| 277 | IBM Denmark, Norway |
| 278 | IBM Finland, Sweden |
| 280 | IBM Italy |
| 284 | IBM Catalan/Spain, Spanish Latin America |
| 285 | IBM United Kingdom, Ireland |
| 297 | IBM France |
| 300 | IBM Japanese Latin Host Double-Byte |
| 420 | IBM Arabic |
| 424 | IBM Hebrew |
| 437 | MS-DOS United States, Australia, New Zealand, South Africa |
| 500 | EBCDIC 500V1 |
| 775 | PC Baltic |
| 819 | ISO-8859-1, Latin Alphabet No. 1 |
| 850 | MS-DOS Latin-1 |
| 852 | MS-DOS Latin-2 |
| 855 | IBM Cyrillic |
| 857 | IBM Turkish |
| 860 | MS-DOS Portuguese |
| 861 | MS-DOS Icelandic |
| 862 | PC Hebrew |
| 863 | MS-DOS Canadian French |
| 864 | PC Arabic |
| 865 | MS-DOS Nordic |
| 866 | MS-DOS Russian |
| 868 | MS-DOS Pakistan |
| 869 | IBM Modern Greek |
| 870 | IBM Multilingual Latin-2 |
| 871 | IBM Iceland |
| 874 | IBM Thai |
| 875 | IBM Greek |
| 912 | ISO-8859-2, Latin Alphabet No. 2 |
| 914 | ISO-8859-4, Latin Alphabet No. 4 |
| 915 | ISO-8859-5, Latin/Cyrillic Alphabet |
| 916 | ISO-8859-8, Latin/Hebrew Alphabet |
| 918 | IBM Pakistan (Urdu) |
| 921 | IBM Latvia, Lithuania (AIX, DOS) |
| 922 | IBM Estonia (AIX, DOS) |
| 930 | Japanese Katakana-Kanji mixed with 4370 UDC, superset of 5026 |
| 933 | Korean Mixed with 1880 UDC, superset of 5029 |
| 935 | Simplified Chinese Host mixed with 1880 UDC, superset of 5031 |
| 937 | Traditional Chinese Host miexed with 6204 UDC, superset of 5033 |
| 939 | Japanese Latin Kanji mixed with 4370 UDC, superset of 5035 |
| 942 | IBM OS/2 Japanese, superset of Cp932 |
| 943 | IBM OS/2 Japanese, superset of Cp932 and Shift-JIS |
| 948 | OS/2 Chinese (Taiwan) superset of 938 |
| 949 | PC Korean |
| 950 | PC Chinese (Hong Kong, Taiwan) |
| 964 | AIX Chinese (Taiwan) |
| 970 | AIX Korean |
| 1025 | IBM Multilingual Cyrillic: Bulgaria, Bosnia, Herzegovinia, Macedonia (FYR) |
| 1046 | IBM Arabic - Windows |
| 1097 | IBM Iran (Farsi)/Persian |
| 1098 | IBM Iran (Farsi)/Persian (PC) |
| 1112 | IBM Latvia, Lithuania |
| 1122 | IBM Estonia |
| 1123 | IBM Ukraine |
| 1124 | IBM AIX Ukraine |
| 1166 | IBM Cyrillic Multilingual with euro for Kazakhstan |
| 1364 | IBM EBCDIC KS X 1005-1 |
| 1381 | IBM OS/2, DOS People's Republic of China (PRC) |
| 1383 | IBM AIX People's Republic of China (PRC) |

### Examples

**Example -** Display the current character representation of the EURO sign expressed as national.

```cobol
display function display-of(nx"00E2").
```

**Example** - Convert Unicode text to German

```cobol
01 data-in-german  pic x(100).
01 data-in-unicode pic n(100).
...
     move function display-of(data-in-unicode, 273)
                to data-in-german
```
