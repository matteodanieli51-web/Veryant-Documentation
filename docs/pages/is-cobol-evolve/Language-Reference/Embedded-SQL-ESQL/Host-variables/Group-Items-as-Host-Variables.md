### Group Items as Host Variables

isCOBOL allows the use of group items in embedded SQL statements. Group items with elementary items (containing only one level) can be used as host variables. The host group items (also referred to as host structures) can be referenced in the INTO clause of a SELECT or a FETCH statement, and in the VALUES list of an INSERT statement. When a group item is used as a host variable, only the group name is used in the SQL statement. For example, given the following declaration

```cobol
       01  meeting-time.
           05 hour    pic 9(2).
           05 minute  pic 9(2).
```

the following statement is valid:

```cobol
           exec sql 
              select mhour, mminute
                into :meeting-time
                from meetings
               where meeting_id = 1
           end-exec.
```

The order that the members are declared in the group item must match the order that the associated columns occur in the SQL statement, or in the database table if the column list in the INSERT statement is omitted. Using a group item as a host variable has the semantics of substituting the group item with elementary items. In the above example, it would mean substituting :meeting-time with :meeting-time.hour, :meeting-time.minute.
