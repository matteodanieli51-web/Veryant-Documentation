### VALUE clause

The VALUE clause specifies the value of screen section displayable items.

#### General format

```cobol
VALUE IS [{MULTIPLE}] {Data-Name-7}
          {TABLE   }  {Literal-3  }
```

#### Syntax rules

1. *Literal-3* shall be an alphanumeric literal. *Literal-3* shall not be a figurative constant.
2. MULTIPLE and TABLE are synonyms.

#### General rules

1. *Literal-3* specifies the value of the screen item that is displayed on the screen when directly or indirectly referenced by an [ACCEPT](../../Procedure-Division-Statements/ACCEPT) screen Statement or a [DISPLAY](../../Procedure-Division-Statements/DISPLAY) screen Statement.
2. The subject of the entry is an output screen item.
3. The MULTIPLE phrase is used only with certain control types that allow for multiple values.
