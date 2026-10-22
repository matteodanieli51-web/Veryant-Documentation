# Customizing dialogs

You can change any dialog shown by the WebClient using the customization startup option.

1. Create a folder that will host your custom HTML files.
2. Extract the index.js file stored in webclient/webclient-server.war and copy it to the folder that you’ve just created. You can use an archive manager software like [7-Zip](https://www.7-zip.org/) to perform this operation easily.
3. Edit the index.js file and find function with the injector object, e.g.:

```cobol
...
   (injector) => {
      var config = injector.services.touch.touchBarConfig;
      config.scalingEnabled = true;
   }
...
```

4. Add the dialogs customization to that function by specifying the HTML content that you want for the dialogs. For example, to customize startup dialogs:

```cobol
...
   (injector) => {
      var config = injector.services.touch.touchBarConfig;
      config.scalingEnabled = true;
      injector.services.dialog.content.startingDialog.content = '<div class="ws-spinner"><div class="ws-spinner-dot-1"></div> <div class="ws-spinner-dot-2"></div></div><p>MyApp is being started</p>';
      injector.services.dialog.content.initializingDialog.content = '<div class="ws-spinner"><div class="ws-spinner-dot-1"></div> <div class="ws-spinner-dot-2"></div></div><p>MyApp is being initialized</p>';
   }
...
```

In the app configuration, set [Web Folder](./Applications-Monitoring-and-Configuration/Applications/Change-the-application-configuration/Change-the-application-configuration#web-config) to the path of folder you created at step 1.

This is the list of customizable entries:

- emptyMessage
- logingOut
- readyDialog
- initializingDialog
- initializingMirrorDialog
- initializingRecordingDialog
- startingDialog
- reconnectingDialog
- applicationBusyDialog
- undockWaitingDialog
- unauthorizedAccess
- configurationError
- applicationAlreadyRunning
- sessionStolenNotification
- disconnectedDialog
- disconnectedNetworkErrorDialog
- connectionErrorDialog
- tooManyClientsNotification
- tooManyClientsPerUserNotification
- noFreeSessionPoolNotification
- stoppedDialog
- undockedInstanceNotFound
- reconnectInstanceNotFound
- undockedInstanceDetached
- instanceDetached
- timedoutDialog
- timedoutDisconnectedDialog
- cookiesDisabledDialog
- popupsBlockedDialog
- continueOldSessionDialog
- longPollingWarningDialog
- inactivityTimeoutWarningDialog
- networkOfflineWarningDialog
- networkSlowWarningDialog
- touchSwitchModeMouseDialog
- touchSwitchModeTouchDialog
- dockingModalityOverlay
- sessionLockedOverlay
- sessionUnlockOverlay
- hiddenWindowsNotification
- popupBlockedNotification
- startupErrorDialog
- linkedViewFailedDialog
