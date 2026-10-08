### Known differences and things to know

#### Concepts

Cobol-WOW project management is very simple: all files are generated in the same folder, there is no structure. There is a project for each GUI program. Each project references one or more forms and menus.

The Eclipse-based isCOBOL IDE from Veryant instead provides a structured management of the projects. There is a workspace, a disk folder where project files are physically saved. The workspace can host one or more projects. Each project can host one or more programs. All the program items (e.g. form and menu) are included in the program instead of being referenced as separate files.

|  | Cobol-WOW | isCOBOL IDE |
| --- | --- | --- |
| Programs container | Disk folder | Project |
| Program entity | Project | Program |
| Form entity | Form | n/a [1] |
| Menu entity | Menu | n/a [1] |

[1] The form and the menu are included in the program.

#### Project files

Veryant’s IDE uses different file formats and extensions for the project’s file.

|  | Cobol-WOW | isCOBOL IDE |
| --- | --- | --- |
| Program file extension | Wjp | wsp |
| Form file extension | Wow | n/a [1] |
| Menu file extension | wmn | n/a [1] |

[1] The information is included in the wsp file.

#### Screen Designer

There are some differences between Veryant’s IDE screen painter and Cobol-WOW’s screen designer.

The main difference is in the list of attributes of controls. When you select a graphical control on the screen, the list of attributes is populated in the Properties view. Cobol-WOW shows several attributes while Veryant’s IDE tries to group them where applicable. For example, for most of the controls you can set the font. The screenshot below shows a comparison between the multiple font properties shown by Cobol-WOW (on the left) and the single font property shown by Veryant’s IDE (on the right).

![](images/WOW-IDE-comparison.png)

List-Box and Status-Bar have properties to define the multiple items in WOW designer. In Veryant’s IDE instead there is an item designer that shows a pop-up dialog in which the user can configure the items contained in the control.

#### Bitmaps

When you run a WOW program from Veryant’s IDE, bitmaps are loaded from the working directory and from the Java Classpath.

#### Form and menu sharing

In Cobol-WOW forms and menus are identified by separate files and they’re referenced by the Cobol-WOW project. This means that multiple projects can reference the same form or the same menu and altering such form or menu affects all the projects in which the form or menu is referenced.

The same concept is not applicable to the isCOBOL IDE. The IDE keeps the information about form and menu inside the program file. If you edit a form or a menu, only the program you’re editing is affected. However, when the source code is generated, a copybook with the same name of the form is generated on disk, so if multiple programs include a form with the same name, an overwrite of the copybook may occur. The same happens with menus.

#### Menu editor

The maintenance of the menu bar of the form in Cobol-WOW is done via the menu designer, activated by a dedicated button in the Designer tool-bar. In isCOBOL IDE instead the menu editor is activated by editing the menu property of the form.

#### ActiveX

The ActiveX technology is in legacy status and is no longer supported by Microsoft.

Veryant’s approach on ActiveX is to provide tools and migration service to re-implement all ActiveX controls as Java components

isCOBOL IDE’s import wizard reads the ActiveX resources used in a WOW project and imports all its properties with the correct values. The IDE uses the isCOBOL utility AxTools to generate a Java template for each ActiveX control to be implemented. AxTools reads all properties, events and methods available from ActiveX and OCX controls and generates a Java source skeleton that users can modify in order to implement the properties, methods and events of the ActiveX in Java.

The screenshot below shows how the IExplorer ActiveX used in a Cobol-WOW form (on the left) was reimplemented using the Java component DJBrowser (on the right):

![](images/WOW-active-x.png)

Veryant will provide some source code examples of ActiveX controls from DBI-Technologies rewritten in Java.

Contact Veryant for more information about ActiveX replacement.
