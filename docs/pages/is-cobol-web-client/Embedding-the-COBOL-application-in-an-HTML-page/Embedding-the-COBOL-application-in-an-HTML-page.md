# Embedding the COBOL application in an HTML page

With WebClient it is possible to embed your COBOL application in your own web page.

Create a folder that will contain the assets needed for the web page. In the WebClient configuration for the application set the [Web Folder](../Applications-Monitoring-and-Configuration/Applications/Change-the-application-configuration/Change-the-application-configuration#web-config) parameter to this folder.

You can copy this snippet to your web page:

```cobol
<html class="ws-fullscreen" lang="en">
 
<head>
  <link rel="stylesheet" href="http://<webclient-host-and-port>/<application_path>/css/style.css"/>
</head>
 
...
 
<div class="webswing-element" data-webswing-instance="webclientInstance">
  <div id="loading" class="ws-modal-container">
    <div class="ws-login">
      <div  class="ws-login-content">
        <div class="ws-spinner"><div class="ws-spinner-dot-1"></div> <div class="ws-spinner-dot-2"></div></div>
      </div>
    </div>
  </div>
</div>
 
...
 
<script data-webswing-global-var="webclientControl">
 
  var webclientInstance= {
    options: {
      autoStart: true,
      syncClipboard: true,
      args: '',
      connectionUrl:'http://<webclient-host-and-port>/<application_path>'
    }
  }
 
  (function (window, document) {
    var loader = function () {
      var baseUrl = 'http://<webclient-host-and-port>/<application_path>';
      baseUrl = baseUrl.indexOf("/", baseUrl.length - 1) !== -1 ? baseUrl : (baseUrl + "/");
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
          var version = xmlhttp.status == 200 ? xmlhttp.responseText : "undefined";
          var script = document.createElement("script"),
            tag = document.getElementsByTagName("script")[0];
          script.src = baseUrl + "javascript/webswing-embed.js?version=" + version;
          tag.parentNode.insertBefore(script, tag);
        }
      };
      xmlhttp.open("GET", baseUrl + "rest/version", true);
      xmlhttp.send();
    };
    window.addEventListener ? window.addEventListener("load", loader, false) : window.attachEvent("onload", loader);
  })(window, document);
 
 
</script>
```

In the snippet you need to replace all instances of the placeholders <webclient-host-and-port\> <application_path\> with the actual values for your deployment.

The *data-webclient-instance=”webclientInstance”* is needed to identify the div element as a WebClient instance. A global object will be created with the name specified as the attribute value (*webclientControl* in this case), and it can be used to control the instance.

The following functions are available in this global object:

| | |
| --- | --- |
| **configure(options)** | configures this WebClient instance. This function reads the options from <data-webswing-instance_value\>.config (ie. webclientInstance.options) global variable if exists. Argument options is object with following properties:<br>• *autoStart* - tells WebClient to execute configure() and start() right after the instance is initialized. If it is false, start() function has to be triggered manually.<br>• *syncClipboard* - tells WebClient to interact with the system clipboard in order to enable the Paste option in the context menu of input fields (not supported by all browsers).<br>• *autoReconnect* - number of milliseconds to wait until connection auto-retry when disconnected<br>• *disableLogout* - removes Logout button from all dialogs<br>• *args* - additional Java application arguments. Appended to those defined in configuration<br>• *recording* - record this application session (default: false)<br>• *clientId* - set the clientId, used with mirror session or to continue running session<br>• *mirror* - for starting a mirror session. Only admin role is allowed to use this (default: false)<br>• *connectionUrl* - base URL for connecting to websocket service (default: current location url)<br>• *recordingPlayback* - file for session recording playback. Only the admin role is allowed to use this |
| **disconnect()** | disconnects the current WebClient session, but leaving the swing application running |
| **logout()** | disconnects the current WebClient session and logs user out |
| **kill()** | disconnects the current WebClient session with stopping the COBOL application |
| **setControl(boolean)** | enables/disables the control of application. If set to false, no user events are sent to the COBOL application |
| **start()** | this will initiate the connection to Webclient server and start the COBOL application. If the autoStart is set to false or not defined in config object, the start function has to be called manually, otherwise the WebClient will call start function automatically |
| **repaint()** | notify the WebClient server that the application needs repaint |
| **instanceId()** | get the instanceId of the currently running instance |
| **getConnectionInfo()** | get information about current connection |
| | |

You can control the size of the div element where Webclient is displayed with regular CSS . You can even change the size of the div dynamically.

If you are embedding WebClient to a page on a different domain, you will have to enable Cross-origin resource sharing (CORS) in applications configuration's  [CORS Origins](../Applications-Monitoring-and-Configuration/Applications/Change-the-application-configuration/Change-the-application-configuration#web-config) option. Set \* to allow all domains, or use list of allowed domains.
