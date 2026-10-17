## Custom-Data

This property allows you to set or retrieve the hidden value of the control. The hidden value is never shown to the user, its purpose is to give the programmer an easy way to store and retrieve information related to the control.

**Example** - Set the custom data of a radio-button

```cobol
procedure division.
...
  modify screen-1-rb-1 custom-data "Screen 1 custom data"
...
```
