## Problems working with the c-tree Server Windows Service

### Problems starting the c-tree Server Service

If the c-tree Server Service fails to start, check the log file CSTATUS.FCS generated in the c-tree Server’s local directory. By default CTSTATUS.FCS is generated in the *data* subfolder. A possible startup failure condition is the lack of a valid license.

If CTSTATUS.FCS doesn’t include any useful error message, then check the Windows Event Log.

### Problems connecting to the c-tree Server Service

If client applications are unable to connect to the c-tree Server Service, verify that the c-tree Server Service is running. If the c-tree Server Service is running, check its status log file (CTSTATUS.FCS) for the following information:

1. Are there any error messages logged to CTSTATUS.FCS?
2. Is the Server Name displayed in CTSTATUS.FCS the same Server Name your client applications are using?
3. Are the protocols displayed in CTSTATUS.FCS the same as those your client applications are using?

Faircom's [ctadmn](../c-tree-Utilities/Command-line-utilities/ctadmn/ctadmn) utility is also a useful tool for verifying whether clients can connect to the c-tree Server Service

### Problems stopping the c-tree Server Service

If you are unable to stop the c-tree Server Service, check the event log for an error message.

Also check for error messages in the c-tree Server status log file (CTSTATUS.FCS).

Faircom's [ctadmn](../c-tree-Utilities/Command-line-utilities/ctadmn/ctadmn) utility can also be used to stop the c-tree Server Service.
