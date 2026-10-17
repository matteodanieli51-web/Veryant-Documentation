### WHEN-COMPILED

The WHEN-COMPILED option returns the compile time timestamp as string. It requires either [-cr](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) or [-cv](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compiler options.

#### General Format

```cobol
WHEN-COMPILED
```

#### General Rules

1. Under [-cr](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) option the timestamp is returned in the format "HH.NN.SS MMM DD, YYYY" where HH is the number of hours (0-23), NN is the number of minutes (0-59), SS is the number of seconds (0-59), MMM is the month name in the current locale, DD is the day number (1-31) and YYYY is the year number. Example: 16.13.53Jun 18, 2019.
2. Under [-cv](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) option the timestamp is returned in the format MM/DD/YYHH.NN.SS, where MM is the month number (1-12), DD is the day number (1-31), YY is the year number stripped of the century (0-99), HH is the number of hours (0-23), NN is the number of minutes (0-59) and SS is the number of seconds (0-59). Example: 06/18/1916.13.53
