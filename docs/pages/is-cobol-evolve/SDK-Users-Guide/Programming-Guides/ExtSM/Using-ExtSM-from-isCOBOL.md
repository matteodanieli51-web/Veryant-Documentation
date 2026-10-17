### Using ExtSM from isCOBOL

The ExtSM implementation must reside in a shared library, whose name is EXTSM (its file name will be libEXTSM.so on Unix-like systems and EXTSM.DLL on Windows).

You can make the runtime invoke ExtSM, instead of the internal sort module, for quicker execution of COBOL SORT and MERGE syntax in your program.

To use ExtSM, the following setting must appear in the configuration.

(for 32 bit ExtSM)

```cobol
iscobol.sort=com.iscobol.extfh.ExtsmSort
```

(for 64 bit ExtSM)

```cobol
iscobol.sort=com.iscobol.extfh3.ExtsmSort
```
