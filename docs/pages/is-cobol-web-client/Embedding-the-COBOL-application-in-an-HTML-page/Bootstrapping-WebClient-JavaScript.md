## Bootstrapping WebClient JavaScript

When the WebClient JavaScript is loaded it will scan the DOM for div elements with attribute *data-webswing-instance* and will initialize them automatically. For use cases when WebClient instance has to be started later, it is possible to export global WebClient variable exposing the bootstrapping API. By defining the attribute *data-webswing-global-var="webclientControl"* on the <*script*\> element of embedded snippet, you tell WebClient to create a global variable called *webclientControl*, which has following functions:

| | |
| --- | --- |
| **scan()**| re-runs the full DOM search for data-webswing-instance attribute |
| **bootstrap(divElement)** | instantiate WebClient in div element specified in argument |
| | |
