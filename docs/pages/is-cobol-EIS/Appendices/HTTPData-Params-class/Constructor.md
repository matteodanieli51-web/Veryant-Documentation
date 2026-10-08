### Constructor

Creates a new instance of the HTTPData.Params class.

#### General format

```cobol
HTTPData.Params
```

#### General rules

1. A reference to HTTPData.Params should be defined in the program’s Working-Storage Section.

#### Example

Createa a new set of params:

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
       set params to http-params:>new().
...
```
