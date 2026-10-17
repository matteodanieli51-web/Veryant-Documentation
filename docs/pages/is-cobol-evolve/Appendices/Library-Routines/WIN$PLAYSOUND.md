## WIN$PLAYSOUND

The WIN$PLAYSOUND library routine plays a ".wav" or a ".aiff" file.

### Syntax:

```cobol
 CALL "WIN$PLAYSOUND" USING soundName
                            soundFlags
                     GIVING returnCode
```

### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| *soundName* | PIC X(n) | Specifies the name of the file to be played. It can be any .WAV or .AIFF file. If *soundName* is spaces, any sound currently playing is stopped.<br>Unless the file has been included in the program class file through the [COPY](../../Language-Reference/Compiler-Directing-Statements/COPY) RESOURCE statement, the framework will look for the file on disk.<br>During the search on disk, if *soundName* specifies relative pathname, the framework will resolve the relative pathname in the following locations, in order:<br>1. the current working directory<br>2. any jar and directory listed in the Classpath<br>3. the same jar or directory where the program class file was loaded from. |  |
| *soundFlags* | any numeric data item or numeric literal | It affects the way the sound is played. Valid values, defined in [isgui.def](../Copybooks/isgui.def), are: |  |
|  |  | SND-SYNC | The execution of the program is suspended for the whole duration of the sound. |
|  |  | SND-ASYNC | The sound is played asynchronously. |

### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| -1 | The WIN$PLAYSOUND library routine is not supported. |
| 0 | Operation failed. |
| 1 | Operation successful. |

### Examples:

**Example -** Play a sound file synchronously

```cobol
*> on working-storage copy "isgui.def"
*> snd-filename is pic x(n)

move "c:\tmp\sounds\startsound.wav" to snd-filename
call "win$playsound" using snd-filename, snd-sync
```
