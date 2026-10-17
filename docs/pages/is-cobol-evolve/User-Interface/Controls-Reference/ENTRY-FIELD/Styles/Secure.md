## Secure

This style causes the every character in the entry-field value to be masked. Normally used for passwords.

By default, asterisks are used to mask the content of the field, but you can choose another character by setting the [iscobol.gui.secure_char](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) configuration property.

By default, the number of masked characters matches with the lenght of the field value, but you can choose to show a fixed number of masked characters by setting the [iscobol.gui.secure_num_chars](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) configuration property.

**Example** - Define an entry-field for password management with secured character entry and display

```cobol
screen section.
...
  03 screen-1-ef-4 Entry-Field
     line 40.6
     column 47.5
     size 16.2 cells
     lines 12.3 cells
     hint "Enter password here"
     id 21
     secure
     3-d
     .
```
