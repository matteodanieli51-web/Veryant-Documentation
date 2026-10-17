## MSG-PAGED-LAST

This event is fired when the user presses the "Last Page" button in a paged grid. The runtime responds to this event by positioning the record pointer at the end of the data source. Assuming that the data source is an indexed file, a START statement sets the record pointer so that a READ PREVIOUS would retrieve the last record in the file. If EVENT-ACTION is set to EVENT-ACTION-NORMAL (default behavior), the control is emptied of data, except for any column headers and it generates a page worth of MSG-PAGED-PREV events to fill up the page of data.

If you plan to fill up the last page itself in response to this event, set EVENT-ACTION to EVENT-ACTION-COMPLETE to inform the grid that it should not generate the MSG-PAGED-PREV events to fill the last page. If you cannot start at the end of the file (i.e. because the file is empty), set EVENT-ACTION to EVENT-ACTION-FAIL.
