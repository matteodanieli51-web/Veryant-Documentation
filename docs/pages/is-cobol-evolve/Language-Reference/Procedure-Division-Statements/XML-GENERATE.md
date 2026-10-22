## XML GENERATE

The XML GENERATE statement converts data to XML format.

### General Format

```cobol
XML GENERATE Xml-Stream FROM Xml-Data
 
    [ WITH ENCODING  Code-page  ]
 
    [ COUNT IN Counter ]
 
    [ ON EXCEPTION Imperative-Statement-1 ]
 
    [ NOT ON EXCEPTION Imperative-Statement-2 ]
[END-XML]
```

### Syntax Rules

1. Xml-Stream must reference an elementary data item of category alphanumeric, an alphanumeric group item or an elementary data item of category national. If it references an alphanumeric group item, then it is treated as though it were an elementary data item of category alphanumeric.
2. Xml-Data can be a group or elementary data-item. It cannot be a function identifier or be reference modified, but it can be subscripted, and must not overlap with Xml-Stream or Counter.
3. Code-page must be numeric data item or literal.
4. Counter must be a numeric data item.

### General Rules

1. If specified, Code-page indicates the encoding used in the XML stream; possible values are:

| Code-page | Encoding |
| --- | --- |
| 37<br>273<br>277<br>278<br>280<br>284<br>285<br>290<br>297<br>300<br>420<br>424<br>437<br>500<br>775<br>813<br>819<br>833<br>834<br>850<br>852<br>855<br>857<br>858<br>860<br>861<br>862<br>863<br>864<br>865<br>866<br>868<br>869<br>870<br>871<br>874<br>875<br>912<br>914<br>915<br>916<br>918<br>920<br>921<br>922<br>930<br>932<br>933<br>935<br>936<br>937<br>939<br>942<br>943<br>948<br>949<br>950<br>964<br>970<br>1025<br>1026<br>1046<br>1097<br>1098<br>1112<br>1122<br>1123<br>1124<br>1140<br>1141<br>1142<br>1143<br>1144<br>1145<br>1146<br>1147<br>1148<br>1149<br>1166<br>1200<br>1208<br>1250<br>1251<br>1252<br>1253<br>1254<br>1255<br>1256<br>1257<br>1258<br>1364<br>1381<br>1383<br>33722<br>62210<br>62222<br>62238 | IBM037<br>IBM273<br>IBM277<br>IBM278<br>IBM280<br>IBM284<br>IBM285<br>IBM290<br>IBM297<br>x-IBM300<br>IBM420<br>IBM424<br>IBM437<br>IBM500<br>IBM775<br>ISO-8859-7<br>ISO-8859-1<br>x-IBM833<br>x-IBM834<br>IBM850<br>IBM852<br>IBM855<br>IBM857<br>IBM00858<br>IBM860<br>IBM861<br>IBM862<br>IBM863<br>IBM864<br>IBM865<br>IBM866<br>IBM868<br>IBM869<br>IBM870<br>IBM871<br>x-IBM874<br>x-IBM875<br>ISO-8859-2<br>ISO-8859-4<br>ISO-8859-5<br>ISO-8859-8<br>IBM918<br>ISO-8859-8<br>x-IBM921<br>x-IBM922<br>x-IBM930<br>x-MS932_0213<br>x-IBM933<br>x-IBM935<br>x-mswin-936<br>x-IBM937<br>x-IBM939<br>x-IBM942<br>x-IBM943<br>x-IBM948<br>x-IBM949<br>x-IBM950<br>x-IBM964<br>x-IBM970<br>x-IBM1025<br>IBM1026<br>x-IBM1046<br>x-IBM1097<br>x-IBM1098<br>x-IBM1112<br>x-IBM1122<br>x-IBM1123<br>x-IBM1124<br>IBM01140<br>IBM01141<br>IBM01142<br>IBM01143<br>IBM01144<br>IBM01145<br>IBM01146<br>IBM01147<br>IBM01148<br>IBM01149<br>x-IBM1166<br>UTF-16<br>UTF-8<br>windows-1250<br>windows-1251<br>windows-1252<br>windows-1253<br>windows-1254<br>windows-1255<br>windows-1256<br>windows-1257<br>windows-1258<br>x-IBM1364<br>x-IBM1381<br>x-IBM1383<br>x-IBM33722<br>ISO-8859-8<br>ISO-8859-9<br>ISO-8859-9 |

2. the If the COUNT IN phrase is specified, after execution of the XML GENERATE statement Counter contains the count of generated XML character positions.
3. An exception condition exists when an error occurs during generation of the XML document, for example if Xml-Stream is not large enough to contain the generated XML document. In this case the XML generation stops and the content of the receiver is undefined. If the COUNT IN phrase is specified, Counter contains the number of character positions that were generated, which can range from 0 to the length of Xml-Stream. If the ON EXCEPTION phrase is specified, control is transferred to Imperative-Statement-1, otherwise control is transferred to the end of the XML GENERATE statement.
4. If an exception condition does not occur during generation of the XML document, control is passed to Imperative-Statement-2, if specified, otherwise to the end of the XML GENERATE statement.
5. When the statement completes, two special registers are set:

- XML-CODE contains the error type. Possible values are

| | |
| --- | --- |
| 0 | Ok |
| 1 | Warning |
| 10 | Recoverable Error |
| 100 | Fatal Error |
| | |

- XML-ERRMSG contains the error message string, if an error occurred.

### Examples

Generate an XML structure from a data structure

```cobol
working-storage section.
 01 my-html.
    05 my-head  pic x(10) value "first".
    05 my-body.
       10 my-paragraph pic x(20) value "paragraph 1".
       10 my-table.
          15 my-row-1.
             20 my-col-1 pic x(20) value "col 1". 
             20 my-col-2 pic x(20) value "col 2". 
          15 my-row-2.
             20 my-col-1 pic x(20) value "col 1". 
             20 my-col-2 pic x(20) value "col 2". 
 01 the-xml  pic x any length.
 
 procedure division.
 main.
  xml generate the-xml from my-html
  end-xml
  display the-xml.
*> It will display the following:
*> <my-html><my-head>first</my-head><my-body><my-paragraph>paragraph 1</my-paragraph><my-table><my-row-1><my-col-1>col 1</my-col-1><my-col-2>col 2</my-col-2></my-row-1><my-row-2><my-col-1>col 1</my-col-1><my-col-2>col 2</my-col-2></my-row-2></my-table></my-body></my-html>
```
