### Program Examples

The following example programs show how a C language routine can be called from isCOBOL:

The C source file “calltest.c” has these lines:

```cobol
#include <stdio.h>
calltestc(int *pitem1)
{
      printf("item1 = %x\n", *pitem1);
}
```

Compile this routine using the C compiler, then link it into a shared object library called “calltestc.so”.

The programmer can access this shared object library from COBOL in one of two ways:

- Use the CALL statement to load the library “calltestc.so”, making its routines available for subsequent CALL statements

-or-

- Set the isCOBOL property “iscobol.shared_library_list=calltestc.so”. The isCOBOL framework automatically loads “calltestc.so” making its routines available for subsequent CALL statements.

The isCOBOL program called, “calltest.cbl” has the following lines (Notice how the data variable item-1 is declared with storage to complement the C language routine it will be calling.):

```cobol
       id division.
       program-id. calltest.
       data division.
       working-storage section.
       77 item-1 pic 9(8) comp-5.
       procedure division.
            move x#7fff to item-1.
            display item-1.
      * comment – delete the following line if using the
      *  iscobol.shared_library_list method:
       call "calltestc.so".
 
       call "calltestc" using item-1.
```

More examples can be found in the $ISCOBOL_HOME/sample/is-c folder installed with isCOBOL
