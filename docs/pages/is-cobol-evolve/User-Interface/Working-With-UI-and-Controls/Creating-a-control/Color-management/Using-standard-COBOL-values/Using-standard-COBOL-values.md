### Using standard COBOL values

The first way, provided for compatibility reasons, uses up to sixteen values. These values range from 1 to 16 when foreground and background colors are combined, while they range from 0 to 15 when foreground and background colors are specified separately.

- [Combining foreground color and background color](./Combining-foreground-color-and-background-color)
- [Specifying foreground color and background color separately](./Specifying-foreground-color-and-background-color-separately)

Depending on the color property set and so on the color value range, the same color number can specify different colors. For example, the snippet below shows how the same color value ("2" in this case) specifies different colors when used to specify the foreground color separately and when used to specify the color as a combined value:

```cobol
       SCREEN SECTION.
       01 screen-1.
          03 label title "green"
             line 2, col 2, size 10 cells
             foreground-color 2 |this label has green foreground color
             .
          03 label title "blue"
             line 4, col 2, size 10 cells
             color 2 | this label has blue foreground color
             . 
```
