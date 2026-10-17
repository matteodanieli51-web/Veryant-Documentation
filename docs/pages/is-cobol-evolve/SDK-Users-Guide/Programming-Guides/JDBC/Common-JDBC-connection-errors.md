### Common JDBC connection errors

```cobol
no suitable driver found for <url>
```

This error is returned when the JDBC Driver cannot resolve the connection URL specified by [iscobol.jdbc.url](../../Compiler-and-Runtime/Configuration/Configuration-Properties#databasebridge-and-jdbcesql-configuration) property. Double check the syntax of the URL and ensure that it follows the documented specifications.
