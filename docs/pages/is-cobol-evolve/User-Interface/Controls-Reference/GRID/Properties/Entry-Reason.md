## Entry-Reason

This property returns a character that represents how the user has switched to entry mode. It can only be inquired during the [MSG-BEGIN-ENTRY](../Events/MSG-BEGIN-ENTRY) event.

Returned values, defined in [isgui.def](../../../../Appendices/Copybooks/isgui.def), are:

| Value | Constat in isgui.def | Description |
| --- | --- | --- |
| x"0D" | grer-enter | The user has pressed the [Enter] key. |
| x"00" | grer-dblclick | The user double-clicked the cell. |
| x"01" | grer-del | The user has pressed the [DEL] key. |
| x"FF" | grer-entry-by-program | The [Action](./Action) property has been set to Action-Entry |
| **any  other character** |  | The user has pressed a key, such as a number or a letter. Inquiring this property the character pressed by the user is returned. |

**Example** - Inquire the entry-reason from a Grid

```cobol
procedure division.
...
  screen-1-gr-1-evt-msg-begin-entry.
     inquire screen-1-gr-1 entry-reason ws-er
     if ws-er = grer-dblclick
        display message "Entry reason: Double click"
     end-if
     .
...
```
