## Other enhancements

Here some minor enhancements provided in isCOBOL 2015R1 framework:

- Ability to set variable value inside properties file

```cobol
iscobol.conf.var_delimiters=${.}
iscobol.myenv=from Java
iscobol.hello=hello ${iscobol.myenv} ${java.version}
```

- Ability to set dynamically the fetch size for a ESQL cursor statement.

A new property named iscobol.jdbc.fetch\_size allows specifying the number of rows to retrieve in one go from the database. This can be used in in ESQL programs or with isCOBOL Database Bridge.

- I$IO info-function now to return collating sequence.

This new feature is also applied to JUTIL and ISMIGRATE utilities when working with indexed files with collating sequence.

- Special convention to be able to specify DLL calling convention during CALL statement.

To force all function of mylib wil be called with C convention:

```cobol
CALL "mylib.dll/0"
```

To force all function of mylib wil be called with PASCAL convention:

```cobol
CALL "mylib.dll/1"
```
