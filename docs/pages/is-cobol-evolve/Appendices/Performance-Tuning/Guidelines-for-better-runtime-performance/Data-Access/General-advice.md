#### General advice

The following suggestions are applicable to data access, regardless of the file handler in use:

- Sequential files can be created in memory. If you need a temporary sequential file there is no need to create it on disk. You can obtain better performance by creating the file in memory. The syntax to define a memory file is:

```cobol
INPUT-OUTPUT SECTION.
FILE-CONTROL.
select my-file assign to address memory-area
  ....
WORKING-STORAGE SECTION.
77 memory-area pic x any length.
```

- In thin client and file server environments, avoid setting [iscobol.file.lock_manager \*](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file_lockmanager), if possible, especially when there are a lot of clients connected simultaneously (e.g. more than 100 clients).
- The files that are used very often should reside on a solid-state drive (SSD) or a RAM disk.
- When the runtime is running on a different machine than the data base, the network speed and latency might be a bottleneck for the performance.
