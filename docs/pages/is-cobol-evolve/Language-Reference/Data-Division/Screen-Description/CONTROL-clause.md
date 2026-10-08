### CONTROL clause

#### General format

```cobol
CONTROL [IS] Cntrl-String
```

#### General rules

1. The CONTROL phrase provides the ability to modify the static attributes of the DISPLAY statement at runtime. The CONTROL data item is treated as a series of comma-separated keywords that control the action of the statement. Within the CONTROL data item, spaces are ignored and lower-case letters are treated as if they were upper-case. The keywords allowed in cntrl-string are:

```cobol
ERASE, ERASE EOL, ERASE EOS, NO ERASE
BEEP, NO BEEP
HIGH, HIGHLIGHT, LOW, STANDARD, OFF
BLINK, NO BLINK
REVERSE, NO REVERSE
TAB, NO TAB
PROMPT, NO PROMPT
CONVERT, NO CONVERT
UPDATE, NO UPDATE
ECHO, NO ECHO
UPPER, NO UPPER, LOWER, NO LOWER
UNDERLINED, NO UNDERLINE
LEFT, RIGHT, CENTERED, NO JUST
SAME
FCOLOR
BCOLOR
```

Any other keywords and spaces are discarded. If more than one keyword from within the above lines appears in cntrl-string, then only the rightmost one in the data item is used. Each of the keywords performs the same action as the statically declared attribute of the same name. When a CONTROL item conflicts with the statically declared attributes of the DISPLAY statement, the actions specified in the CONTROL item take precedence. The FCOLOR and BCOLOR keywords are used to set foreground and background colors respectively. These keywords must be followed by an equals sign and the name of a color taken from the following list: BLACK, BLUE, GREEN, CYAN, RED, MAGENTA, BROWN, and WHITE. The named color becomes the default foreground or background color for the window. Note that this is different from the COLOR phrase, which sets the color only for the current DISPLAY statement. The FCOLOR and BCOLOR keywords set the default colors for every subsequent DISPLAY until explicitly changed.
