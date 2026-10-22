## MSG-PAGED-NEXTPAGE

This event is fired when the user presses the "Next Page" button in a paged grid. If you do not define a specific action when this event occurs, the grid implements the logic itself by generating a page worth of MSG-PAGED-NEXT events.

If you plan to fill up the first page itself in response to this event, set EVENT-ACTION to EVENT-ACTION-COMPLETE to inform the grid that it should not generate the MSG-PAGED-NEXT events to fill the next page.
