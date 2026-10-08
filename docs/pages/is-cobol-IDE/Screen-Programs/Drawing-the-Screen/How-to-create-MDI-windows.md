### How to create MDI windows

It’s possible to create MDI windows with the IDE by respecting the following rules:

- Each MDI window should be managed by a separate program.
- The program that hosts the MDI-PARENT window must call the programs that host the MDI-CHILD windows passing the window handle to them as parameter.
- The programs that host the MDI-CHILD window must include a data item of type *handle of window* in order to receive the MDI-PARENT window handle. Such data item must be used to set the field "upon variable" among *Variables* of the Screen.

Steps to create an MDI-PARENT window:

1. Work in *Structural View*
2. Expand *Screen Section* of the desired program
3. Select the Screen that you want to make an MDI-PARENT
4. Among *Properties*, set "window type" to "MDI-PARENT".

Steps to create an MDI-CHILD window:

1. Work in *Structural View*
2. Expand *Screen Section* of the desired program
3. Select the Screen that you want to make an MDI-CHILD
4. Among *Properties*, set "window type" to "MDI-CHILD"
5. Among *Variables*, set "upon variable" to the Linkage Section data item that receives the MDI-PARENT window handle.
