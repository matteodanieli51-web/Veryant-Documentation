## SET

#### Format 1

```cobol
SET { index-name-1 } ... { TO } { index-name-2            }
    { identifier-1 }     { =  } { identifier-2            }
```

#### Format 2

```cobol
SET { index-name-3 } ... { UP   } BY identifier-2 
                         { DOWN }
```

#### Format 3

```cobol
SET { { mnemonic-name-1 } ... { TO } { ON  } } ... 
                              { =  } { OFF }
```

#### Format 4

```cobol
SET { { condition-name } ... { TO } { TRUE  } } ... 
                             { =  } { FALSE }
```

#### Format 5

```cobol
SET FILE-PREFIX { TO } File-Prefix
                { =  }
```

#### Format 6

```cobol
SET { CONFIGURATION } { Env-Name { TO } Env-Value } ... 
    { ENVIRONMENT   }            { =  }
 
  [ ON EXCEPTION Statement-1 ]
 
  [ NOT ON EXCEPTION Statement-2 ]
 
[END-SET]
```

#### Format 7

```cobol
SET Identifier-5 { TO } { { ADDRESS } OF Identifier-6 }
                 { =  }   { HANDLE  }
                        { NULL                        }
```

#### Format 8

```cobol
SET Result-Item { TO } SIZE OF Data-Item
                { =  }
```

#### Format 9

```cobol
SET { ADDRESS } OF  Linkage-Item { TO } { Pointer              } 
    { HANDLE  }                  { =  } { ADDRESS OF Data-Item } 
```

#### Format 10

```cobol
SET { INPUT        } WINDOW { TO } Window-1 
    { INPUT-OUTPUT }        { =  }
    { I-O          } 
    { OUTPUT       }
```

#### Format 11

```cobol
SET { Handle-1 } ... { TO } HANDLE OF { Screen-1        }
                     { =  }           { CONTROL ID id-1 }
```

#### Format 12

```cobol
SET THREAD Thread-id PRIORITY { TO } Priority 
                              { =  }
```

#### Format 13

```cobol
SET EXCEPTION { VALUE  }  Exc-Value { TO } { CUT-SELECTION        }  ...
              { VALUES }            { =  } { COPY-SELECTION       } 
                                           { PASTE-SELECTION      } 
                                           { DELETE-SELECTION     } 
                                           { UNDO                 } 
                                           { REDO                 } 
                                           { SELECT-ALL-SELECTION } 
                                           { ITEM-HELP            } 
```

#### Format 14

```cobol
SET Result-Item { TO } { Class:>{ method  ( [parameters] ) } }
                { =  }          { field                    }
                       { ObjRef:>{ method  ( [parameters] ) } }
                                 { field                    }
                       {   SELF:>{ method  ( [parameters] ) } }
                                 { field                    }
                       {  SUPER:>{ method  ( [parameters] ) } }
                                 { field                    }
                       { SELF                                 }
```

#### Format 15

```cobol
SET Result-Item { TO } CAPACITY OF Dynamic-Capacity-Table
                { =  }
```

#### Format 16

```cobol
SET Data-Name-1 { TO      } identifier-2 
                { =       }
                { UP   BY }
                { DOWN BY }
```

### Syntax rules

#### Format 1

1. Identifier-1 shall reference a data item of class index or an integer data item.
2. Identifier-2 shall reference a data item of class index.
3. If identifier-1 references a numeric data item, index-name-2 shall be specified.

#### Format 3

4. Mnemonic-name-1 shall be associated with an external switch, the status of which may be altered.

#### Format 4

5. Condition-name-1 shall be associated with a conditional variable.
6. If the FALSE phrase is specified, the FALSE phrase shall be specified in the VALUE clause of the data description entry for condition-name-1.

#### Format 5

7. File-prefix references a nonnumeric literal or alphanumeric data item.

#### Format 6

8. Env-name references a nonnumeric literal or data item.

9. Env-value references a USAGE DISPLAY numeric or nonnumeric literal or data item. If numeric, it must be an integer
10. CONFIGURATION and ENVIRONMENT are synonymous.

#### Format 7

11. Identifier-5 shall reference a data item of category data-pointer. Identifier-6 shall be of category data-pointer.
12. Data-name-1 shall be a based data item.
13. If identifier-5 references a restricted data-pointer, identifier-6 shall be the predefined address NULL or shall reference a data-pointer restricted to the same type. If data-name-1 is a strongly-typed group item or a restricted pointer, identifier-6 shall reference a data-pointer restricted to the type of data-name-1.

