### Constructor

Creates a new instance of the efdParser class.

#### General format

```cobol
efdParser
```

#### Code example

```cobol
...
configuration section.
repository.
    class efdParser  as "com.iscobol.lib.efdParser"
    .
...
working-storage section.
...
77 efd-parser object reference efdParser.
...
procedure division.
...
set efd-parser to efdParser:>new()
...
```

**Note** - if your program is compiled with [-cp](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option, use *com.iscobol.lib_n.efdParser* instead of *com.iscobol.lib.efdParser*.
