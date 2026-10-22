### VisionJ

isCOBOL provides a 100% Java-based interface to the Vision file system: VisionJ.

You can read and edit existing files created by ACUCOBOL-GT as well as create new Vision files.

You can lock a file or a record against other isCOBOL runtime sessions or ACUCOBOL-GT runtime sessions.

Being 100% Java-based, the VisionJ allows you to use Vision files on a wide range of platforms, from mainframes to handheld mobile devices.

The following Vision file formats are supported:

- Vision 3
- Vision 4
- Vision 5
- Vision 6

Transactions are supported without logging.

Compressed files are supported, encrypted files are not.

#### Configuration

The VisionJ behavior is affected by the generic configuration properties for [File Handling Configuration](../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration), such as [iscobol.file.prefix](../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) and [iscobol.file.suffix](../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration).

There are also some specific configuration properties that affect only VisionJ:

- [iscobol.visionj.v_apply_signature](../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration)
- [iscobol.visionj.v_buffers_per_file \*](../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration)
- [iscobol.visionj.v_compress_factor](../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration)
- [iscobol.visionj.v_force_open](../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration)
- [iscobol.visionj.v_index_block_percent](../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration)
- [iscobol.visionj.v_internal_locks](../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration)
- [iscobol.visionj.v_lock_method](../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration)
- [iscobol.visionj.v_locks_per_file](../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration)
- [iscobol.visionj.v_mark_read_corrupt](../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration)
- [iscobol.visionj.v_max_files \*](../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration)
- [iscobol.visionj.v_open_strict (boolean)](../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration)
- [iscobol.visionj.v_read_ahead (boolean) \*](../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration)
- [iscobol.visionj.v_seg_size](../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration)
- [iscobol.visionj.v_strip_dot_extension (boolean)](../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration)
- [iscobol.visionj.v_version](../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration)
