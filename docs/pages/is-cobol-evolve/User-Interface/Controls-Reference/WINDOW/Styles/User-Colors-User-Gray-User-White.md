## \{ User-Colors | [ User-Gray | User-White ] \}

|  |  |
| --- | --- |
| User-Colors | Combines the effect of the USER-GRAY and USER-WHITE styles. |
| User-Gray | Controls with the attribute 8 set for the background or the foreground are not actually painted with RGB 192, 192, 192, but with the color defined for the system 3-D objects. |
| User-White | Controls with the attribute 16 set for the background or the foreground are not actually painted with RGB 255, 255, 255, but with the color defined for the system window background. |

**Example** - Display a window with User-gray style

```cobol
working-storage section.
77 window-handle1 usage handle of window.
...
procedure division.
...
  display floating  window background-low
          size 37.3
          lines 34.2
          line 20
          column 1
          cell width 10
          cell height 10
          label-offset 20
          control font Default-Font
          color 257
          modeless
          system menu
          title-bar
          user-gray
          title "Screen"
          handle window-handle1
          .
```
