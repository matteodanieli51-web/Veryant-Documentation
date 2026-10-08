### add

Adds an alphanumeric plain-text parameter.

#### General format

```cobol
void add ( paramName, paramValue )
```

#### Syntax rules

1. *paramName* is an alphanumeric data item that specifies the parameter name.
2. *paramValue* is an alphanumeric data item that specifies the parameter value.

#### Example

Add the zip code parameter:

```cobol
...
       configuration section.
       repository.
          class http-params as "com.iscobol.rts.HTTPData.Params"
...
       working-storage section.
...
       77 params object reference http-params.
       77 city-zipCode pic x(7) value "26456".
...
       procedure division.
...
           params:>add("zipcode", city-zipCode).
```
