#### Preprocessor programs

The isCOBOL Compiler allows you to provide preprocessor programs that will be invoked for each processed source line. These programs must implement the com.iscobol.compiler.custpreproc.LinePreProcessor interface so they can be either Java classes or CLASS-ID COBOL programs.

Preprocessor programs are specified through the [iscobol.compiler.custompreproc \*](\) configuration property. For example, with the following configuration

```cobol
iscobol.compiler.custompreproc=PreProc01
```

the following procedure is performed for each line of code:

1. the Compiler reads the line of code,
2. the Compiler invokes PreProc01 passing the line of code to it along with complementary information (i.e. current source format and compiler options),
3. PreProc01 parses the line and optionally changes the content generating one or more different lines of code,
4. the Compiler receives the new content from PreProc01 and parses it.

If more than one preprocessor is specified, e.g.

```cobol
iscobol.compiler.custompreproc=PreProc01 PreProc02
```

then the following procedure is performed for each line of code:

1. the Compiler reads the line of code,
2. the Compiler invokes PreProc01 passing the line of code to it along with complementary information (i.e. current source format and compiler options),
3. PreProc01 parses the line and optionally changes the content generating one or more different lines of code,
4. the Compiler receives the new content from PreProc01 and passes it to PreProc02 along with complementary information (i.e. current source format and compiler options),
5. PreProc02 parses the content and optionally changes it generating one or more different lines of code,
6. the Compiler receives the new content from PreProc02 and parses it.

The preprocessor activity is transparent for the user that launches the Compiler. The original source code remains unchanged. Also during debug, the Debugger shows the original source code.

##### Implementation

The *com.iscobol.compiler.custpreproc.LinePreProcessor*, that preprocessor programs must implement, has only one method:

```cobol
 public void process(java.lang.String originalLine,
                     int sourceFormat,
                     java.lang.String fileName,
                     int lineNumber,
                     java.lang.String[] compilerOptions,
                     com.iscobol.compiler.custpreproc.ProcessResult result)
              throws com.iscobol.compiler.custpreproc.ProcessException
```

Where:

- *originalLine* includes the text read from the source file
- *sourceFormat* tells the current source format:

| **Value** | **Meaning** |
| --- | --- |
| 0 | Unknown |
| 1 | Fixed |
| 2 | Terminal |
| 3 | Free |
| 4 | Variable |
| 5 | Long line |

**Note** - unless a specific source format has been forced via compiler options, the source format of the first line will be unknown.

- *fileName* holds the current source file; it could be either the main cbl or a copybook
- *lineNumber* holds the line number in the current source file. If zero, it means that the end of file has been reached and *originalLine* is null.
- *compilerOptions* includes all the compiler options that are in use
- *result* is a *com.iscobol.compiler.custpreproc.ProcessResult* object and contains the following methods:

```cobol
public java.lang.String getReplace()
public void setReplace(java.lang.String replace)
public boolean isComment()
public void setComment(boolean comment)
```

Where:

- *replace* initially matches with originalLine, but the preprocessor program can change it. You can set this String either to one line of code or to multiple lines of code. In order to specify a new line of code, use line feed character (x”0A”) followed by the proper number of spaces (depending on the source format) and the text of the new line. Setting this String to null discards the line.

**Note** - if your preprocessor program is a CLASS-ID, ensure you have set [iscobol.compiler.oop.trim\_parameters](\) to 0 in the Compiler’s configuration before compiling it, otherwise the spaces you used for indentation might be trimmed.

- **comment** specifies if the text hosted by the replace String should be considered as comment or not. Set comment to true to mark the text as comment.

When the **process** method is completed, the Compiler receives the test hosted by **replace** and the comment switch hosted by **comment**.

The preprocessor program can optionally raise errors and warnings by throwing a *com.iscobol.compiler.custpreproc.ProcessException*. This class has the following methods:

```cobol
public ProcessException(int severity, java.lang.String message)
public ProcessException(int severity, String message, com.iscobol.compiler.custpreproc.ProcessResult replace)
```

Where:

- *severity* specifies the severity:

| **Value** | **Meaning** |
| --- | --- |
| 1 | Informational |
| 2 | Warning |
| 3 | Error |
| 4 | Severe error |

- *message* includes the error text
- *replace* includes the new source code to be parsed by the Compiler.

Use the second signature when the error is not severe and the compilation process must continue.

##### Bridge Programs

The source code of bridge programs that are automatically generated due to the [iscobol.compiler.easydb (boolean)](\) and [iscobol.compiler.servicebridge (boolean)](\) configuration properties is passed to the preprocessor program as well.

##### Troubleshooting

If a compiler error occurs, the line number shown by the Compiler might not be accurate when preprocessor programs are involved. Lines injected by the preprocessor programs alter the error line number of the next errors. For example, having a syntax error at line 8, if a preprocessor program injected 10 lines before line 8, the Compiler will report the error at line 18. This could be misleading for the user, that can only look at the original source file. To avoid this behavior and have the correct line numbers in the Compiler output, you can set [iscobol.compiler.debug.replaced_source (boolean)](\) to false, but, as a consequence, you will not see the altered source when you debug the program after a successful compilation. Therefore, the good practice is to have two compile commands: one with the property set to false (to be used to troubleshoot compile errors) and one with the property set to true (to be used to produce classes for debug).

After a successful compilation, there are two methods to review the code changes applied by preprocessor programs and validate them:

- add the [-lf](\) option to your compile command and look at the list file. The list file contains the new code as it was altered by preprocessors.
- attach a debugger to the preprocessor programs and debug their logic.

If the preprocessor programs are CLASS-ID COBOL programs, you can proceed as follows:

  a. Compile the preprocessor programs either with [-d](\) option or [-dx](\) option

  b. Add the iscobol.compiler.rundebug setting to your compiler command line, e.g.

```cobol
iscc -J-Discobol.compiler.rundebug=2 ...
```

  c. Launch the remote debugger:

```cobol
iscrun -r
```

##### Javadoc

Consult the javadoc installed with isCOBOL in the folder $ISCOBOL\_HOME/javadoc for the full reference of the com.iscobol.compiler.custpreproc classes.

##### Examples

Some preprocessor examples are installed with the isCOBOL SDK under the sample/compiler-pre-process directory.
