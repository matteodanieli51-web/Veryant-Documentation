## W$CENTER_WINDOW

The W$CENTER_WINDOW library routine moves the window on the screen in order to have the center of the window matching with the center of the screen.

### Syntax:

```cobol
 CALL "W$CENTER_WINDOW" USING windowHandle, [screenIndex]
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *windowHandle* | HANDLE OF WINDOW | Specifies the window to be centered. |
| *screenIndex* | PIC 9(n) | Optional parameter. Specifies in which monitor the window should be centered when multiple monitors are available. In a multi-monitor environment, the window would be centered in the monitor where it was displayed. Set this parameter to move the window in another monitor and center it there.<br>Note - the SCREEN-INDEX property of the window will be altered according to this parameter. |

### Examples:

**Example -** Display a independent window and center it on the screen

```cobol
working-storage section.
77  hWin                  handle of window.

procedure division.
main.
  display independent graphical window
          color  65793
          with   system menu
          title  "Centered window"
          handle hWin
          event  WIN-EVT
  call "w$center_window" using hWin.
```
