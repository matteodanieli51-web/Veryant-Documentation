## J$GETFROMLAF

The J$GETFROMLAF library routine returns a font or a color by inquiring the current Look and Feel (LAF). In thin client environment it automatically works client side.

### Syntax:

```cobol
 CALL "J$GETFROMLAF" USING opCode
                           parameters
                    GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | Function to be executed. Valid values, defined in [iscobol.def](../../Copybooks/iscobol.def) are: |  |
|  | [JGET-LAF-CLASS](./JGET-LAF-CLASS) | Returns the fully qualified name of the current LAF class |
|  | [JGET-LAF-COLOR](./JGET-LAF-COLOR) | Returns the RGB representation of a given color retrieved from the current LAF in the form of a negative number |
|  | [JGET-LAF-FONT](./JGET-LAF-FONT) | Returns the handle of a given font retrieved from the current LAF |
| *parameters* | Parameters depend on the opcode. |  |

### Return code:

*returnCode* can be any signed numeric data item. The meaning depends on the opcode.

### Examples:

**Example -** display a screen where LAF font and colors are used

```cobol
working-storage section.
copy "iscrt.def".
copy "isgui.def".
copy "iscobol.def".
copy "isresize.def".
77 crt-status             special-names crt status pic 9(5).
77 close-win              pic 9 value 0.
77 result-getfromlaf      pic s9.
77 label-font             handle of font.
77 lb-bg-color            pic s9(9).
77 lb-fg-color            pic s9(9).
77 hWin                   handle of window.

screen section.
01  screen-01.
    03 label
       line                 2
       lines                2
       col                  2
       size                 68 cells
       title "The font and the color of the controls of this screen"
       foreground-color     lb-fg-color
       background-color     lb-bg-color
       font                 label-font.
    03 label
       line                 3
       lines                2
       col                  2
       size                 68 cells
       title "are loaded by 'J$GETFROMLAF' Routine"
       foreground-color     lb-fg-color
       background-color     lb-bg-color
       font                 label-font.
    03 Pb-exit
       push-button
       line                 20
       col                  62
       size                 8 cells
       title                "Exit"
       exception-value      27.

procedure division.
main.
    perform get-label-font
    perform get-label-color

    display standard graphical window
            control-font label-font
            background-low
            resizable
            line 2
            col 65
            title  "J$GETFROMLAF Routine"
            lines 21
            min-lines 21
            size 70
            min-size 70
            handle hWin
            event  win-evt.
    display screen-01
    accept  screen-01 until crt-status = 27 or close-win = 1
                   on exception continue
    end-accept
    destroy screen-01
    destroy hWin
    destroy label-font
    goback.

get-label-font.
    call "J$GETFROMLAF" using jget-laf-font
                              "Label.font"
                              label-font
                       giving result-getfromlaf.
    perform check-laf-result.

get-label-color.
    call "J$GETFROMLAF" using jget-laf-color
                              "Label.background"
                              lb-bg-color
                       giving result-getfromlaf.
    perform check-laf-result.
    call "J$GETFROMLAF" using jget-laf-color
                              "Label.foreground"
                              lb-fg-color
                       giving result-getfromlaf.
    perform check-laf-result.

check-laf-result.
    if result-getfromlaf = -1
       display message "Invalid Laf Entry"
       goback
    end-if.

win-evt.
    if event-type = cmd-close
       move 1 to close-win
    end-if.
```