If identifier-6 references a restricted data-pointer, either identifier-5 shall reference a data-pointer restricted to the same type or data-name-1 shall be a typed item of the type to which identifier-6 is restricted.

#### Format 8

14. Result-item must be a numeric data item

#### Format 9

15. Linkage-item must be declared in the Linkage section.
16. Pointer must be a data item with USAGE POINTER.

#### Format 10

17. Window-1 is a USAGE HANDLE or PIC X(10) data item that refers to a floating window or the main application window

#### Format 11

18. Handle-1 is a USAGE HANDLE data item.
19. Screen-1 must refer to an elementary Screen Section item that describes a graphical control.
20. Id-1 references a numeric literal or data item.

#### Format 12

21. Thread-id references a USAGE HANDLE or HANDLE OF THREAD data item.
22. Priority references a numeric literal or data item.

#### Format 13

23. Exc-value references an integer literal or data item.
24. VALUE and VALUES are synonymous.

#### Format 14

25. Class is a class defined in the REPOSITORY paragraph
26. ObjRef is a data item whose usage is OBJECT REFERENCE
27. method and field are the exact name of a method or a field exposed by the invoked class
28. parameters can be any kind of item depending on the invoked method signature

#### Format 15

29. Result-item must be a numeric data item
30. Dynamic-Capacity-Table is a data item for which the OCCURS DYNAMIC clause is specified

#### Format 16

31. Data-Name-1 is the capacity data item of a dynamic capacity table.

### General rules

#### Formats 1 and 2

1. Index-names are associated with a given table by being specified in the INDEXED BY phrase of the OCCURS clause for that table.

#### Format 1

2. The following occurs for each recurrence of index-name-1 or identifier-1. Each time, the value of the sending operand is used as it was at the beginning of the execution of the statement. Item identification of the data item referenced by identifier-1 is done immediately before the value of that data item is changed:

A. If index-name-1 is specified:

i. If identifier-2 is specified, the content of the data item referenced by identifier-2 is placed in the index referenced by index-name-1 unchanged.

ii. If index-name-2 is specified:

a. If index-name-2 is associated with the same table as index-name-1, the content of the index referenced by index-name-2 is placed in the index referenced by index-name-1 unchanged.

b. Otherwise, index-name-1 is set to a value causing it to refer to the table element that corresponds in occurrence number to the table element associated with index-name-2.

C. If identifier-1 references an index data item, the content of index-name-2 or of the data item referenced by identifier-2 is placed in the index referenced by index-name-1 unchanged.

D. If identifier-1 references a numeric data item, that item is set to the occurrence number of the table element referenced by index-name-2.

#### Format 2

3. The following occurs for each recurrence of index-name-3. Each time, the value of identifier-2 is used as it was at the beginning of the execution of the statement:

A. If identifier-2 does not evaluate to an integer, the execution of the SET statement is unsuccessful, and the content of the receiving operand is unchanged.

B. If the occurrence number represented by the content of index-name-3 incremented (UP BY) or decremented (DOWN BY) the result of the evaluation of identifier-2 is a valid subscript for the table associated with index-name-3, index-name-3 is set to a value causing it to refer to the table element that corresponds in occurrence number to that subscript; otherwise, the execution of the SET statement is unsuccessful, and the content of the receiving operand is unchanged.

#### Format 3

4. The status of each external switch associated with the specified mnemonic-name-1 is modified such that the truth value resultant from evaluation of a condition-name associated with that switch will reflect an on status if the ON phrase is specified, or an off status if the OFF phrase is specified.

#### Format 4

5. If the TRUE phrase is specified, the literal in the VALUE clause associated with condition-name-1 is placed in the conditional variable according to the rules for the VALUE clause. If the length of the conditional variable is zero, the SET statement leaves it unchanged. If more than one literal is specified in the VALUE clause, the conditional variable is set to the value of the first literal that appears in the VALUE clause.
6. If the FALSE phrase is specified, the literal in the FALSE phrase of the VALUE clause associated with condition-name-1 is placed in the conditional variable according to the rules for the VALUE clause. If the length of the conditional variable is zero, the SET statement leaves it unchanged.
7. If multiple condition-names are specified, the results are the same as if a separate SET statement had been written for each condition-name-1 in the same order as specified in the SET statement.

