## How to configure the DSN (Multi Companies)

![](images/veryantOdbcMulti.png)

Using multi-company support option, you can manage customer data files from several companies with a single DSN. The data files from each customer (company) are structured the same and even named the same, but stored in a different directory.

The name of the company directories can assume several formats. Usually the name is composed of two different parts: a fixed prefix (or suffix), like acct for example, and a variable that is used to identify the company itself. This variable can be a progressive digit or a part of the name of the company. The directory name can also reflect the name of the company itself, barring operating system naming restrictions.

- **Pointer to existing DSN** specifies the data source name you assigned the master DSN.

- **Replacing characters** is the string of characters that needs to be replaced, followed by an equals sign and the string of characters to be used for this company. For example, when creating the Acme Glass DSN, type:

```cobol
xxx=acme
```

If more than one variable was used, separate the variables by a space. For example:

```cobol
xxx=acme yyy=data
```

When the driver opens the data source, it replaces the general string found in File Prefix with the specific string in order to obtain the correct pathname.
