## Event-List

This property defines the list of events to be fired. The argument of this property is a list of eventClass entries (see **[Introduction to Java-Beans](../Introduction-to-Java-Beans/Definition-files)** above) enclosed in parentheses. Each eventClass entry must be enclosed in single or double quotes and is not case-sensitive.

COBOL events may be listed in this property as well, e.g.

```cobol

```

To make the source more readable, you might consider to use the following equivalent syntax:

```cobol

```

**Example** - Exclude CMD-GOTO COBOL event and manage propertyChange and mouse Java events

```cobol
screen section.
...
  03 screen-1-jb-1 Java-Bean
     line 5.1
     column 4.5
     size 33.5 cells
     lines 25.1 cells
     event-list( "propertyChange", "mouse", cmd-goto )
     exclude-event-list 1
     id 1
     no-box
     .
...
```
