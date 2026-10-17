## MSG-CLOSE

This event is fired when the user clicks on the close button of a Tab on a Tab-Control with the [Close-Buttons](../Styles/Close-Buttons) style. The EVENT-DATA-1 data item contains the index of the Tab. The runtime automatically removes the Tab. The content of the Tab page is removed automatically only if either the [Accordion](../Styles/Accordion) style or the [Allow-Container](../Styles/Allow-Container) style is set, otherwise it’s the program's duty to remove the page content.

Setting EVENT-ACTION to EVENT-ACTION-FAIL prevents the Tab from being removed.
