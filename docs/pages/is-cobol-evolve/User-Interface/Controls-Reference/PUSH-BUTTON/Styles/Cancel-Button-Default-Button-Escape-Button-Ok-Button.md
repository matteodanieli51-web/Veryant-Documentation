## \{ Cancel-Button | Default-Button | Escape-Button | Ok-Button \}

|  |  |
| --- | --- |
| Cancel-Button | Set this style to create a Push-Button control suitable to cancel operations. When this style is set, the following configuration is implied: |
| Default-Button | The Push-Button control is activated by the [Enter] key. |
| Escape-Button | The Push-Button control is activated by the [Esc] key. |
| Ok-Button | Set this style to create a Push-Button control suitable to confirm operations. When this style is set, the following configuration is implied: |

**Example** - Define a push-button that works as a CANCEL button

```cobol
screen section.
...
  03 screen-1-pb-3 Push-Button
     line 12.1
     column 15.2
     size 7.4 cells
     lines 2.5 cells
     id 3
     title "Cancel"
     cancel-button
     .
```
