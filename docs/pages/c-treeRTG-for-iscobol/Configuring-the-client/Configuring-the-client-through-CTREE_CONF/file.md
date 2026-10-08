### <file\>

The file element specifies file-wide configurations. It is used to delimit options to a specific file identified by the name attribute or to all the files contained in a directory identified by the dir attribute.

The name and dir setting may contain the \* wildcard to match multiple files with a single section. See [Wildcard matching rules](./file#wildcard-matching-rules) below for details.

#### Attributes

| Attribute | Description | Default value |
| --- | --- | --- |
| name | Specifies the string to match the file name portion of the file path passed by the COBOL application. | n/a |
| dir | Specifies the string to match the directory portion of the file path passed by the COBOL application. If attribute name is also specified, the options applies to the files that match both the directory and the name. | n/a |

#### Example

```ini
<file name="CUSTMAST" dir=".">
 
...
 
</file>
```

#### Wildcard matching rules

If the name/dir setting does not contain a \*, the <file\> options apply to the files that match exactly the name/dir setting.

If the name/dir setting begins with a \*, the <file\> options apply to the files for which name/dir ends with the string on the right of the \*. For instance , matches file name "custmast" but does not match file name "master".

If the name/dir setting ends with a \*, the <file\> options apply to the files for which name/dir begins with the string on the left of the \*. For instance <file name="mast*"\>, matches file name "master" but does not match file name "custmast".

If the name/dir setting begins with a \* and ends with a \*, the <file\> options apply to the files which name/dir contains the string enclosed between the \*. For instance <file name="*mast*"\>, matches file name "master" and file name "custmast".

If the name/dir setting contains only a \*, the <file\> options apply to all files.

In case a file matches multiple <file\> rules, the following precedence rules apply:

An exact match has precedence over any wildcard match. For instance, file name "custmast" matches <file name="custmast"\> and does not match <file name="cust*"\>.

In case of multiple wildcard matches, the one with most matching characters takes precedence: For instance, file name "custmast" matches <file name="cust*"\> and does not match <file name="*ast"\>.

In case both name and dir are specified, the sum of the matching characters of both name and dir setting is considered.

In case the sum of matching characters is equal, the rule with the longest matching characters takes precedence: For instance, file name "custmast" matches <file name="cust*" dir="data"\> and does not match <file name="*mast" dir="."\>.

In case the lengths of the settings are equal, alphabetical order is used: For instance, file name "custmast" matches <file name="cust*" dir="."\> and does not match <file name="*mast" dir="."\>.
