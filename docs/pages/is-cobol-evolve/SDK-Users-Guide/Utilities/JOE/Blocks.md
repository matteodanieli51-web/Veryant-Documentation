### Blocks

A block is simply a list of invocations enclosed between braces. It is an object itself so you can assign it to a variable, e.g.:

```cobol
cs> a := { b := 2. ! display (b + 1). }.
cs>
```

The block content is not executed, it is only stored; since it is an object, in order to execute its content, you only need to invoke its method *exec*.

```cobol
cs> a := { b := 2. ! display (b + 1). }.
cs> a exec.
3
cs>
```

The method *exec* of a block returns the result of the last invocation; in the case above it will return the result of the display, i.e. the command object.

```cobol
cs> a := { b := 2. ! display (b + 1). }.
cs> a exec; display "end".
3
end
cs>
```

(Note the use of the semicolon character in order to inform the interpreter that exec has no parameters)

The blocks allow to easily implement a method that issue the behavior of an "if" statement: the following Java method is the implementation issued in the supplied command object:

```cobol
public Object $if (Boolean cond, Block ifTrue) throws Exception {
   Object Return = cond;
   if (cond.booleanValue()) {
      Return = ifTrue.exec();
   }
   return Return;
}
```

You can note that the name of this method is $if : Java doesn’t allow to have methods names equal to a reserved word, so when the interpreter recognizes a method name that equals a Java reserved word, it automatically prefixes the method name with the character "$".

Now you can issue an invocation like the following one:

```cobol
cs> a:=1. b:=1. !if (a=b),{!display "a=b".}.
a=b
cs>
```

The "else" behavior can be achieved with a further method, similar to the previous one:

```cobol
public Object $if (Boolean cond, Block ifTrue, Block ifFalse)
                                                        throws Exception {
   Object Return;
   if (cond.booleanValue()) {
      Return = ifTrue.exec();
   } else {
      Return = ifFalse.exec();
   }
   return Return;
}
```

As an example:

```cobol
cs> a:=1. b:=2. !if (a=b),{!display "a=b".},{!display "a<>b".}.
a<>b
cs>
```

In the above example all the code is written on a single line, you can improve the readability writing it on multiple lines. CobShell can be executed with a text file name as parameter and in such a case the content of the file is executed. You can then write the above example in the following way:

```cobol
a:=1.
b:=2.
!if (a=b),{
   !display "a=b".
},
{
   !display "a<>b".
}.
```

Blocks are used also to perform loops: the method until execute a block until the specified condition (included in a block) is true. For example:

```cobol
cs> a:=0. !until { a=5 },{ a := a + 1. !display "a=",a. }. !display "end".
a=1
a=2
a=3
a=4
a=5
end
cs>
```

The condition must be included in a block because the condition must be re-evaluated at the beginning of each cycle. Since the execution of a block returns the result of the last invocation, the above example can also be written in the following way:

```cobol
cs> a:=0. !until { a:=a+1. a>5 },{ !display "a=",a. }. !display "end".
a=1
a=2
a=3
a=4
a=5
end
cs>
```

(Note that in thes case the condition is a>5 instead of a=5 : this because the increment of the variable is issued before the evaluation of the condition instead of inside the second block).

At this point you have a complete language with all the necessary features. A subroutine can be implemented as a block, assigned to a variable and executed when needed.

The following example is a procedure that guesses a user thought number and summarizes what has been seen so far.

```cobol
answer := "".
high := 1023.
low := 1.
ntry := 1.
 
!display "Think to a number between ",low," and ",high,
                                    ": I can guess it using 10 tries at most".
 
!until { answer = "c" },
{
   try := ((high - low) / 2 + low).
   !display "My guess is ", try.
   !display "Is the guess (c)orrect, too (h)igh or too (l)ow?".
   answer := !accept.
   !if (answer = "c"), {
      !display "I guessed the number using ",ntry," guesses".
   } , {
      !if (answer = "h"), {
         high := try.
         ntry := ntry + 1.
      } , {
         !if (answer = "l"), {
            low := try.
            ntry := ntry + 1.
         } , {
            !display "Answer with 'c', 'h' or 'l' please".
         } 
      }
   }
}.
```

It is possible to achieve the behavior of more complex statements, like a multi-way branch similar to the COBOL EVALUATE statement.

The *evaluate* method takes an object as an argument and returns an object that has the method *when* that typically has two arguments, an object and a block:

if the argument is equal to the one specified in evaluate then executes the block, updates its state and returns itself in the event of further invocations of *when*.

The object used to implement this feature has its own internal state that allows the execution only of the first block that satisfies the condition.

The method *when* can also be invoked without specifying any block, in which case the condition of equality is still checked and put in OR with the next invocation of *when*.

The *when_other* method takes a block as an argument that runs only when no other block has been executed previously.

