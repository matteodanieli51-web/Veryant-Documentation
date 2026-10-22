## Custom-Data

This property allows you to set or retrieve the hidden value of the control. The hidden value is never shown to the user, its purpose is to give the programmer an easy way to store and retrieve information related to the control.

**Example** - Get the custom data from a Java-bean

```cobol
working-storage section.
77 ws-jb-cust-data   pic x any length.
...
procedure division.
...
  inquire screen-1-jb-1 custom-data ws-jb-cust-data
...
```
