## XML PARSE

The XML PARSE statement parses an XML document into its individual pieces and passes each piece, one at a time, to a user-written processing procedure.

### General Format

```cobol
XML PARSE Xml-Stream
 
  [ WITH ENCODING  Code-page  ]
 
  [ VALIDATING WITH { Identifier-1  } ]
                    { FILE Schema-1 }
 
  PROCESSING PROCEDURE IS Procedure-Name-1
                               [ { THROUGH } Procedure-Name-2 ]
                                 { THRU }
 
  [ ON EXCEPTION Imperative-Statement-1 ]
 
  [ NOT ON EXCEPTION Imperative-Statement-2 ]
 
[END-XML]
```

### Syntax Rules

1. Xml-Stream must reference an elementary data item of category alphanumeric, an alphanumeric group item or an elementary data item of category national. If it references an alphanumeric group item, then it is treated as though it were an elementary data item of category alphanumeric.
2. Code-page must be numeric data item or literal.
3. Identifier-1 is an alphanumeric data item.
4. Schema-1 must be defined in the XML-SCHEMA clause of the SPECIAL-NAMES paragraph.
5. Procedure-Name-1 is the first or only section or paragraph in the processing procedure.
6. Procedure-Name-2 is the last section or paragraph in the processing procedure.

### General Rules

1. If specified, Code-page indicates the encoding used in the XML stream; possible values are:

| Code-page | Encoding |
| --- | --- |
| 37<br>273<br>277<br>278<br>280<br>284<br>285<br>290<br>297<br>300<br>420<br>424<br>437<br>500<br>775<br>813<br>819<br>833<br>834<br>850<br>852<br>855<br>857<br>858<br>860<br>861<br>862<br>863<br>864<br>865<br>866<br>868<br>869<br>870<br>871<br>874<br>875<br>912<br>914<br>915<br>916<br>918<br>920<br>921<br>922<br>930<br>932<br>933<br>935<br>936<br>937<br>939<br>942<br>943<br>948<br>949<br>950<br>964<br>970<br>1025<br>1026<br>1046<br>1097<br>1098<br>1112<br>1122<br>1123<br>1124<br>1140<br>1141<br>1142<br>1143<br>1144<br>1145<br>1146<br>1147<br>1148<br>1149<br>1166<br>1200<br>1208<br>1250<br>1251<br>1252<br>1253<br>1254<br>1255<br>1256<br>1257<br>1258<br>1364<br>1381<br>1383<br>33722<br>62210<br>62222<br>62238 | IBM037<br>IBM273<br>IBM277<br>IBM278<br>IBM280<br>IBM284<br>IBM285<br>IBM290<br>IBM297<br>x-IBM300<br>IBM420<br>IBM424<br>IBM437<br>IBM500<br>IBM775<br>ISO-8859-7<br>ISO-8859-1<br>x-IBM833<br>x-IBM834<br>IBM850<br>IBM852<br>IBM855<br>IBM857<br>IBM00858<br>IBM860<br>IBM861<br>IBM862<br>IBM863<br>IBM864<br>IBM865<br>IBM866<br>IBM868<br>IBM869<br>IBM870<br>IBM871<br>x-IBM874<br>x-IBM875<br>ISO-8859-2<br>ISO-8859-4<br>ISO-8859-5<br>ISO-8859-8<br>IBM918<br>ISO-8859-8<br>x-IBM921<br>x-IBM922<br>x-IBM930<br>x-MS932_0213<br>x-IBM933<br>x-IBM935<br>x-mswin-936<br>x-IBM937<br>x-IBM939<br>x-IBM942<br>x-IBM943<br>x-IBM948<br>x-IBM949<br>x-IBM950<br>x-IBM964<br>x-IBM970<br>x-IBM1025<br>IBM1026<br>x-IBM1046<br>x-IBM1097<br>x-IBM1098<br>x-IBM1112<br>x-IBM1122<br>x-IBM1123<br>x-IBM1124<br>IBM01140<br>IBM01141<br>IBM01142<br>IBM01143<br>IBM01144<br>IBM01145<br>IBM01146<br>IBM01147<br>IBM01148<br>IBM01149<br>x-IBM1166<br>UTF-16<br>UTF-8<br>windows-1250<br>windows-1251<br>windows-1252<br>windows-1253<br>windows-1254<br>windows-1255<br>windows-1256<br>windows-1257<br>windows-1258<br>x-IBM1364<br>x-IBM1381<br>x-IBM1383<br>x-IBM33722<br>ISO-8859-8<br>ISO-8859-9<br>ISO-8859-9 |

2. The VALIDATING phrase specifies that the parser should validate the XML document against an XML schema while parsing it. If the FILE keyword is not specified, Identifier-1 must reference a data item that contains the XML schema. If the FILE keyword is specified, Schema-1 identifies an existing file that contains the XML schema. During parsing with validation, normal XML events are returned as for non-validating parsing until an exception occurs due to a validation error or other error in the document. When an XML document is not valid, the parser signals an XML exception and passes control to the processing procedure with special register XML-EVENT containing 'EXCEPTION' and special-register XML-CODE containing return code 24 in the high-order halfword and a reason code in the low-order halfword.
3. The processing procedure consists of the statements at which XML events are handled. The range of the processing procedure also includes all statements executed by CALL, EXIT, GO TO, GOBACK, and PERFORM statements in the range of the processing procedure.
4. The processing procedure must not directly execute an XML PARSE statement. However, if the processing procedure passes control to another program by using a CALL statement, the target program can execute the same or a different XML PARSE statement. A program executing on multiple threads can execute the same XML statement or different XML statements simultaneously.
5. An exception condition occurs when the XML parser detects an error in processing the XML document. The parser first signals an exception XML event by passing control to the processing procedure with special register XML-EVENT set to contain 'EXCEPTION'. If the XML processing procedure handles the exception XML event and sets XML-CODE to zero before returning control to the parser, the exception condition no longer exists. If no other unhandled exceptions occur prior to the termination of the parser, control is transferred to Imperative-Statement-2 of the NOT ON EXCEPTION phrase, if specified.
6. If an exception condition does not exist at termination of XML PARSE processing, control is transferred to Imperative-Statement-2 if the NOT ON EXCEPTION clause is specified. Otherwise control is transferred to the end of the XML PARSE statement.

