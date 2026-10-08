## isCOBOL ClientListener usage

The isCOBOL ClientListener is activated on the client machine with the following command:

```cobol
iscclientd { [-displayport dport] } [-port port]
[-x]
```

- *dport* is the port on the client machine that will be used to communicate between the UNIX shell and the ClientListener (by default it’s 10998).
- -*x* is equivalent of -displayport 6000. The port 6000 is necessary to take advantage of the X11 Tunneling, explained in [Configuring Putty to use isCOBOL ClientListener](./Configuring-Putty-to-use-isCOBOL-ClientListener) .

**Note:** In order for the -x option to work correctly, any other X11 services must be turned off. Otherwise you may experience unexpected behaviors.

- *port* is the port used for connecting to the isCOBOL Server (by default it’s 10999)

A correct startup will produce an output similar to this:

```cobol
Starting client listener on hostname: localhost, on display port: 10998, AS port: 10999
```

The isCOBOL ClientListener can be launched in the following alternate way to avoid keeping the console busy:

```cobol
isclientd { [-displayport dport] } [-port port]
            [-x]
```

Once started, the isCOBOL ClientListener is identified by an icon in the system tray.

![](../images/iscl.png)

Right click on the icon to show a pop-up menu with the following options:

- **Info:** Display a balloon with the result of the ClientListener startup.
- **About:** Display a balloon with version information.
- **Exit:** Closes the ClientListener.
