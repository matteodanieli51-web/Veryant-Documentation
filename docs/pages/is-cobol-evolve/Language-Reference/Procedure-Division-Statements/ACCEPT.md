## ACCEPT

#### Format 1

```cobol
ACCEPT identifier-1 [ FROM mnemonic-name-1 ] [ END-ACCEPT ]
```

#### Format 2

```cobol
ACCEPT identifier-2 FROM { DATE                       }   [END-ACCEPT]
                         { DAY                        }
                         { CENTURY-DATE               }
                         { DATE YYYYMMDD              }
                         { CENTURY-DAY                }
                         { DAY YYYYDDD                }
                         { TIME                       }
                         { DATE-AND-TIME              }
                         { DAY-OF-WEEK                }
                         { TERMINAL-INFO              }
                         { SYSTEM-INFO                }
                         { INPUT STATUS               }
                         { ESCAPE KEY                 }
                         { COMMAND-LINE               }
                         { THREAD HANDLE              }
                         { WINDOW HANDLE              }
                         { CONTROL                    }
                         { LINE NUMBER                }
                         { STANDARD OBJECT Object-Name}
                         { WINDOW OF THREAD Thread-1  }
                         { EXCEPTION STATUS           }
                         { DATE-COMPILED              }
```

#### Format 3

```cobol
ACCEPT  [ ( {Identifier-3}, {Identifier-4} ) ] {screen-name-1}
            {Integer-3   }  {Integer-4   }
                                               {OMITTED      }
 
  [ UNTIL Condition-1 ]
 
  [ Remaining-Phrases ]
 
  [ MOUSE FLAGS mouse-flags ]
 
  [ ON {EXCEPTION} [Key-Dest] Imperative-Statement-1 ]
       {ESCAPE   }
 
  [ NOT ON {EXCEPTION} Imperative-Statement-2 ]
           {ESCAPE   }
 
[ END-ACCEPT ]
```

Remaining-Phrases are optional, can appear in any order.

```cobol
  AT Screen-Loc
 
  AT LINE NUMBER {Identifier-3} [CELL  ]
                 {Integer-1   } [CELLS ]
                                [PIXEL ]
                                [PIXELS]
 
  AT {COLUMN  } NUMBER {Identifier-4} [CELL  ]
     {COL     }        {Integer-2   } [CELLS ]
     {POSITION}                       [PIXEL ]
     {POS     }                       [PIXELS]
 
  WITH PROTECTED SIZE Length
 
  WITH NO ADVANCING
 
  {ERASE} [TO END OF] {LINE  }
  {BLANK}             {SCREEN}
 
  {ERASE} [EOS]
  {BLANK} [EOL]
 
  WITH [NO] {BELL}
            {BEEP}
 
  {UNDERLINE }
  {UNDERLINED}
 
  WITH {BLINKING}
       {BLINK   }
 
  {HIGHLIGHT}
  {HIGH     }
  {BOLD     }
  {LOWLIGHT }
  {LOW      }
  {STANDARD }
 
  {REVERSE-VIDEO}
  {REVERSE      }
  {REVERSED     }
 
  SAME
 
  WITH {COLOR } Color-Val 
       {COLOUR}
 
  {FOREGROUND-COLOR } IS Fg-Color 
  {FOREGROUND-COLOUR}
 
  {BACKGROUND-COLOR } IS Bg-Color 
  {BACKGROUND-COLOUR}
 
  SCROLL [UP  ] [ BY Scrl-Num {LINE } ]
         [DOWN]               {LINES}
 
  OUTPUT {JUSTIFIED}  {LEFT    }
         {JUST     }  {RIGHT   }
                      {CENTERED}
 
  WITH {CONVERSION}
       {CONVERT   }
 
  { WITH NO ECHO }
  { NO-ECHO      }
  { SECURE       }
  { OFF          }
 
  PROMPT [ CHARACTER IS Prompt-Lit ]
 
  { DEFAULT [IS Default] }
  { UPDATE               }
 
  ECHO
 
  {AUTO         }
  {AUTO-SKIP    }
  {AUTOTERMINATE}
  {TAB          }
 
  {UPPER} 
  {LOWER}
 
  CURSOR Curs-Offset
 
  CONTROL Cntrl-String
 
  {REQUIRED   }
  {EMPTY-CHECK}
 
  {FULL        }
  {LENGTH-CHECK}
 
  {ZERO-FILL   }
  {NUMERIC-FILL}
 
  CONTROL KEY IN Key-Dest
 
  BEFORE TIME Timeout 
 
  ALLOWING MESSAGES FROM { THREAD Thread-1 }
                         { LAST THREAD     }
                         { ANY THREAD      }
```

#### Format 4

```cobol
ACCEPT Dest-Item FROM SCREEN
 
  AT Screen-Loc
 
  AT LINE NUMBER Line-Num
 
  AT {COLUMN  } NUMBER Col-Num
     {COL     }
     {POSITION}
     {POS     }
 
  SIZE Length 
[END-ACCEPT]
```

#### Format 5

```cobol
ACCEPT Dest-Item FROM {CONFIGURATION} Env-Name
                      {ENVIRONMENT  }
 
  [ ON EXCEPTION Statement-1 ]
 
  [ NOT ON EXCEPTION Statement-2 ]
 
[END-ACCEPT]
```

#### Format 6

```cobol
ACCEPT {Control-Handle}
       {CONTROL       }
 
  [Remaining-Phrases]
 
  [ ON {EXCEPTION} [Key-Dest] Statement-1 ]
       {ESCAPE   }
 
  [ NOT ON {EXCEPTION} Statement-2 ]
           {ESCAPE   }
 
[END-ACCEPT]
```

Remaining-Phrases are optional, can appear in any order.

