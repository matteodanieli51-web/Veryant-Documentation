### Control transfer

Even if now we can achieve any kind of computation, it could be hard to translate older script languages in it. For this reason some few features has been added, i.e. one-way transfer of control to another line of code (GO TO) and the transfer of control to another line of code with return (similar to a COBOL PERFORM).

In order to allow the transfer of the control to a specified line of code, it is necessary a way to identify a line of code: this is achieved through the use of labels: a label is simply a word followed by a dot. A label can be placed everywhere, however only the labels outside of any block can be referenced. The command object has 3 methods that manage the transfer control, i.e.:

| | |
| --- | --- |
| goto | one-way control transfer; it accepts one parameter that can be either a label name or a string. |
| perform | control transfer with return at the original point; the return is issued when an exit is encountered; it accepts one parameter that can be either a label name or a string. |
| exit | causes the control to be returned where the last perform has been issued: if it is invoked outside of a perform, the procedure ends. It has no parameters. |
| | |

The following example shows how the previous procedure for guessing a number can be implemented using control transfer.

```cobol
answer := "".
high := 1023.
low := 1.
ntry := 1.
 
!display "Think to a number between ",low," and ",high,
                      ": I can guess it using 10 tries at most".
begin.
   try := ((high - low) / 2 + low).
   !display "My guess is ", try.
   !display "Is the guess (c)orrect, too (h)igh or too (l)ow?".
begin1.
   !perform ask.
   !if (answer = "c"), {
       !display "I guessed the number using ",ntry," guesses".
       !goto end.
   }.
   !if (answer = "h"), {
       high := try.
       ntry := ntry + 1.
       !goto begin.
   }.
   !if (answer = "l"), {
       low := try.
       ntry := ntry + 1.
       !goto begin.
   } , {
       !display "Answer with 'c', 'h' or 'l' please".
       !goto "begin1".
   }.
 
ask.
   answer := !accept.
   !exit.
 
end.
   !exit.
   !display "this is never executed". 
```
