## Input-Filter

This property is used to provide a filter to limit the characters that the user can input in the Grid.

The value of this property is a regular expression. Only characters that match the regular expression will appear in the Grid when the user types or pastes them.

Since this setting affects every single column, a list of values is needed in order to determine how to filter them.

When values are enclosed between parentheses, a new list is defined at once. The snippet below specifies that the 1st column allows only upper case letters and the 2nd column allows only lower case letters. The other columns, if any, will allow any character.

```cobol
INPUT-FILTER = ("[A-Z]+", "[a-z]+")
```

When set to space or spaces, the list is reset.

When a single value other than space is set, it is appended to the list. This is useful to define a user-defined appearance.

**Example -** Create a grid that accepts only upper case letters in the first column and only lower case letters in the second column

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     help-id 5040
     id 1
     event procedure screen-1-gr-1-evt-proc
     no-box
     column-headings
     row-dividers 1
     end-color 9
     num-rows 5
     input-filter ("[A-Z]+", "[a-z]+")
     .
...
```