#### Format 5

8. FILE_PREFIX is an isCOBOL Framework Property used to list the paths in which to search for data files. Paths must be separated by the “\\n” character sequence or by the current operating system path separator. The prefix “iscobol” will be automatically added by the Runtime. FILE_PREFIX is supported for backward compatibility.

9. A Format 5 SET statement is equivalent to this Format 6 SET statement:

SET ENVIRONMENT "FILE-PREFIX" TO file-prefix

#### Format 6

10. The Runtime Framework can be customized with the use of properties. Most of them are initially set to a default value. If a property does not have a default value or is not set, it is ignored. If the property is boolean you can use a value of '1', 'true', 'yes', or 'on' to set it to true. Any other value will set it to false. Refer to [Configuration](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration) for general information about setting runtime properties.

11. The Format 6 SET statement can be used to modify these values at Runtime.
12. Env-name is the name of the Runtime Framework property variable to set. In it, lower-case characters are treated as upper case, and underscores are treated as hyphens. The first space character delimits the name. Env-name may specify either the literal name of the variable or a data-item whose value is the name of the variable. If you specify the actual name of the variable, then it must be enclosed the name in quotes. Env-value is the value to set the Framework property to.If it is a numeric data item, then the numeric value is stored, unless the program was compiled with [-cdlz](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) option, in such case the memory content is stored.
13. If the Env-Name is the name of a configuration variable whose value cannot be changed, then Statement-1 (if specified) is executed. Otherwise, Statement-2 (if specified) is executed.

#### Format 7

14. If identifier-5 is specified, the address identified by identifier-6 is stored in each data item referenced by identifier-5 in the order specified. Item identification of the data item referenced by identifier-5 is done immediately before the value of that data item is changed

15. If data-name-1 is specified, the address identified by identifier-6 is assigned to each based item referenced by data-name-1 in the order specified.
16. If the NULL option is used, then identifier-5 is set to point to no data item.

#### Format 8

17. The number of standard character positions occupied by data-item is stored in result-item

#### Format 9

18. If pointer is specified, then the address of the linkage-item is set to pointer. If the ADDRESS OF option is used, then the address of the linkage-item is set to the address of data-item. If the NULL option is used, then the address of the linkage-item is set to point to no data item.
19. The linkage-item must be defined as either level 01 or 77.
20. If the linkage-item is not listed in the PROCEDURE DIVISION USING phrase and is referenced before the SET ADDRESS OF statement, then the runtime will abort with the exception message, "java.lang.NullPointer.Exception caught ! (null) ".

#### Format 10

21. Format 10 of the SET verb makes window-1 the current, or current and active window. The current window is the window to which DISPLAY statements refer. The active window is the window that is highlighted and the one to which user input is directed. Window-1 must be a handle to a valid floating window. If window-1 does not refer to a valid floating window, the SET statement has no effect.
22. INPUT, INPUT-OUTPUT, and I-O are synonymous. They cause window-1 to become both the current and active window.
23. OUTPUT causes window-1 to become the current window.

#### Format 11

24. A Format 11 SET statement retrieves the handle to the control described by screen-1 or id-1 and stores it in handle-1. Id-1 must have a value greater than zero. If a matching control is found, handle-1 is set to the handle of that control. If no matching control is found, handle-1 is set to NULL. If more than one control has a matching ID, then handle-1 is arbitrarily set to one of those controls

#### Format 12

25. A Format 12 SET statement sets the execution priority of a thread.
26. If thread-id is specified and identifies an existing thread, then the priority being set is for this thread. Otherwise, the current thread's priority is set to priority. If thread-id does not correspond to an existing thread, then the SET statement has no effect.
27. The thread priority can have these values:

A. The minimum priority for a thread is "1".

B. The maximum priority for a thread is "10”.

C. The normal (and default) priority for a thread is "5”.

#### Format 13

28. A Format 13 SET statement associates the exception value specified in exc-value with an automated action that the Runtime can perform. Any keystroke, menu item, or control that produces the exc-value exception value will automatically cause the associated action to be performed.

The following actions can be used in association with the current control, if it is an entry-field; otherwise, they have no effect.

