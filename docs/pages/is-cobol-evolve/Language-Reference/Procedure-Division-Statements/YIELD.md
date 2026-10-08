## YIELD

### General Format

```cobol
YIELD
```

### General rules

The YIELD statement is used in conjunction with the STOP THREAD statement. STOP THREAD requires YIELD to work correctly, otherwise, the thread will NOT be released.

### Example

```cobol
         perform thread show-time handle t1.
         ...
         STOP THREAD t1.
         ...
 
     show-time.
         perform until exit
            accept w-time from time
            display w-time line 2 pos 70
            YIELD
         end-perform.
```
