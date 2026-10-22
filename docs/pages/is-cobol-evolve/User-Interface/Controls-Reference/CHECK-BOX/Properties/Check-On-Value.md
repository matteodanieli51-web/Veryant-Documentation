## Check-On-Value

The property specifies the value associated to the checked Check-Box. The value can be either numeric or alphanumeric.

If not set, 1 is assumed.

The [Value](./Value) property management is affected by this property.

**Example** - Define a checkbox in screen section with alphanumeric values

```cobol
working-storage section.
...
01 cb-2-value pic x(3).
...
screen section.
...
03 screen-1-cb-2 Check-Box
   line 27.0
   column 10.0
   size 116
   lines 31
   id 11
   flat
   title "My Check Box"
   value cb-2-value
   check-on-value "yes"
   check-off-value "no"
   .
```
