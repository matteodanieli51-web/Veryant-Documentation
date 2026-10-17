## Item

This property represents the item that the following properties refer to: [Bitmap](./Bitmap),  [Bitmap-Number](./Bitmap-Number), [Bitmap-Width](./Bitmap-Width), [Item-Background-Color](./Item-Background-Color), [Item-Border-Color](./Item-Border-Color), [Item-Color](./Item-Color),  [Item-Foreground-Color](./Item-Foreground-Color), [Item-Rollover-Background-Color](./Item-Rollover-Background-Color), [Item-Rollover-Border-Color](./Item-Rollover-Border-Color), [Item-Rollover-Color](./Item-Rollover-Color), [Item-Rollover-Foreground-Color](./Item-Rollover-Foreground-Color) and [Item-Text](./Item-Text).

**Example** - Modify the text of the chip identified by wk-item

```cobol
working-storage section.
77 wk-item pic 9(2).
...
procedure division.
...
  modify screen-1-chip-1 item wk-item item-text "new text"
...
```
