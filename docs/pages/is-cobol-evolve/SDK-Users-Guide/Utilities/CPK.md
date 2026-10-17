## CPK (Color Picker)

The Color Picker (CPK) utility allows you to easily calculate color values to be used by COBOL programs.

### Usage:

```cobol
cpk
```

or

```cobol
iscrun -utility cpk
```

![](../../images/CPK.PNG)

Drag the sliders or type numbers between 0 and 255 in the fields until you see the desired colors in the title box at the top of the dialog. The chosen color values are shown below, along with syntax snippets that you can copy to clipboard.

### Thin Client and headless systems

CPK can be used in thin client environment as well. Use this command to start it:

```cobol
iscclient -hostname <server-ip> -port <server-port> -utility cpk
```

The thin client technology allows you to run the utility on a headless server. Start the isCOBOL Server on the headless server and launch the utility with the thin client from your PC; in this way the utility operates on the headless server while the utility GUI is shown on your PC.
