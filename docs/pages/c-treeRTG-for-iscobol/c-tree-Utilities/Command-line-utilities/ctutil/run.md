#### -run

Executes a script file allowing to run multiple ctutil commands.

Usage

```shell
ctutil -run  command_list_file
```

- *command_list_file* is a text file that contains one ctutil command on each line followed by all its required parameters.

The value returned by the ctutil -run if an error occurs executing one of the listed commands is the line number of the command list file containing the failed command.

The return value is 0 if all operations listed in the command list file are completed successfully.