| | |
| --- | --- |
| CUT-SELECTION | Cuts the current selection to the clipboard |
| COPY-SELECTION | Copies the current selection to the clipboard |
| PASTE-SELECTION | Pastes the clipboard into the entry field at the current location (replaces any existing selection) |
| DELETE-SELECTION | Deletes the current selection |
| UNDO | Undoes the last change |
| REDO | Redoes the change. |
| SELECT-ALL-SELECTION | Selects all the text in the entry field. In a multi-line entry field, this includes the text in all lines. |
| | |

The ITEM-HELP action produces context-sensitive help for the control with the current input focus. See [Help automation](../../User-Interface/Working-With-UI-and-Controls/Creating-a-control/Help-automation) for more details.

#### Format 14

29. A Format 14 SET statement returns the result of a method invokation or the value of a field in object oriented programming.
30. Result-Item should be defined according to the result of the method and the field type. To receive strings and numbers, Result-Item can be a standard COBOL data-item with picture PIC X(n) or PIC 9(n). To receive an instance of an object, then Result-Item should be defined as OBJECT REFERENCE to that object.
31. If the field is a COBOL data item, it must be indicated upper case with hyhpens replaced by underscores, that is the way isCOBOL internally defines data items. For example, having 77 my-item pic x, you will reference it using SELF:>MY_ITEM and not SELF:>my-item.
32. SELF means the current class. It can be used in a OBJECT paragraph. In a FACTORY paragraph the class logical name must be used in order to reference the current class.

```cobol
 IDENTIFICATION DIVISION.
 CLASS-ID. MY_OBJ AS "MyObj".
 
 IDENTIFICATION DIVISION.
 OBJECT.
 
 DATA DIVISION.
 WORKING-STORAGE SECTION.
 PROTECTED.
 77 Item-1 PIC X(3).
 
 PROCEDURE DIVISION.
 IDENTIFICATION DIVISION.
 METHOD-ID. TEST_SELF AS "TestSelf".
 PROCEDURE DIVISION.
 MAIN.
     SELF:>method1().
     DISPLAY SELF:>ITEM_1.
 END METHOD.
 
 IDENTIFICATION DIVISION.
 METHOD-ID. METHOD1 as "method1".
 PROCEDURE DIVISION.
 MAIN.
     CONTINUE.
 END METHOD.
 
 END OBJECT.
```

```cobol
 IDENTIFICATION DIVISION.
 CLASS-ID. MY_CLASS AS "MyClass".
 
 IDENTIFICATION DIVISION.
 FACTORY.
 
 DATA DIVISION.
 WORKING-STORAGE SECTION.
 PROTECTED.
 77 Item-1 PIC X(3).
 
 PROCEDURE DIVISION.
 IDENTIFICATION DIVISION.
 METHOD-ID. TEST_SELF AS "TestSelf".
 PROCEDURE DIVISION.
 MAIN.
     MY_CLASS:>method1().
     DISPLAY MY_CLASS:>ITEM_1.
 END METHOD.
 
 IDENTIFICATION DIVISION.
 METHOD-ID. METHOD1 as "method1".
 PROCEDURE DIVISION.
 MAIN.
     CONTINUE.
 END METHOD.
 
 END FACTORY.
```

33. SUPER refers to the class that the current class is inheriting from, if any.
34. Only PROTECTED fields can be referenced from FACTORY paragraphs and superclasses.
35. Setting Result-Item to SELF allows you to retrieve the instance of the current class.

36. If the method returns NULL, then the runtime will abort with the exception message, "java.lang.NullPointer.Exception caught ! (null) ".

#### Format 15

37. A Format 15 SET statement allows you to retrieve the exact number of items currently stored in a dynamic capacity table. This statement is particularly useful when dynamic capacity tables are nested and their CAPACITY data item is set to the highest capacity between the sibling dynamic capacity tables.

#### Format 16

38. A Format 16 SET statement alters the capacity of a dynamic capacity table.
39. If the new capacity of the table is smaller than the previous current capacity, the exceeding occurrences are removed.
40. If the new capacity of the table is greater than the previous current capacity, new occurrences are created and are initialized.

### Examples

Format 1 and 2 - Set index name to specific value or increase current value

```cobol
set idx-1 to 2
set idx-1 up by 4
```

Format 3 - Set a switch on

```cobol
special-names.
  switch-0 is my-switch-a
  switch-1 is my-switch-b.
...
procedure division.
main.
   set my-switch-a to on, my-switch-b to off.
```

Format 4 - Set conidition name to true/false

