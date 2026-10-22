### P$GETDEVICECAPABILITIES

The P$GETDEVICECAPABILITIES returns some information about the current printing device.

#### Syntax 1

```cobol
 CALL "P$GETDEVICECAPABILITIES" USING deviceCaps
```

#### Parameters

|  |  |  |
| --- | --- | --- |
| *deviceCaps* | Group Item | Group Item defined as follows:<br>**Note -** DC-DriverVersion, Dc-ScalingFactorX and DC-ScalingFactorY are always zero, while DC-TechnologyValue is always 2. |

#### Syntax 2

```cobol
 CALL "P$GETDEVICECAPABILITIES" USING settingName1, settingValue1
                                     [settingName2, settingValue2]
                                      ...
                                     [settingNameN, settingValueN]
```

#### Parameters

|  |  |  |
| --- | --- | --- |
| *settingName1*<br>*settingName2*<br>*...*<br>*settingNameN* | PIC X(n) | Specifies the setting name.<br>Possible values are:<br>"Driver Version"<br>"Technology"<br>"Horizontal Size"<br>"Vertical Size"<br>"Horizontal Resolution"<br>"Vertical Resolution"<br>"Logical Pixels X"<br>"Logical Pixels Y"<br>"Aspect X"<br>"Aspect Y"<br>"Aspect XY"<br>"Physical Width"<br>"Physical Height"<br>"Physical Offset X"<br>"Physical Offset Y"<br>"Scaling Factor X"<br>"Scaling Factor Y" |
| *settingValue1*<br>*settingValue2*<br>*...*<br>*settingValueN* | PIC X(n) or PIC 9(n) depending on the value type | Receives the setting value. |
