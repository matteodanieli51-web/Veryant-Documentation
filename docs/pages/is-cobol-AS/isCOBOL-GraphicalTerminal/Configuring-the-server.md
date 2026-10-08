## Configuring the server

The isCOBOL ClientListener requires that an isCOBOL Server has been started and is listening on the UNIX server machine. See [Usage of isCOBOL Server](../Usage-of-isCOBOL-Server/Usage-of-isCOBOL-Server) for information about how to start the isCOBOL Server.

In addition, on the UNIX server machine the following environment variable must be set:

```cobol
ISCOBOL_DISPLAY=X
```

This configuration assumes that the server machine has the program "xauth" installed; this program is installed on all the UNIX/Linux machines that have an X interface.

**Note:** In order for the above settings to work correctly, other X11 services must be turned off. Otherwise you may experience unexpected behaviors.

If the X interface it’s not present, save the following script in the file $HOME/.ssh/rc

```cobol
if read proto cookie && [ -n "$DISPLAY" ]
then
dispnum=`echo $DISPLAY | sed 's/\(.*\:\)\([0-9]*\)\(.*\)/\2/'`
echo unix:$dispnum $proto $cookie > $HOME/.iscobol_xauth_$dispnum
fi
```
