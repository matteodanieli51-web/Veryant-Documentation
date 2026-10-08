#### DOC Directive

The DOC directive allows you to include Javadoc comments into the compiled class.

```cobol
  >>DOC
  *  Text
  *  Text
  *  Text
  >>END-DOC
```

Or

```cobol
  *((DOC))
  *  Text
  *  Text
  *  Text
  *((END-DOC))
```

Or

```cobol
  *>((DOC))
  *> Text
  *> Text
  *> Text
  *>((END-DOC))
```

Or

```cobol
  $DOC
  *  Text
  *  Text
  *  Text
    $END-DOC
```

##### Syntax

1. The directive must appear over a [PROGRAM-ID Paragraph](\), a [CLASS-ID Paragraph](\) or a [METHOD-ID Paragraph](\). When used elsewhere it's treated as commentary.
2. The text between DOC and END-DOC must be prefixed by the proper comment marker depending on the source format. The source format also limits the length of each line of text.
3. If END-DOC is omitted, the whole block is treated as commentary.

##### Example

Describe the scope of a method in a CLASS-ID program:

```cobol
      >>doc
      * The checkEmailAddr method verifies the correctness of an email
      * address. The address must include the @ character and a dot to
      * be considered as valid. The method returns true if the email 
      * address is valid or false otherwise.
      >>end-doc 
       identification division.
       method-id. checkEmailAddr as "checkEmailAddr".
       ...
```
