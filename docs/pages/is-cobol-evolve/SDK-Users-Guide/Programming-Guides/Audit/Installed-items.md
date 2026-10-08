### Installed items

The necessary tools are installed along with the Isapplication sample in the sub directory sample/isapplication under the isCOBOL installation directory. The folder is structured as follows:

- The *copylib/audit* folder contains:
  - *audit-linkage.wrk*: Copy of Linkage Section for the AUDIT.cbl program. Programs that call AUDIT should include this copy in their Working-Storage Section.
  - *audit.wrk*: Copy of Working-Storage Section items, contains the audit variables
  - *auditlog.sl* and *auditlog.fd* describe the file that contains the audit information
  - *auditfilesettings.sl* and *auditfilesettings.fd* describe the file that contains the audit settings for file operations
  - *auditlogsettings.sl* and *auditlogsettings.fd* describe the file that contains the audit settings for user login/logout and the program execution information

- The *source/audit* folder contains the source code of the audit programs:
  - *AUDIT.cbl*: This program contains the audit function. Call it with with the appropriate op-code to execute audit function:
  - -start and stop the auditlog thread program
  - -pass the name of the logged user to the audit program
  - -load the audit settings from the file
  - -trace the user login and logout
  - -trace the start and the end of a program
  - *AUDITANALYSIS.cbl*: This program allows you to review the audit log in a graphical user interface.
  - *AUDITLOG.cbl*: This program writes the file's audit information into the *auditlog* file. Call this program in a thread at the startup of your program. The copybook called *audit.cpy* includes a paragraph that starts the audit thread and another paragraph that retrieves the information from the AuditTrigger program using the communication between threads.
  - *AUDITSETTINGS.cbl*: This program allows you to configure the audit settings in a graphical user interface.
  - *AuditTrigger.cbl*: The trigger program. This program checks the audit settings and sends the requested operation data thru a thread message to the AUDITLOG program. This COBOL program generates a lot of java classes. The classes of this kind of program must be placed into the Classpath. The code_prefix will not work for the trigger programs.

Follow the instructions in the README file to compile these COBOL programs and enable audit in the Isapplication’s configuration.
