## Additional improvements

isCOBOL 2022 R2 release improves the JUTIL utility.

A new option -make is now supported to create an empty Jisam file from the xml dictionary. This approach is equivalent to the ctutil -make option already supported by ctutil for c-TreeRTG.

Here’s an example of the new option used to create an empty Jisam file named “products” based on its definition stored in “product.xml”:

```cobol
jutil –make products products.xml
```

Note that “products.xml” is the file dictionary that describes the indexed file with all its details and is created by isCOBOL’s compiler when using the -efd option.
