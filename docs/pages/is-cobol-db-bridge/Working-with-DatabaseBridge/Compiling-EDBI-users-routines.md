## Compiling EDBI user's routines

If you relied on the automatic routine generation done by the Compiler, your EDBI routine will be automatically compiled using the same compiler options that were used for the original program.

If you generated the EDBI routines using EDBIIS, instead, then it’s your duty to compile them. Take care to use the same data options that you are using with your COBOL application. For example, if you are compiling your programs with -ds for trailing separate sign, use -ds also to compile the EDBI routines.
