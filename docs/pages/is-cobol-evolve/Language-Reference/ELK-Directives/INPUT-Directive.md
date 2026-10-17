## INPUT Directive

The INPUT directive defines an input parameter for the web service. By default all the Linkage Section data items become input/output parameters. Use this directive to define an input only parameter. When the directive is placed on top of a group item, it’s inherited by all the sub-items.

```cobol
>>ELK INPUT
```

or

```cobol
$ELK INPUT
```

or

```cobol
*(( ELK INPUT ))
```

or

```cobol
*>(( ELK INPUT ))
```

### Example

In the resulting Web Service, the field p1 will be an input parameter, the field p2 will be an i/o parameter while the field p3 will be an output parameter.

```cobol       Linkage Section.
      >>ELK INPUT
       01 p1 pic x(10).
       01 p2 pic x(10).
      >>ELK OUTPUT
       01 p3 pic x(10).
```
