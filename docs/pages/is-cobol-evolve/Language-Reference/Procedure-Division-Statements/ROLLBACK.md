## ROLLBACK

### General Format

```cobol
ROLLBACK TRANSACTION
```

### General rules

Each system's native mechanism for transaction management is invoked.

1. When ROLLBACK is enabled in the FILE-CONTROL entry for a file, the record and file locking rules are extended for that file. ROLLBACK verb removes these locks.
2. If an Indexed or Relative data file is CLOSEd during a transaction the CLOSE will wait for the completed ROLLBACK.
3. If an abnormal end of program occurs, an automatic rollback is initiated.

### Examples

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