```cobol
  VALUE IN [MULTIPLE] Value
 
  AT Screen-Loc
 
  AT LINE NUMBER Line-Num [CELL  ]
                          [CELLS ]
                          [PIXEL ]
                          [PIXELS]
 
  AT {COLUMN  } NUMBER Col-Num [CELL  ]
     {COL     }                [CELLS ]
     {POSITION}                [PIXEL ]
     {POS     }                [PIXELS]
 
  WITH {BELL}
       {BEEP}
 
  BEFORE TIME Timeout
 
  CONTROL KEY IN Key-Dest
 
  ALLOWING MESSAGES FROM { THREAD Thread-1 }
                         { LAST THREAD     }
                         { ANY THREAD      }
```

#### Format 7

```cobol
ACCEPT EVENT
 
  BEFORE TIME Timeout
 
  ALLOWING MESSAGES FROM { THREAD Thread-1 }
                         { LAST THREAD     }
                         { ANY THREAD      }
 
  [ ON {EXCEPTION} [Key-Dest] Statement-1 ]
       {ESCAPE   }
 
  [ NOT ON {EXCEPTION} Statement-2 ]
           {ESCAPE   }
 
[END-ACCEPT]
```

#### Format 8

```cobol
ACCEPT value FROM ENVIRONMENT-VALUE
 
  [ ON EXCEPTION Statement-1 ]
 
  [ NOT ON EXCEPTION Statement-2 ]
 
[END-ACCEPT]
```

### Syntax Rules

1. Dest-Item is a data item that receives the accepted data. If a THREAD HANDLE or WINDOW HANDLE phrase is used, Dest-Item must be a USAGE HANDLE data item of the appropriate type. If the WINDOW HANDLE phrase is used, Dest-Item can also be a PIC X(10) item.
2. Screen-Name is the name of a screen entry declared in the program's Screen Section.
3. Screen-Loc is a numeric literal or data item defined as 4 or 6 digits.
4. Line-Num, Col-Num are numeric data items or literals.
5. Length, Color-Val, Curs-Offset, Timeout, and Scrl-Num are numeric literals or data items.
6. Fg-Color and Bg-Color are integer literals or numeric data items but can not be subscripted.
7. Prompt-Lit is a single-character alphanumeric literal or the figurative constant SPACE, ZERO, or QUOTE.
8. Default is a literal or data item. It references the default entry value.
9. Key-Dest is a numeric data item.
10. Thread-1 is a USAGE HANDLE or HANDLE OF THREAD data item.
11. Statement-1 and Statement-2 are any imperative statements.
12. Condition-1 is any conditional expression, as described in [Conditional expressions](../Procedure-Division/Conditional-expressions/Conditional-expressions).
13. Cntrl-String and Env-Name are nonnumeric literals or data items.
14. *Mnemonic-name-1* can be SYSIN, CONSOLE or CRT. CONSOLE is synonym of SYSIN.
15. Control-Handle must be USAGE HANDLE.
16. Value can be any data item.
17. Code-Dest is defined as a numeric data item
18. The AT phrase precludes the use of the LINE and the COLUMN phrase.
19. The COLOR phrase precludes the use of the FOREGROUND-COLOR and the BACKGROUND-COLOR phrase.
20. The CURSOR phrase may not be specified if a CURSOR phrase is specified in the program's Configuration Section.
21. If the OMITTED option is used, then none of the following phrases may be specified: SIZE, JUSTIFIED, CONVERT, NO ECHO, PROMPT, DEFAULT, ECHO, UPPER, LOWER, REQUIRED, FULL, ZERO-FILL, NUMERIC-FILL or any of the attribute setting phrases (such as COLOR or REVERSE).
22. If the CONTROL KEY phrase is used, the Key-Dest option of the ON EXCEPTION phrase may not be specified.
23. CELL – CELLS and COLUMN – COL and POSITION - POS and PIXEL - PIXELS are synonymous.
24. ERASE and BLANK are synonymous.
25. BELL and BEEP are synonymous.
26. UNDERLINE and UNDERLINED are synonymous.
27. BLINKING and BLINK are synonymous.
28. HIGHLIGHT, HIGH and BOLD are synonymous.
29. LOWLIGHT and LOW are synonymous.
30. REVERSE-VIDEO, REVERSE and REVERSED are synonymous.
31. COLOR and COLOUR are synonymous.
32. FOREGROUND-COLOR and FOREGROUND-COLOUR are synonymous.
33. BACKGROUND-COLOR and BACKGROUND-COLOUR are synonymous.
34. LINE and LINES, in the SCROLL phrase, are synonymous.
35. JUSTIFIED and JUST are synonymous.
36. CONVERSION and CONVERT are synonymous.
37. AUTO, AUTO-SKIP and AUTOTERMINATE are synonymous.
38. REQUIRED and EMPTY-CHECK are synonymous.
39. FULL and LENGTH-CHECK are synonymous.
40. ZERO-FILL and NUMERIC-FILL are synonymous.
41. CONFIGURATION and ENVIRONMENT are synonymous.
42. ON ESCAPE and ON EXCEPTION (where ESCAPE is allowed) are synonymous.
43. Object-Name is an alphanumeric literal or data item.
44. ON EXCEPTION in Format 8 is not allowed under [-ca](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) option.

### General Rules

1. An ACCEPT Statement can return one of the following pre-defined exception values.

| | |
| --- | --- |
| *91 W-TERMINATE* | ACCEPT has been terminated by another thread through STOP THREAD statement |
| *95 W-MESSAGE* | message received during ACCEPT with ALLOWING MESSAGES clause |
| *96 W-EVENT* | an event has been raised during the ACCEPT of a graphical screen |
| *97 W-NO-FIELDS* | no input fields are available |
| *98 W-CONVERSION-ERROR* | error during numeric conversion |
| *99 W-TIMEOUT* | time expired during ACCEPT with BEFORE TIME clause |
| | |

