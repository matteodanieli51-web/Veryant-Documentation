#### Array of arrays

Java doesn’t provide multidimensional arrays. The concept of a multidimensional array is implicitly translated to an array of arrays.

COBOL is the opposite. It has multidimensional arrays and does not support implicit arrays of arrays.

For the above reason, a Java code like this

```cobol
public class arrays {
    public static void main (String[] args) {
        String[][] strarr = new String[3][2];
        String[] subarr = new String[2];
        subarr[0] = "OK";
        subarr[1] = "OK";
        strarr[0] = subarr;
        System.out.println (strarr[0][0]);
        System.out.println (strarr[0][1]);
    }
}
```

cannot be translated to COBOL as follows:

```cobol
program-id. arrays.
       configuration section.
       repository.
           class StringArr1 as "java.lang.String[]"
           class StringArr2 as "java.lang.String[][]"
           .
       working-storage section.
       77 subarr object reference StringArr1.
       77 strarr object reference StringArr2.
 
       procedure division.
       main.
           set strarr to StringArr2:>new(3, 2).
           set subarr to StringArr1:>new(2).
           set subarr(0) to "OK".
           set subarr(1) to "OK".
           set strarr(0) to subarr.
           display strarr(0, 0) upon sysout.
           display strarr(0, 1) upon sysout.
           goback.
```

The correct translation is the following:

```cobol
       program-id. arrays.
       configuration section.
       repository.
           class StringArr1 as "java.lang.String[]"
           class StringArr2 as "java.lang.String[][]"
           .
       working-storage section.
       77 subarr object reference StringArr1.
       77 strarr object reference StringArr2.
       77 i      pic 9(3).
 
       procedure division.
       main.
           set strarr to StringArr2:>new(3, 2).
           set subarr to StringArr1:>new(2).
           set subarr(0) to "OK".
           set subarr(1) to "OK".
           perform varying i from 0 by 1 until i = subarr:>length()
              set strarr(0, i) to subarr(i)
           end-perform.
           display strarr(0, 0) upon sysout.
           display strarr(0, 1) upon sysout.
           goback.
```
