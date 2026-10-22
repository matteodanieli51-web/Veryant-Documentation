## W$MENU

The W$MENU library routine provides a number of functions to manage menus.

**Note -** Every call to W$MENU performed before the first [WMENU-SHOW](./WMENU-SHOW) is buffered and doesn’t update the video. Every call to W$MENU performed after the first [WMENU-SHOW](./WMENU-SHOW) immediately updates the video and therefore it might affect performance.

### Syntax:

```cobol
 CALL "W$MENU" USING opCode
                     parameters
              GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| opCode | Function to be executed. Valid values, defined in [isgui.def](../../Copybooks/isgui.def), are: |  |
|  | [WMENU-ADD](./WMENU-ADD) | Add an item to an existing menu |
|  | [WMENU-ADD-BITMAP](./WMENU-ADD-BITMAP) | Display a bitmap in front of a menu item |
|  | [WMENU-BLOCK](./WMENU-BLOCK) | Inhibits the user from using the menu menu |
|  | [WMENU-CHANGE](./WMENU-CHANGE) | Modify a menu item |
|  | [WMENU-CHANGE-BITMAP](./WMENU-CHANGE-BITMAP) | Modify the bitmap shown in front of a menu item |
|  | [WMENU-CHECK](./WMENU-CHECK) | Show a check mark beside a menu item |
|  | [WMENU-DELETE](./WMENU-DELETE) | Delete a menu item |
|  | [WMENU-DELETE-BITMAP](./WMENU-DELETE-BITMAP) | Delete a bitmap displayed in front of a menu item |
|  | [WMENU-DESTROY](./WMENU-DESTROY) | Destroy a menu and remove it from the screen |
|  | [WMENU-DESTROY-DELAYED](./WMENU-DESTROY-DELAYED) | Mark a menu, so that it will be destroyed later |
|  | [WMENU-DISABLE](./WMENU-DISABLE) | Disable a menu item |
|  | [WMENU-ENABLE](./WMENU-ENABLE) | Enable a menu item previously disabled |
|  | [WMENU-ENSURE-VISIBLE](./WMENU-ENSURE-VISIBLE) | Expands the necessary menus in order to show a given menu item |
|  | [WMENU-GET-BLOCK](./WMENU-GET-BLOCK) | Gets the menu blocking count |
|  | [WMENU-GET-MENU](./WMENU-GET-MENU) | Get the handle of the current menu |
|  | [WMENU-NEW](./WMENU-NEW) | Create a new menu bar |
|  | [WMENU-NEW-HAMBURGER](./WMENU-NEW-HAMBURGER) | Create a new hamburger menu |
|  | [WMENU-NEW-POPUP](./WMENU-NEW-POPUP) | Create a new pop-up menu |
|  | [WMENU-NEW-TRAY](./WMENU-NEW-TRAY) | Create a new tray icon with menu |
|  | [WMENU-POPUP](./WMENU-POPUP) | Display a pop-up menu |
|  | [WMENU-RELEASE](./WMENU-RELEASE) | Logically destroy the current menu, without updating the screen |
|  | [WMENU-SET-ATTRIBUTE](./WMENU-SET-ATTRIBUTE) | Sets attributes for the menu bar |
|  | [WMENU-SET-BLOCK](./WMENU-SET-BLOCK) | Sets the menu blocking count |
|  | [WMENU-SHOW](./WMENU-SHOW) | Display a menu on the screen |
|  | [WMENU-UNBLOCK](./WMENU-UNBLOCK) | Re-enables the user to use the menu menu |
|  | [WMENU-UNCHECK](./WMENU-UNCHECK) | Remove a check mark shown beside a menu item |
| *parameters* | Parameters depend on the opcode. |  |

### Return code:

*returnCode* definition and meaning depend on the opcode.

### Examples:

**Example -** Building a whole menu with options, sub-options and icons to some sub-options

```cobol
77  h-img                   pic s9(9) comp-4.

78  mnu-new                 value 101.
78  mnu-open                value 102.
78  mnu-save                value 103.
78  mnu-cut                 value 201.
78  mnu-copy                value 202.
78  mnu-paste               value 203.

procedure division.
main.
  perform build-menu
  ...

build-menu.
  call "w$bitmap" using wbitmap-load, "files/icone-menu.gif",
                          giving h-img

  call "w$menu" using wmenu-new giving menu-handle

  call "w$menu" using wmenu-new giving sub-handle-1

  call "w$menu" using wmenu-add, menu-handle, 0, 0,
                               "&File", 0, sub-handle-1
  call "w$menu" using wmenu-add, sub-handle-1, 0, 0,
                               "&New", mnu-new
  call "w$menu" using wmenu-add-bitmap
                               menu-handle mnu-new h-img 3 24
  call "w$menu" using wmenu-add, sub-handle-1, 0, 0,
                               "&Open", mnu-open
  call "w$menu" using wmenu-add-bitmap
                               menu-handle mnu-open h-img 2 24
  call "w$menu" using wmenu-add, sub-handle-1, 0, 0,
                               "&Save", mnu-save
  call "w$menu" using wmenu-add-bitmap
                               menu-handle mnu-save h-img 5 24
  call "w$menu" using wmenu-add, sub-handle-1, 0, w-separator
           call "w$menu" using wmenu-add, sub-handle-1, 0, 0,
  "E&xit", 27


  call "w$menu" using wmenu-new giving sub-handle-2

  call "w$menu" using wmenu-add, menu-handle, 0, 0,
                               "&Edit", 0, sub-handle-2
  call "w$menu" using wmenu-add, sub-handle-2, 0, 0,
                               "&Cut", mnu-cut
  call "w$menu" using wmenu-add-bitmap
                               menu-handle mnu-cut h-img 1 24
  call "w$menu" using wmenu-add, sub-handle-2, 0, 0,
                               "&Copy", mnu-copy
  call "w$menu" using wmenu-add-bitmap
                               menu-handle mnu-copy h-img 4 24
  call "w$menu" using wmenu-add, sub-handle-2, 0, 0,
                               "&Paste", mnu-paste
  call "w$menu" using wmenu-add-bitmap
                               menu-handle mnu-paste h-img 6 24
  call "w$menu" using wmenu-add, sub-handle-2, 0, w-separator
  call "w$menu" using wmenu-add, sub-handle-2, 0, w-disabled,
                               " w-disabled", 70
  call "w$menu" using wmenu-add, sub-handle-2, 0, w-checked,
                               " w-checked", 80
  .
```
