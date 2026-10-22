# Using the application from mobile devices

Mobile devices like smartphones and tablets include web browser applications and therefore are suitable to use a COBOL application via WebClient.

When developing applications that could run on mobile devices, developers should keep in mind the restrictions on display size. This means that windows may not fit in the available space, and windows cannot be dragged on mobile browsers.

We suggest you open your windows maximized, and use the [LM-RESPONSIVE](../is-cobol-evolve/User-Interface/Working-With-UI-and-Controls/Creating-a-control/Layout-managers/LM-RESPONSIVE) layout manager to resize the controls.

When the virtual keyboard appears over a maximized window, the [NTF-RESIZED](../is-cobol-evolve/User-Interface/Controls-Reference/WINDOW/Events/NTF-RESIZED) event is fired.

The virutal keyboard doesn’t appear by default for character-based ACCEPTs. To obtain the virtual keyboard also for character-based ACCEPTs, add the following entry to the [JVM Arguments](./Applications-Monitoring-and-Configuration/Applications/Change-the-application-configuration/Change-the-application-configuration#app-config) of your webapp configuration: -Dwebswing.customInputElements=com.iscobol.gui.client.TerminalAccept.

To simulate a double click you double tap on the device screen. WebClient recognizes a double tap only if the two taps are made in a range of 2 pixels. This is not always easy for the user to tap twice on the same spot. You might want to increase the range to an higher value. To do so, add the following entry to the [JVM Arguments](./Applications-Monitoring-and-Configuration/Applications/Change-the-application-configuration/Change-the-application-configuration#app-config) of your webapp configuration: -Dwebclient.doubleClickDistanceThreshold=5, where 5 is a reasonable number of pixels for the range in which to intercept the double tap. You can use different values, though.
