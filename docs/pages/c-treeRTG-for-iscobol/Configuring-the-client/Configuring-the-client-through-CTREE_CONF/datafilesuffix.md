### <datafilesuffix\>

The datafilesuffix option defines the string to append to data file names. It can be used to define the default data file extension.

If not specified the default data file extension is ".dat".

Any string is accepted. Make sure your operating system file system accepts the value you specify.

Please remember to specify the dot if you want to use this as part of your file extension.

If you want your files to be created with no file extension, you can set datafilesuffix to a SPACE character as follows:

```ini
<datafilesuffix> </datafilesuffix>
```

#### Example

```ini
<datafilesuffix>.cdt</datafilesuffix>
```
