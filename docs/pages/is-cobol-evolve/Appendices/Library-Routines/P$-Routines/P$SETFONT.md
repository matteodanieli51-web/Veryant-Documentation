### P$SETFONT

The P$SETFONT library routine changes the current font.

#### Syntax 1

```cobol
 CALL "P$SETFONT" USING logicalFont
```

#### Parameters

|  |  |  |
| --- | --- | --- |
| *logicalFont* | Group Item | Group item with the following structure:<br>**Note -** only these fields are supported:<br>- LF-Height [A]<br>- LF-Escapement<br>- LF-WeightValue<br>- LF-ItalicValue<br>- LF-UnderlineValue<br>- LF-StrikeoutValue<br>- LF-PitchValue<br>- LF-FaceName |

[A] If the height value is greater than 0, the font mapper transforms this value into device units and matches it against the cell height of the available fonts. If the height value is 0, the font mapper uses a default height value when it searches for a match. If the height value is less than 0, the font mapper transforms this value into device units and matches its absolute value against the character height of the available fonts.

#### Syntax 2

```cobol
 CALL "P$SETFONT" USING settingName1, settingValue1
                       [settingName2, settingValue2]
                        ...
                       [settingNameN, settingValueN]
```

#### Parameters

|  |  |  |
| --- | --- | --- |
| *settingName1*<br>*settingName2*<br>*...*<br>*settingNameN* | PIC X(n) | Specifies the setting name.<br>Possible values are:<br>"Height"<br>"Escapement"<br>"Weight"<br>"Italic"<br>"Underline"<br>"Strike Out"<br>"Pitch"<br>"Face Name" |
| *settingValue1*<br>*settingValue2*<br>*...*<br>*settingValueN* | PIC X(n) or PIC 9(n) depending on the value type | Specifies the setting value.<br>Possible values are:<br>Height -> any numeric value<br>Escapement -> any numeric value<br>Weight -> any numeric value<br>Italic -> “Y”=italic, “N”=not italic<br>Underline -> “Y”=underline, “N”=not underline<br>Strike Out -> “Y”=strike out, “N”=not strike out<br>Pitch -> 1= fixed pitch, 2= variable pitch<br>Face Name -> any alphanumeric value |
