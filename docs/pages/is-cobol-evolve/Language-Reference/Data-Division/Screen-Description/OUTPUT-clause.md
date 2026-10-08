### OUTPUT clause

The OUTPUT clause defines the alignment of the screen item for which it is specified. It has no effect on the actual storage of the item.

#### General format

```cobol
OUTPUT {LEFT    }
       {RIGHT   }
       {CENTERED}
```

#### General rules

1. When the LEFT phrase is specified, leading spaces are removed and the screen item is left aligned.
2. When the CENTER phrase is specified, leading ad trailing spaces are removed and the screen item is centered.
3. When the RIGHT phrase is specified, trailing spaces are removed and the screen item is right aligned.
