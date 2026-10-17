### Generating bridge programs for programs with entry points

If the COBOL program includes entry points, the ServiceBridge facility generates additional bridge programs, one for each entry point.

For example, by compiling the following code:

```cobol
      $set "servicebridge" "1"
      $set "servicebridge.type" "rest"
       program-id. foo.
       linkage section.
       01 main-params.
          ...
       01 entry1-params.
          ...
       01 entry2-params.
          ...
       procedure division using main-params.
       main.
           ...
       entry "entry1" using entry1-params.
           ...
       entry "entry2" using entry1-params.
           ...
```

you will obtain:

- restfoo.cbl
- restentry1.cbl
- restentry2.cbl

When compiling multiple programs at once, if the same entry point name is used in more than one program, the bridge class for that entry point is the one from the last compiled program.
