#### Initial and last-used states of data

When a method or program is activated, the data within is in either the initial state or the last-used state:

- Initial state

Automatic data and initial data is placed in the initial state every time the method or program in which it is described is activated.

Static data is placed in the initial state:

i. The first time the method or program in which it is described is activated in a run unit.

ii. The first time the program in which it is described is activated after the execution of an activating statement referencing a program that possesses the initial attribute and directly or indirectly contains the program.

iii. The first time the program in which it is described is activated after the execution of a [CANCEL](../../../../Procedure-Division-Statements/CANCEL) Statement referencing the program or [CANCEL](../../../../Procedure-Division-Statements/CANCEL) Statement referencing a program that directly or indirectly contains the program.

When data in a method or program is placed in the initial state, the following occurs:

i. The internal data described in the working-storage section is initialized as described in the [VALUE clause](../../../../Data-Division/Data-Description/VALUE-clause).

ii. The method or program's internal file connectors are initialized by setting them to not be in any open mode.

iii. The attributes of screen items are set as specified in the screen description entry.

iv. For each dynamic-capacity table, except where the table is defined by an elementary entry with a VALUE clause, the capacity of the table is set to the minimum capacity specified in the corresponding OCCURS clause. If the INITIALIZED keyword is present in the OCCURS clause, all the occurrences, if any, of the table are then initialized.

v. The length of each any-length elementary item that is specified without a VALUE clause is set to zero, before data is placed in the initial state.

- Last-used state

Static and external data are the only data that are in the last-used state. External data is always in the last-used state except when the run unit is activated. Static data is in the last-used state except when it is in the initial state as defined above.
