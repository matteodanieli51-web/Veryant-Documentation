## Mixing Java dialogs and COBOL windows in the same application

In the previous chapters we described two possible scenarios:

- COBOL programs calling Java programs, and

- Java programs calling COBOL programs

In both scenarios it can happen that both the COBOL program and the Java program display a dialog in order to interact with the user.

The coexistence of Java dialogs and COBOL windows is possible as long as these simple rules are respected:

When calling Java from COBOL:

- Before opening a modal JDialog, the isCOBOL key buffering should be disabled. It can be done by the static method *com.iscobol.gui.client.KeyboardBuffer.setBufferOff()*. After the JDialog is closed, enable again the key buffering with the static method *com.iscobol.gui.client.KeyboardBuffer.setBufferOn()*. These methods could be invoked either by the Java program or by the COBOL program.

- Before opening any JDialog, the COBOL program should retrieve the current active window (a *java.awt.Window* instance) to pass it as 'owner' of the JDialog. In this way, with the Alt+Tab key combination you will see only a window as the Java dialog is child of the COBOL window. If this optional step is omitted, then the Alt+Tab key combination will show the Java dialog and the COBOL window as two separate windows.

- In Thin Client environment, the COBOL program should call another COBOL program via CALL CLIENT. The called program resides client-side along with the Java program and it does the necessary operations to invoke the Java program that shows its dialog as described above.

When calling COBOL from Java:

- The call must not be executed in the AWT-Event-Thread.

- The COBOL program should not display a INITIAL/STANDARD window, it should display only INDEPENDENT or FLOATING windows.

Sample programs for this task are installed with isCOBOL in the subfolder *sample/is-java/mixed-gui*.
