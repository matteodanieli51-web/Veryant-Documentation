### Using RGB

A more flexible and precise way to define colors is RGB.

The RGB color model is an additive color model in which red, green, and blue light are added together in various ways. The name of the model comes from the initials of the three additive primary colors, red, green, and blue.

RGB colors can be specified for all those properties that define either a foreground or a background color, such as FOREGROUND-COLOR and BACKGROUND-COLOR. Properties that can define both, such as COLOR, must be set [Using standard COBOL values](./Using-standard-COBOL-values/Using-standard-COBOL-values).

RGB color is a number that can be calculated using the following formula:

*Red \* 2^16 + Green \* 2^8 + Blue \* 2^0*

*Red*, *Green* and *Blue* can range from 0 to 255.

When the RGB color is applied to a background element, transparency can be defined, too:

*Alpha \* 2^24 + Red \* 2^16 + Green \* 2^8 + Blue \* 2^0*

*Alpha* can range from 1 (transparent) to 127 (opaque). A value of 0 means no transparency.

The RGB color can be expressed in multiple forms:

- Using the RGB keyword followed by the hex representation of the color. For example, given the color R=255, G=204 and B=204 (a low intensity pink), you can write "RGB X#FFCCCC", where FF and CC are the hex representation of the decimal values 255 and 204 respectively.
- Using the RGB keyword followed by the decimal representation of the color. For example, given the color R=255, G=204 and B=204 (a low intensity pink), you can write "RGB 16764108", where 16764108 is the result of the calculation explained above.
- Using the negative decimal representation of the color. For example, given the color R=255, G=204 and B=204 (a low intensity pink), you can write -16764108, where "-16764108" is the result of the calculation explained above multiplied by -1.

In practice, putting the RGB keyword before the color value or multiplying the value by -1 have the same effect.

In order to specify the RGB color using a variable, a signed numeric data item must be used, the RGB keyword must be omitted and the variable must host the negative decimal representation of the color.

When a color property set with RGB is queried, the INQUIRE statement returns the the decimal negative number representing the RGB color.

**Note**: Colors are set and queried in the same way regardless of their type. The runtime distinguishes the two kinds of colors by using positive values for attributes and negative values for RGB. Since zero is a non-negative value, you shouldn’t use the value zero along with the RGB syntax, use 1 instead and you will obtain the same color.

The [CPK (Color Picker)](../../../../SDK-Users-Guide/Utilities/CPK) utility installed with isCOBOL can be used to easily calculate RGB color values that you can use in Syour program.

##### Example

The snippet below defines four labels with a low intensity pink background. Each label has the BACKGROUND-COLOR expressed in a different way:

```cobol
       WORKING-STORAGE SECTION.
       77 wrk-color pic s9(9) value -16764108.
 
       SCREEN SECTION.
       01 screen-1.
          03 label
             line 2, col 2, size 10 cells
             background-color rgb x#ffcccc
             .
          03 label
             line 4, col 2, size 10 cells
             background-color rgb 16764108
             . 
          03 label
             line 6, col 2, size 10 cells
             background-color -16764108
             .
          03 label
             line 8, col 2, size 10 cells
             background-color wrk-color
             . 
```
