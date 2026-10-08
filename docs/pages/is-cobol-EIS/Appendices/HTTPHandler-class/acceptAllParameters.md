### acceptAllParameters

Receives a list of all parameters followed by their value. This is useful to monitor what is actually passed by the HTTP client.

#### General format

```cobol
void acceptAllParameters( params )
```

#### Syntax rules

1. *params* is an alphanumeric data item. It’s good practice to use items with picture X ANY LENGTH for this purpose.

#### General rules

1. A single buffer is returned by this method. The buffer contains all the parameter names followed by their respective value.

#### Example

Consider the following HTML form:

```cobol
<form action="servlet/isCobol(PROG1)" enctype="multipart/form-data" method="post">
Type some text:<br>
<input type="text" name="textline" size="30"><br>
Choose a file to upload:<br>
<input type="file" name="datafile" size="40"><br>
Send to server<br>
<input type="submit" value="Send">
</form>
```

The user types data into the text area and browses for a file on disk.

When the ‘Send’ button is clicked, the COBOL program ‘PROG1’ is called. In order to intercept all the parameters as a single string, PROG1 should be written as follows:

```cobol
       CONFIGURATION SECTION.
       REPOSITORY.
           CLASS WEB-AREA AS "com.iscobol.rts.HTTPHandler"
           .
 
       ...
       WORKING-STORAGE SECTION.
       01 params pic x any length.
       ...
       LINKAGE SECTION.
       01 LNK-AREA OBJECT REFERENCE WEB-AREA.
 
       PROCEDURE DIVISION USING LNK-AREA.
       MAIN.
           LNK-AREA:>acceptAllParameters(params).
```
