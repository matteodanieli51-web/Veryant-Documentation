## Copybooks

In order to experience correct behaviors at run time it’s suggested to replace ACUCOBOL-GT copybooks by the equivalent isCOBOL copybooks, if available. Although their content is very similar there are some small differences that might compromise the behavior of I$IO, WIN$PRINTER, ESQL and the ACCEPT *system-information* FROM SYSTEM INFO statement. Veryant encourages the use of isCOBOL copybooks in order to take advantage of those features that are available only in isCOBOL.

The table below lists the Acucobol-GT copybooks that can be replaced by an equivalent isCOBOL copybook:

| ACUCOBOL-GT copybook(s) | isCOBOL copybook(s) |
| --- | --- |
| acucobol.def | iscobol.def |
| acugui.def | isgui.defisreg.def |
| controls.def | iscontrols.def |
| crtvars.def | iscrt.def |
| filesys.def | isfilesys.def |
| fonts.def | fonts.def |
| lmresize.def | isresize.def |
| opensave.def | isopensave.def |
| palette.def | ispalette.def |
| socket.def | issocket.def |
| stdfonts.def | stdfonts.def |
| winhelp.def | iswinhelp.def |
| winprint.def | isprint.def |
| winvers.def | iswinvers.def |
| SQLCA | SQLCA(same name but quite different content) |
