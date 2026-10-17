### ENABLED clause

#### General format

```cobol
ENABLED {IS} enabled-state 
        {= }
```

#### Syntax rules

1. *enabled-state* is an integer literal or data item.

#### General rules

1. In Format 1, ENABLED may be specified only for group items. The effect is to apply the phrase to each control contained in the group. You can override the setting for a particular control or sub-group by specifying another ENABLED phrase. The phrases has no effect on screen items that are not controls.
