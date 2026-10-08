## Character-based Debugger

isCOBOL provides a character-based version of the Visual Debugger to be used on systems where the UI is not available. The character-based Debugger is started using the isdbg command. This command has the following syntaxes:

- Local debug:

```cobol
isdbg [-opt1 ... -optN] program-name [arg1 ... argN]
```

- Remote debug:

```cobol
isdbg -r [hostname [port]]
```

Using one of the above commands the debugger console starts and listens for input:

```cobol
isdb>
```

Input the desired command and press Enter to confirm. The command output is displayed on the console.

**Note* - if you’re connected to the headless system from a PC with a graphical desktop (i.e. a Windows PC using PuTTY), then you might consider [Remote Debugging](../Remote-Debugging) instead of using the character-based Debugger.
