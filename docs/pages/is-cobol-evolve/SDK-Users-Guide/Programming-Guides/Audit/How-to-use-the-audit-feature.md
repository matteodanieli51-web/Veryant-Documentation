### How to use the audit feature

In order to activate the audit feature you create a separate thread that is responsible for logging the user activity on files according to the settings that you configured using the AUDITSETTINGS utility.

The necessary operations are provided by the AUDIT program. The program starts a thread that works along with your program and registers i-o operations to a log. The program’s usage is explained below.

1. Add the audit-linkage.wrk copybook to the Working-Storage Section:

```cobol
       WORKING-STORAGE SECTION.
           copy "audit-linkage.wrk".
```

2. Start the audit thread:

```cobol
           set audit-start-log to true
           call "AUDIT" using audit-link
```

3. Load the AUDIT settings into a table from the *auditfilesettings* file, e.g.:

```cobol
           move "MyUser"           to audit-user-logged
           set audit-load-settings to true 
           call "AUDIT" using audit-link
```

4. Register the logon of the user according to the audit settings:

```cobol
           set audit-register-login   to true
           call "AUDIT" using audit-link.
```

5. Register the start of the execution of a COBOL program according to the audit settings, e.g.:

```cobol
           move "MyProgramName" to audit-prg-to-launch
           set audit-register-pgm-start  to true
           call "AUDIT" using audit-link 
```

6. Call your COBOL program:

```cobol
          call "MyProgramName"
```

7. Register the end of the execution of a COBOL program according to the audit settings:

```cobol
           set audit-register-pgm-end  to true
           call "AUDIT" using audit-link 
```

8. Register the logout of the user according to the audit settings:

```cobol
           set audit-register-logout   to true
           call "AUDIT" using audit-link.
```

9. Stop the audit thread:

```cobol
           set audit-stop-log to true
           call "AUDIT" using audit-link
```

In order to have i-o operations logged, files must be assigned to the AuditTrigger file handler. Refer to the README file in the Isapplication sample for more details and examples.