#### Format 1

2. The ACCEPT statement causes the transfer of data from the hardware device. This data replaces the content of the data item referenced by identifier-1.
3. If a hardware device is capable of transferring data of the same size as the receiving data item, the transferred data is stored in the receiving data item.
4. If a hardware device is not capable of transferring data of the same size as the receiving data item, then:

A. If the size of the receiving data item (or of the portion of the receiving data item not yet currently occupied by transferred data) exceeds the size of the transferred data, the transferred data is stored aligned to the left in the receiving data item (or the portion of the receiving data item not yet occupied), and additional data is requested.

B. If the size of the transferred data exceeds the size of the receiving data item (or the portion of the receiving data item not yet occupied by transferred data), only the leftmost characters of the transferred data are stored in the receiving data item (or in the portion remaining). The remaining characters of the transferred data that do not fit into the receiving data item are ignored. If identifier-1 references a zero-length item, all the characters of the transferred data are ignored.

#### Format 2

5. The ACCEPT statement causes the information requested to be transferred to the data item specified by identifier-2 according to the rules for the MOVE statement. DATE, DAY, DAY-OF-WEEK, and TIME reference the current date and time provided by the system on which the ACCEPT statement is executed. DATE, DAY, DAY-OF-WEEK, and TIME are conceptual data items and, therefore, are not described in the COBOL source unit.
6. DATE without the phrase YYYYMMDD behaves as if it had been described as an unsigned elementary integer data item of usage display six digits in length, the character positions of which, numbered from left to right, are:

| Character Positions | Contents |
| --- | --- |
| 1-2 | The two low-order digits of the year in the Gregorian calendar. |
| 3-4 | Two numeric characters of the month of the year in the range 01 through 12. |
| 5-6 | Two numeric characters of the day of the month in the range 01 through 31. |

7. DATE with the phrase YYYYMMDD and CENTURY-DATE behave as if they have been described as an unsigned elementary integer data item of usage display eight digits in length, the character positions of which, numbered from left to right, are:

| Character Positions | Contents |
| --- | --- |
| 1-4 | Four numeric characters of the year in the Gregorian calendar. |
| 5-6 | Two numeric characters of the month of the year in the range 01 through 12. |
| 7-8 | Two numeric characters of the day of the month in the range 01 through 31. |

8. DAY without the phrase YYYYDDD behaves as if it had been described as an unsigned elementary integer data item of usage display five digits in length, the character positions of which, numbered from left to right, are:

| Character Positions | Contents |
| --- | --- |
| 1-2 | The two low-order digits of the year in the Gregorian calendar. |
| 3-5 | Three numeric characters of the day of the year in the range 001 through 366. |

9. DAY with the phrase YYYYDDD and CENTURY-DAY behave as if they had been described as an unsigned elementary integer data item of usage display seven digits in length, the character positions of which, numbered from left to right, are:

| Character Positions | Contents |
| --- | --- |
| 1-4 | Four numeric characters of the year in the Gregorian calendar. |
| 5-7 | Three numeric characters of the day of the year in the range 001 through 366. |

10. TIME is based on the elapsed time since midnight on a 24-hour clock. If the system does not have the facility to provide fractional parts of a second the value zero is returned for those parts that are not available. TIME behaves as if it had been described as an unsigned elementary integer data item of usage display eight digits in length, the characters positions of which, numbered from left to right, are:

| Character Positions | Contents |
| --- | --- |
| 1-2 | Two numeric characters of the hours past midnight in the range 00 through 23. |
| 3-4 | Two numeric characters of the minutes past the hour in the range 00 through 59. |
| 5-6 | Two numeric characters of the seconds past the minute in the range 00 through 59 |
| 7-8 | Two numeric characters of the hundredths of a second past the second in the range 00 through 99. |

11. DATE-AND-TIME behaves as if it had been described as an unsigned elementary integer data item of usage display sixteen digits in length, the character positions of which, numbered from left to right, are:

| Character Positions | Contents |
| --- | --- |
| 1-4 | Four numeric characters of the year. |
| 5-6 | Two numeric characters of the month of the year in the range 01 through 12. |
| 7-8 | Two numeric characters of the day of the month in the range 01 through 31. |
| 9-10 | Two numeric characters of the hours past midnight in the range 00 through 23. |
| 11-12 | Two numeric characters of the minutes past the hour in the range 00 through 59. |
| 13-14 | Two numeric characters of the seconds past the minute in the range 00 through 59 |
| 15-16 | Two numeric characters of the hundredths of a second past the second in the range 00 through 99. |

12. DAY-OF-WEEK behaves as if it had been described as an unsigned elementary numeric integer data item one digit in length and of usage display. In DAY-OF-WEEK, the value 1 represents Monday, 2 represents Tuesday, 3 represents Wednesday, ... , 7 represents Sunday.
13. The TERMINAL-INFO option causes information about the user's terminal to be moved to identifier-2. This information is returned in the following format, as contained in the TERMINAL-ABILITIES group item defined in [iscobol.def](\):

