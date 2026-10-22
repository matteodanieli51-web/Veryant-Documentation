### ISDBG Commands

| Command | Description |
| :--- | :--- |
| b0 | Usage: b0 *prog-name* <br>set a breakpoint at the beginning of a given program |
| break | Usage: break *line-number\|paragraph-name* <br>set a breakpoint at a given line or paragraph <br>Usage: break -l <br>list breackpoints |
| clear | Usage: clear *line-number\|paragraph-name* <br>remove a breakpoint at a given line or paragraph <br>Usage: clear -a <br>remove all breakpoints |
| continue | Usage: continue <br>continue execution until the next breakpoint |
| directory | Usage: directory *dir-name* <br>Add a given directory to the debug code_prefix <br>Usage: directory <br>Shows the current debug code_prefix |
| display | Usage: display variable-name <br>display the current value of a variable in ascii or decimal <br>Usage: display -x variable-name <br>display the current value of a variable in hex |
| down | Usage: down <br>View the next lower stack frame |
| exit | Usage: exit <br>exit debug |
| f | Usage: f <br>repeat find |
| fb | Usage: fb *text* <br>find text backwards |
| ff | Usage: ff *text* <br>find text forwards |
| ft | Usage: ft *text* <br>find text from top |
| gc | Usage: gc <br>force garbage collector |
| help | Usage: help <br>show help |
| infostack | Usage: infostack <br>display stack information |
| jump | Usage: jump *line-number\|paragraph-name* <br>jump to a given line or paragraph |
| let | Usage: let *variable-name=value* <br>assign new value to a variable |
| line | Usage: line <br>display the current line of source code |
| list | Usage: list <br>display the source code |
| memory | Usage: memory <br>print memory information |
| monitor | Usage: monitor *variable-name* <br>set a monitor on a given variable <br>Usage: monitor -l <br>list monitors |
| next | Usage: next <br>step one line (step over CALL and PERFORM statements) |
| outpar | Usage: outpar <br>step out of the current paragraph |
| outprog | Usage: outprog <br>step out of the current program and return to the caller |
| pause | Usage: pause <br>pause execution |
| quit | Usage: quit <br>stop execution |
| run | Usage: run <br>start execution |
| step | Usage: step <br>execute the next statement <br>Usage: step n <br>execute the next n statements |
| stoff | Usage: stoff <br>stop autostep |
| ston | Usage: ston <br>start autostep |
| thread | Usage: thread *thread-name* <br>choose the thread to debug <br>Usage: thread -l <br>list threads |
| to | Usage: to *line-number* <br>continue execution until the given line number is reached |
| troff | Usage: troff <br>stop tracing program execution |
| tron | Usage: tron tracelevel *log-filename* <br>start tracing program execution on a text file. See [iscobol.tracelevel](../../Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) for possible *tracelevel* values. |
| unmonitor | Usage: unmonitor *variable-name* <br>clear the monitor on a specified variable |
| up | Usage: up <br>View the next higher stack frame |
| w0 | Usage: w0 <br>go to first executable line |
| w@ | Usage: w@ <br>show the current line |
| wb | Usage: wb <br>show last line of source code |
| wt | Usage: wt <br>show first line of source code |
