### BLANK clause

The BLANK clause clears a screen line or clears the whole screen during the execution of a [DISPLAY](../../Procedure-Division-Statements/DISPLAY) screen Statement before data is transferred to the screen item.

#### General format

```cobol
{BLANK} {SCREEN}
{ERASE} {LINE  }
        {EOS   }
        {EOL   }
```

#### General rules

1. BLANK and ERASE are synonyms.
2. When the BLANK SCREEN clause is specified, the screen is cleared and the cursor is placed at line 1, column 1 during the execution of a [DISPLAY](../../Procedure-Division-Statements/DISPLAY) screen Statement before data is transferred to the screen item. Upon clearing the screen, the background color for the entire screen is set to the value applicable at the time.
3. When the BLANK LINE clause is specified, the entire line specified for the screen item that is the subject of the entry, columns 1 through the end of the line, is cleared during the execution of a [DISPLAY](../../Procedure-Division-Statements/DISPLAY) screen Statement before data is transferred to the screen item.
4. When the BLANK EOS clause is specified, the screen is cleared starting from the position of the screen item that is the subject of the entry through the end of the screen, during the execution of a [DISPLAY](../../Procedure-Division-Statements/DISPLAY)) screen Statement before data is transferred to the screen item.
5. When the BLANK EOL clause is specified, the line, from the position of the screen item that is the subject of the entry through the end of the line, is cleared during the execution of a [DISPLAY](../../Procedure-Division-Statements/DISPLAY) screen Statement before data is transferred to the screen item.
6. The BLANK SCREEN clause in combination with the BACKGROUND-COLOR clause for the same screen item, or for a screen item to which it is subordinate, establishes the default background color to be used until the same combination is encountered specifying another background color.
7. The BLANK SCREEN clause in combination with the FOREGROUND-COLOR clause for the same screen item, or for a screen item to which it is subordinate, establishes the default foreground color to be used until the same combination is encountered specifying another foreground color.
8. The BLANK clause is ignored during all phases of the execution of an [ACCEPT](../../Procedure-Division-Statements/ACCEPT) screen Statement.
