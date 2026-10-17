## Framework improvements

The new release features a new modeless print preview window. Prior to version 2018R2 print preview windows were modal.

The new audit feature allows the auditing of the I/O processing taking place in the application, without requiring code changes.

### Print Preview

isCOBOL Print Preview is now a modeless window allowing multiple simultaneous preview windows. The user can switch between opened preview windows by clicking on them.

### Audit feature

The audit feature builds on top of the I/O Trigger file technology, allowing COBOL developers to add logging on all I/O operations without source code modifications.

The isCOBOL 2018R2 GUI tool provides an easy way to configure the auditing features - specifying users, operations, and files on which auditing is triggered. Auditing can be configured to trigger on all users accessing one or more files, or on specific operations such as delete operations executed from users on a specific file.

The auditing feature is written in COBOL and provided as source code, to be easily customized to any environment and use case.
