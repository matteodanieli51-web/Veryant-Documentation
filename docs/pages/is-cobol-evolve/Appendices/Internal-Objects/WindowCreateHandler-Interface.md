## WindowCreateHandler Interface (com.iscobol.rts.WindowCreateHandler)

The isCOBOL Framework allows you to customize windows layout through an hook class that is automatically invoked before and after the display of the window.

To specify the name of the class, use the [iscobol.gui.window.hook \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) configuration property, e.g.

```ini
iscobol.gui.window.hook=MYWINHANDLER
```

The class may be written in Java or in object oriented COBOL and must implement the *com.iscobol.rts.WindowCreateHandler* interface that includes the two methods *beforeWindowCreate* and *afterWindowCreate*:

```java
public interface com.iscobol.rts.WindowCreateHandler {
  public abstract void beforeWindowCreate(com.iscobol.gui.server.WindowAttributeHook) throws com.iscobol.rts.WindowCreateOverflowException;
  public abstract void afterWindowCreate(com.iscobol.gui.server.WindowAttributeHook) throws com.iscobol.rts.WindowCreateOverflowException;
}
```

The two methods *beforeWindowCreate* and *afterWindowCreate* receive an instance of *WindowAttributeHook* as parameter.

The *WindowAttributeHook* class has the following public methods:

