## Custom authentication

Custom authentication can be implemented through a Java class compiled either from a java source or from a CLASS-ID COBOL program.

The class must implement the following interface:

```cobol
public interface org.webswing.server.services.security.api.WebswingSecurityModule {
  public abstract void init();
  public abstract org.webswing.server.common.service.security.AuthenticatedWebswingUser doLogin(org.webswing.tools.servlet.HttpServletRequest, org.webswing.tools.servlet.HttpServletResponse, java.lang.String) throws org.webswing.tools.servlet.ServletException, java.io.IOException;
  public abstract void doLogout(org.webswing.tools.servlet.HttpServletRequest, org.webswing.tools.servlet.HttpServletResponse, org.webswing.server.common.service.security.AbstractWebswingUser) throws org.webswing.tools.servlet.ServletException, java.io.IOException;
  public abstract void doServeAuthenticated(org.webswing.server.common.service.security.AbstractWebswingUser, java.lang.String, org.webswing.tools.servlet.HttpServletRequest, org.webswing.tools.servlet.HttpServletResponse) throws java.io.IOException;
  public abstract void destroy();
}
```

In order to activate custom authentication:

1. click on the "+" below *Security Module Class* Path
2. type the pathname of the folder or the jar library that includes your custom authentication class in the field
3. click on the "Apply" button

The list of options under *Security Module* will change from

o NONE
o EMBEDDED

to

o NONE
o EMBEDDED
o <your custom authentication class\>

4. set the *Security Module Name* field to <your custom authentication class\>.

The example installed with the isCOBOL SDK uses custom authentication, reading user credentials from an indexed file. Refer to the source files installed under $ISCOBOL/sample/webclient/encapsulated/source/cobol-login.
