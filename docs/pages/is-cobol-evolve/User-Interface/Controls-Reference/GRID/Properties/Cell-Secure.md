## Cell-Secure

This property allows you to set or retrieve secure status of the cell identified by the [X](./X) and [Y](./Y) properties.

The possible values are:

|  |  |
| --- | --- |
| 0 | The cell is not secure; the user can see the text in the cell. This is the default status |
| 1 | The cell is secure; the user can see the text in the cell as every character has been masked |

By default, asterisks are used to mask the content of the cell, but you can choose another character by setting the [iscobol.gui.secure_char](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) configuration property.

By default, the number of masked characters matches with the lenght of the cell data, but you can choose to show a fixed number of masked characters by setting the [iscobol.gui.secure_num_chars](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) configuration property.

**Example** - Make row 2 column 2 secure as it will host a password

```cobol
...
procedure division.
...
  modify screen-1-gr-1 x = 2, y = 2
                       cell-secure 1
...
```