|  |  |
| --- | --- |
| int | **getAction**()<br>Returns the value of the [Action](../../User-Interface/Controls-Reference/WINDOW/Properties/Action) property |
| void | **getBackgroundBitmapHandle**(com.iscobol.rts.ICobolVar)<br>Reserved for future use |
| int | **getBackgroundBitmapScale**()<br>Reserved for future use |
| int | **getBackground**()<br>Returns the value of the [Background-Color](../../User-Interface/Controls-Reference/WINDOW/Properties/Background-Color) property |
| java.lang.Integer | **getCellHeight**()<br>Returns the value of the [Cell Height](../../User-Interface/Controls-Reference/WINDOW/Properties/Cell-Height) property |
| java.lang.Integer | **getCellWidth**()<br>Returns the value of the [Cell Width](../../User-Interface/Controls-Reference/WINDOW/Properties/Cell-Width) property |
| int | **getColor**()<br>Returns the value of the [Color](../../User-Interface/Controls-Reference/WINDOW/Properties/Color) property |
| java.lang.Integer | **getColumn**()<br>Returns the value of the [[ Col \| Column \| Pos \| Position ]](../../User-Interface/Controls-Reference/WINDOW/Properties/Col-Column-Pos-Position) property |
| java.lang.String | **getCustomData**()<br>Returns the value of the [Custom-Data](../../User-Interface/Controls-Reference/WINDOW/Properties/Custom-Data) property |
| java.lang.Boolean | **getEnabled**()<br>Returns the value of the [Enabled](../../User-Interface/Controls-Reference/WINDOW/Properties/Enabled) property |
| com.iscobol.rts.ICobolVar | **getFont**()<br>Returns the value of the [Font](../../User-Interface/Controls-Reference/WINDOW/Properties/Font) property |
| int | **getForeground**()<br>Returns the value of the [Foreground-Color](../../User-Interface/Controls-Reference/WINDOW/Properties/Foreground-Color) property |
| int | **getGradientColor1**()<br>Returns the value of the [Gradient-Color-1](../../User-Interface/Controls-Reference/WINDOW/Properties/Gradient-Color-1) property |
| int | **getGradientColor2**()<br>Returns the value of the [Gradient-Color-2](../../User-Interface/Controls-Reference/WINDOW/Properties/Gradient-Color-2) property |
| int | **getGradientOrientation**()<br>Returns the value of the [Gradient-Orientation](../../User-Interface/Controls-Reference/WINDOW/Properties/Gradient-Orientation) property |
| void | **getHandle**(com.iscobol.rts.ICobolVar)<br>Reserved for future use |
| com.iscobol.rts.ICobolVar | **getIcon**()<br>Returns the value of the [Icon](../../User-Interface/Controls-Reference/WINDOW/Properties/Icon) property |
| java.lang.Boolean | **getIwcDockable**()<br>Returns whether the [Iwc-Dockable](../../User-Interface/Controls-Reference/WINDOW/Styles/Iwc-Dockable) style is set |
| int | **getLabelOffset**()<br>Reserved for future use |
| java.lang.Boolean | **getLafColors**()<br>Returns whether the the [Laf-Colors](../../User-Interface/Controls-Reference/WINDOW/Styles/Laf-Colors) style is set |
| java.lang.String | **getLayoutManager**()<br>Returns the name of the layout manager. Possible values are:<br>" "<br>"LM-RESIZE"<br>"LM-RESPONSIVE"<br>"LM-SCALE"<br>"LM-ZOOM" |
| java.lang.Integer | **getLine**()<br>Returns the value of the [Line](../../User-Interface/Controls-Reference/WINDOW/Properties/Line) property |
| java.lang.Float | **getLines**()<br>Returns the value of the [Lines](../../User-Interface/Controls-Reference/WINDOW/Properties/Lines) property |
| float | **getMaxLines**()<br>Returns the value of the [Max-Lines](../../User-Interface/Controls-Reference/WINDOW/Properties/Max-Lines) property |
| float | **getMaxSize**()<br>Returns the value of the [Max-Size](../../User-Interface/Controls-Reference/WINDOW/Properties/Max-Size) property |
| float | **getMinLines**()<br>Returns the value of the [Min-Lines](../../User-Interface/Controls-Reference/WINDOW/Properties/Min-Lines) property |
| float | **getMinSize**()<br>Returns the value of the [Min-Size](../../User-Interface/Controls-Reference/WINDOW/Properties/Min-Size) property |
| java.lang.Boolean | **getModal**()<br>Returns whether the the Modal style is set |
| java.lang.Boolean | **getNoClose**()<br>Returns whether the the [No-Close](../../User-Interface/Controls-Reference/WINDOW/Styles/No-Close) style is set |
| com.iscobol.rts.ICobolVar | **getPopupMenu**()<br>Returns the value of the [Pop-Up Menu](../../User-Interface/Controls-Reference/WINDOW/Properties/Pop-Up-Menu) property |
| java.lang.String | **getProgName**()<br>Returns the name of the program that displayed the window |
| java.lang.Boolean | **getResizable**()<br>Returns whether the the Resizable style is set |
| java.lang.Integer | **getScreenColumn**()<br>Returns the value of the [[ Screen Col \| Screen Column \| Screen Pos \| Screen Position ]](../../User-Interface/Controls-Reference/WINDOW/Properties/Screen-Col-Screen-Column-Screen-Pos-Screen-Position) property |
| java.lang.Integer | **getScreenLine**()<br>Returns the value of the [Screen Line](../../User-Interface/Controls-Reference/WINDOW/Properties/Screen-Line) property |
| java.lang.Float | **getSize**()<br>Returns the value of the [Size](../../User-Interface/Controls-Reference/WINDOW/Properties/Size) property |
| java.lang.Boolean | **getTitleBar**()<br>Returns whether the the [Title-Bar](../../User-Interface/Controls-Reference/WINDOW/Styles/Title-Bar) style is set |
| java.lang.String | **getTitle**()<br>Returns the value of the [Title](../../User-Interface/Controls-Reference/WINDOW/Properties/Title) property |
| java.lang.String | **getType**()<br>Returns the window type. Possible values are:<br>"FLOATING"<br>"INDEPENDENT"<br>"INITIAL"<br>"MDI-CHILD"<br>"MDI-PARENT"<br>"STANDARD" |
| java.lang.Boolean | **getUndecorate**()<br>Returns whether the [Undecorated](../../User-Interface/Controls-Reference/WINDOW/Styles/Undecorated) style is set |
| java.lang.Boolean | **getUserColors**()<br>Returns whether the  User-Colors style is set |
| java.lang.Boolean | **getUserGray**()<br>Returns whether the  User-Gray style is set |
| java.lang.Boolean | **getUserWhite**()<br>Returns whether the   User-White style is set |
| java.lang.Boolean | **getVisible**()<br>Returns the value of the [Visible](../../User-Interface/Controls-Reference/WINDOW/Properties/Visible) property |
| java.lang.Boolean | **getWithSystemMenu**()<br>Returns whether the [System Menu](../../User-Interface/Controls-Reference/WINDOW/Styles/System-Menu) style is set |
| void | **setAction**(int)<br>Specifies the value of the [Action](../../User-Interface/Controls-Reference/WINDOW/Properties/Action) property |
| void | **setBackgroundBitmapHandle**(com.iscobol.rts.ICobolVar)<br>Reserved for future use |
| void | **setBackgroundBitmapScale**(int)<br>Reserved for future use |
| void | **setBackground**(int)<br>Specifies the value of the [Background-Color](../../User-Interface/Controls-Reference/WINDOW/Properties/Background-Color) property |
| void | **setCellHeight**(java.lang.Integer)<br>Specifies the value of the [Cell Height](../../User-Interface/Controls-Reference/WINDOW/Properties/Cell-Height) property |
| void | **setCellWidth**(java.lang.Integer)<br>Specifies the value of the [Cell Width](../../User-Interface/Controls-Reference/WINDOW/Properties/Cell-Width) property |
| void | **setColor**(int)<br>Specifies the value of the [Color](../../User-Interface/Controls-Reference/WINDOW/Properties/Color) property |
| void | **setColumn**(java.lang.Integer)<br>Specifies the value of the [[ Col \| Column \| Pos \| Position ]](../../User-Interface/Controls-Reference/WINDOW/Properties/Col-Column-Pos-Position) property |
| void | **setControlFont**(com.iscobol.types.CobolVar)<br>Specifies the value of the [Control Font](../../User-Interface/Controls-Reference/WINDOW/Properties/Control-Font) property |
| void | **setCustomData**(java.lang.String)<br>Specifies the value of the [Custom-Data](../../User-Interface/Controls-Reference/WINDOW/Properties/Custom-Data) property |
| void | **setEnabled**(java.lang.Boolean)<br>Specifies the value of the [Enabled](../../User-Interface/Controls-Reference/WINDOW/Properties/Enabled) property |
| void | **setFont**(com.iscobol.types.CobolVar)<br>Specifies the value of the [Font](../../User-Interface/Controls-Reference/WINDOW/Properties/Font) property |
| void | **setForeground**(int)<br>Specifies the value of the [Foreground-Color](../../User-Interface/Controls-Reference/WINDOW/Properties/Foreground-Color) property |
| void | **setGradientColor1**(int)<br>Specifies the value of the [Gradient-Color-1](../../User-Interface/Controls-Reference/WINDOW/Properties/Gradient-Color-1) property |
| void | **setGradientColor2**(int)<br>Specifies the value of the [Gradient-Color-2](../../User-Interface/Controls-Reference/WINDOW/Properties/Gradient-Color-2) property |
| void | **setGradientOrientation**(int)<br>Specifies the value of the [Gradient-Orientation](../../User-Interface/Controls-Reference/WINDOW/Properties/Gradient-Orientation) property |
| void | **setIcon**(com.iscobol.types.NumericVar)<br>Specifies the value of the [Icon](../../User-Interface/Controls-Reference/WINDOW/Properties/Icon) property |
| void | **setIwcDockable**()<br>Apply or remove the [Iwc-Dockable](../../User-Interface/Controls-Reference/WINDOW/Styles/Iwc-Dockable) style |
| void | **setLabelOffset**(int)<br>Reserved for future use |
| void | **setLafColors**()<br>Apply or remove the [Laf-Colors](../../User-Interface/Controls-Reference/WINDOW/Styles/Laf-Colors) style |
| void | **setLayoutManager**(java.lang.String)<br>Specifies the name of the layout manager. Possible values are:<br>" "<br>"LM-RESIZE"<br>"LM-RESPONSIVE"<br>"LM-SCALE"<br>"LM-ZOOM" |
| void | **setLine**(java.lang.Integer)<br>Specifies the value of the [Line](../../User-Interface/Controls-Reference/WINDOW/Properties/Line) property |
| void | **setLines**(java.lang.Float)<br>Specifies the value of the [Lines](../../User-Interface/Controls-Reference/WINDOW/Properties/Lines) property |
| void | **setMaxLines**(float)<br>Specifies the value of the [Max-Lines](../../User-Interface/Controls-Reference/WINDOW/Properties/Max-Lines) property |
| void | **setMaxSize**(float)<br>Specifies the value of the [Max-Size](../../User-Interface/Controls-Reference/WINDOW/Properties/Max-Size) property |
| void | **setMinLines**(float)<br>Specifies the value of the [Min-Lines](../../User-Interface/Controls-Reference/WINDOW/Properties/Min-Lines) property |
| void | **setMinSize**(float)<br>Specifies the value of the [Min-Size](../../User-Interface/Controls-Reference/WINDOW/Properties/Min-Size) property |
| void | **setModal**(java.lang.Boolean)<br>Apply or remove the Modal style |
| void | **setNoClose**(java.lang.Boolean)<br>Apply or remove the [No-Close](../../User-Interface/Controls-Reference/WINDOW/Styles/No-Close) style |
| void | **setPopupMenu**(com.iscobol.types.CobolVar)<br>Specifies the value of the [Pop-Up Menu](../../User-Interface/Controls-Reference/WINDOW/Properties/Pop-Up-Menu) property |
| void | **setResizable**(java.lang.Boolean)<br>Apply or remove the Resizable style |
| void | **setScreenColumn**(java.lang.Integer)<br>Specifies the value of the [[ Screen Col \| Screen Column \| Screen Pos \| Screen Position ]](../../User-Interface/Controls-Reference/WINDOW/Properties/Screen-Col-Screen-Column-Screen-Pos-Screen-Position) property |
| void | **setScreenLine**(java.lang.Integer)<br>Specifies the value of the [Screen Line](../../User-Interface/Controls-Reference/WINDOW/Properties/Screen-Line) property |
| void | **setSize**(java.lang.Float)<br>Specifies the value of the [Size](../../User-Interface/Controls-Reference/WINDOW/Properties/Size) property |
| void | **setTitleBar**(java.lang.Boolean)<br>Apply or remove the [Title-Bar](../../User-Interface/Controls-Reference/WINDOW/Styles/Title-Bar) style |
| void | **setTitle**(java.lang.String)<br>Specifies the value of the [Title](../../User-Interface/Controls-Reference/WINDOW/Properties/Title) property |
| void | **setUndecorate**(java.lang.Boolean)<br>Apply or remove the [Undecorated](../../User-Interface/Controls-Reference/WINDOW/Styles/Undecorated) style |
| void | **setUserColors**(java.lang.Boolean)<br>Apply or remove the User-Colors style |
| void | **setUserGray**(java.lang.Boolean)<br>Apply or remove the User-Gray style |
| void | **setUserWhite**(java.lang.Boolean)<br>Apply or remove the User-White style |
| void | **setVisible**(java.lang.Boolean)<br>Specifies the value of the [Visible](../../User-Interface/Controls-Reference/WINDOW/Properties/Visible) property |
| void | **setWithSystemMenu**(java.lang.Boolean)<br>Apply or remove the [System Menu](../../User-Interface/Controls-Reference/WINDOW/Styles/System-Menu) style |

#### Example

The following sample class identifies if the LM-RESIZE layout manager was used and replaces it with the LM-SCALE layout manager:

```java
import com.iscobol.rts.WindowCreateHandler ;
import com.iscobol.rts.WindowCreateOverflowException;
import com.iscobol.gui.server.WindowAttributeHook;

public class ReplaceLM implements WindowCreateHandler {
  public void beforeWindowCreate(WindowAttributeHook wah) throws WindowCreateOverflowException {
      if (wah.getLayoutManager().equals("LM-RESIZE")) {
          wah.setLayoutManager("LM-SCALE");
      }
  }
  public void afterWindowCreate(WindowAttributeHook wah) throws WindowCreateOverflowException {
      // nothing to do here
  }
}
```

To enable the above window hook, set the following configuration entry:

```ini
iscobol.gui.window.hook=ReplaceLM
```
