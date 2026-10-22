### P$GETTEXTMETRICS

The P$GETTEXTMETRICS library routine retrieves characteristics of the current font.

#### Syntax 1

```cobol
 CALL "P$GETTEXTMETRICS" USING textMetrics
```

#### Parameters

|  |  |  |
| --- | --- | --- |
| *textMetrics* | Group Item | Group item with the following structure:<br>**Note -** only these fields are supported:<br>- TM-Height<br>- TM-Ascent<br>- TM-Descent<br>- TM-InternalLeading<br>- TM-ExternalLeading<br>- TM-AveCharWidth<br>- TM-MaxCharWidth<br>- TM-WeightValue<br>- TM-ItalicValue<br>- TM-UnderlinedValue<br>- TM-StruckOutValue<br>- TM-PitchValue |

#### Syntax 2

```cobol
 CALL "P$GETTEXTMETRICS" USING settingName1, settingValue1
                              [settingName2, settingValue2]
                               ...
                              [settingNameN, settingValueN]
```

#### Parameters

|  |  |  |
| --- | --- | --- |
| *settingName1*<br>*settingName2*<br>*...*<br>*settingNameN* | PIC X(n) | Specifies the setting name.<br>Possible values are:<br>"Height"<br>"Ascent"<br>"Descent"<br>"Internal Leading"<br>"External Leading"<br>"Average Character Width"<br>"Maximum Character Width"<br>"Weight"<br>"Italic"<br>"Underlined"<br>"Struck Out"<br>"Pitch" |
| *settingValue1*<br>*settingValue2*<br>*...*<br>*settingValueN* | PIC X(n) or PIC 9(n) depending on the value type | Receives the setting value. |
