### Boxing

Boxing, otherwise known as wrapping, is the process of placing a primitive type within an object so that the primitive can be used as a reference object.

#### Autoboxing

Autoboxing is the term for getting a reference type out of a value type just through type conversion (either implicit or explicit). The compiler automatically supplies the extra source code that creates the object.

For example, without autoboxing, the following code would not compile:

```cobol
       configuration section.
       repository.
           class jShort as "java.lang.Short".
       working-storage section.
       77 s object reference jShort.
       procedure division.
       main.
      *    set s = jShort:>new(5). |always ok
           set s = 5.
```

Without autoboxing, the Compiler would not accept the last line. Short are reference objects. To convert from a primitive integer value to a Short, you should "manually" instantiate the Short object. With autoboxing, instead, the Compiler accepts the last line, and automatically transforms it so that a Short object is created to store the value 5.

#### Unboxing

Unboxing refers to getting the value that is associated to a given object, just through type conversion (either implicit or explicit). The Compiler automatically supplies the extra source code that retrieves the value out of that object, either by invoking some method on that object, or by other means.

For example, without unboxing, the following would not compile:

```cobol
       configuration section.
       repository.
          class jShort as "java.lang.Short".
       working-storage section.
       77 s object reference jShort.
       procedure division.
       main.
      *    if s:>shortValue() = 5 |always ok
          if s = 5
             continue
          end-if.
```

Without unboxing, the Compiler would not accept a comparison between a Short object and a primitive integer number. With unboxing, instead, the Compiler accepts the comparison and automatically transforms it so that a numeric value is extracted from the Short object

#### String comparison

The comparison between a java.lang.String and a COBOL string is successful only when the two strings have the same length, including trailing spaces, otherwise it is false. For example:

```cobol
       configuration section.
       repository.
          class jString as "java.lang.String".
       working-storage section.
       77 s object reference jString.
       77 var1 pic x(3) value "abc".
       77 var2 pic x(5) value "abc".
       procedure division.
       main.
          set s = jString:>new("abc").
          if s = "abc" *> true, as the compared literal has the same length
             continue
          end-if.
          if s = var1 *> true, as the compared item has the same length
             continue
          end-if.
          if s = var2 *> false, as the compared item is 2 bytes longer
             continue
          end-if.
```
