## Guidelines for writing a web application

WebDirect allows you to bring GUI COBOL programs into the web without major modifications.

Each COBOL program with a Screen Section containing graphical controls can run as a web application with WebDirect.

However, not all GUI features are supported by WebDirect. If you plan to bring an existing COBOL application into the web it is strongly suggested you compile all sources with the -*wd2* option. When using this option, the isCOBOL Compiler will alert you with warning messages if an unsupported feature is being used. For example, the following Frame definition

```cobol
           03 fr frame
              line 2, col 2
              lines 10 size 30
              height-in-cells
              width-in-cells
              full-height
              fill-color 2, fill-percent 50
```

Will produce the following warning at compile time:

```cobol
--W: #179 WD2: Unsupported FULL-HEIGHT in FRAME control;
--W: #179 WD2: Unsupported FILL-PERCENT in FRAME control;
```

More details about the unsupported features are provided in [Known limitations and differences between Swing and WebDirect](./Known-limitations-and-differences-between-Swing-and-WebDirect).

In order to produce a fast web application, it is strongly suggested you:

- Reduce the number of controls in the screen
- Avoid using embedded and event procedures if not necessary
