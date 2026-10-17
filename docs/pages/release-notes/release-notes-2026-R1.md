# isCOBOL 2026 Release 1

## Important release notes

- Veryant products now look for the following license properties:
  - iscobol.license.2026
  - iscobol.compiler.license.2026
  - iscobol.easydb.license.2026
  - iscobol.eis.license.2026
  - iscobol.balancer.license.2026
- The included c-tree client library version is v5.1.1.106
- Upgraded Apache POI libraries to version 5.5.1
- Changed iscobol.gui.native_style default value to true
- Message boxes now use icons and colors from the current Look & Feel
set iscobol.gui.messagebox.native_style=0 to use the same icons and colors for every LAF, like before
- Changed iscobol.gui.webbrowser.class default value to com.iscobol.browser.swt.SWTWebBrowser
- Deprecated DJ web-browser removing its libraries to continue using it, set iscobol.gui.webbrowser.class=com.iscobol.browser.dj.DJWebBrowser and restore its libraries
