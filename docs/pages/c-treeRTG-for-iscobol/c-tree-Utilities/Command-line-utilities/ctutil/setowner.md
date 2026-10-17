#### -setowner

Specifies the password (also known as the owner name) of a file in order to restrict access to the file. This password can be removed using [-clrowner](./clrowner).

Usage

```shell
ctutil -setowner file password 0|1
```

- *file* - File name (without extension).
- *password* - File password.
- 0 - Password is required for any access mode.
- 1 - Permits read-only access if password is not specified.

The password parameter is mandatory. The maximum password name length is 10 bytes. In order to remove an existing file password, the [-clrowner](./clrowner) command must be used to specify the password with the -o option.
