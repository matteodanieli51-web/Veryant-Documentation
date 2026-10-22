## Server Config

The Server Config section allows you to configure the access to WebClient’s home page and admin functions as well as provide default settings for new WebClient applications.

Some of these settings are duplicated in the Application configuration section and can be overritten at the application level.

1. General

| Entry | Meaning |
| --- | --- |
| Admin Console Url | URL of the Admin Console. This URL will be referenced by the Manage hyperlink in WebClient’s home page. |
| Web Home Folder | Application's home directory for web-related content. This will be the base directory of any relative classpath entries specified. |
| Web Folder | Folder to be used to store customized static web files like HTML, CSS or Javascript. |
| Restricted Resources | Defined path-prefix restricts access to resources only to authenticated users (e.g. '/docs'). Applies to static resources inside 'Web Folder' or packaged with WebClient. (e.g. '/myapp/docs/index.html') |
| Localization Folder | Folder to be used to store customized messages and translations in supported languages. English is available by default. |
| Access-Control-Allow-Private-Network | Configuration of Access-Control-Allow-Private-Network response header. |

1.1 Security

| Entry | Meaning |
| --- | --- |
| Security Module Class Path | Additional classpath for built-in Security module or for defining custom security module.<br>Use the '+' button to add a new entry.<br>Use the 'x' button to remove an entry |
| Security Module Name | **NONE** - No authentication is required to access this application. It’s not good practice to have no authentication for admin functions, especially in production environments. If you wish to disable authentication anyway, do the following:<br><br>1. set Security Module Name to NONE<br>2. In 1.1.2 Security Module Config - Extension click the + button and select "AccessMapping" from the dropdown menu<br>3. In 1.1.2.1. accessmapping click the + button, choose "admin" from the dropdown and toggle the "Everyone?" radio button <br><br>**EMBEDDED** - User authentication is required. Selecting this value will display a pop-up area with the list of current users, allowing you to edit them or to define new users. This is the default. <br>The rules to configure this field are described in [Configuring Users](../Configuring-Users/Configuring-Users). |
| Security Context per Tab | Activates a separate security context for each browser tab |

1.1.1. Security Module Config - General

| Entry | Meaning |
| --- | --- |
| Users | Embedded users.<br>By default only the admin user is present.<br>See [Configuring Users](../Configuring-Users/Configuring-Users) for information about how to add new users. |
| Logout URL | URL where you’re redirect at logout. By default, WebClient’s home page is used. |

1.1.2. Security Module Config - Extension

| Entry | Meaning |
| --- | --- |
| Extensions | List of security extensions enabled |

1.2. Web Security

| Entry | Meaning |
| --- | --- |
| Content-Security-Policy | Configuration of Content-Security-Policy response header. |
| Content-Security-Policy-Report-Only | Configuration of Content-Security-Policy-Report-Only response header. |
| X-Content-Type-Options | Configuration of X-Content-Type-Options response header. |
| X-Frame-Options | Configuration of X-Frame-Options response header. |
| X-XSS-Protection | Configuration of X-XSS-Protection response header. |
| Referrer-Policy | Configuration of Referrer-Policy response header. |
| Permissions-Policy | Configuration of Permissions-Policy response header. |
| Strict-Transport-Security | Configuration of Strict-Transport-Security response header. |
| Cookie SameSite | Value of SameSite cookie attribute. |
| Force secure cookie | **ON** - Force Secure attribute in cookies even in non-secured http connections.<br>**OFF** - Don’t force Secure attribute in cookies in non-secured http connections. |

2. Features

| Entry | Meaning |
| --- | --- |
| Rest Users | Reserved for future use. |

2.1 Data Store

| Entry | Meaning |
| --- | --- |
| Data Store Module Class Path | Reserved for future use. |
| Data Store Module Name | Reserved for future use. |
