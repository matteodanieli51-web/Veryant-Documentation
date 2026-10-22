### <indexfilesuffix\>

The indexfilesuffix option defines the string to append to index file names. It can be used to define the default index file extension.

If not specified the default data file extension is ".idx".

Any string is accepted. Make sure that your operating system file system accepts the value you specified.

Please remember to specify the dot if you want to use this as part of your file extension.

If you want your files to be created with no file extension, you can set indexfilesuffix to a SPACE character as follows:

```ini
<indexfilesuffix> </indexfilesuffix>
```

#### Example

```ini
<indexfilesuffix>.cix</indexfilesuffix>
```
