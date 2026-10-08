## isCOBOL Runtime

The isCOBOL 2023 R2 runtime includes new configuration settings to customize the behavior for JDBC data access and environment.

### New configuration settings

New supported configurations settings have been added in this release:

- *iscobol.env.trunc_on_null=true* can be used to truncate an accepted environment variable to the first low-value when storing it in the COBOL variable. This can be used as a compatibility option with MicroFocus and ACUCOBOL-GT. If set to the default value of false the full value, including low-values, will be returned.
- *iscobol.esql.picx_handling=n* to set the mapping of database character fields to PIC X host variables. If set to the value of 2, the runtime detects the database field type, and sets the COBOL data item accordingly. When set to 1, the runtime assumes all database fields to be binary. This is an uncommon situation, and should be used rarely. When set to the default value of 0, this feature is disabled, and the data items will be handled according to the $SQL compiler directive. With previous isCOBOL versions, or when this setting is 0, it is the programmer’s responsibility to describe the data items in the COBOL working-storage using the $SQL compiler directive to allow the runtime to correctly map binary database fields, otherwise the runtime defaults to character fields.

- *iscobol.national.acu_compatibility=true* to use standard Ascii characters in 2 bytes in PIC G or PIC N when compiled using the -cndbcs option. The default value is false to continue using standard Ascii characters in 1 byte, and it is useful for MicroFocus compatibility. For ACUCOBOL-GT compatibility, a value of true should be used.

A new method has been added in com.iscobol.java.IsCobol class to check if a program is available. This is useful in environments where Java applications need to check the existence of a Cobol program before calling it. The signature of the new method is:

```cobol
public static boolean exists(String programName)
```
