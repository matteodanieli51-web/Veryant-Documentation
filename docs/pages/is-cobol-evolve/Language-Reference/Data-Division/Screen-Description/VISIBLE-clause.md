### VISIBLE clause

#### General format

```cobol
VISIBLE {IS} visible-state 
        {= } 
```

#### Syntax rules

1. *visible-state* is an integer literal or data item.

#### General rules

1. In Format 1, VISIBLE may be specified only for group items. The effect is to apply the phrase to each control contained in the group. You can override the setting for a particular control or sub-group by specifying another VISIBLE phrase. The phrase has no effect on screen items that are not controls.
