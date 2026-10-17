## W$CAPTURE

The W$CAPTURE library routine allows you to take a screenshot of a window or the whole screen. Different actions are performed depending on the number of parameters.

The routine creates a new image resource and returns its handle.

**Note -** The newly created resource is not released automatically. It must be destroyed by the programmer with the [WBITMAP-DESTROY](./W$BITMAP/WBITMAP-DESTROY) function when it is no longer needed.

### Syntax:

```cobol
 CALL "W$CAPTURE"  USING [windowHandle ]
                         [fileName ]
                         [fileFormat ]
                  GIVING  bitmapHandle
```

### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| *windowHandle* | USAGE HANDLE | Specifies the handle of the window to be captured. The window decorations are included in the screenshot. When this parameter is omitted or zero, the whole screen is captured. |  |
| *fileName* | PIC X(n) or alphanumeric literal | Specifies the name of the file where the image has to be stored. When this parameter is omitted, the image is just loaded into memory and it is not stored on disk.<br>In thin client environment, the file is created on the client disk. |  |
| *fileFormat* | PIC X(n) or alphanumeric literal | Specifies the format used to store the image. Possible values are: |  |
|  |  | "bmp"<br>"gif"<br>"png"<br>"jpg" | Windows and OS/2 bitmap format<br>CompuServe Graphics Interchange Format<br>Portable Network Graphics format<br>JPEG (Joint Photographic Experts Group) format |

### Return code:

*bitmapHandle* must be an USAGE HANDLE data item and receives the handle of the captured image. A value of 0 means that the routine is not supported in the current runtime environment.

### Examples:

**Example -** Capture full desktop and save to a .png file

```cobol
call "w$capture" using 0, "c:\tmp\screenshot.png", "png"

Example - Capture main program screen and save to a .jpg file

working-storage section.
copy "isgui.def".
copy "iscrt.def".
77  crt-status              special-names crt status pic 9(5).
77  hWin                    handle of window.
77  hBmp                    pic s9(9) comp-4.


screen section.
01  main-screen.
    03 push-button
       line 2 col 3 size 15 cells
       title "Capture Window"
       exception-value 102
       .
    03 push-button
       line 6 col 3
       title "Exit"
       exception-value 27
       .

procedure division.
main.
  display independent graphical window
          color  65793
          with   system menu
          title  "W$CAPTURE Routine"
          handle hWin
          event  WIN-EVT

  display main-screen

  accept main-screen on exception continue
  end-accept

  if crt-status = 102
       call "w$capture" using hWin "c:\tmp\mainscr.jpg", "jpg"
            giving hBmp
  end-if.
```
