### warning

Writes a message of type WARNING to the log.

#### General Format

```cobol
warning (message)
```

#### Syntax Rules

1. *message* can be any data item.

#### General Rules

1. The string representation of *message* is added as a new line in the log. The current timestamp and the type WARNING are printed before it.

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
objLogger:>warning("this is a warning message")
...
```
