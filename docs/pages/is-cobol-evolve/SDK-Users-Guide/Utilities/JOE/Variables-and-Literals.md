### Variables and literals

JOE allows you to store an object reference in a variable through the symbol :=. A variable name consists in a sequence of characters that are not reserved for other uses, as space, ! etc. (the exact set is still to be defined, the Java names will be valid for sure). The variables are not typed, so you can use them for any kind of object. They can also change type during the execution. For example:

```cobol
cs> a := "Length".
cs> !display a,(a length).
Length6
cs> a := !.
cs> a display "Hello!".
Hello!
cs> a := "Length" length.
cs> ! display a.
6
cs>
```

If a variable is used without any previous assignment, its value will be null.

```cobol
cs> !display b.
(null)
cs>
```

Currently JOE manages only three types of literals, integer numbers, floating point double precision numbers and strings. They are objects equivalent to java.lang.Integer, java.lang.Double and java lang.String but they are actually wrapped in internal objects in order to get more functionalities. For example the Java String allows you to easily see if two objects are equal through the method equals, however if you want compare two instances of String in order to know which is the greater, you need to use the method compareTo and then look for the result. The JOE wrapped objects all have the methods gt, ge, lt, le, ne that allow you to easily compare to literals of the same kind, e.g.:

```cobol
cs> ! display ("A" gt "B").
false
cs> ! display ("A" lt "B").
true
cs>
```

Numbers are wrapped as well in order to get all the arithmetic operation at hand. JOE doesn’t need the use of arithmetic operators characters nor logic operators characters, so they are automatically translated in words according the following list:

| | |
| --- | --- |
| = | equals |
| < | lt |
| > | gt |
| <= | le |
| >= | ge |
| <> | ne |
| + | add |
| - | subtract |
| * | multiply |
| / | divide |
| % | mod |
| | |

This translation allows you to issue invocations as the following:

```cobol
cs> ! display ("A" > "B").
false
cs> ! display ("A" < "B").
true
cs> ! display (1 + 2).
3
cs> ! display (1 + 2 * 3).
9
cs> ! display (1 + (2 * 3)).
7
cs>
```

Note that the common arithmetic operations precedence is not respected, the evaluation is always left to right and if you want to change it you have to use the parenthesis.

Any time you use a literal to call an external object, it is converted into the correspondent Java object and the returned object is converted to the internal object when needed. In order to see that, you must know that the supplied command object has the method *newInstance* that allows you to instance any isCOBOL/Java object. The following example shows you how standard Java object can be handled by JOE:

```cobol
cs> bd1 := !newInstance "java.math.BigDecimal","5.0".
cs> bd2 := !newInstance "java.math.BigDecimal",7.
cs> ! display "bd1=", bd1, "; bd1^2=", (bd1 pow 2).
bd1=5.0; bd1^2=25.00
cs> ! display "bd1 scale=",(bd1 scale).
bd1 scale=1
cs> ! display "bd1+bd2=", (bd1 + bd2).
bd1+bd2=12.0
cs>
```

You can also create your own objects and easily handle them in the JOE environment; let’s say you want to handle dates in your procedures, you could write a Java class like the following one:

```cobol
import java.util.Date;
public class MyDate {
   private static long msPerDay = 1000 * 60 * 60 * 24;
   private final java.util.Date date;
   public MyDate(long time) {
      date = new java.util.Date(time);
   }
   public MyDate(int year, int month, int day) {
      date = new java.util.Date(year - 1900, month - 1, day);
   }
   public long subtract (MyDate d) {
      return (date.getTime() - d.date.getTime()) / msPerDay;
   }
   public MyDate subtract (int days) {
      return new MyDate (date.getTime() - (days * msPerDay));
   }
   public MyDate add (int days) {
      return new MyDate (date.getTime() + (days * msPerDay));
   }
   public boolean equals (Object d) {
      if (d instanceof MyDate)
         return date.equals (((MyDate) d).date);
      else
         return false;
   }
   public boolean lt (MyDate d) {
      return date.before (d.date);
   }
   public boolean gt (MyDate d) {
      return date.after (d.date);
   }
   public String toString()  {
      return date.toString();
   }
} 
```

After compiling this class and having it accessible through CLASSPATH, you can issue the following invocations:

```cobol
cs> amRev := !newInstance "MyDate",1775,04,19.
cs> frRev := !newInstance "MyDate",1789,05,05.
cs> ! display "American revolution start=",amRev.
American revolution start=Wed Apr 19 00:00:00 CET 1775
cs> ! display "French revolution start=",frRev.
French revolution start=Tue May 05 00:00:00 CET 1789
cs> ! display "years between the revolutions=",((frRev - amRev) / 365).
years between the revolutions=14
cs> ! display (frRev > amRev).
true
cs> ! display (frRev < amRev).
false
cs> ! display (amRev = (!newInstance "MyDate",1775,04,19)).
true
cs> ! display "15 days after=",(amRev + 15).
15 days after=Thu May 04 00:00:00 CET 1775
cs> ! display "15 days before=",(amRev - 15).
15 days before=Tue Apr 04 00:00:00 CET 1775
cs>
```

JOE doesn’t handle arrays however you can get the same behavior through the use of objects. For example the standard command implements the method *array* that returns the equivalent of a Java array containing the arguments as elements, e.g.:

```cobol
cs> myArray := !array 1,"two",3.0.
cs> !display (myArray get 0).
1
cs> !display (myArray get 1).
two
cs> !display (myArray get 2).
3.0
cs>
```

The method *set index,value* allows you to set a value in an array. Since an element of an array can be any type of object, you can have elements that are arrays themselves, recreating the behavior of multidimensional arrays.

At this point you should see that, through the application of few simple rules, you can get an easy-to-use powerful environment customized on your needs. However, in order to get a complete language, it is necessary to have some decisional control structure. We need then to introduce a further concept, the Block.
