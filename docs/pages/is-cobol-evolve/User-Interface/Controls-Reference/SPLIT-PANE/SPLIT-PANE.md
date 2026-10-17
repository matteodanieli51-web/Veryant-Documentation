## SPLIT-PANE

![Control-SplitPane](../../../images/Control-SplitPane.png)

A Split-Pane is a control that has twosides separated by a divider which can be dragged by the user to give more space to one of the sides, resulting in the other side shrinking by an equal amount.

### Placing controls inside a Split-Pane

The Split-Pane content can be defined in the Screen Section of the program by setting the split-group and split-group-area clauses of a group of controls to the name of the Split-Pane. For example, the following Screen Section snippet defines a Split-pane with 4 fields inside, 2 in the first area and 2 in the second area:

```cobol
        03 sp-1 split-pane
           line 3, col 3, lines 10 cells, size 30 cells
           .
        03 sp1-left-content split-group sp-1, split-group-area 1.
           05 ef-1 entry-field
              line 2, col 2, size 10 cells.
           05 ef-2 entry-field
              line 4, col 2, size 10 cells.
        03 sp1-right-content split-group sp-1, split-group-area 2.
           05 ef-3 entry-field
              line 2, col 2, size 10 cells.
           05 ef-4 entry-field
              line 4, col 2, size 10 cells.
```

Controls can also be dynamically added to Split-Pane areas by using a Format 2 [DISPLAY](../../../Language-Reference/Procedure-Division-Statements/DISPLAY) statement. For example, the following statements add two new fields to the above Split-Pane, one in the first area and the other in the second area:

```cobol
           display entry-field upon sp1-left-content
              line 6, col 2, size 10 cells
              handle ef-5.
           display entry-field upon sp1-right-content
              line 6, col 2, size 10 cells
              handle ef-6.
```

The [Line](../../../Appendices/Graphical-Control-List) and [Col](../../../Appendices/Graphical-Control-List) properties of the controls you display inside a Split-Pane are relative to the Split-Pane.
