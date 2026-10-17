### GROUP-USAGE clause

The GROUP-USAGE clause specifies the format of a group item in the computer storage.

#### General Format

```cobol
[ GROUP-USAGE IS ] {BIT        }
                   {NATIONAL   }
```

#### Syntax Rules

1. The GROUP-USAGE clause may be specified for group data items.
2. When the BIT phrase is specified, USAGE BIT is implied for the subject of the entry. A USAGE clause shall not be specified for the subject of the entry. All elementary items subordinate to the subject of the entry shall be explicitly or implicitly described as usage bit, class and category boolean. All subordinate group items shall be explicitly or implicitly described as GROUP-USAGE BIT.
3. When the NATIONAL phrase is specified, USAGE NATIONAL is implied for the subject of the entry. A USAGE clause shall not be specified for the subject of the entry. All elementary items subordinate to the subject of the entry shall be explicitly or implicitly described as usage national. Any signed numeric data items shall be described with the SIGN IS SEPARATE clause. All subordinate group items shall be explicitly or implicitly described as GROUP-USAGE NATIONAL.

#### General Rules

1. When the BIT phrase is specified:

a. The subject of the entry is a bit group and also a bit data item; its class and category are boolean.

b. Unless stated otherwise, a bit group is treated as though it were an elementary data item of usage bit and class and category boolean described with PICTURE 1(n), where n is the bit length of the group.

2. When the NATIONAL phrase is specified:

a. The subject of the entry is a national group; its class and category are national.

b. Unless stated otherwise, a national group is treated as though it were an elementary data item of usage national and class and category national described with PICTURE N(m), where m is the length of the group.

3. If a GROUP-USAGE clause is not specified or implied for a group item that is not strongly typed, that group item is an alphanumeric group item.
