## Online Backup

The Dynamic Dump feature of c-treeRTG provides a safe method of backing up data while the server is operational. An administrator can schedule a dump of specific files, which may be all files necessary for recovery or a subset of them. The dump runs while the server is carrying on normal activity and processing transactions and is transparent to users.

The c-tree server dynamic dump feature uses a simple plain text file script.This script directs the time, location, and frequency that the backup should occur. Set it once, and the server can continue to make unattended data backups as long as it remains operational.

Here is a simple sample script:

```ini
!TIME   23:00:00
!DUMP   /mnt/backup/CTREE.BAK
!DELAY  60
!FREQ   24
!PROTECT
!FILES
*.dat
*.idx
FAIRCOM.FCS
SEQUENCEDT.FCS
!END
```

This script schedules a daily dump, starting at 11:00 PM. This backs up all data and index files along with two critical files in the server working directory. The system will wait until 11:01 PM (that is, 60 seconds delay, after the starting time of 11:00 PM) for all active transactions to complete. Then it will abort any transactions still active and begin the actual backup. Remember, the server continues normal operation once the backup process begins.

The dump data will be saved in the file named CTREE.BAK under /mnt/backup. The dynamic dump backup feature defaults to breaking-up the backup file (stream file) into multiple physical files (segments) of 1GB size.

The keyword !PROTECT, without an argument, when added to a dynamic dump script file causes the non-transaction files to be dumped cleanly by suspending any updates while each file is dumped. At this point, the associated index files for a data file are not guaranteed to be consistent with the data file because the files are not dumped at the same time. Updates are only suspended while the data file is being backed up and normal operation is automatically resumed once the file has been backed up. The keyword !FREQ specifies the interval (in hours) between one backup and another; in the above example we want the backup to be peformed once a day.

For more information about dump script file entries, see [https://docs.faircom.com/doc/faircom-database-backup-guide/database-backup-script-format.htm](https://docs.faircom.com/doc/faircom-database-backup-guide/database-backup-script-format.htm).

There are two ways to schedule dynamic dumps:

- Through server configuration: the c-tree server configuration file (ctsrvr.cfg) may be used to schedule dynamic dumps. In the configuration file, the keyword DUMP is followed by the name of the script file defining the dump. The path to this script is relative to the server's working directory. E.g.

```cobol
DUMP /home/user1/myscripts/dump.txt
```

or

- Through the dynamic dump utility: [ctdump](../c-tree-Utilities/Command-line-utilities/ctdump), is a separate utility for the administrator to use at any time while the server is active.

To schedule an ad hoc dynamic dump with ctdump, while the c-tree server is running, run the ctdump utility passing admin credentials, script file name and (optionally) the c-tree server name as command line parameters; e.g.

```cobol
ctdump admin ADMIN /home/user1/myscripts/dump.txt FAIRCOMS
```

If the command is successful, the following message is shown:

```cobol
Dynamic Dump (home/user1/myscripts/dump.txt) has been scheduled.
```

Once a dynamic dump has completed, files may be used for Dump Recovery and/or Rollback.

### Restoring From a Dynamic Dump

In the event of a catastrophic system failure (for example, a hard drive failure) that renders the transaction logs or the actual data files unreadable, it will be necessary to use a dynamic dump file to restore data to a consistent, well defined state. This is known as a dynamic dump recovery. Should you need to restore files from a c-tree server backup, you use the dynamic dump recovery utility, [ctrdmp](../c-tree-Utilities/Command-line-utilities/ctrdmp).

The ctrdmp utility provides dynamic dump recovery. This utility is itself a c-tree server so there are important points to observe when running it:

- Be sure that no other c-tree server is running when ctrdmp starts because two c-tree servers -perating simultaneously interfere with each other.
• Because it is a c-tree server, ctrdmp generates temporary versions of all system files associated with a c-tree server (i.e., files with the extension ".FCS" as described above). Therefore, the dynamic dump file and the ctrdmp utility should be moved to a directory other than the working directory where the c-tree server undergoing recovery resides. This is so the system files created by the recovery program will not overwrite working c-tree server files.

After taking these preliminary steps, do the following to recover a dynamic dump:

1. Run ctrdump by passing the dynamic dump script file to it, e.g.:

```cobol
ctrdmp /home/user1/myscripts/dump.txt
```

**Note** - The same script file used to perform the dump should be used to restore the dump.

The dump recovery begins automatically and produces a series of messages reporting the progress of the recovery:

- Each recovered/recreated file will be listed as it is completed.
- After all specified files have been recovered, a message is output indicating the recovery log, i.e., the transaction log, is being checked and recovered files were restored back to their state as of a given time, that is, the time the dynamic dump started.

- A message indicating the dump recovery process finished successfully.

If everything is successful, you should see a similar output:

```ini
DR: recreating file: customer.dat
DR: recreating file: customer.idx
DR: recreating file: products.dat
DR: non-transaction file not updated during Dynamic Dump.
Marking file clean...products.dat
DR: recreating file: products.idx
DR: non-transaction file not updated during Dynamic Dump.
Marking file clean...products.idx
DR: recreating file: FAIRCOM.FCS
DR: recreating file: SEQUENCEDT.FCS
DR: recreating system file: S0000000.FCS
DR: recreating system file: S0000001.FCS
DR: recreating system file: L0000001.FCS
DR: restore files to dump time...Wed Sep 10 23:01:00 2014
 
DR: Absolute path names -
DR: deleting system file: S0000000.FCS
DR: deleting system file: S0000001.FCS
DR: deleting system file: L0000001.FCS
DR: Successful Dump Restore Termination
```

**Note** - The following warning is written to the log file for non-transaction files: "non-transaction file not updated during Dynamic Dump".

For more information about dynamic dump, please refer to the c-tree Administration Guide.
