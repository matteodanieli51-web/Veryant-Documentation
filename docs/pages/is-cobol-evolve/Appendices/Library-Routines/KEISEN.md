## KEISEN

The KEISEN routine allows you to draw a line in a Japanese character-based program. It invokes [KEISEN1](./KEISEN1) or [KEISEN2](./KEISEN2) depending on the value of [iscobol.keisen.method](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties).

### Syntax:

```cobol
 CALL "KEISEN" USING { KEISEN  }
                     { KEISEN2 }
              GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *KEISEN* | Group Item | Structure defined in [iskeisen.def](../Copybooks/iskeisen.def).<br>Use this structure if you set [iscobol.keisen.method](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) to 1 or you didn’t set the property to any value. Refer to [KEISEN1](./KEISEN1) documentation for details about the meaning of these data items. |
| *KEISEN2* | Group Item | Structure defined in [iskeisen.def](../Copybooks/iskeisen.def).<br>Use this structure if you set [iscobol.keisen.method](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) to 2. Refer to [KEISEN2](./KEISEN2) documentation for details about the meaning of these data items. |

### Return Code

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| -1 | Operation failed. |
| 0 | Operation successful. |

### Examples:

**Example -** Draw a rectangle with KEISEN1 or KEISEN2

```cobol
       program-id. keisen_sample.

       working-storage section.
       copy "isgui.def".
       copy "iscrt.def".
       copy "iskeisen.def".
       77  crt-status              special-names crt status pic 9(5).
       77  hwin                    handle of window.
       77  close-win               pic 9 value 0.
       77  k-method                pic 9.
       77  lk-method               pic 9.


       procedure division chaining lk-method.
       main.
           display independent graphical window
                   color  65793
                   with   system menu
                   title  "KEISEN Routines"
                   handle hwin
                   event  win-evt
           display window erase.

           perform draw-keisen


           destroy hwin
           goback
           .

       draw-keisen.
           if lk-method = 1 or lk-method = 2
              move lk-method to kei-param
              call "keisen_select" using kei-param
           end-if
           accept k-method from environment "keisen.method"
              on  exception
                  move 1 to k-method
           end-accept
           evaluate k-method
           when 1
                perform keisen1
           when 2
                perform keisen2
           end-evaluate
           .


       keisen1.
           move 5  to kei-cmd
           move 3  to kei-line
           move 3  to kei-col
           move 70 to kei-lng1
           move 20 to kei-lng2
           move 2  to kei-color
           move 4  to kei-ptn
           call "keisen" using keisen
           display message
           "The lines on the screen have been drawn with KEISEN"
           .

       keisen2.
           move 5  to kei2-cmd
           move 3  to kei2-start-line
           move 3  to kei2-start-col
           move 70 to kei2-end-col
           move 20 to kei2-end-line
           move 2  to kei2-color
           move 4  to kei2-prn
           call "keisen2" using keisen2
           display message
           "The lines on the screen have been drawn with KEISEN2"
           .

       win-evt.
           if event-type = cmd-close
              move 1 to close-win
           end-if
           .
```
