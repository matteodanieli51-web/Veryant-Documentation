### sa_admin

The command-line system administrator program, sa_admin, can be used to perform many user operations directly from shell scripts.

Usage:

```shell
sa_admin [-a username] [-p passwd]  [-f filepasswd] [-s servername] <option>
```

Where:

- *username* is the login user, e.g. ‘admin’
- *passwd* is the login password, e.g. ‘ADMIN’
- *filepasswd* is the file password, if applicable
- *servername* is the c-tree server name, e.g. ‘FAIRCOMS’
- *option* is one of the following:

|  |  |
| --- | --- |
| -oua | Add a user account |
| -oud | Change user account description |
| -oue | Change user account extended settings |
| -oug | Add a user to a group |
| -oul | List user accounts |
| -oum | Change user account memory limit |
| -oup | Change user account password |
| -our | Delete a user account |
| -ous | Show user account information |
| -oux | Remove a user from a group |
| -oga | Add a group |
| -ogd | Change group description |
| -ogl | List groups |
| -ogm | Change group memory limit |
| -ogr | Delete a group |
| -ogs | Show group information |
| -ofg | Change file group |
| -ofl | List files matching filename |
| -ofo | Change file owner |
| -ofp | Change file password |
| -ofs | Change file permissions |