The method *end_evaluate* finally makes sure that the result of the last run is returned by the evaluate at the end of all the invocation.

Here is the previous example implemented by the using of the *evaluate* method:-

```cobol
answer := "".
high := 1023.
low := 1.
ntry := 1.
 
!display "Think to a number between ",low," and ",high,
                              ": I can guess it using 10 tries at most".
 
!until { answer = "c" or (answer = "C")}, {
   try := ((high - low) / 2 + low).
   !display "My guess is ", try.
   !display "Is the guess (c)orrect, too (h)igh or too (l)ow?".
   answer := !accept.
   !evaluate answer
   when "C"
   when "c", {
      !display "I guessed the number using ",ntry," guesses".
   }
   when "H"
   when "h", {
      high := try.
      ntry := ntry + 1.
   }
   when "L"
   when "l", {
      low := try.
      ntry := ntry + 1.
   }
   when_other {
      !display "Answer with 'c', 'h' or 'l' please".
   }
   end_evaluate.
}.
```

A side-effect of the implementation above described is that you can write an equivalent multi-way branch using a notation that is characteristic of the COBOL EVALUATE, i.e:

```cobol
!evaluate (1 = 1)
when (answer = "c" or (answer = "C")), {
!display "I guessed the number using ",ntry," guesses".
}
when (answer = "h" or (answer = "H")), {
high := try.
ntry := ntry + 1.
}
when (answer = "l" or (answer = "L")), {
low := try.
ntry := ntry + 1.
}
when_other {
!display "Answer with 'c', 'h' or 'l' please".
}
end_evaluate.
```

You can see how complex behaviors can be achieved using the simple mechanism object-method-args.

The code inside a block can access any variable already used outside the block, however if you use a variable in a block for the first time, it will be not available outside, i.e. that variable will be local to the block e.g.:

```cobol
cs> a := { b := 2. ! display (b + 1). }.
cs> a exec.
3
cs> ! display b.
(null)
cs>
```

As said above the key point is that you can write your own command object in order to customize the scripts as you wish. Let’s say you want to do loops using a command similar to the Java style "for", i.e. with an initialization, a condition and an increment: you can write a Java class like the following one:

```cobol
public class MyCommand {
   public Object $for (Block init,
                       Block cond,
                       Block incr,
                       Block code) throws Exception {
      Object Return = null;
      init.exec();
      while ((Return=cond.exec()) != null &&
              Return instanceof WBoolean &&
              ((WBoolean) Return).booleanValue()) {
         Return = code.exec();
         incr.exec();
      }
      return Return;
   }
} 
```

Assuming you have your class "MyCommand" available in your CLASSPATH, you can issue messages like these:

```cobol
cs> mycmd := !newInstance "MyCommand".
cs> i := 0.
cs> mycmd for {i := 1},{i < 5},{i := i + 1},{!display i}.
1
2
3
4
cs>
```

Note that the variable i must be used outside any block otherwise it will be local to the block itself.

A block may have an internal name and arguments, they can be specified immediately after the open braces. The format is:

```cobol
[name] : [arg1 [,arg2 …]].
```

These are some valid block definitions:

```cobol
cs> a := {aName:anArg. !display "Name & arguments". }.
cs> b := {aName:. !display "Just the name". }.
cs> c := {:a1,a2. !display "Arguments only" }.
cs> d := {:. !display "Useless".}.
```

You can supply any number of argument to a block, if the argument is not supplied then the correspondent variable will contain the null value.

```cobol
cs> blk := {:a,b. !display a,";",b.}.
cs> blk exec 1.
1;(null)
cs>
```

Blocks allows recursion, below is a script that compute the factorial of the given number.

```cobol
fact :=
{:n.
   !if (n > 1), {
      n * (fact exec (n - 1)).
   } , {
      1.
   }.
}.
 
!display (fact exec 6). 
```

The internal name can be used in order to cause a forced exit from the block. For example the default command implements the method *exit_block "internal-name"*. The above example can also be implemented in the following way:

```cobol
fact :=
{all:n.
   !if (n <= 1), {
      1.
      !exit_block "all".
   }.
   n * (fact exec (n - 1)).
}.
 
!display (fact exec 6).
```

Note that it is not practical to use this approach in order to exit from a loop; consider the following example:

```cobol
cs> i := 0.
cs> !until {i:=i+1. i = 3},{loop:. !display i. !exit_block "loop". !display "never printed".}.
1
2
cs>
```

You can see that in this case the exit_block method interrupts the block execution but it is executed again since the exit condition is in another block. For this reason the exit_loop method has been implemented in the default command, e.g.:

```cobol
cs> i := 0.
cs> !until {i:=i+1. i = 3},{!display i. !exit_loop. !display "never printed".}.
1
cs>
```

In this case the inner loop is interrupted, without the need for the block to have a name.
