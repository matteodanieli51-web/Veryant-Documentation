### Basic syntax

In order to invoke methods we need an object oriented syntax: the obvious choice could be the COBOL OO syntax or, as an alternative, the Java syntax. We choose instead to use a syntax close to Smalltalk since it has a better readability, especially when used extensively. The JOE syntax for invoking a method is:

```cobol
[ variable-name := ] object [method-name { ; | argument[,argument…]} …] .
```

In JOE any data is an object and any invocation is supposed to return an object. You can use variables to hold objects; a variable doesn’t need to be declared and has no type, it can contain any type of object.

JOE has not reserved words, but it has few reserved symbols:

| | |
| --- | --- |
| := | assignment |
| ; | no argument |
| , | parameter separator |
| . | end of the message |
| | |

The basic core of JOE is the triplet object-method\_name-argument. If you want invoke a method with no argument then this must be explicitly stated in the code: the meaning of the semicolon character is exactly this, it means ‘there are no arguments’.

Let’s see some examples of this syntax compared with the equivalent Java syntax in order to get a better understanding.

| JOE syntax | Java syntax |  |
| --- | --- | --- |
| A B C. | A.B(C); | Basic method invocation, A is an object, B is a method name and C is an object passed to the method as argument. |
| A B C D E. | A.B(C).D(E); | A is an object, B is a method name and C is an object passed to the method as argument. This invocation returns an object, so D is a method name and E its argument and so on. There is no theoretical limit to the length of a message. |
| A B; D E. | A.B().D(E); | This case differs from the previous one in that no argument is passed to method B. |
| A B C,D,E. | A.B(C,D,E); | In this case instead 3 arguments are passed to method B. |
| A B (C D E). | A.B(C.D(E)); | The evaluation order can be altered using the parentheses (), which allow to execute a method and use its result as argument of another method. In this case the method D of object C is executed and its result is passed as argument to method B of object A. |

You can assign the result of the last invocation in a message to a variable, e.g.:

```cobol
var := A B C D E.
```

JOE supports two types of comments:

- in-line comments. JOE ignores everything from \*> to the end of the line, e.g.:

```cobol
*> this is a comment
```

- multi-line comments, JOE ignores everything from /\* to \*/, e.g.:

```cobol
/*
This is a comment
distributed on
multiple lines
*/
```

Moreover a line starting with the sequence #! is ignored in order to support the shebang interpreter directive of the Unix-like operating systems.

Since there are no built-in instructions, in order to run something JOE needs an object that act as starting point. This object, let’s call it ‘command’, is automatically loaded at the beginning of the execution. Since the command object is supposed to have useful and often used methods, it has been named ‘!’ (the character for exclamation mark or bang) so that you need to type only one character and it is easy to see it in the source code.

The key point is that this command object has nothing special, it is a plain isCOBOL/Java object accessed using the Java reflection: you can write your own version if you like, inheriting the behaviors from the supplied one or even creating a brand new environment.

You can find a list of the currently available methods in Javadoc documentation.

We are now ready to do the very first program using JOE. We are going to use CobShell, a version of JOE that has been made similar to COBOL. The string "cs> " is the prompt and it is not part of the commands.

So the first program is the classic "Hello".

```cobol
cs> ! display "Hello #1".
Hello #1
cs>
```

You can see the triplet object-method_name-argument very clearly here. The COBOL syntax would be *invoke command "display" using "Hello #1"* while the Java syntax would be *command.display("Hello #1")*. Since the bang cannot be used in a JOE name, you can also write:

```cobol
cs> !display "Hello #1".
Hello #1
cs>
```

The meaning is the same as the previous one.

The method *display* accepts any number of parameters, shows them, issue a new line and returns the command object itself. If the method is invoked without parameters, only a new line is issued. There is an equivalent method, *displayNoAdv*, that does the same things without issuing a new line.

So you can get the same result with the following line:

```cobol
cs>!display "Hello #",1.
Hello #1
cs>
```

More than one invocation can be concatenated: when it happens the first triplet is executed and the result is the object of a second triplet and so on until the line is closed. The dot character used to stop the evaluation. So you can issue the following line:

```cobol
cs> !display "Hello #",1 display "Hello #",2.
Hello #1
Hello #2
cs>
```

Note that the second *display* doesn’t need the bang since the command object is returned by the first one. Another example is:

```cobol
cs> ! display "Hello #",1 display; display "Hello #",2.
Hello #1
 
Hello #2
cs>
```

Note that the second *display* is followed by a semicolon in order to inform the interpreter that that method has no arguments.

The evaluation is done left to right but you can change the evaluation order by enclosing the object expression to evaluate before between parenthesis. In order to see that, it comes handy to know that a literal string is an object itself and it is equivalent to the Java String object, therefore it has the method length that returns the *length* of the string. So you can issue the following line:

```cobol
cs> !display "Length",("Length" length;).
Length6
cs>
```

The *length* method is executed before the *display* method and the result is used as parameter by it.

In this case you can avoid the use of the semicolon since the parameters of a method cannot be placed after a closed parenthesis.
