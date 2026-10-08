### Change the application configuration

Select the desired application from the list on the left to access the list of available configuration entries.

Configuration entries are distributed on two pages: [Web Config](./Change-the-application-configuration#web-config) and [App Config](./Change-the-application-configuration#app-config).

#### Web Config

1. General

| Entry | Meaning |
| --- | --- |
| Enabled | **ON** - The application is Enabled by default when the service starts.<br>**OFF** - The application must be enabled manually after the service starts. |
| Name | WebClient application name. This name will be displayed on the left panel and used to alphabetize the list of WebClient applicaitons |
| Icon | Image icon shown in the application selection dialog |
| Web Home Folder | Home directory for web related content. This is the base directory for every relative classpath entry |
| Web Folder | Folder to be used to store customized static web files like HTML, CSS or JavaScript |
| Restricted Resources | Defined Path-prefix restricts access to resources only to authenticated users. Applies to static resources inside Web Folder or packaged with WebClient |
| File viewers | Configures URL handlers for files based on their extension and associated AWT Desktop file operations that you can perform through the [C$DESKTOP](\) library routine and the deprecated [C$EASYOPEN](\) library routine. <br><br>For each entry, the following settings are available:<br>• *File type* - Comma separated list of file extension (e.g. pdf, gif)<br>• *Operations* - Specifies the AWT Desktop action performed on the file, such as open, edit, print or a combination (e.g. open_edit).<br>• *URL* - File viewer relative URL. Use ${file} in the URL template to insert the blob identifier. Use '${file}' value to trigger the browser's default action for the file. <br><br>See [File viewers](./File-viewers) for more information. |
| Localization Folder | Folder where customized messages and translations are stored |
| CORS Origins | List of domains for which cross-origin resource sharing is allowed. This is useful if you’re embedding the application in a page that resides on a different domain |

1.1 Security

| Entry | Meaning |
| --- | --- |
| Security Module Class Path | Additional classpath for built-in Security module or for defining custom security module.<br>Use the '+' button to add a new entry.<br>Use the 'x' button to remove an entry |
| Security Module Name | **INHERITED** - Inherits the configuration set while [Configuring Users](../../../Configuring-Users/Configuring-Users).**NONE** - No authentication is required to access this application. The authentication may be required anyway to access WebClient.**EMBEDDED** - User authentication is required to access this application. Selecting this value will display a pop-up area with the list of current users, allowing you to edit them or to define new users. <br><br>The rules to configure this field are the same described in [Configuring Users](../../../Configuring-Users/Configuring-Users) except that they affect the single application instead of the whole WebClient |
| Security Context per Tab | Activates a separate security context for each browser tab |

1.1.1. Authorization Config

| Entry | Meaning |
| --- | --- |
| Authorized Users | List of WebClient users that will be allowed to use this application. See [Configuring Users](../../../Configuring-Users/Configuring-Users) for information on how to create WebClient users |
| Authorized Roles | List of WebClient roles that will be allowed to use this application. See [Configuring Users](../../../Configuring-Users/Configuring-Users) for information on how to create WebClient roles |

2. Session

| Entry | Meaning |
| --- | --- |
| Session Mode | Define if and how sessions can be restored.<br>**ALWAYS_NEW_SESSION** - every time the application URL is loaded, a brand new runtime session is started.<br>**CONTINUE_FOR_BROWSER** - every time the application URL is loaded from the same browser, the user is offered the choice of starting a new runtime or restoring the previous one.<br>**CONTINUE_FOR_USER** - every time the application URL is loaded by the same user, the user is offered the choice of starting a new runtime or restoring the previous one. In this mode, the user can also restore the runtime session from different devices. This mode will have no effect if *Security Module Name* is not set to NONE, which would require users to perform authentication each time they open the application |
| Max. Connections | Limit the maximum number of concurrent sessions for this application. By default, up to 10 concurrent sessions are allowed. A value of -1 means infinite |
| Max. Connections Per User | Limit the maximum number of concurrent sessions from the same user. If this value is greater than Max. Connections, the value of Max. Connections will be considered |
| Session Stealing | **ON** - If Session Mode is 'CONTINUE_FOR_USER', users can resume the WebClient session even if the connection is open in other browser. Former browser window will be disconnected.<br>**OFF** - Users can’t resume the WebClient session if the connection is open in other browser |
| Auto Logout | **ON** - Users are automatically logged out after the application finished.<br>**OFF** - Users remain logged in also after the application finished |
| Goodbye URL | Absolute or relative URL to redirect to, when application exits. Use '/' to navigate back to Application selector. |

3. Features

| Entry | Meaning |
| --- | --- |
| Monitor App Responsiveness | **ON** - Show a progress animation if Swing’s Event Dispatch thread is not responding<br>**OFF** - Don’t advise users if Swing’s Event Dispatch thread is not responding |
| Loading Animation delay | Delay in seconds before showing the progress animation. This setting is considered when Monitor App Responsiveness is ON. The minimum value is 2 |
| Allow Session Recording | **ON** - The admin can record user actions to a video<br>**OFF** - User actions can’t be recorded |
| Require Recording Consent | **ON** - The user must confirm before the admin can record his actions<br>**OFF** - The user is not notified when the admin records his actions |
| Allow Session Mirroring | **ON** - The admin can monitor user actions and take control if necessary<br>**OFF** - The admin can’t see what the user is doing on the application screen |
| Require Mirroring Consent | **ON** - The user must confirm before the admin can monitor his actions<br>**OFF** - The user is not notified when the admin monitors his actions |
| Upload Size Limit | Maximum size of upload for single file in MB.<br>A value of 0 means no limit.<br>The default value is 5 |

3.1 Data Store

| Entry | Meaning |
| --- | --- |
| Data Store Module Class Path | Reserved for future use |
| Data Store Module Name | Reserved for future use |
| Direct Transfer | Reserved for future use |

#### App Config

1. Veryant

| Entry | Meaning |
| --- | --- |
| isCOBOL Server address | IP address of the machine where isCOBOL Server is listening. WebClient will connect to the isCOBOL Server in the same way as a isCOBOL Client. This is equivalent to the -hostname option of the isCOBOL Client |
| isCOBOL Server port | Port where isCOBOL Server is listening. WebClient will connect to the isCOBOL Server in the same way as a isCOBOL Client. This is equivalent to the -port option of the isCOBOL Client |
| Program name and arguments | Name of the main program of the application optionally followed by one or more variables.See [Passing command line arguments and end user info to the COBOL program](../../../Passing-command-line-arguments-and-end-user-info-to-the-COBOL-program) for more details. |
| Username | User name for authenticating to the isCOBOL Server in case iscobol.as.authentication is set to "2" in isCOBOL Server’s configuration |
| Password | Password for authenticating to the isCOBOL Server in case iscobol.as.authentication is set to "2" in isCOBOL Server’s configuration |
| LAF | Look and feel to be used to display application’s windows content. <br><br>**Note** - "system" on Windows is respected only if you start WebClient as a foreground process, because Windows services don't have access to the user UI profile; when WebClient runs as a service, you get the base legacy Windows layout. |
| Remote configuration | Remote configuration file for the application. This is equivalent to the -c option of the isCOBOL Client |
| Local configuration | Local configuration file for the application. This is equivalent to the -lc option of the isCOBOL Client |
| Timeout (seconds) | Startup network timeout in seconds |

2. General

| Entry | Meaning |
| --- | --- |
| Home Folder | Working directory of the application. This is equivalent to the working directory of the isCOBOL Client |
| Theme | Specifies the decoration theme for the application windows. It affects mainly the title bar and the menu bar of the windows |
| Fonts | Customize logical font mappings and define physical fonts available to application. These fonts will be used for DirectDraw as native fonts.<br>Use the '+' button to add a new mapping.<br>Use the 'x' button to remove a mapping. <br><br>Every mapping is composed of two items: *Key* and *Value*.<br>*Key* is the name of the font.<br>*Value* is the path to the font file. Only True Type (ttf) fonts are supported. <br><br>If no fonts are defined, necessary fonts are loaded from the system by WebClient as the COBOL application requests them. This rule applies to *iscobol.font* configuration settings as well as calls to the W$FONT routine. If some fonts are defined, these fonts will be the only fonts available for the COBOL application, so be sure to map all the necessary fonts otherwise some calls to W$FONT may fail and some *iscobol.font* configuration settings may be ignored. Configuring fonts is the only way to change the font used by window title bar and menu bar. For example, the following settings will change the look of the title bar and menu bar: <br><br>*Name*: "dialog", *Value*: "${user.dir}/fonts/Roboto-Regular.ttf"<br>*Name*: "dialoginput", *Value*: "${user.dir}/fonts/RobotoMono-Regular.ttf"<br>*Name*: "serif", *Value*: "${user.dir}/fonts/RobotoSlab-Regular.ttf" |
| DirectDraw Rendering | DirectDraw rendering mode uses canvas instructions to render the application instead of server-rendered png images. DirectDraw improves performance but is not recommended for applications with a lot of graphics content |
| Latency Optimized Rendering | When ON, it optimizes the rendering process for connections with high latency |
| JavaFX Support | **ON** - Ability to use also JavaFx components.<br>**OFF** - Only Swing and AWT components allowed. |
| Enable Debug Mode | Reserved for future use |
| Enable Test Mode | Allows the [Test Tool](../../../Test-Tool/Test-Tool) to record and playback actions on this application |

3. Java

| Entry | Meaning |
| --- | --- |
| Working Directory | Specifies the working directory of the isCOBOL Client on the machine where WebClient is running. |
| JRE Executable | Path to the java executable |
| Java Version | Version of the java executable |
| Class Path | Local Classpath. The isCOBOL’s lib directory content must appear here. This is equivalent to the isCOBOL Client’s Classpath |
| JVM Arguments | Java options like -Xmx go here. You should use the same options that you would use to start the isCOBOL Client |
| Pre-launch | Select type of app pre-launch for idle instances.<br>**NONE**: Just start a JVM, without executing any program. This is the default.<br>**MAIN_CLASS:** Start the thin client session. The main program executes in the background and continues running until it reaches an ACCEPT statement for user input. This allows new WebClient sessions to start almost immediately, but it consumes more resources in terms of memory, file handles, and database connections, so use this setting with caution. |
| Launcher Type | Reserved for future use |

4. Session

| Entry | Meaning |
| --- | --- |
| Session Timeout | Specifies how long the application will be left running after the user closes the browser. User can reconnect in this interval and continue in last session. The value is expressed in seconds. |
| Timeout if Inactive | **ON** - Session Timeout will apply for user inactivity.<br>**OFF** - Only disconnected sessions will time out. |

5. Logging

| Entry | Meaning |
| --- | --- |
| Session Logging | **ON** - log sessions in a separate log file.<br>**OFF** - don’t log sessions in a separate log file. |
| Statistics Logging | **ON** - statistics are logged for session.<br>**OFF** - statistics are not logged. |
| Session Log Size | Maximum size in MB for a session log file |
| Idle instances <span id="idle_instances"></span> | How many idle instances should be started in background waiting for user connection. See also Pre-launch. |

6. Features

| Entry | Meaning |
| --- | --- |
| Isolated Filesystem | **ON** - the Open and Save dialogs of C$OPENSAVEBOX can only browse the WebClient’s Upload Folder and its subfolders.<br>**OFF** - the Open and Save dialogs of C$OPENSAVEBOX can browse every folder of the machine where WebClient is running. |
| Uploading Files | Enable the ability to upload files through the Open File dialog generated by the C$OPENSAVEBOX library routine. |
| Deleting Files | Enable the ability to delete files from the Open and Save dialogs generated by the C$OPENSAVEBOX library routine. |
| Downloading Files | Enable the ability to download files through the Save File dialog generated by the C$OPENSAVEBOX library routine. |
| Auto-Download from Save Dialog | Enable the automatic download of files to the end user’s PC when the Save File dialog of C$OPENSAVEBOX is called. |
| Transparent Open File Dialog | ON - when C$OPENSAVEBOX is called to open a file, show only the client-side file browser and upload the selected file.OFF - when C$OPENSAVEBOX is called to open a file, show the Open dialog along with the client-side file browser and upload the selected file. <br><br>Requires Isolated Filesystem on. |
| Transparent Save File Dialog | **ON** - when C$OPENSAVEBOX is called to save a file, ask only for the file name.<br>**OFF** - when C$OPENSAVEBOX is called to save a file, show the Save dialog along with the prompt for file name. <br><br>Requires Isolated Filesystem on. |
| Upload Folder | Folder where files uploaded by the user through C$OPENSAVEBOX are stored. <br><br>Requires Isolated Filesystem on. |
| Clear Upload Folder | **ON** - Delete all files in the transfer folder when the application process is terminated.<br>**OFF** - Don’t delete any file when the application process is terminated. <br><br>Requires Isolated Filesystem on. |
| Thread Dumps Folder | Folder where thread dumps are stored. |
| Recordings Folder | Folder where recordings are stored. |
| Allow JsLink | Reserved for future use. |
| JsLink White List | Reserved for future use. |
| Allow Local Clipboard | **ON** - Allow access to the end user's PC clipboard.<br>**OFF** - The user can’t cut, copy or paste text in the application screen. |
| Allow Server Printing | **ON** - Allow access to the printers installed on the machine where WebClient is running.<br>**OFF** - Print to PDF using the internal WebPrintService printer and send the PDF to the client browser. |
| Docking Mode | **ALL** - All windows can be undocked.<br>**MARKED** - only windows with the Iwc-Dockable style can be undocked.<br>**NONE** - disable undocking. |
| Docking Type | **POPUP** - undocked window opens in a popup.<br>**TAB** - undocked window opens in a new tab. |
| Multi-screen Support | Reserved for future use. |
| Embed Fonts in PDF | **ON** - Embed fonts defined in font configuration into printed PDF file.<br>**OFF** - Don’t embed fonts defined in font configuration into printed PDF file. |

After changing one or more of the above settings, you can either

- Click on "Apply" if you wish to activate the new configuration, or
- Click on "Reset" to clean your changes and restore the active configuration.

The application’s configuration is saved in the file *webclient/webclient.config* under the isCOBOL installation folder.
