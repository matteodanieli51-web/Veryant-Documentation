## isCOBOL IDE enhancements

The isCOBOL IDE 2024 R1 is now based on Eclipse 2023-09 (4.29), which includes full support for Java 21. The new version offers many improvements in performance, stability and usability on a day-by-day usage. The installers include an embedded JRE for the IDE, thus requiring no additional downloads from the developer.

Below is an extract of the new functionalities:

The Text Editors support multiple selections that allow most edit operations (text replacement or insertion, extend selection to next word or next line, copy / paste,…) to apply simultaneously on all ranges.

Multiple selection can be enabled by:

- Turning a block selection into multi-selection using the “To multi-selection” command
- Adding a caret with Alt-click.
- Using the new “Select All” button on the Find/Replace dialog.

The windows title bar in the dark theme on Microsoft Windows is now styled in the default dark theme.

As of Java 21 the IDE uses the UTF-8 default file encoding on Windows platforms as well as the previously supported platforms. If a COBOL project needs to support a different file encoding, it can be changed in the project properties.
