### COLOR clause

The COLOR clause causes the data to be shown with a particular color.

#### Format 1

```cobol
COLOR IS {Data-Name-1}
         {Numeric-Literal-1}
```

#### Format 2

```cobol
BACKGROUND-COLOR IS [RGB] {Data-Name-2}
                          {Numeric-Literal-2}
FOREGROUND-COLOR IS [RGB] {Data-Name-2}
                          {Numeric-Literal-2}
```

#### Format 3

```cobol
BACKGROUND IS Color-Name-1
FOREGROUND IS Color-Name-1
```

#### Syntax rules

1. *Data-Name-1* and *Data-Name-2* are [User-defined word](../../Preface/Definitions#user-defined-word)s, as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.
2. *Numeric-Literal-1* and *Numeric-Literal-2* are [Numeric Literal](../../Preface/Definitions#numeric-literal)s, as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.
3. *Color-Name-1* may be any properly formed user-defined word that names a color known to the runtime system. The default names known to the runtime system are: BLACK, BLUE, GREEN, CYAN, RED, MAGENTA, BROWN and WHITE.

#### General Rules

##### Formats 1 and 2

1. See [Color management](../Color-management) for more information.

##### Format 3

1. The BACKGROUND clause causes the background of the screen field to be shown in the specified color.
2. The FOREGROUND clause causes the foreground of the screen field to be shown in the specified color.
