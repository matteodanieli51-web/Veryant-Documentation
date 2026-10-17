### Constructor

Creates a new instance of the XMLStream class.

#### General format

```cobol
XMLStream ( Record-Definition )
```

#### Syntax rules

1. *Record-Definition* is a level 01 group data item for which the [IS IDENTIFIED clause](../../../Language-Reference/Data-Division/Data-Description/IS-IDENTIFIED-clause) has been specified.

#### General rules

1. When a new instance of XMLStream is created, the data item identified by *Record-Definition* is associated with the new object.

#### Code example

```cobol
...
configuration section.
repository.
    class xmlStream  as "com.iscobol.rts.XMLStream"
    .
...
working-storage section.
...
77 objXmlStream object reference xmlStream.
01 Record-Definition identified by "Record-Definition".
   (XML fields and/or attributes)
...
procedure division.
...
set objXmlStream to xmlStream:>new(Record-Definition)
...
```

**Note:** *Record-Definition* can be obtained with the help of [STREAM2WRK](../../../SDK-Users-Guide/Utilities/STREAM2WRK) utility.