```cobol
01  terminal-abilities.
    03  terminal-name                            pic x(10).
    03  filler                                   pic x.
        88  has-reverse                          value "Y".
    03  filler                                   pic x.
        88  has-blink                            value "Y".
    03  filler                                   pic x.
        88  has-underline                        value "Y".
    03  filler                                   pic x.
        88  has-dual-intensity                   value "Y".
    03  filler                                   pic x.
        88  has-132-column-mode                  value "Y".
    03  filler                                   pic x.
        88  has-color                            value "Y".
    03  filler                                   pic x.
        88  has-line-drawing                     value "Y".
    03  number-of-screen-lines                   pic 9(3).
    03  number-of-screen-columns                 pic 9(3).
    03  filler                                   pic x.
        88  has-local-printer                    value "Y".
    03  filler                                   pic x.
        88  has-visible-attributes               value "Y".
    03  filler                                   pic x.
        88  has-graphical-interface              value "Y".
    03  usable-screen-height                     pic x(2) comp-x.
    03  usable-screen-width                      pic x(2) comp-x.
    03  physical-screen-height                   pic x(2) comp-x.
    03  physical-screen-width                    pic x(2) comp-x.
    03  filler                                   pic x.
        88  is-remote                            value "Y".
    03  client-machine-name                      pic x(64).
    03  filler                                   pic x.
    03  client-user-id                           pic x(20).
```

Fields have the following meaning:

| Field | Information |
| --- | --- |
| terminal-name | It returns “xterm”.<br>The value can be customized via the configuration property [iscobol.terminal.info.name](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) |
| has-reverse<br>has-blink<br>has-underline<br>has-dual-intensity<br>has-132-column-mode<br>has-color<br>has-line-drawing<br>has-local-printer<br>has-visible-attributes<br>has-graphical-interface | These flags are set to “Y” if the terminal has the corresponding ability or to “N” otherwise.<br>The values can be customized via the configuration properties<br>[iscobol.terminal.info.reverse](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration)<br>[iscobol.terminal.info.blink](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration)<br>[iscobol.terminal.info.underline](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration)<br>[iscobol.terminal.info.dual_intensity](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration)<br>[iscobol.terminal.info.132column](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration)<br>[iscobol.terminal.info.color](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration)<br>[iscobol.terminal.info.drawing](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration)<br>[iscobol.terminal.info.printer](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration)<br>[iscobol.terminal.info.attributes](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration)<br>[iscobol.terminal.info.graphic](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) |
| number-of-screen-lines<br>number-of-screen-columns | These items hold the number of whole lines and columns (respectively) in the current window. If no window has been created, these values are set to the size of the default application window.<br>The values can be customized via the configuration properties [iscobol.terminal.info.screen.lines](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration)<br>[iscobol.terminal.info.screen.columns](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) |
| usable-screen-height<br>usable-screen-widtht | These items hold the height and width (respecitively) of the usable portion of the user's display device in pixels.<br>The values can be customized via the configuration properties [iscobol.terminal.info.screen.usable.height](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration)<br>[iscobol.terminal.info.screen.usable.width](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) |
| physical-screen-height<br>physical-screen-widtht | These items are the same as usable-screen-height and usable-screen-width except that they include the entire screen instead of just the usable portion of the screen.<br>The values can be customized via the configuration properties <br>[iscobol.terminal.info.screen.physical.height](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration)<br>[iscobol.terminal.info.screen.physical.width](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) |
| is-remote | This flag is set to “Y” if the program is running in thin client mode, or to “N” if the program is running in stand-alone mode. |
| client-machine-name | This item is set when running in thin client mode and it holds the machine name of the client PC. |
| client-user-id | This item is set when running in thin client mode and it holds the user name of the client PC. |

For performance reasons, the runtime only obtains the screen width and screen height information the first time that TERMINAL-INFO is accepted from the TERMINAL-ABILITIES. The next times the runtime returns the stored information. Due to this rule, the returned information becomes unreliable if the user changes the screen resolution in the system during the runtime session. In order to disable the optimization and have the runtime inquire the system every time that TERMINAL-INFO is accepted from TERMINAL-ABILITIES, set [iscobol.terminal.info.refresh_monitor (boolean) \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) to true in the configuration.

14. The SYSTEM-INFO option causes some general information about the runtime to be moved to identifier-2. This information is returned in the following format, as contained in the SYSTEM-INFORMATION group item defined in [iscobol.def](\):

```cobol
01  system-information.
    03  operating-system                         pic x(10).
        88  os-is-msdos                          value "ms-dos".
        88  os-is-os2                            value "OS/2".
        88  os-is-vms                            values "vms", "vax/vms".
        88  os-is-unix                           value "Linux", "AIX", "HP-UX", "SunOS", "Solaris".
        88  os-is-linux                          value "Linux".
        88  os-is-aos                            value "aos/vs".
        88  os-is-windows                        values "Windows 95", "Windows 98", "Windows Me".
        88  os-is-win-nt                         values "Windows NT", "Windows 20", "Windows XP", "Windows Vi", 
                                                        "Windows 7", "WINDOWS", "Windows Se", "Windows 8", "Windows 8.",
                                                        "Windows 10", "Windows 11".
        88  os-is-win-family                     values "Windows NT", "Windows 95", "Windows 98", "Windows Me", 
                                                        "Windows 20", "Windows XP", "Windows Vi", "WINDOWS", "Windows 7", 
                                                        "Windows Se", "Windows 8", "Windows 8.", "Windows 10", "Windows 11".
        88  os-is-amos                           value "amos".
        88  os-is-mpe                            value "MPE/iX".
        88  os-is-mpeix                          value "MPE/iX".
        88  os-is-mac                            value "Mac OS", "Mac OS X".
    03  user-id                                  pic x(12).
    03  station-id                               pic x(12).
    03  filler                                   pic x.
        88  has-indexed-read-previous            value "Y".
    03  filler                                   pic x.
        88  has-relative-read-previous           value "Y".
    03  filler                                   pic x.
        88  can-test-input-status                value "Y".
    03  filler                                   pic x.
        88  is-multi-tasking                     value "Y".
    03  runtime-version.
        05  runtime-major-version                pic 99.
        05  runtime-minor-version                pic 99.
        05  runtime-release                      pic 99.
    03  filler                                   pic x.
        88  is-plugin                            value "Y".
    03  serial-number                            pic x(20).
    03  filler                                   pic x.
        88  has-large-file-support               value "Y".
    03  filler                                   pic x.
    03  filler                                   pic x.
        88  is-64-bit                            value "Y".
```

