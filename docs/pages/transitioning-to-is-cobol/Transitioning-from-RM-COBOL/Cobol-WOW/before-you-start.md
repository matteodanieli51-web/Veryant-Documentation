### Before you start – Initial IDE configuration and creation of a new project

Before importing your Cobol-WOW projects in Veryant’s IDE you should review the global preferences set.

1. Click on *Window* in the IDE menu bar and choose *Preferences*
2. Expand *isCOBOL* in the tree, then expand WOW

#### Code Generator

![](images/WOW-pref-codegen.png)

Here you can customize the way isCOBOL IDE generates the source code of your Cobol-WOW programs:

| | |
| --- | --- |
| Merge to one program file | If checked, a single CBL file is generated. Otherwise, a CBL file and multiple copybooks are generated. |
| Generate copy books in the "Screen Program Copy" folder | By default, form copybooks are generated in the cpy folder. If this option is checked, they’re generated in the screenpgm folder instead. |
| Default case , Lower case , Upper case | The case used for COBOL identifiers and keywords. By default, a lower case is used. |
| Generate ‘old style’ paragraph names | This setting reflects the same setting available in Cobol-WOW. [1] |
| Generate ‘old style’ variable names | This setting reflects the same setting available in Cobol-WOW. [1] |
| Generate untruncated paragraph names | This setting reflects the same setting available in Cobol-WOW. [1] |
| | |

[1]These settings affect only new programs created in the isCOBOL IDE. Programs imported from existing Cobol-WOW projects maintain the settings they had in Cobol-WOW.

Screen Designer

![](images/WOW-pref-screen.png)

Here you can configure the Screen Designer:

| | |
| --- | --- |
| Show Grid | If checked, a grid is shown as background of the window in the Screen Designer. The width and height in pixels can be configured in the fields below. The grid helps in dimensioning controls when you draw them with the mouse. |
| Snap to Grid | If checked, the Screen Designer automatically aligns controls to the nearest cell. It helps in having controls aligned to each other. |
| Default font name | Specifies the font that is used by default for the new controls drawn in the Screen Designer as well as for the controls imported from existing Cobol-WOW projects if they lack font attributes. |
| | |

Before importing Cobol-WOW projects you should create an empty isCOBOL Project in the IDE.

1. Click on *File* in the menu bar and choose New
2. Select *isCOBOL Project* from the sub menu
3. Follow the wizard procedures to the end.
