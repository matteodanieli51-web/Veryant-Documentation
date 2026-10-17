## Iwc-Dockable

This style has effect only in a WebClient environment. Windows with this style are marked as dockable, so the user can undock them from the browser window by clicking on the dedicated button on their title bar.

To enable this feature, the [Docking Mode](../../../../../is-cobol-web-client/Applications-Monitoring-and-Configuration/Applications/Change-the-application-configuration/Change-the-application-configuration) setting in the webapp configuration must be either ALL or MARKED.

**Example** - Display a window that can be detached in WebClient environment

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
          iwc-dockable
          system menu
          title-bar
          no wrap
          title "Screen"
          handle window-handle1
          .
```
