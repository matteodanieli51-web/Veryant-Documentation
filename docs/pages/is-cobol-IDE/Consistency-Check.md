# Consistency Check

isCOBOL IDE offers the ability to check the project’s consistency. To perform the consistency check right click on the project name in the [isCOBOL Explorer](./The-isCOBOL-IDE-Perspective/isCOBOL-Explorer) ancd choose Consistency Check from the pop-up menu.

The following tests are performed:

- Check whether a variable referenced in a control property exists.
- Check whether a paragraph referenced in a control property exists.
- Check the compatibility of a variable's value with its picture.
- Check whether a data-layout referenced in a data-set exists.
- Check whether a fd-key referenced in a data-set exists.
- Check whether a copybook referenced in the 'FD Files'/'SL Files'/'Declarative Files' sections of the 'File Section' page exists.
- Check whether a data-layout contains at least one record description entry.

Any problem that is found is shown in the Consistency Check View.
