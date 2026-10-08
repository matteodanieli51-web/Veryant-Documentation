### LM-RESIZE

LM-RESIZE automatically resizes and moves controls when the window is resized, allowing to cover all the space available.

LM-RESIZE acts on any control that has a non-zero Layout-Data value. The exact value determines what actions the resize manager takes. The resize manager assumes that it has complete control over the size and placement of controls that have Layout-Data. After such a control has been displayed, the program should not modify it in a way that changes its size or position (that is the job of the resize manager). Doing so may result in improper resizing or repositioning by LM-RESIZE.

For LM-RESIZE, a control's Layout-Data property may be a combination of any of the following values. To combine values, simply add them together. The names of the values come from [isresize.def](../../../../Appendices/Copybooks/isresize.def).

| Constant name | Effect |
| --- | --- |
| rlm-resize-x | Causes the control to grow and shrink horizontally as the window changes width. |
| rlm-move-x | Causes the control to reposition itself horizontally as the window changes width. |
| rlm-no-min-x | Without this, the resize manager will not reposition or resize a control horizontally to be less than its design values. This prevents the control from disappearing or colliding with other controls if the user makes the window too small. |
| rlm-resize-y | Causes the control to grow and shrink vertically as the window changes width. |
| rlm-move-y | Causes the control to reposition itself vertically as the window changes width. |
| rlm-no-min-y | Without this, the resize manager will not reposition or resize a control vertically to be less than its design values. This prevents the control from disappearing or colliding with other controls if the user makes the window too small. |

The following are also found in [isresize.def](../../../../Appendices/Copybooks/isresize.def). These are not unique values, but useful combinations of the preceding values.

| Constant name | Effect |
| --- | --- |
| rlm-resize-x-any | rlm-resize-x + rlm-no-min-x |
| rlm-move-x-any | rlm-move-x + rlm-no-min-x |
| rlm-resize-y-any | rlm-resize-y + rlm-no-min-y |
| rlm-move-y-any | rlm-move-y + rlm-no-min-y |
| rlm-resize-both | rlm-resize-x + rlm-resize-y |
| rlm-resize-both-any | rlm-resize-x-any + rlm-resize-y-any |
| rlm-move-both | rlm-move-x + rlm-move-y |
| rlm-move-both-any | rlm-move-x-any + rlm-move-y-any |
