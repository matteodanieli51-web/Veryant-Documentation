## ALTER

### General Format

```cobol
ALTER { Procedure-Name-1 TO [ PROCEED TO ] Procedure-Name-2 } ...
```

### General Rules

1. Procedure-Name-1 must contain only a GO TO statement without DEPENDING clause.
2. The statement causes the GO TO statement in Procedure-Name-1 to transfer the control to Procedure-Name-2 instead of the declared paragraph.

**Note** - This statement is obsolete and not fully supported. In COBOL Programs the runtime will generate a warning, and in COBOL Classes, the runtime will generate a severe compiler error.

### Examples

Compute simple or complex tax doing an alter of a go to.

```cobol
main.
   perform tax-main thru tax-exit
   display message ws-tax
   goback.
 
 tax-main.
   if tax-type = "complex" 
      alter go-to-compute-tax to proceed to compute-complex-tax
   end-if.
 
 go-to-compute-tax.
   go to compute-simple-tax.
 
 compute-complex-tax.
   compute ws-tax = ws-amount * ws-base-percent * ws-tax-rate
   go to tax-exit.
 
 compute-simple-tax.
   compute ws-tax = ws-amount * ws-tax-rate.
 
 tax-exit.
   exit.
```
