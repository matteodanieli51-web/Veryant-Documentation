## MANDATORY Directive

The MANDATORY directive marks a field as a mandatory field. This information will be reflected in the WSDL file, therefore this directive has effect only for for Web Services of type SOAP.

```cobol
>>ELK MANDATORY
```

or

```cobol
$ELK MANDATORY
```

or

```cobol
*(( ELK MANDATORY ))
```

or

```cobol
*>(( ELK MANDATORY ))
```

### Example

Specify that p1 is a mandatory field.

```cobol
       Linkage Section.
       01 params.
      >>ELK MANDATORY
          03 p1 pic x(10).
```
