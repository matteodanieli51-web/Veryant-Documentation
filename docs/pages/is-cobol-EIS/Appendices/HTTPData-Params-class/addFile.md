### addFile

Adds a disk file to the parameters. This method is useful to implement file upload features. The parameter created by this method is suitable for the [doPostMultipart](../HTTPClient-class/doPostMultipart) method.

#### Format 1

```cobol
void addFile ( paramName, fileName )
```

#### Format 2

```cobol
void addFile ( paramName, fileName, mimeType )
```

#### Syntax rules

1. *paramName* is an alphanumeric data item that specifies the parameter name.
2. *fileName* is an alphanumeric data item that specifies the disk file name.
3. *mimeType* is an alphanumeric data item that specifies the MIME type.

#### General Rules

1. *fileName* can be either just the file base name, a relative file path or an absolute file path.
2. In Format 1, the MIME type is automatically set to "application/octet-stream".

#### Example

Add the file C:/Downloads/data.zip:

```cobol
...
       configuration section.
       repository.
          class http-params as "com.iscobol.rts.HTTPData.Params"
...
       working-storage section.
...
       77 params object reference http-params.
...
       procedure division.
...
           params:>addFile("data.zip", "C:/Downloads/data.zip").
```
