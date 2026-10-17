## isCOBOL Compiler

Starting from isCOBOL 2019R2, dynamic variables (X ANY LENGTH and OCCURS DYNAMIC) have been improved. New compiler configurations have been added to inject code for GUI controls and a new compatibility compiler option has been implemented.

### Dynamic variables

Dynamic variables allow developers to declare variables and arrays without knowing the size beforehand. One obvious advantage, on complex group level definitions, is to lower the memory footprint of the application. Typically, COBOL programmers have to choose a maximum value for an OCCURS array, which is most likely a random “big enough” value to handle each case. The maximum number of items assigned for the array may never be needed, but memory is assigned nonetheless.

Declaring the array as OCCURS DYNAMIC will allow dynamic sizing of the array, optimizing memory consumption.

The same can be applied to a PIC X(...) or PIC N(…) variable, where typically a maximum size needs to be determined. By using PIC X ANY LENGTH or PIC N ANY LENGTH, memory usage is optimized by allocating the right amount of memory needed to hold the contents.

Starting with isCOBOL 2019R2, group level variables containing dynamic items can be moved or compared to other compatible group level variables. Before this release, moving or comparing group level variables containing dynamic items were limited to non-dynamic items only.

For example, the following syntax defines 2 identical structures that contain dynamic child data items:

```cobol
  01 group1      group-dynamic.
     03 g1v1     pic x.
     03 g1v2     occurs dynamic capacity k-g1v2.
        05 g1v2a pic x.
        05 g1v2b pic 9.
     03 g1v3     pic x any length.
  01 group2.
     03 g2v1     pic x.
     03 g2v2     occurs dynamic capacity k-g2v2.
        05 g2v2a pic x.
        05 g2v2b pic 9.
     03 g2v3     pic x any length.
```

The GROUP-DYNAMIC clause has been added to better describe how the structure is to be handled during moves and comparisons. This clause is not mandatory, and the compiler implicitly assumes it at compile time in groups that contain dynamic data items.

The advantage of this new approach is that now the following statements:

```cobol
move group1 to group2
if group1 = group2
```

will handle the dynamic items during moves and comparisons. This only works when the two structures are mirrors of each other. This eases the code rewrite needed when moving code from static structures to dynamic ones.

Other improvements allow developers to retrieve the current capacity of an occurs dynamic variable, without the need to declare the capacity in the data division, as the code below shows.

```cobol
set curr-size to capacity of g2v2
```

This is very useful when the programs need to retrieve different capacities in nested occurs dynamic items.

The SORT statement, which can be used to sort data in an array structure, now supports sorting data structures containing dynamic occurs data items, as shown below:

```cobol
sort cust-array  on descending key cust-name 
                on ascending key cust-city
```

ANY LENGTH data items can now be pre-allocated using the WITH SIZE clause on the INITIALIZE statement. This will initialize the variable with the amount of spaces defined in the with size clause.

For example

```cobol
initialize var-1
```

initializes var-1 with a zero-length size, while

```cobol
initialize var-2 with size 3
```

initializes var-2 with 3 spaces.

During the migration from static occurs to dynamic occurs inside groups, the compiler now issues a warning to identify code that is potentially affected by the changes in the handling of dynamic variables. For example, the following lines of code:

```cobol
display group1
if group1 = "ab1c"
```

will result in a warning being issued if group1 contains dynamic variables, to warn the developer that the statements could fail. The warning issued is as follows:

--W: #257 Dynamic items will be ignored: GROUP1

### Compiler code injection

New compiler configuration settings are implemented to inject COBOL code in all controls of a specific type at compile time.

```cobol
iscobol.compiler.gui.<control-name>.defaults=...
```

where  can be any of the following: bar bitmap, check_box, combo_box, date_entry, entry_field, frame, grid, java_bean, label, list_box, push_button, radio_button, ribbon, scroll_bar, slider, status_bar, tab_control, tree_view, web_browser, window, tool_bar.

This feature simplifies the modernization process for GUI applications and reduces developing efforts.

As an example, when compiling the following screen section controls:

```cobol
 01  s1.
     03 ef1 entry-field 
            line 2 col  2 size 10.
     03 ef2 entry-field 
            line 2 col 14 size 10.
     03 ef3 entry-field 
            line 2 col 26 size 10.
     03 pb1 push-button 
            line 5 col 10 size 10 
            title "Save" exception-value 1.
```

with the following compiler configuration:

```cobol
iscobol.compiler.gui.push_button.defaults=flat, background-color -14675438
iscobol.compiler.gui.entry_field.defaults=border-color rgb x#dae1e5, \
                                          border-width (0 0 2 0 )
```

the compiler will compile the source code as if it were written as:

```cobol
01  s1.
    03 ef1 entry-field 
           border-color rgb x#dae1e5, 
           border-width (0 0 2 0)           
           line 2 col  2 size 10.
    03 ef2 entry-field 
           border-color rgb x#dae1e5, 
           border-width (0 0 2 0)           
           line 2 col 14 size 10.
    03 ef3 entry-field 
           border-color rgb x#dae1e5, 
           border-width (0 0 2 0)           
           line 2 col 26 size 10.
    03 pb1 push-button 
           flat, background-color -14675438
           line 5 col 10 size 10 
           title "Save" exception-value 1.
```

Code injection also affects controls created with single display statement

```cobol
     display push-button line 5 col 25 size 10 
                   title "End" exception-value 27
                   handle in h-pb.
```

With code injection, an entire application can be recompiled without code changes, and changing the configuration variables can result in a completely different looking application, allowing modernization to take place without altering the source code.

Code injection works by inserting the text in the configuration variables in the source code where controls are declared or created. Syntax errors in the configuration variables will result in compilation errors.

### Compatibility enhancements

A new compiler option, –cr, has been added to support new syntax, enhancing compatibility with RM/COBOL v8 or greater. This option allows us to support the following additional syntax:

- PROGRAM-ID and WHEN-COMPILED special registers
- ACCEPT data-item FROM DATE-COMPILED
- specific management for ERASE clause and DISPLAY without LINE for RM/COBOL compatibility

New library routines are now supported to simplify the migration from RM/COBOL:

- C$MBAR to display a menu bar on the active window
- C$RBMENU to create a pop-up menu on the active window
- C$SBAR to display a single panel status-bar
- C$SCRD to read character text
- C$SCWR to write character text
- C$TBAR to display a tool-bar on the active window
- WOWGETWINDOWTYPE to inquire for the window type
- C$SHOW to hide and show the main window
