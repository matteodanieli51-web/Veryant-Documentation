## SearchPanelSettings Class (com.iscobol.gui.server.SearchPanelSettings)

The search panel that appears on Grid, List-Box and Tree-View when you press Ctrl-F or when you set the SEARCH-PANEL property to 1 has the following layout:

![grdsearch](../../images/grdsearch.png)

The above layout can be changed globally by setting the [iscobol.gui.search_panel_settings](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) configuration property.

If you need to change the layout for specific controls in specific programs, you can use the SearchPanelSettings object.

The SearchPanelSettings object has the following constructor:

```cobol

```

**Note** - *handle* must be a USAGE HANDLE data item associated to a Grid, a List-Box or a Tree-View, otherwise a java.lang.IllegalArgumentException is thrown.

The following table shows the javadoc of the SearchPanelSettings methods.

|  |  |
| --- | --- |
| boolean | **isCaseSensitiveEnabled**()<br>Returns whether the search with case sensitive is enabled |
| boolean | **isFilterEnabled**()<br>Returns if data filtering is enabled |
| boolean | **isShowCaseSensitiveButton**()<br>Returns whether the case sensitive button is visible |
| boolean | **isShowCleanButton**()<br>Returns whether the Clean button is visible |
| boolean | **isShowFilterButton**()<br>Returns whether the Filter button is visible |
| boolean | **isShowNavigationButtons**()<br>Returns whether the navigation buttons are visible |
| void | **setCaseSensitiveEnabled**(boolean *caseSensitiveEnabled*)<br>Enables or disables the Case Sensitive search |
| void | **setFilterEnabled**(boolean *filterEnabled*)<br>Enables or disable data filtering |
| void | **setShowCaseSensitiveButton**(boolean *showCaseSensitiveButton*)<br>Show or hide the Case Sensitive button |
| void | **setShowCleanButton**(boolean *showCleanButton*)<br>Show or hide the Clean button |
| void | **setShowFilterButton**(boolean *showFilterButton*)<br>Show or hide the Filter button |
| void | **setShowNavigationButtons**(boolean *showNavigationButton*)<br>Show or hide navigation buttons |
