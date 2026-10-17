#### -tron

Defines the type of data safety.

Usage

```shell
ctutil -tron file option
```

- *file* is the name of the c-tree file. The default file extension (that is ".dat" if not configured differently) must be omitted. Relative paths are resolved according to the c-tree server working directory
- *option* can be one of the following:
  - T - Enable full transaction processing control (ctTRNLOG c-tree file mode). This mode is recommended for most applications and it is required to take full advantage of c-tree Server's advanced features. Avoid it when performance is more important than data safety.
  - P - Enable logical transaction processing control without logging (ctPREIMG c-tree file mode). This is the default mode and is indicated where both transaction atomicity and high performance are required. By suppressing transaction logging it is possible to achieve high data throughput at the expense of data recoverability. This mode is recommended in environments protected by system crash or in case data integrity/recoverability is not an issue.
  - W - Synchronous writes (ctWRITETHRU c-tree file mode). This mode is indicated where transaction processing in not suitable yet data safety is still critical.
  - F - Asynchronous writes. This mode should only be used on files in which data integrity is not critical as data recovery is not guaranteed in case of a system crash.
