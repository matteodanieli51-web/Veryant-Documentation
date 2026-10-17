## CMD-GOTO

This event is fired when the user tries to activate the JAVA-BEAN control with the mouse or by pressing the associated key letter.

With certain JAVA-BEANs that are composed of more components (e.g. the JCalendar), the mouse events that occur on the sub-components may not be correctly forwarded to the top-level component. In this case the CMD-GOTO event will be fired only if the user clicks on the top-level component.
