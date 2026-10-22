## Bitmap-Raw-Height

When inquired, this property returns the original height in pixels of the image hosted by the Bitmap control. This information might be useful after the image has been resized due to the [Bitmap-Scale](./Bitmap-Scale) property.

**Example -** Retrieve the original image size of a scaled bitmap

```cobol
working-storage section.
...
77 bmph pic 9(9).
77 bmpw pic 9(9).
...
procedure division.
...
  inquire screen-1-bi-1 bitmap-raw-height bmph
                        bitmap-raw-width  bmpw.
```