```cobol
working-storage section.
01 customers-eof pic x.
   88 is-eof   value "Y" false "N".
01 applied-discount pic x.
   88 is-discounted value "Y" false "N".
...
procedure division.
main.
  set is-eof to false, is-discounted to true.
```

Format 5 - Set the isCOBOL file.prefix runtime property

```cobol
set file-prefix to "c:/mydir1/data1;c:/mydir2/data2"
```

Format 6 - Set a couple of isCOBOL runtime properties

```cobol
set environment "file.prefix" to "c:/mydir1/data1;c:/mydir2/data2"
set environment "array_check" to "1"
```

Format 7 - Get the pointer to the area of an alphanumeric variable (requires -cp compiler option)

```cobol
set my-pointer to address of employee-name
```

Format 8 - Get the size of some items

```cobol
working-storage section.
77 num-comp   pic s9(7) comp-5.
77 str-var    pic x any length.
77 item-size  pic 9(4).
...
procedure division.
main.
  set item-size to size of num-comp
  *> item-size value will be : 4
  move "hello world" to str-var
  set item-size to size of str-var
  *> item-size value will be : 11 
```

Format 9 - Set address of linkage item to address of working-storage item

```cobol
working-storage section.
77 ws-par-1   pic x(10) value "no param".
 
linkage section.
01 par-1  pic x(10).
...
procedure division using par-1.
main.
   set address of par-1 to address of ws-par-1
   display par-1. *> Displays : no param
```

Format 10 - Activate different windows to display at them

```cobol
working-storage section.
77 win-1  usage handle of window.
77 win-2  usage handle of window.
77 win-3  usage handle of window.
...
procedure division.
main.
   display standard window 
           screen line 5 screen col 5 
           handle win-1
   display independent window 
           screen line 150 screen col 500 
           handle win-2
   display independent window 
           screen line 350 screen col 700 
           handle win-3
 
   set i-o window win-2
   display "Message to Window 2" at line 10 col 20
 
   set i-o window win-3
   display "Message to Window 3" at line 10 col 20
 
   set i-o window win-1
   display "Message to Window 1" at line 10 col 20
 
   display message "done".
```

Format 11 - Sets a generic Entry-Field handle to the handle of the first field in the Screen

```cobol
       working-storage section.
       77  generic-ef handle of entry-field.
       
       screen section.
       01  screen1.
           03 screen1-ef1 entry-field line 2 col 2.
           03 screen1-ef2 entry-field line 4 col 2.
           
       procedure division.
       main.
           display standard graphical window.
           display screen1.
           set generic-ef to handle of screen1-ef1.
```

Format 12 - Create a thread with the lowest priority

```cobol
       working-storage section.
       77  th-1 handle of thread.
           
       procedure division.
       main.
           call thread "procedure1" handle th-1.
           set thread th-1 priority to 1.
```

Format 13 - Associate the key status value 1001 to the function CUT-SELECTION

```cobol
        set exception value 1001 to cut-selection.
```

Format 14 - Invoke methods of a Java Class to get System Information

```cobol
       configuration section.
       repository.
           class Sys as "java.lang.System".
 
       working-storage section.
       77  buffer      pic x(50).
 
       procedure division.
       main.
           set buffer to Sys:>getProperty("os.name")
           display "Operating System: " buffer.
 
           set buffer to Sys:>getProperty("os.arch")
           display "OS Architecture: " buffer.
 
           set buffer to Sys:>getProperty("java.version")
           display "Java Version: " buffer.
```

Format 15 - Get the exact number of items in a nested dynamic capacity table

```cobol
       working-storage section.
 
       01 group-1.
          03 table-1 occurs dynamic capacity cap-1.
             05 sub-table-1 occurs dynamic capacity cap-1-1.
                07 sub-item-1 pic x(10).
               
       77 cap pic 9(4).         
             
       PROCEDURE DIVISION.
 
       MAIN.
           move "something" to sub-item-1(1, 1).
           move "something" to sub-item-1(1, 2).
           move "something" to sub-item-1(2, 1).
           
           display "highest capacity of sub-table-1 in table-1:" cap-1-1.
      *>   it will display '2'     
           
           set cap to capacity of sub-table-1(1). 
           display "capacity of sub-table-1 in table-1(1): " cap.
      *>   it will display '2'
           
           set cap to capacity of sub-table-1(2). 
           display "capacity of sub-table-1 in table-1(2): " cap.
      *>   it will display '1'
```
