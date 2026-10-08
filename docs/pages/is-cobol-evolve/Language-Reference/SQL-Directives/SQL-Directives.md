# SQL Directives

SQL directives are special comments that allow for the customization of the Embedded SQL blocks.

There are three syntaxes to specify an SQL directive.

Syntax 1:

```cobol
>>SQL directive-name [=directive-value]
```

Syntax 2:

```cobol
$SQL directive-name [=directive-value]
```

Syntax 3:

```cobol
*(( SQL directive-name [=directive-value] ))
```

The >> marker can appeear everywhere except the sequence number area (columns 1 to 6) of the ANSI source format.

The $ and the \* markers must be in the comment area, that is column 7 in ANSI source format and column 1 in Terminal source format.

If the source code is written in Free format, SQL directives can appear at any column with the following syntax.

Syntax 3:

```cobol
*>(( SQL directive-name [=directive-value] ))
```

The directive must appear above the EXEC SQL statement that you want to customize.

Note that no spaces are allowed between the comment symbol and the couple of parenthesis. If spaces are present, the directive is treated as a standard comment and doesn’t have effects.

SQL directives are ignored in Object and Factory methods. They can be used only in standard programs.

## Splitting a SQL directive on multiple lines

A single SQL directive can be splitted on multiple lines by repeating the SQL delimiters on each line.

For example, the following snippets

*Syntax 1*:

```cobol
>>SQL HOSTVAR
>>SQL 1,i;2,o 
 exec sql
      execute
      begin
         stored_1 (:in-param, :out-param);
       end;
 end-exec
```

*Syntax 2*:

```cobol
$SQL HOSTVAR
$SQL 1,i;2,o 
 exec sql
      execute
      begin
         stored_1 (:in-param, :out-param);
       end;
 end-exec
```

*Syntax 3*:

```cobol
*((SQL HOSTVAR))
*((SQL 1,i;2,o))
 exec sql
      execute
      begin
         stored_1 (:in-param, :out-param);
       end;
 end-exec
```

*Syntax 4*:

```cobol
*>((SQL HOSTVAR))
*>((SQL 1,i;2,o))
 exec sql
      execute
      begin
         stored_1 (:in-param, :out-param);
       end;
 end-exec
```

are equivalent to

*Syntax 1*:

```cobol
>>SQL HOSTVAR 1,i;2,o 
 exec sql
      execute
      begin
         stored_1 (:in-param, :out-param);
       end;
 end-exec
```

*Syntax 2*:

```cobol
$SQL HOSTVAR 1,i;2,o 
 exec sql
      execute
      begin
         stored_1 (:in-param, :out-param);
       end;
 end-exec
```

*Syntax 3*:

```cobol
*((SQL HOSTVAR 1,i;2,o))
 exec sql
      execute
      begin
         stored_1 (:in-param, :out-param);
       end;
 end-exec
```

*Syntax 4*:

```cobol
*>((SQL HOSTVAR 1,i;2,o))
 exec sql
      execute
      begin
         stored_1 (:in-param, :out-param);
       end;
 end-exec
```
