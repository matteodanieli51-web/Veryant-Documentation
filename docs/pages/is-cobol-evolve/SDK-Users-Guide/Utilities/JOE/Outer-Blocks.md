### Outer Blocks

All the source code is implicitly contained in an "outer block". It is an ordinary block with few more features, i.e.:

- you can refer to it through the use of the special sequence "!!";
- you can use it as an object whose methods are the variables referring to a block.

So you can write:

```cobol
cs> a := { b := 2. ! display (b + 1). }.
cs> !!a.
3
cs>
```

Note that if you try to execute !! exec, a variable whose name is "exec" will be searched and, if it exists and it refers to a block, the corresponding block will be executed.

An outer block can have both a name and arguments in the way that ordinary blocks have. When an outer block is executed by the command line, it receives an argument that is an array whose elements are the command line broken by spaces. For example let’s say you have the following script named "args.joe":

```cobol
:args.
 
i := -1.
!until {i := i + 1. i = (args length)},
{
   !display (args get i).
}.
```

you can issue the following command:

```cobol
$ iscrun -joe args.joe 6 aa bb cc
args.joe
6
aa
bb
cc$
```

A script can also be executed from inside another script through the method new implemented in the default command. The script will be executed and its status (i.e. the variables) will be saved. For example let’s say you have the following script named "average.joe":

```cobol
:i_cnt,i_avg.
 
cnt := i_cnt doubleValue.
avg := i_avg doubleValue.
 
put := {:val.
   avg := avg * cnt + val.
   cnt := cnt + 1.
   avg := avg / cnt.
   !!.
}.
 
get := { avg. }.
```

You can use it to compute the average of a series of numbers, for example:

```cobol
cs> avg := !new "average.joe",0,0.
cs> avg put 8.
cs> avg put 13.
cs> avg put 21.
cs> avg put 34.
cs> avg put 55.
cs> !display (avg get).
26.2
cs>
```

So a JOE script can be seen as an object from inside another JOE script. The code outer of any block is useful for initializing the object, as a Java constructor. In this object any variable containing a reference to a block will be equivalent to a public method while the other variables will be private (or rather protected, as explained later).

A JOE script can also inherit from another script through the default command method *extends*: this means the inheriting script will see all the variable from the parent script. The *extends* method has 2 arguments, i.e. the inheriting outer block and the parent outer block. For example:

```cobol
cs> !extends !!,(!new "average.joe",0,0).
cs> !! put 8 put 13 put 21 put 34 put 55.
cs> !display avg.
26.2
cs> !display cnt.
5.0
cs>
```

So JOE has the features of a dynamic typed object oriented language using a simple model and simple implementation.
