## NAME Directive

The NAME directive assigns a different name to the field defined on the next line. This directive can be used to avoid problems created by columns with incompatible or duplicate names. If the directive is used along with the INPUT or OUTPUT directives, it controls the name of the input or output parameter respectively.

Putting the name between quotes allows you to preserve hyphens. Without quotes, hyphens in the name are translated to underscore.

The name specified by this directive is used as is regardless of the decoration setting.

```cobol
>>ELK NAME=fieldNname
```

or

```cobol
$ELK NAME=fieldNname
```

or

```cobol
*(( ELK NAME=fieldNname ))
```

or

```cobol
*>(( ELK NAME=fieldNname ))
```

### Example

Assuming that decoration is not disabled, the Web Service input will include the following parameters: param1, param2, p3_in. The Web Service output will include the following parameters: param1, p2_out, param3:

```cobol
       Linkage Section.
       01 params.
      >>ELK NAME=param1
          03 p1 pic x(10).
      >>ELK INPUT, NAME=param2
      >>ELK OUTPUT
          03 p2 pic x(10).
      >>ELK INPUT 
      >>ELK OUTPUT, NAME=param3
          03 p3 pic x(10).
```

The following snippet includes an equivalent syntax:

```cobol
       Linkage Section.
       01 params.
      >>ELK NAME=param1
          03 p1 pic x(10).
      >>ELK INPUT
      >>ELK NAME=param2
      >>ELK OUTPUT
          03 p2 pic x(10).
      >>ELK INPUT 
      >>ELK OUTPUT
      >>ELK NAME=param3
          03 p3 pic x(10).
```
