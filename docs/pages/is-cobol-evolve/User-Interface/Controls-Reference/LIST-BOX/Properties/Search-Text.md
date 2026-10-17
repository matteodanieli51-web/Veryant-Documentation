## Search-Text

This property allows you to retrieve the text the user is writing in the search area of the list-box, when the [Paged](../Styles/Paged) style is set.

**Example** - Retrieve the text the the user is typing in the search box

```cobol
procedure division.
...
   evaluate event-type
   when NTF-PL-SEARCH
      inquire screen-1-lb-1 search-text w-searched-text
...
```