**Note**: Unlike the IBM implementation of XML PARSE, isCOBOL doesn’t return VERSION-INFORMATION and STANDALONE-DECLARATION events.

### Examples

Parse a simple XML, display it and use some key data from it

```cobol
 working-storage section.
 01 xml-document.
    02 pic x(36) value '<?xml version="1.0" encoding="utf-8"'.
    02 pic x(19) value ' standalone="yes"?>'.
    02 pic x(39) value '<!--This document is just an example-->'.
    02 pic x(10) value '<sandwich>'.
    02 pic x(35) value '  <bread type="baker&apos;s best"/>'.
    02 pic x(41) value '  <?spread please use real mayonnaise  ?>'.
    02 pic x(31) value '  <meat>Ham &amp; turkey</meat>'.
    02 pic x(40) value '  <filling>Cheese, lettuce, tomato, etc.'.
    02 pic x(10) value '</filling>'.
    02 pic x(35) value '  <![CDATA[We should add a <relish>'.
    02 pic x(22) value ' element in future!]]>'.
    02 pic x(31) value '  <listprice>$4.99 </listprice>'.
    02 pic x(27) value '  <discount>0.10</discount>'.
    02 pic x(15) value '</sandwich>'.
 
 01 xml-document-length computational pic 999.
 
 01 my-msg                    pic x(30).
 01 current-element           pic x(30).
 01 xfr-ed                    pic x(9) justified.
 01 xfr-ed-1 redefines xfr-ed pic 999999.99.
 01 list-price computational  pic 9v99 value 0.
 01 discount computational    pic 9v99 value 0.
 01 display-price             pic $$9.99.
 01 prom-price                pic $$9.99.
 
procedure division.
 main.
   display  xml-document
   xml parse xml-document processing procedure xml-handler
       on exception     display 'XML document error ' xml-code x'0d0a' xml-errmsg
       not on exception display 'XML document successfully parsed'
   end-xml  
   move list-price to display-price
   compute prom-price = list-price * (1 - discount)
   display 'Information from XML ' x'0d0a'
           '  Sandwich list price: ' display-price x'0d0a'
           '  Promotional price:   ' prom-price
   end-display
   goback.
xml-handler.
   evaluate xml-event
     when 'DOCUMENT-TYPE-DECLARATION ' display 'Doc type decl: ' XML-TEXT
     when 'START-OF-ELEMENT'
       display 'Start element tag: <' XML-TEXT '>'
       move XML-TEXT to current-element
     when 'CONTENT-CHARACTERS'
       display 'Content characters: <' XML-TEXT '>'
       evaluate current-element
         when 'listprice' compute list-price = function numval-c(XML-TEXT)
         when 'discount'
           move XML-TEXT to xfr-ed
           move xfr-ed-1 to discount
       end-evaluate
     when 'END-OF-ELEMENT'
       display 'End element tag: <' XML-TEXT '>'
       move spaces to current-element
     when 'START-OF-DOCUMENT'
       compute xml-document-length = function length(XML-TEXT)
       display 'Start of document: length=' xml-document-length
           ' characters.'
     when 'END-OF-DOCUMENT' display 'End of document.'
     when 'VERSION-INFORMATION' display 'Version: <' XML-TEXT '>'
     when 'ENCODING-DECLARATION' display 'Encoding: <' XML-TEXT '>'
     when 'STANDALONE-DECLARATION' display 'Standalone: <' XML-TEXT '>'
     when 'ATTRIBUTE-NAME' display 'Attribute name: <' XML-TEXT '>'
     when 'ATTRIBUTE-CHARACTERS' display 'Attribute value characters: <' XML-TEXT '>'
     when 'ATTRIBUTE-CHARACTER' display 'Attribute value character: <' XML-TEXT '>'
     when 'START-OF-CDATA-SECTION' display 'Start of CData: <' XML-TEXT '>'
     when 'END-OF-CDATA-SECTION' display 'End of CData: <' XML-TEXT '>'
     when 'CONTENT-CHARACTER' display 'Content character: <' XML-TEXT '>'
     when 'PROCESSING-INSTRUCTION-TARGET' display 'PI target: <' XML-TEXT '>'
     when 'PROCESSING-INSTRUCTION-DATA' display 'PI data: <' XML-TEXT '>'
     when 'COMMENT' display 'Comment: <' XML-TEXT '>'
     when 'EXCEPTION'
       compute xml-document-length = 
                 function length (XML-TEXT)
      move  XML-TEXT (xml-document-length - 5:10) to  my-msg
      display 'Exception ' XML-CODE ' at offset '
          xml-document-length ':' xml-errmsg ':' my-msg
     when other display 'Unexpected XML event: ' XML-EVENT '.'
   end-evaluate.
```
