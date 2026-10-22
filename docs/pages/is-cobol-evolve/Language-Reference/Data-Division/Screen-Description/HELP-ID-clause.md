### HELP-ID clause

#### General format

```cobol
HELP-ID {IS} help-id 
        {= } 
```

#### Syntax rules

1. *help-id* is an integer literal or data item.

#### General rules

1. In Format 1, the HELP-ID phrase may be specified only for group items. The effect is to apply the phrase to each control contained in the group. You can override the setting for a particular control or sub-group by specifying another HELP-ID phrase. The phrase does not affect screen items that are not controls.
