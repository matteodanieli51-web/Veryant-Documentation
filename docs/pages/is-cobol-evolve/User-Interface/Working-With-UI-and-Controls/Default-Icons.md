## Default icons

The isCOBOL Framework includes a series of default icons that are used in various places of the GUI.

These icons are PNG and GIF files stored in the iscobol.jar library.

Most of these icons are stored in the com/iscobol/gui/client/swing package:

| Image file | Corresponding icon |
| --- | --- |
| cancelfind.png | Close icon in Grid and Tree-View search panel |
| checkmenuitem.gif | Check icon in menu-bar and pop-up menu |
| chevron_down.png | Collapse button in Tree-View with the FLAT style |
| chevron_right.png | Expand button in Tree-View with the FLAT style |
| clearfind.png | Clear icon in Grid search panel |
| Error.gif | Error icon in message box |
| first.gif | First button in paged Grid and List-Box |
| funnel_delete.png | Funnel delete icon on Grid heading |
| funnel_update.png | Funnel update icon on Grid heading |
| funnel.png | Funnel icon on Grid’s heading |
| grip.gif | Grip icon in Status-Bar |
| Inform.gif | Default icon in message box |
| last.gif | Last button in paged Grid and List-Box |
| pageprev.gif | Previous Page button in paged Grid and List-Box |
| pagesucc.gif | Next page button in paged Grid and List-Box |
| prev.gif | Previous button in paged Grid and List-Box |
| Question.gif | Question icon in message box |
| searchfind.png | Find icon in Grid’s search panel |
| sortdown.png | Sort descending icon in the heading of Grid and Tree Table-View |
| sortnone.png | Unsorted icon in the heading of Grid and Tree Table-View |
| sortup.png | Sort ascending icon in the heading of Grid and Tree Table-View |
| succ.gif | Next button in paged Grid and List-Box |
| tabclosedown.png | Close icon in Tab-Control with the CLOSE-BUTTONS style |
| tabcloseup.png | Close icon in Tab-Control with the CLOSE-BUTTONS style on mouseover |
| vV.png | Case sensitive icon in Grid’s search panel |
| vV2.png | Case insensitive icon in Grid’s search panel |
| Warn.gif | Warning icon in message box |

The icons of the print preview dialog are stored in the com/iscobol/preview package:

| Image file | Corresponding icon |
| --- | --- |
| antialiasing.gif | "Anti-aliasing" button in the tool-bar |
| arrow_back.png | "Previous page" button in the tool-bar |
| arrow_beg.png | "First page" button in the tool-bar |
| arrow_end.png | "Last page" button in the tool-bar |
| arrow_next.png | "Next page" button in the tool-bar |
| exit.png | "Quit" button in the tool-bar |
| file_pdf.gif | "Save" button in the tool-bar |
| find.gif | "Find" button in the tool-bar |
| iscobol.png | isCOBOL logo in the title bar |
| pagesetup.png | "Page setup" button in the tool-bar |
| printer.png | "Print" button in the tool-bar |
| show_thumbnails.gif | "Show thumbnails" button in the tool-bar |
| zoom_in.png | "Zoom in" button in the tool-bar |
| zoom_out.png | "Zoom out" button in the tool-bar |

It’s possible to customize one or more of these icons by adding a library (or a folder) with the same package name before iscobol.jar in the CLASSPATH.

Here’s an example.

Suppose that you wish to customize the funnel icon shown on the Grid’s heading when either the FILTERABLE-COLUMN style or the FILTER-TYPES property is set. You can do the following:

1. Change to a temporary folder where you will build the custom package, e.g.

```cobol
cd %TEMP%
```

2. Create the folder structure:

```cobol
mkdir com\iscobol\gui\client\swing
```

3. Place a file named funnel.png in the swing subfolder, e.g.:

```cobol
copy C:\path\to\yourfunnel.png %TEMP%\com\iscobol\gui\client\swing\funnel.png
```

*Note* - ensure that your custom funnel.png has the same width and height as the original one; if you use a larger image, it might appear truncated.

4. Include the folder structure in a jar, e.g.:

```cobol
cd %TEMP%
jar -cvf myicons.jar com
```

5. Copy myicons.jar to the “jars” folder of your isCOBOL SDK:

```cobol
copy %TEMP%\myicons.jar %ISCOBOL%\jars
```

From now on, when you run a COBOL program using the isCOBOL SDK, you will see your custom funnel on grid headings.

*Note* - the above sample commands are applicable to the Windows operating system and assume that the JDK bin directory is in the Path. On Unix/Linux platforms the same commands are slightly different.
