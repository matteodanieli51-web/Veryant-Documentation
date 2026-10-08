## Compiler enhancements

The Compiler supports new syntax that allows local variable declaration in a block and improves the declaration of parameters in Method-ID for Object Oriented Programming. Java classes with generic types can now be declared with a specific type, simplifying the casting using the syntax “< >”. Also, concatenation using the “&” operator has been improved.

### Local variable declaration

Many languages such as C# and Java support local variable declaration syntax to create a variable in a specific method or code block. This has several advantages, including:

- no risk of reusing the same variable in a different code block, creating conflicts
- thread safe code related to the variable when running multi-threading programs

The newest isCOBOL compiler implements the local variable declaration with the new DECLARE statement.

The DECLARE statement declares one or more local variables within the Procedure Division body. The scope of any inline local variable is from the point of declaration until the end of the innermost containing block. Statement clauses, paragraphs, sections and the whole method are considered to be blocks. The type of variable can be a primitive type, a java class object or any COBOL picture declared under a TYPEDEF clause. A code snippet like:

```cobol
         repository.
             class jstring as "java.lang.String"
             ...
         working-storage section.
         01  type-count  pic 9(9) comp typedef.
         ...
         procedure division.
         ...
             if var1 = 1
                declare temp as jstring
                move "ABC" to temp
                ...
             else
                declare temp as type-count = 0
                move 123 to temp
                ...
             end-if.
```

shows the temp variable declared in two different blocks; the first inside the IF where the variable is declared as java.lang.String, the other inside the ELSE where the variable is declared as “pic 9(9) comp” that is the picture used in the assigned TYPEDEF.

### Shorter declaration of parameters in Method-ID

The Compiler supports a new syntax to define method parameters directly in the METHOD-ID paragraph, without using the Linkage Section and the USING clause after PROCEDURE DIVISION. This is typically useful in class-id with many methods that receive and return parameters. It’s now possible to specify the method signature directly in the METHOD-ID. A code like:

```cobol
         method-id. setAccount as "setAccount" (par1 as JString, 
                                                par2 as JString,
                                                par3 as JInt).
         procedure division.
```

is equivalent to this:

```cobol
         method-id. setAccount as "setAccount".
         linkage section.
         77 par1 object reference JString.
         77 par2 object reference JString.
         77 par3 object reference JInt.
         procedure division using par1, 
                                  par2, 
                                  par3.
```

The advantage is shorter code and a source that looks more similar to other languages, for example in Java the equivalent code is:

```cobol
public static void setAccount(java.lang.String par1,
                              java.lang.String par2,
                              java.lang.Integer par3)
```

### Improved Generic type parameter support

Java generics are a powerful feature that allows you to write more flexible and reusable code. They enable you to define classes, interfaces, and methods with type parameters, which can be specified when you instantiate or invoke them.

Generics help maintain consistency in your code by ensuring that the same type is used throughout a collection or method. This reduces the likelihood of errors and makes the code easier to understand and maintain.

Here are some key benefits of using generics:

- Enhanced Readability: By specifying the type of elements a collection can hold, generics make the code more readable. It becomes clear what type of objects are expected, which helps other developers (or your future self) understand the code more quickly.
- Type Safety: Generics ensure that you catch type errors at compile time rather than at runtime. This reduces the risk of ClassCastException and makes your code more robust.
- Code Reusability: With generics, you can write a single class or method that works with different types. This eliminates the need for multiple versions of the same code.
- Elimination of Casts: Generics allow you to avoid explicit casting, making your code cleaner and easier to read.
- Improved Performance: Since generics provide compile-time type checking, they can help optimize performance by reducing the need for runtime type checks.

Here's a simple example to illustrate the use of Java generics:

```cobol
         configuration section.
         repository.
             class ArrayListS as "java.util.ArrayList<java.lang.String>"
             class ArrayListI as "java.util.ArrayList<java.lang.Integer>"
         ...
         working-storage section.
         77 stringList  object reference ArrayListS.
         77 integerList object reference ArrayListI.
         ...
         procedure division.
             ...
             set stringList to ArrayListS:>new()
             stringList:>add("AA")
             stringList:>add("BB")
             stringList:>add("CC")
             set integerList to ArrayListI:>new()
             integerList:>add(1)
             integerList:>add(2)
             integerList:>add(3)
```

In this example, we create two ArrayList instances: one for String objects and another for Integer objects. The use of generics ensures that only the specified type of elements can be added to each list, providing type safety and eliminating the need for explicit casting.

The compiler uses the "< >" syntax in the class name to specify the type of the “generics” arguments.

### Concatenation using “&”

The Compiler already supports the syntax “&” to concatenate two or more string literals. Starting from the 2025 R1 release concatenation is also supported between data-items, method results and resource strings, making it much more useful and versatile. It allows you to reduce the code that typically requires additional variable definitions and the STRING statement.

For example, the following code snippet:

```cobol
        repository.
             class jstring as "java.lang.String"
             ...
         working-storage section.
         77  var    pic x any length.
         77  dest   pic x any length.
         77  objstr object reference jstring.
             ...
         procedure division.
         ...
             move "String literal" & var 
                                   & r"myres" 
                                   & objstr:>toUpperCase() 
                                to dest
```

shows that a string literal is concatenated with a data item, a resource that is declared in the file loaded with the configurations *iscobol.resource.file*, *iscobol.resource.country* and *iscobol.resource.language* and the values returned by the call to the toUpperCase method
