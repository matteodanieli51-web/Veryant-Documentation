#### Lock behaviors

Java SE 6 throws an OverlappingFileLockException if an application attempts to lock a region that overlaps a region locked through another FileChannel instance. Previous versions did not check for file locks obtained by other FileChannel instances. Java SE 6 has added the system property sun.nio.ch.disableSystemWideOverlappingFileLockCheck to control java.nio.channels.FileChannel.lock file checking behavior.

When using Java SE 6 or higher, this property must be set to true, otherwise an unexpected lock condition occurs when a JISAM file is open by two programs in the same runtime session. The following snippet shows how to launch a COBOL program with the necessary setting:

```cobol
iscrun -J-Dsun.nio.ch.disableSystemWideOverlappingFileLockCheck=true ProgramName
```

In addition to the above setting, the lock behavior can be configured through the following Framework Properties:

- [iscobol.jisam.autolock_allowed (boolean)](../../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration)
- [iscobol.file.index.lock_read_anyhow (boolean) \*](../../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration)
- [iscobol.file.index.lock_wait (boolean) \*](../../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration)
- [iscobol.file.index.read_lock_test (boolean) \*](../../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration)

These properties have the same effect regardless of the Java version.

On Windows, when a lock is interrupted, it is kept for a while by the system. In thin client environment this behavior causes that, if a client is interrupted during a locking operation, the other clients get a *file locked* error.
