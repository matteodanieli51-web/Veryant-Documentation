### CONTROL clause

The CONTROL clause establishes a hierarchy of control breaks for the report.

#### General Format

```cobol
{ CONTROL IS   }
{ CONTROLS ARE } { data-name-1 } ...
                  FINAL [ data-name-1 ] ... 
```

#### Syntax rules

1. CONTROL and CONTROLS are synonyms.
2. Data-name-1 shall not be defined in the report section.
3. Data-name-1 may be qualified.
4. Data-name-1 may be reference modified. If it is, leftmost-position and length shall be integer literals.
5. The entry specified by data-name-1 shall not have a variable-occurrence entry subordinate to it.
6. Data-name-1 shall be unique in any given CONTROL clause. Two or more instances of data-name-1 in the same clause may, however, refer to the same physical data item or to overlapping data items.

#### General rules

1. The order of appearance of the operands of the CONTROL clause establishes the levels of the control hierarchy. The first data-name-1 is the major control; the next recurrence of data-name-1 is an intermediate control, etc. The last recurrence of data-name-1 is the minor control.
2. Specifying FINAL is equivalent to specifying a data item whose value does not change throughout the processing of the report. Therefore FINAL, if specified, is associated with the highest level in the hierarchy.
3. For each data-name-1 an internal data item, known as a prior control, is implicitly defined, having the same data description as the corresponding data item and a mechanism is established to save each control data item in the corresponding prior control and subsequently to compare these values to sense for control breaks.
4. Execution of the chronologically first GENERATE statement for a given report saves each current control data item in the corresponding prior control. Subsequent executions of any GENERATE statement for that report automatically test the current value of each control data item, in order major to minor, for equality with the corresponding prior control. If a change of value in a control data item is detected, no further control data items are tested for the current GENERATE statement, and control break processing for that level and any lower levels is performed automatically.
5. If a control break has been detected during the execution of a GENERATE statement, the control data items are processed as follows:

a. If any control footing is defined for the report, the current contents of control data items are saved and the corresponding prior controls are stored in the control data items before any control footing is printed. This ensures that any reference to a control data item in a control footing will always yield the value that the control data item had before the control break.

b. If a USE BEFORE REPORTING declarative procedure is specified for the control footing, any reference to a control data item in this section will similarly yield the prior value.

c. If the printing of the control footing causes a page advance and the page heading or page footing refers to a control data item, the value produced is similarly the prior value. When the printing of each control footing has been accomplished, the control data items are restored from the prior controls to their new current values, with these new current values remaining in the prior controls. All subsequent references to the control data items will obtain the new current values.

d. If no control footing is defined for the report, the new current values of the control data items are stored in the corresponding prior controls.

6. When a TERMINATE statement is executed, if any control footing is defined for the report, the prior controls are stored in the control data items before each control footing is printed, as though a highest-level control break had been detected. The result is the same as that of a control break detected during the execution of a GENERATE statement.
7. Data-name-1 shall not reference a zero-length group item.