Fields have the following meaning:

| Field | Information |
| --- | --- |
| operating-system | This field holds the name of the operating system. The name may be truncated due to the field picture. It’s good practice to reference the corresponding 88 level items in the source.<br>The value can be customized via the configuration property [iscobol.os.name.](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) |
| user-id | This field holds the system user name.<br>The value can be customized via the configuration property [iscobol.user.name.](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#loadbalancer-configuration) |
| station-id | This field is set to spaces by default.<br>The value can be customized via the configuration property [iscobol.station](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) |
| has-indexed-read-previous<br>has-relative-read-previous<br>can-test-input-statusis-multitasking<br>has-large-file-support | These flags are always set to “Y”. |
| runtime-version | This field holds the isCOBOL runtime version and release number. |
| is-plugin | This flag is always set to “N”. |
| serial-number | This field returns the serial number associated to the runtime license. |
| is-64-bit | This flag is set to “Y” if the JVM bitness is 64 bit, else it’s set to “N”. |

**Note** - If your current JVM was released before the current operating system, then the *operating-system* field value may not be accurate.

15. The INPUT STATUS form of the ACCEPT statement returns a value that indicates whether or not there is data currently available from the standard input. Identifier-2 should be described as PICTURE 9(1). It receives 1 if input is currently available, 0 if not.
16. The ESCAPE option of the ACCEPT statement returns the last termination key value.
17. The ACCEPT FROM COMMAND-LINE option causes the contents of the original command line to be moved to identifier-2. It returns elements that appear after the program name as a single string.
18. The ACCEPT FROM THREAD HANDLE statement moves the thread ID of the executing thread to identifier-2.
19. The WINDOW HANDLE option causes identifier-2 to receive the handle of the current window.
20. CONTROL option causes identifier-2 to receive the handle of the current control.
21. The ACCEPT FROM LINE NUMBER statement has no effect. The syntax is supported for compatibility and is treated as commentary.
22. The ACCEPT FROM STANDARD OBJECT returns a handle to one of the system's pre-defined resources. The resource returned depends on the value of Object-Name. Possible values are:
  - Default-Font
  - Fixed-Font
  - Large-Font
  - Lm-Resize
  - Lm-Scale
  - Medium-Font
  - Small-Font
  - Traditional-Font
23. The ACCEPT FROM WINDOW OF THREAD returns the handle of the active window of a given thread.
24. The ACCEPT FROM EXCEPTION STATUS is supported for documentation purposes only and it corresponds to MOVE ZERO TO identifier-2.
25. The ACCEPT FROM DATE-COMPILED returns the data elements year, month and day for the date the program compilation started. It is a constant for any particular compilation. The sequence is YYYYMMDD.

#### Format 3

26. The ACCEPT statement accepts data entered by the user. The data accepted is placed in Dest-Item. If the OMITTED option is used instead of Dest-Item, the user must supply a termination key, e.g., a function key to end the entry with no data transferred.
27. The AUTO phrase causes a field to terminate as soon as it is filled with data. The TAB phrase requires a termination key to finish entry.
28. Identifiers specified in FROM or USING clauses or literals specified in FROM or VALUE clauses provide the initial values displayed for the associated screen item during execution of an ACCEPT screen statement. For elementary screen items that have no FROM, USING, or VALUE clause, the initial value is as if a MOVE statement were executed with the screen item as the receiving field. The sending item of the MOVE statement is a figurative constant that depends on the category of the screen item as follows:

| Screen item | Figurative constant |
| --- | --- |
| Alphabetic Alphanumeric | SPACES |
| Alphanumeric Alphanumeric | SPACES |
| Alphanumeric-edited Alphanumeric | SPACES |
| National National | SPACES |
| National-edited National | SPACES |
| Numeric | ZEROS |
| Numeric-edited | ZEROS |

29. The LINE and COLUMN phrases give the position on the display screen at which the screen record associated with screen-name-1 is to start. Column and line number positions are specified in terms of alphanumeric character positions. The position is relative to the leftmost character column in the topmost line of the display that is identified as column 1 of line 1. Each subordinate elementary screen item is located relative to the start of the containing screen record. Identifier-3 and identifier-4 are evaluated once at the start of execution of the statement.

The line and column coordinates can be specified between parenthesis soon after the ACCEPT word. This is a Microsoft COBOL extension and requires the [-cms](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compile flag.

30. If the LINE phrase is not specified, the screen record starts on line 1.
31. If the COLUMN phrase is not specified, the screen record starts in column 1.
32. The SIZE phrase specifies the number of screen positions to return. If the SIZE phrase is missing, then the size of dest-item is used. If the SIZE phrase specifies fewer characters than the size of dest-item, then dest-item is space-filled on the right. Double-byte characters count for 2, for example, an ACCEPT with SIZE 10 allows you to input 10 Latin characters or 5 Chinese characters.
33. During the period while the operator is able to modify each elementary screen item, each screen item is displayed on the terminal screen in accordance with any attributes specified in its screen description entry. The display may be modified as the operator selects or deselects each screen item as being the current screen item. The display of the current screen item may be modified as the operator keys data.
34. Data entered by the operator in the current screen item shall be consistent with the PICTURE clause of that item. If the screen item is numeric, the entered data shall be acceptable as an argument to the NUMVAL function. If the screen item is numeric-edited, the entered data shall be acceptable as an argument to the NUMVAL-C function.
35. The ACCEPT screen statement causes the transfer of data from each elementary screen item that is subordinate to screen-name-1 and is specified with the TO or USING clause to the data item referenced in the TO or USING clause. For the purpose of these specifications, all such screen items are considered to be referenced by the ACCEPT screen statement.

The transfer occurs after the operator has been given the opportunity to modify the elementary screen items and the operator has pressed a terminator key or a user-defined or context-dependent function key. This transfer occurs in the following manner:

A. If the screen item is numeric, the data is transferred as though the following statement were executed:

COMPUTE receiving-field = FUNCTION NUMVAL (screen-item)

B. If the screen item is numeric-edited, the data is transferred as though the following statement were executed:

COMPUTE receiving-field = FUNCTION NUMVAL-C (screen-item)

C. Otherwise, the data is transferred as if the following statement were executed:

MOVE screen-item TO receiving-field

where:

receiving-field is the data item referenced in the TO or USING clause, and screen-item is the screen item.

36. If the CURSOR clause is specified in the special-names paragraph, the data item referenced in the CURSOR clause shall be updated during the execution of an ACCEPT screen statement and prior to the execution of any imperative statement associated with any ON EXCEPTION or NOT ON EXCEPTION clauses for that ACCEPT statement. It shall be updated to give the line and column position of the cursor when the ACCEPT terminates.
37. The CONTROL phrase provides the ability to modify the static attributes of the ACCEPT statement at runtime. The CONTROL data item is treated as a series of comma-separated keywords that control the action of the statement. Within the CONTROL data item, spaces are ignored and lower-case letters are treated as if they were upper-case. The keywords allowed in cntrl-string are:

```cobol
ERASE, ERASE EOL, ERASE EOS, NO ERASE
BEEP, NO BEEP
HIGH, LOW, STANDARD, OFF
BLINK, NO BLINK
REVERSE, NO REVERSE
TAB, NO TAB
PROMPT, NO PROMPT
CONVERT, NO CONVERT
UPDATE, NO UPDATE
ECHO, NO ECHO
UPPER, NO UPPER, LOWER, NO LOWER
UNDERLINED, NO UNDERLINE
LEFT, RIGHT, CENTERED, NO JUST
SAME
FCOLOR
BCOLOR
“GRAPHICS”
```

Any other keywords and spaces are discarded. If more than one keyword from within the above lines appears in cntrl-string, then only the rightmost one in the data item is used. Each of the keywords performs the same action as the statically declared attribute of the same name. When a CONTROL item conflicts with the statically declared attributes of the ACCEPT statement, the actions specified in the CONTROL item take precedence. The FCOLOR and BCOLOR keywords are used to set foreground and background colors respectively. These keywords must be followed by an equals sign and the name of a color taken from the following list: BLACK, BLUE, GREEN, CYAN, RED, MAGENTA, BROWN, and WHITE. The named color becomes the default foreground or background color for the window. Note that this is different from the COLOR phrase, which sets the color only for the current ACCEPT statement. The FCOLOR and BCOLOR keywords set the default colors for every subsequent ACCEPT until explicitly changed. “GRAPHICS” allows you to create single line boxes.

38. If the execution of the ACCEPT statement results in a successful completion with normal termination, the ON EXCEPTION phrase, if specified, is ignored and control is transferred to the end of the ACCEPT statement or, if the NOT ON EXCEPTION phrase is specified, to imperative-statement-2. If control is transferred to imperative-statement-2, execution continues according to the rules for each statement specified in imperative-statement-2. If a procedure branching or conditional statement that causes explicit transfer of control is executed, control is transferred in accordance with the rules for that statement; otherwise, upon completion of the execution of imperative-statement-2, control is transferred to the end of the ACCEPT statement.
39. If the execution of the ACCEPT statement results in an unsuccessful completion and is terminated by a function key stroke, then:

A. If the ON EXCEPTION phrase is specified in the ACCEPT statement, control is transferred to imperative-statement-1. Execution then continues according to the rules for each statement specified in imperative-statement-1. If a procedure branching or conditional statement that causes explicit transfer of control is executed, control is transferred in accordance with the rules for that statement; otherwise, upon completion of the execution of imperative-statement-1, control is transferred to the end of the ACCEPT statement and the NOT ON EXCEPTION phrase, if specified, is ignored.

B. If the ON EXCEPTION phrase is not specified in the ACCEPT statement, control is transferred to the end of the ACCEPT statement and the NOT ON EXCEPTION phrase, if specified, is ignored.

40. The MOUSE FLAGS option triggers the termination of the accept when a mouse exception occurs.

The value of mouse-flags is the sum between one or more of the following values:

| Mouse Action | Value |
| --- | --- |
| Allow left button down | 2 |
| Allow left button up | 4 |
| Allow left button double click | 8 |
| Allow middle button down | 16 |
| Allow middle button up | 32 |
| Allow middle button double click | 64 |
| Allow right button down | 128 |
| Allow right button up | 256 |
| Allow right button double click | 512 |
| Allow mouse move | 1024 |

For example, in order to intercept all mouse actions, use

```cobol
MOUSE FLAGS 2046
```

The following crt status values are returned by mouse actions:

| Mouse Action | Crt Status Value |
| --- | --- |
| Mouse moved | 80 |
| Left button pushed | 81 |
| Left button released | 82 |
| Left button double-clicked | 83 |
| Middle button pushed | 84 |
| Middle button released | 85 |
| Middle button double-clicked | 86 |
| Right button pushed | 87 |
| Right button released | 88 |
| Right button double-clicked | 89 |

In the general model for graphical user interfaces, the system directs events to the window where the event occurred. This window owns the event. The effect of this is most noticeable when you examine what happens when controls interact with the mouse. As the mouse moves across the application screen, the various windows that the pointer passes over each receive the appropriate events. If you look at an application screen that has several controls, the application window receives those mouse events that occur when the pointer is in the application window, but not over any of the controls. When the mouse pointer is over a control, that control receives the mouse events. This means that MOUSE FLAGS affects the behavior of the mouse only when it is not over a control. When the mouse is over a control, that control does its own mouse processing.

#### Format 4

41. A Format 4 ACCEPT is performed on the last displayed window.

42 If POSITION is set to zero, then the ACCEPT of dest-item starts immediately after the last DISPLAY, as if POSITION was omitted.

Additional phrases, CURSOR, CONTROL KEY, BEFORE TIME, ON EXCEPTION are described below:

##### CURSOR Phrase

43. The CURSOR phrase specifies the initial cursor offset (1-based), from the beginning of the field. The leftmost position of the ACCEPT field is offset 1. If the CURSOR phrase is omitted or zero, then an offset of 1 is used.

##### CONTROL KEY Phrase

44. Some ACCEPT statements terminate automatically when the input field is filled. When this occurs, the termination key value is the value (a decimal number) defined by the AUTO-RETURN keyword. This value is returned in the CONTROL KEY clause of the ACCEPT statement. The default value is zero.
45. Key-Dest is a numeric item that receives the value of the key that terminated input. The keys allowed by the CONTROL KEY phrase and their returned values are defined in the Keyboard Configuration section of the isCOBOL UserGuide.

##### BEFORE TIME Phrase

46. The BEFORE TIME phrase allows you to automatically terminate an ACCEPT statement after a certain amount of time has passed. The timeout value specifies the time to wait in hundredths of a second. For example, "BEFORE TIME 500" specifies a timer value of 5 seconds.
47. The user must enter data to the ACCEPT statement before the timer elapses. As soon as the user starts entering data, the timer is canceled and the user may take as much time as desired to complete the entry. If the user does not enter any data before the timer elapses, then the ACCEPT statement terminates and returns a value exactly as if the user had typed the "enter" key. An exception condition is then raised and the exception key value is set to "99"

48. The BEFORE TIME phrase affects only ACCEPT statements performed on a window.

##### ALLOWING MESSAGES Phrase

49. The ALLOWING MESSAGES phrase causes the ACCEPT statement to terminate when a message is sent from the appropriate thread, as follows:

A. The THREAD Thread-1 option allows messages from the thread identified by Thread-1.

B. The LAST THREAD option allows for messages from the "last" thread.

C. The ANY THREAD option allows messages from any thread.

50. If an allowed message is available when the ACCEPT begins, or one arrives while the ACCEPT is active, the ACCEPT terminates with an exception value of "95". The exception occurs even if exceptions are not otherwise allowed in the ACCEPT.
51. When an ACCEPT terminates because of a message, the intended data item is not updated. This affects the following cases:

A. In Format 3, Dest-Item is not updated.

B. In Format 6, Value is not updated.

52. An ACCEPT statement that is suspended (because another thread has an active ACCEPT) terminates when an allowed message arrives.
53. If the ALLOWING MESSAGES phrase is omitted, messages will not terminate the ACCEPT. Instead, they are queued as normal

##### ON EXCEPTION Phrase

54. When this phrase is used, Statement-1 is executed when an exception condition occurs. An exception condition occurs under the following circumstances:

A. An end-of-file condition occurs on the console.

B. A BEFORE TIME phrase was specified and the ACCEPT statement timed out.

C. An exception key was used to terminate input.

D. A conversion error occurred when numeric data was entered with the CONVERSION phrase.

E. A Message terminates the ACCEPT.

F. An Event terminates the ACCEPT.

G. The screen contains no input fields, or all input fields are protected or disabled.

55. Key-Dest, if specified, causes this phrase to have all of the effects of the CONTROL KEY phrase in addition to its normal effects.
56. If you specify an ON EXCEPTION phrase, then exception keys will be allowed for the ACCEPT statement. Otherwise exception keys will be disabled unless you use the CONTROL KEY phrase.
57. If the NEXT SENTENCE option is used, then control will pass to the next executable sentence when an exception condition exists.
58. If the NOT ON EXCEPTION phrase is specified, then Statement-2 executes if no exception condition exists.

#### Format 5

59. A Format 5 ACCEPT statement returns values from the user's environment or the isCOBOL Framework configuration properties. Env-Name is the name of the environment setting whose value is to be returned. If the literal name of this item is used, then it must enclosed in quotes. The value returned from this item is moved to dest-item.
60. The runtime will normalize Env-Name by making it lower-case and translating hyphens to underscores, then it will search for Env-Name according to the rules described in [Configuration](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration).

If an entry is found, then its value is moved to dest-item.

If no matching entry is found, or if the Env-Name is the name of a configuration variable whose value cannot be returned, spaces are moved to dest-item and Statement-1, if specified, is executed.

If a legal matching entry is found, then Statement-2 (if specified) is executed.

#### Format 6

61. The Format 6 ACCEPT activates the control identified by control-handle. The user interacts with the control until some terminating event occurs. The event that caused the termination is then stored in Key-Dest, and the control's current value is stored in Value. Then the ACCEPT statement terminates.
62. If the CONTROL phrase is used, the runtime activates the control located at the screen position specified by the AT, LINE, and COLUMN phrases in the current window. The runtime maintains a list of controls in each window. When attempting to activate a control at a specific location, the runtime searches this list, using the first control it finds that exactly matches the given location. The list is maintained in the order in which the controls are created. If the runtime does not find a control at the specified location, it returns an exception value of "96" (the same as doing an ACCEPT of a invalid control handle).
63. Key-dest names a data item that will receive a code indicating the terminating event. The program's CRT STATUS (if any) also receives the termination code.
64. When the ACCEPT statement terminates, the current value of the control is moved to value in accordance with the rules for the MOVE statement. The type of control determines the source format of the value.
65. The BEFORE TIME, BELL, CONTROL KEY and ALLOWING MESSAGES phrases operate in the same manner as they do in a Format 3 ACCEPT.

#### Format 7

66. The runtime waits for a terminating event to occur. The event that caused the termination is stored in Key-Dest. Then the ACCEPT statement terminates.
67. Key-Dest names a data item that will receive a code indicating the terminating event. The program's CRT STATUS (if any) also receives the termination code.
68. The BEFORE TIME and ALLOWING MESSAGES phrases operate in the same manner as they do in a Format 3 ACCEPT.

#### Format 8

69. A Format 8 ACCEPT fetches the value of an environment or configuration variable stored with a Format 12 DISPLAY statement.
70. The value data item should be of a size and type that allow the value of the environment or configuration variable to be accommodated.

### Examples

Format 1

```cobol
accept ws-code from console
```

Format 2 - Several examples

```cobol
*> Accept current date
accept my-date from date
*> sample value of my-date : 131220
 
*> Accept current date with 4 digit year
accept my-date from date yyyymmdd
*> sample value of my-date : 20131220
 
*> Accept current day of the year
accept myday from day yyyyddd
*> sample value for myday : 2013335
 
*> Accept current day and time
accept mydatetime from date-and-time
*> sample value for mydatetime : 2013121910593228
 
*> Accept parameters from command line
accept all-param from command-line
*> See unstring sample to put every parameter word on a separate variable
```

Format 3 - Display and Accept a screen defined in Screen Section

```cobol
       working-storage section.
       01 window-handle usage handle.
       01 cust-values.
          05 ws-cust-code  pic x(5).
          05 ws-cust-name  pic x(50).
 
       screen section.
       01 screen-1.
          03 scr-cust-code Entry-Field
             using ws-cust-code
             line 3.0
             column 21.4
             size 12.7 cells 
             lines 3.8 cells 
             id 1
             3-d.
          03 scr-cust-name Entry-Field
             using ws-cust-name
             line 8.7
             column 21.4
             size 24.5 cells 
             lines 4.6 cells 
             id 2
             3-d.
          03 scr-lab-1 Label
             line 2.7
             column 4.5
             size 13.5 cells 
             lines 3.7 cells 
             id 3
             title "Code :".
          03 scr-lab-2 Label
             line 9.3
             column 4.5
             size 13.5 cells 
             lines 3.7 cells 
             id 4
             title "Name :".
          03 scr-pb-save Push-Button
             line 16.4
             column 15.7
             size 15.5 cells 
             lines 6.4 cells 
             id 5
             title "Save".
         ...
 
       procedure division.
       display-and-accept.
          display standard  window background-low
              screen line 41
              screen column 91
              size 49.7
              lines 24.9
              cell width 10
              cell height 10
              label-offset 20
              color 257
              modeless
              title "Customers"
              handle window-handle.
           display screen-1.
           perform until exit-pushed
              accept screen-1 on exception 
                 perform is-screen-1-evaluate-func
              end-accept
           end-perform.
           destroy window-handle.
       ...
```

Format 4 - Get the text displayed on specific position of a character-based screen

```cobol
display "Customer Name : " line 5 col 10
display cust-name line 5 col 30
...
accept tmp-cust-name from screen line 5 col 30
```

Format 5 - Get some configuration properties and environment variable values

```cobol
*> Get the TEMP environment variable value
accept mytemp-dir from environment "temp"
*> Get the iscobol.file.index property value
accept my-file-index from environment "file.index"
*> Get the value of a custom property defined as:
*> iscobol.mycustom.location=Location01
accept my-location from environment "mycustom.location"
```

Format 6 - Display screen defined in screen section, accept only one control

```cobol
       working-storage section.
       01 window-handle usage handle.
       01 cust-values.
          05 ws-cust-code  pic x(5).
          05 ws-cust-name  pic x(50).
 
       screen section.
       01 screen-1.
          03 scr-cust-code Entry-Field
             using ws-cust-code
             line 3.0
             column 21.4
             size 12.7 cells 
             lines 3.8 cells 
             id 1
             3-d.
          03 scr-cust-name Entry-Field
             using ws-cust-name
             line 8.7
             column 21.4
             size 24.5 cells 
             lines 4.6 cells 
             id 2
             3-d.
          03 scr-lab-1 Label
             line 2.7
             column 4.5
             size 13.5 cells 
             lines 3.7 cells 
             id 3
             title "Code :".
          03 scr-lab-2 Label
             line 9.3
             column 4.5
             size 13.5 cells 
             lines 3.7 cells 
             id 4
             title "Name :".
          03 scr-pb-save Push-Button
             line 16.4
             column 15.7
             size 15.5 cells 
             lines 6.4 cells 
             id 5
             title "Save".
         ...
 
       procedure division.
       display-and-accept.
          display standard  window background-low
              screen line 41
              screen column 91
              size 49.7
              lines 24.9
              cell width 10
              cell height 10
              label-offset 20
              color 257
              modeless
              title "Customers"
              handle window-handle.
           display screen-1.
           perform until exit-pushed
              accept scr-cust-code on exception 
                 perform is-screen-1-evaluate-func
              end-accept
           end-perform.
           destroy window-handle.
       ...
```

Format 7 - Accept to wait for an event to terminate it and then display the event

```cobol
*> ws-event can be a pic 9(9).
accept event on exception ws-event continue
display message "Event : " ws-event
```

Format 8 - Accept from environment-value previously setup with display upon

```cobol
display "envfullname" upon environment-name
display "Adam Smith" upon environment-value
accept f-name from environment-value
```
