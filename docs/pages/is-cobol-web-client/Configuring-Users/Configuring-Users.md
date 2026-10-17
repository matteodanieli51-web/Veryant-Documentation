# Configuring Users

By default only the Admin user exists and a login is required only for administration operations like creating and configuring applications.

It’s possible to create additional users and configure the applications to ask for user credentials when the session starts.

Users can be configured through the WebClient Admin Console.

By default, the Admin Console is reachable via HTTP on the port 8090 of the server where you started the webclient-admin service, i.e.

```cobol
http://localhost:8090
```

Refer to [Jetty Configuration](../JETTY-and-JMS-Configuration) for instructions about how to use a different port.

The Admin credentials are required in order to access the Configuration page.

## Roles

WebClient users can be assigned the following roles:

| Role | Permissions |
| --- | --- |
| admin | create new users<br>create new applications<br>change the configuration of an application<br>monitor the activity of connected users<br>run an application |
| support | view the configuration of an application<br>monitor the activity of connected users<br>run an application |
| <none\> | run an application |

Only admin and support users have access to the Dashboard.

## Security Modules

Security can be configured for the server and per application separately. Using different user base per application and for Admin Console access enables easy multi-tenant deployments.

To set up security for the server, use the Security fields in [Server Config](../Applications-Monitoring-and-Configuration/Server-Config).

To set up security for a single application, use the Security fields in the [Web Config](../Applications-Monitoring-and-Configuration/Applications/Change-the-application-configuration/Change-the-application-configuration#web-config) section of the app configuration. By default, *Security Module Name* in the app configuration is set to INHERITED and the app uses the security module configured in [Server Config](../Applications-Monitoring-and-Configuration/Server-Config), but you can change it to any of the values described below.

Both server and application security can be configured with one of the following methods:

| | |
| --- | --- |
| NONE | Setting the *Security Module Name* field to NONE allows all users to access WebClient without authentication. This is not good practice. |
| EMBEDDED | This is the default security module. Users credentials and roles are saved in the *webclient.config* file along with the apps configuration.<br>See [Embedded users configuration](./Embedded-users-configuration) for details. |
| DATABASE | This module allows WebClient to read users credentials and roles from a JDBC datasource.<br>See [Reading Users from a JDBC data source](./Reading-Users-from-a-JDBC-data-source) for details. |
| PROPERTY_FILE | This module allows WebClient to read users from a property file.<br>See [Reading users from a property file](./Reading-users-from-a-property-file) for details. |
| SAML2 | This module allows WebClient to authenticate users through SAML2.<br>See [SAML2 authentication](./SAML2-authentication) for details. |
| *Custom module* | This module allows WebClient to authenticate users through a custom class.<br>See [Custom authentication](./Custom-authentication) for details. |
| | |

**Note** - regardless of the method that you choose for configuring users, ensure you have at least one user with role “admin”, otherwise it will not be possible to alter the WebClient configuration.
