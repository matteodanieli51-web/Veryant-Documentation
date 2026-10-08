### KEY clause

#### General format

```cobol
KEY {IS} key-letter 
    {= }
```

#### Syntax rules

1. *key-letter* is alphanumeric literal or data item.

#### General rules

1. The KEY clause assigns a key letter to the control. The user can activate the control by typing its key letter in combination with some other special key. Under Microsoft Windows, key letters are typed in conjunction with the Alt key. The first character in key-letter becomes the control's key letter. The key letter can be given in lower- or upper-case.
2. If the KEY clause is omitted, the control's key letter is derived from its title. If a key letter is not indicated in the title, the control does not have a key letter. If a key letter is designated in both the title and the KEY clause, the KEY clause takes precedence. If the letter specified in the KEY phrase is not the same as the letter indicated in the title, the letter indicated in the title is highlighted and the letter specified in the KEY clause is the key letter.
3. The activation technique for key letters is shared with the menu bar handler on most systems. You should avoid assigning duplicate key letters in any one floating window, or assigning key letters that conflict with key letters used by the window's menu bar.
4. Controls that cannot be activated, such as a Label, may have key letters. In this case, the runtime system uses the following rules to determine which control to activate when the key letter is typed:

a. if another control has the same key letter, then the first control created with that key letter is activated when that key letter is pressed; otherwise,

b. the next control that can be activated (in the same floating window) is activated. The runtime uses the order in which the controls were created to determine which control is next.

5. A control's key letter is assigned when the control is created. It cannot be changed.
