## Code Editing

### Standard Programs

Once a source file or copy file is selected from the [isCOBOL Explorer](../The-isCOBOL-IDE-Perspective/isCOBOL-Explorer), its content is shown in the Code Editor, at the center of the IDE window. From here it is possible to edit the code.

### Screen Programs

Even if the COBOL code is shown in the Code Editor when you select a source file or a copybook, do not modify it directly. In order to modify Screen Programs you need to operate in the Designers views, and then regenerate the code. The editing of the generated code is allowed only outside the tagged areas if the *Regenerate tagged area only* option is set in the *Preferences*.

Tagged areas are special blocks of code delimited by the following comments:

```cobol
* BEGIN {isCOBOL}area-name
 
* END {isCOBOL}area-name
```

When the IDE generates the code for Screen Programs,

- if *Regenerate tagged area only* option is set, only tagged areas are overwritten.
- if *Regenerate tagged area only* option isn’t set, the whole source code is overwritten.
