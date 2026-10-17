## Servlet Container Configuration

Servlet containers (e.g. Apache Tomcat) have fully configurable authentication systems, however they usually don't fit well with the authentication from another server, thus they are not used in this example.

You need to define a safe area where the isCOBOL application can be invoked only after a successful authentication. Since the isCOBOL applications are executed as if they belonged to the same session, you can set an environment property after the authentication process and then check for it each time an application runs. However it is not handy or safe to put a check in each program, thus you can define a filter that does this job.

The configuration file *web.xml* will therefore contain the following entries:

```cobol
          <filter>
            <filter-name>isCOBOL security</filter-name>
            <filter-class>SecurityFilter</filter-class>
          </filter>
          <filter-mapping>
             <filter-name>isCOBOL security</filter-name>
             <url-pattern>/servlet/*</url-pattern>
          </filter-mapping>
```

In this way you specify a program to run before running any program located under the URL /servlet. This program could be the following isCOBOL class:

```cobol
       class-id. SecurityFilter as "SecurityFilter"
                                      implements c-filter.
       configuration section.
       repository.
           class j-ioexception as "java.io.IOException"
           class c-filter as "javax.servlet.Filter"
           class c-filter-chain as "javax.servlet.FilterChain"
           class c-filter-config as "javax.servlet.FilterConfig"
           class c-ServletException as "javax.servlet.ServletException"
           class c-ServletRequest as "javax.servlet.ServletRequest"
           class c-ServletResponse as "javax.servlet.ServletResponse"
           class c-HttpServletResponse as
                             "javax.servlet.http.HttpServletResponse"
           class c-HttpServletRequest as
                             "javax.servlet.http.HttpServletRequest"
           .
       id division.
       object.
       data division.
       working-storage section.
 
       procedure division.
 
       id division.
       method-id. init as "init".
       linkage section.
       77  cfg object reference c-filter-config.
       procedure division using cfg raising c-ServletException.
       main.
       end method.
 
       id division.
       method-id. c-destroy as "destroy".
       procedure division.
       main.
       end method.
       id division.
       method-id. doFilter as "doFilter".
       working-storage section.
       77  email pic x any length.
       77  uri pic x any length.
       77  http-response  object reference c-HttpServletResponse.
       linkage section.
       77  request object reference c-ServletRequest.
       77  response object reference c-ServletResponse.
       77  f-chain object reference c-filter-chain.
       procedure division using request response f-chain
                        raising c-ServletException j-IOException.
       main.
           accept email from environment "openid.email".
           if email = space
              set http-response to response as c-HttpServletResponse
              http-response:>sendError
                         (c-HttpServletResponse:>SC_FORBIDDEN)
           else
              f-chain:>doFilter (request response)
           end-if.
       end method.
       end object.
```

This program simply checks if the property "openid.email" has been set to a value different from space and in that case it forwards the execution to the next filter in the chain, otherwise it stops the execution with an error code.

This assures you that any program under the URL /servlet, the safe area, will be executed only if previously in the same session, some program has set the property.

You now need to write that program and define it outside the safe area.
