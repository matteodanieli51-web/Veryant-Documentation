## MSG-INIT-MENU

This event is fired right before displaying a menu. The EVENT-DATA-2 data item contains the menu handle and can be used to alter the menu items.

Setting EVENT-ACTION to EVENT-ACTION-FAIL prevents the menu from being displayed.

With certain JAVA-BEANs that are composed of more components (e.g. the JCalendar), the mouse events that occur on the sub-components may not be correctly forwarded to the top-level component. In this case the MSG-INIT-MENU event will be fired only if the user clicks on the top-level component.
