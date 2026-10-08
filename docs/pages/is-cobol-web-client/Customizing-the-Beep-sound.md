# Customizing the Beep sound

The runtime beep sound is simulated by WebClient with a hardware beep. Users that are used to hearing the Windows notification sounds may not like the hardware beep used by WebClient. In this chapter you find instructions on how to customize the beep sound by associating the desired mp3 audio file to it.

1. Create a folder that will host your custom HTML and mp3 files.
2. Extract the index.js file stored in webclient/webclient-server.war and copy it to the folder that you’ve just created. You can use an archive manager software like [7-Zip](https://www.7-zip.org/) to perform this operation easily.
3. Copy the desired audio file (i.e. beep.mp3) to the same folder.
4. Edit the index.js file and find function with the injector object, e.g.:

```cobol
...
   (injector) => {
      var config = injector.services.touch.touchBarConfig;
      config.scalingEnabled = true;
   }
...
```

5. Add the audio customization to that function, e.g.

```cobol
...
   (injector) => {
      var config = injector.services.touch.touchBarConfig;
      config.scalingEnabled = true;
      const beepAudio = new Audio("./beep.mp3");
      injector.services.audio.beep = () => beepAudio.play();
   }
...
```

6. In the app configuration, set [Web Folder](./Applications-Monitoring-and-Configuration/Applications/Change-the-application-configuration/Change-the-application-configuration#web-config) to the path of folder you created at step 1.
