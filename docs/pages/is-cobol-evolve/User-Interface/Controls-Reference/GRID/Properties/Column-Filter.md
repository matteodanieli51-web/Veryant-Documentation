## Column-Filter

This property allows you to set or retrieve the filter text of the column identified by the [X](./X) property. It can be used only when the [Filter-Types](./Filter-Types) of the column is 3. With other filter types it has no effect.

**Example** - Retrieve the text that the user typed in the filter text box of the third column

```cobol
procedure division.
...
  inquire screen-1-gr-1 x = 3
         column-filter wrk-col-filter
         .
...
```
