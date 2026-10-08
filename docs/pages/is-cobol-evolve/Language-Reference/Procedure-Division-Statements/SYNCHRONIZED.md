## SYNCHRONIZED

### General Format

```cobol
SYNCHRONIZED
 
  [ ON Sync-Var ]
 
    [Statement-1]
    [Statement-2]
    [Statement-n]
 
[END-SYNCHRONIZED]
```

### Syntax Rules

1. Statement-1 through statement-n represent either one or more imperative statements or a conditional statement optionally preceded by one or more imperative statements.
2. Sync-Var is any item defined in the Data Division.

### General rules

1. SYNCHRONIZED statement allows you to synchronize a block of statements when running in mutithread environment. When a thread is executing the statements of a synchronized block, other threads instructed to execute the same block of statements block will wait for the first thread to finish.
2. When the ON clause is specified, Sync-Var becomes the lock, otherwise the block itself is the lock. Two blocks that are synchronized on the same Sync-Var can’t be executed at the same time.

### Examples

**Scenario 1** - Multiple threads in the same program.

The following code may set the item varx to a unexpected value because it’s not safe to access the same data items from different threads:

```cobol
 working-storage section.
 77 t1     handle of thread.
 77 t2     handle of thread.
 77 t3     handle of thread.
 77 varx   pic XX.
 procedure division.
 main.
    move "AA" to varx
    perform thread p1 handle t1.
    perform thread p2 handle t2.
    perform thread p3 handle t3.
    ACCEPT OMITTED
    STOP RUN. 
 p1.      
     perform UNTIL 1 = 2
       MOVE "AA" TO varx
     end-perform.   
 p2.      
     perform UNTIL 1 = 2
       MOVE "BB" TO varx
     end-perform.   
 p3.      
     perform UNTIL 1 = 2
       IF varx = "AA" or "BB"
          continue
       ELSE
          display "Unexpected condition! varx=" varx
          STOP RUN
       END-IF
     end-perform. 
```

Synchronizing the access to varx as follows, resolves the issue:

```cobol
 working-storage section.
 77 t1     handle of thread.
 77 t2     handle of thread.
 77 t3     handle of thread.
 77 varx   pic XX.
 procedure division.
 main.
    move "AA" to varx
    perform thread p1 handle t1.
    perform thread p2 handle t2.
    perform thread p3 handle t3.
    ACCEPT OMITTED
    STOP RUN. 
 p1.      
     perform UNTIL 1 = 2
       SYNCHRONIZED
       MOVE "AA" TO varx
       END-SYNCHRONIZED
     end-perform.   
 p2.      
     perform UNTIL 1 = 2
       SYNCHRONIZED
       MOVE "BB" TO varx
       END-SYNCHRONIZED
     end-perform.   
 p3.      
     perform UNTIL 1 = 2
       SYNCHRONIZED
       IF varx = "AA" or "BB"
          continue
       ELSE
          display "Unexpected condition! varx=" varx
          STOP RUN
       END-IF
       END-SYNCHRONIZED
     end-perform. 
```

The following is a similar case that reproduces a different problematic condition: instead of setting items to an undefined value, it generates an internal error for concurrent access to the same group data item:

```cobol
 working-storage section.
 77 t1     handle of thread.
 77 t2     handle of thread.
 77 t3     handle of thread.
 01 vars.
    03 var1   pic 9(3).
    03 var2   pic 9(5).
 procedure division.
 main.
    move 1 to var1
    move 2 to var2
    perform thread P1 handle t1.
    perform thread P2 handle t2.
    perform thread P3 handle t3.
    ACCEPT OMITTED
    STOP RUN. 
 p1.      
     perform UNTIL 1 = 2
       MOVE 1 TO var1
     end-perform.   
 p2.      
     perform UNTIL 1 = 2
       MOVE 2 TO var2
     end-perform.   
 p3.      
     perform UNTIL 1 = 2
       add 1 to var1
       add 1 to var2
     end-perform.
```

Also in this case, using the SYNCHRONIZED statement will fix the issue:

```cobol
 working-storage section.
 77 t1     handle of thread.
 77 t2     handle of thread.
 77 t3     handle of thread.
 01 vars.
    03 var1   pic 9(3).
    03 var2   pic 9(5).
 procedure division.
 main.
    move 1 to var1
    move 2 to var2
    perform thread P1 handle t1.
    perform thread P2 handle t2.
    perform thread P3 handle t3.
    ACCEPT OMITTED
    STOP RUN. 
 p1.      
     perform UNTIL 1 = 2
       SYNCHRONIZED
       MOVE 1 TO var1
       END-SYNCHRONIZED
     end-perform.   
 p2.      
     perform UNTIL 1 = 2
       SYNCHRONIZED
       MOVE 2 TO var2
       END-SYNCHRONIZED
     end-perform.   
 p3.      
     perform UNTIL 1 = 2
       SYNCHRONIZED
       add 1 to var1
       add 1 to var2
       END-SYNCHRONIZED
     end-perform.
```

**Scenario 2** - Multiple threads identified by different programs.

Running PROGA that calls in thread PROGB, you will obtain an internal error because the two programs are accessing the same group data item at the same time:

```cobol
       program-id. proga.
       working-storage section.
       77 t1     handle of thread.
       01 vars.
          03 var1   pic 9(3).
          03 var2   pic 9(5).
       procedure division.
       main.
          move 1 to var1
          move 2 to var2
          call thread "progb" handle in t1 using vars.
          call "c$sleep" using 1
          perform para2.
          ACCEPT OMITTED
          STOP RUN. 
       para2.      
           perform UNTIL 1 = 2
             MOVE 2 TO var1
             MOVE 2 TO var2
           end-perform.  
```

```cobol
       program-id. progb.
       working-storage section.
       linkage section.
       01 vars.
          03 var1   pic 9(3).
          03 var2   pic 9(5).
       procedure division using vars.
       main.
           perform UNTIL 1 = 2
             MOVE 1 TO var1
             MOVE 1 TO var2
           end-perform.   
           goback.
```

In this case it’s not enough to synchronize the problematic code in the two programs. Since the two threads are in separate programs, the program itself can’t be the synchronizing object. You need a third item, a class that shares a lock for both programs, e.g.

```cobol
       identification division.
       class-id. myclass as "myclass".
      
       identification division.
       factory.
       working-storage section.
       public.
       77 MYLOCK  pic x.
      
       procedure division.
      
       end factory.
```

```cobol
       program-id. proga.
       configuration section.
       repository.
           class myclass as "myclass".
       working-storage section.
       77 t1     handle of thread.
       01 vars.
          03 var1   pic 9(3).
          03 var2   pic 9(5).
       procedure division.
       main.
          move 1 to var1
          move 2 to var2
          call thread "progb" handle in t1 using vars.
          call "c$sleep" using 1
          perform para2.
          ACCEPT OMITTED
          STOP RUN. 
       para2.      
           perform UNTIL 1 = 2
            SYNCHRONIZED on myclass:>MYLOCK
             MOVE 2 TO var1
             MOVE 2 TO var2
            END-SYNCHRONIZED
           end-perform.  
```

```cobol
       program-id. progb.
       configuration section.
       repository.
           class myclass as "myclass".
       working-storage section.
       linkage section.
       01 vars.
          03 var1   pic 9(3).
          03 var2   pic 9(5).
       procedure division using vars.
       main.
           perform UNTIL 1 = 2
            SYNCHRONIZED on myclass:>MYLOCK
              MOVE 1 TO var1
              MOVE 1 TO var2
            END-SYNCHRONIZED
           end-perform.   
           goback.
```
