## Customize the WebDirect Layout using CSS

Like all web sites and web applications, the layout of programs running with WebDirect can be customized using CSS (Cascading Style Sheets).

### ZK8 default and alternative themes

By default the COBOL screens are rendered using the ZK8 default theme.

The following screenshot shows how a simple screen including a label, a text field and a push-button appears in a web browser with the default ZK8 theme.

![](../images/wd2DefaultTheme.png)

It is possible to change this theme by setting the [iscobol.wd2.style](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#wd2_style) configuration property. The following screenshot shows how the same screen as above is shown when *iscobol.wd2.style=bs* (Bootstrap styling)

![](../images/wd2BsTheme.png)

### Custom Style Association

The file iscobol.css provided along with isCOBOL should always be stored in the resources/css folder of any WebDirect application. This file contains the default styling for the COBOL graphical controls. Editing or omitting this file may produce a bad layout for the web application.

The default styling can be customized by writing a new css file, putting it in the resources/css folder of the web application and point to it by setting the configuration property [iscobol.wd2.additional_stylesheet](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#wd2_additional_stylesheet).

The css file must have the following syntax:

```cobol
<css-style-name> {
<attribute>:<value>;
...
<attribute>:<value>;
}
```

In order to associate a particular style to a graphical control, you take advantage of the CSS-BASE-STYLE-NAME and CSS-STYLE-NAME properties, that are supported for all controls.

These properties take a string parameter that specifies the style name.

Different controls can use the same style.

CSS allow you to create effects that would not be possible using the COBOL language. In the example below, all GUI controls with CSS-STYLE-NAME="highlite" will be highlighted with a shadow when the mouse pointer goes over them.

Content of the custom css file:

```cobol
.highlite:hover{
box-shadow: 10px 10px 5px #888888;
transition: all 0.2s;
}
```

content of COBOL program Screen Section:

```cobol
    01 SCR-SAMPLE.
       05 CHECK-BOX ... CSS-STYLE-NAME "mystyle" ....
       05 RADIO-BUTTON ... CSS-STYLE-NAME "mystyle" ....
```

CSS-BASE-STYLE-NAME acts similarly to CSS-STYLE-NAME, in which it allows one or more css classes to be applied to the control, but differs from it because specifying a css class in the CSS-BASE-STYLE-NAME will overwrite any isCOBOL default classes, allowing a completely customized style to be applied. On the other hand, using CSS-STYLE-NAME to supply a css class to the control, will cause the runtime to append the specified class name to the default one supplied by the environment. If you wish to completely overwrite default styling, use CSS-BASE-STYLE-NAME, and if you want to complement the default styles, use CSS-STYLE-NAME.

Both properties can be used simultaneously. For example, to completely customize the look of your application, use CSS-BASE-STYLE-NAME to overwrite the COBOL styles and provide your own styling to each control class (i.e. buttons, entry-fields, etc.), and CSS-STYLE-NAME to provide specific styling for a specific control’s purpose.

Example

```cobol
   01 SCR-SAMPLE.
      05 PUSH-BUTTON ... CSS-BASE-STYLE-NAME "my-btn" CSS-STYLE-NAME "ok-btn" ....
      05 PUSH-BUTTON ... CSS-BASE-STYLE-NAME "my-btn" CSS-STYLE-NAME "cancel-btn" ....
```

Fonts and colors set by the COBOL program have priority over fonts and colors set by the style associated to the CSS-STYLE-NAME property, unless you put the *!important* clause after the css entries. Fonts and colors set by the COBOL program are overridden by fonts and colors set by the style associated to the CSS-BASE-STYLE-NAME property instead.

When [iscobol.wd2.style](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#wd2_style) is set to "bs", you have available Bootstrap css classes for easy styling of the application. For example, to create OK and CANCEL buttons, you could use the following:

```cobol
        03 PUSH-BUTTON 
           LINE 22, COL 2 LINES 2 SIZE 10 CELLS
           CSS-BASE-STYLE-NAME "btn"
           CSS-STYLE-NAME "btn-success"
           OK-BUTTON
           .
        03 PUSH-BUTTON 
           LINE 22, COL 13 LINES 2 SIZE 20 CELLS
           CSS-BASE-STYLE-NAME "btn"
           CSS-STYLE-NAME "btn-danger"
           CANCEL-BUTTON
           .
```

Where *btn-success* and *btn-danger* are two of the available CSS classes provided by Bootstrap. See [http://getbootstrap.com/components](http://getbootstrap.com/components) for the list of available classes.

With the above code the OK button will have a green color and the Cancel button will have a red color.

You can use your web-browser development features to check styles and classes that were applied to the Screen Section elements.

### Font Awesome icons on Push-Buttons

For the Push-Button controls, the CSS-ICON is also available. This alphanumeric property allows you to access Font Awesome icons when the application is deployed as WebDirect. The icon list is available at the following web page: [https://fontawesome.com/icons?from=io](https://fontawesome.com/icons?from=io).

**Note** - ZK integrates Font Awesome 4.0.1, therefore some of the icons listed in the above page might not be available.

For example, to have a Push-Button with a checkmark, all is needed is to find the relevant icon from the list at the above web page (in this case is [https://fontawesome.com/icons/check?style=solid&from=io](https://fontawesome.com/icons/check?style=solid&from=io)), copy the icon class name, in this case "fa-check", and paste it in the CSS-ICON property of the PUSH-BUTTON, e.g.

```cobol
       05 PUSH-BUTTON ... CSS-ICON "fa-check"...
```

At runtime the chosen icon will be displayed.

**Note** - CSS-ICON replaces the icon set by BITMAP-HANDLE property, if any.
