## Navigate-Url

When inquired, this property returns the URL value in navigation field.

**Example** - Define a web-browser and get the navigate-url value in procedure division

```cobol
working-storage section.
77 ws-navigate-url pic x(255).
...
screen section.
...
  03 screen-1-wb-1 Web-Browser
     line 23.9
     column 2.2
     size 62.2 cells
     lines 25.6 cells
     help-id 2043
     id 15
     hint "Web Browser - Veryant"
     value "https://www.yahoo.com"
     .

procedure division.
...
  inquire screen-1-wb-1 navigate-url ws-navigate-url
...
```
