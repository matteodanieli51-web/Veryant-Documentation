### info

Writes a message of type INFO to the log. This is the same result you obtain by calling the [C$WRITELOG](../../Library-Routines/C$WRITELOG) routine.

#### General Format

```cobol
info (message)
```

#### Syntax Rules

1. *message* can be any data item.

#### General Rules

1. The string representation of *message* is added as a new line in the log. The current timestamp and the type INFO are printed before it.

#### Code example

```cobol
...
configuration section.
repository.
    class LoggerFactory  as "com.iscobol.logger.LoggerFactory"
    class Logger  as "com.iscobol.logger.Logger"
    .
...
working-storage section.
...
77 objLogger object reference Logger.
...
procedure division.
...
set objLogger to LoggerFactory:>getCurrLog()
objLogger:>info("this is an informational message")
...
```
