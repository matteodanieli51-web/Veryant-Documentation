## COMMIT

### General Format

```cobol
COMMIT TRANSACTION
```

### General rules

1. When this statement is executed, all locked records owned by the current transaction are unlocked.
2. The function of COMMIT depends on whether or not it ends a transaction. For file systems used via EXTFH property handler linked with the runtime, each system's native mechanism for transaction management is invoked.
3. When ROLLBACK is enabled in the FILE-CONTROL entry for a file, the record and file locking rules are extended for that file. Updated records in a transaction are locked until COMMITed or cancelled with the ROLLBACK statement.
4. During a transaction involving indexed or relative files, a CLOSE of a file that is locked, or that has locked records, is postponed until the transaction is committed or rolled back.

### Examples

Commit a transaction after several records were modified

```cobol
*> This sample will work only with a file system that supports transactions
*> The select should include lock clause with rollback: lock automatic with rollback
...
input-output section.
file-control.
select invoices assign to inv-path
   organization indexed
   access dynamic
   record key cust-code
   lock mode manual with rollback |the rollback clause is required to
   status inv-status.             |activate transaction management
...
procedure division.
...
   start transaction
   display "Customer to apply 10% discount? "
   accept ws-cust-code
   move ws-cust-code to cust-code
   read customers 
        invalid key display message "Customer not found"
                    rollback
                    exit paragraph
   end-read
   accept ws-date from date
   move ws-date to cust-last-date-discount
   rewrite cust-rec
   move ws-cust-code to inv-cust-code
   start invoices key = inv-cust-code
         invalid key set end-of-invoices to true
         not invalid key set end-of-invoices to false
   end-start
   perform until end-of-invoices
     read invoices next at end exit perform
          not at end 
              if inv-cust-code not = ws-cust-code
                 exit perform
              end-if
     end-read
     if inv-paid-status = "N"
        move 10 to inv-discount
        rewrite invoice-rec
     end-if
   end-perform
   display "Changes applied, confirm Commit: (Y/N)"
   accept apply-commit
   if apply-commit = "Y"
      commit *> All changes are definitely applied
   else
      rollback *> All changes get undone
   end-if.
```
