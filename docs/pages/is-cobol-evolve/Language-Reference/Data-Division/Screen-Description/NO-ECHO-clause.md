### NO-ECHO clause

The NO-ECHO clause prevents data entered from the keyboard or contained in the screen item from appearing on the screen at the screen location that corresponds to the screen item for which it is specified.

#### General format

```cobol
{NO-ECHO}
{NO ECHO}
{SECURE }
{OFF    }
```

#### Syntax rules

1. NO-ECHO, NO ECHO, SECURE and OFF are synonyms.

#### General rules

1. If a NO-ECHO clause is specified at the group level, it applies to each elementary input screen item in that group.
2. The NO-ECHO clause has an effect only during the execution of an [ACCEPT](../../Procedure-Division-Statements/ACCEPT) Statement referencing the screen item.
3. The effect of the NO-ECHO clause is to prevent data corresponding to a screen item that has been specified with the NO-ECHO clause from being displayed on the screen. During the execution of an [ACCEPT](../../Procedure-Division-Statements/ACCEPT) Statement, the cursor will appear at the screen location that corresponds to an input screen item, but any data keyed by the terminal operator will not be displayed. For fields that are both input and output, the contents of the screen location of the screen item prior to the execution of the [ACCEPT](../../Procedure-Division-Statements/ACCEPT) screen Statement remain unchanged and are unchangeable by the terminal operator.
