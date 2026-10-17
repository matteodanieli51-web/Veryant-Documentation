## Left-Text-Alignment

This property works in conjunction with the [Left-Text](../Styles/Left-Text) style and controls the alignment of the text in the area on the left of the Check-Box. Set this property to 0 to have the text right aligned or to 1 to have the text left aligned. If this property is not set, then the text is right aligned.

**Example -** Define a check-box with the text right aligned

```cobol
screen section.
...
  03 screen-1-cb-2 Check-Box
     line 27.0
     column 10.0
     size 156
     lines 31
     id 11
     title "My Check Box"
     left-text-alignment 0
     .
```
