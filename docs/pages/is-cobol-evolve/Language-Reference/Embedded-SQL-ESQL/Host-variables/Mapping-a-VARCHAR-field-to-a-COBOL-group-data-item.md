### Mapping a VARCHAR field to a COBOL group data item

#### Explicit definition

Database VARCHAR fields can be mapped to a COBOL group data item with the following structure:

```cobol
01 ITEM-NAME.
   49 ITEM-LEN  PIC S9(4) USAGE BINARY.
   49 ITEM-TEXT PIC X(n).
```

Note that the mapping occurs only if the parent item has level 01 and the two children items have level 49. There are no conditions on the name of the data items, instead.

The ITEM-TEXT data item can be any size. The USAGE of the ITEM-LEN data item can be BINARY, COMP, COMP-4 or COMP-5.

When this kind of host variable is used as input (e.g. in an INSERT statement), the ITEM-TEXT data item specifies the text to be stored in the VARCHAR field and the ITEM-LEN data item specifies the length of the inserted value. If the value of ITEM-LEN is less than the length of the value in ITEM-TEXT, a truncation occurs. If the value of ITEM-LEN is greater than the length of the value in ITEM-TEXT, the exceeding part is filled with spaces.

When this kind of host variable is used as output (e.g. in a SELECT statement), the ITEM-TEXT data item receives the text stored in the VARCHAR field and the ITEM-LEN data item receives the length of the retrieved value.

**Note** - trailing spaces in the value may be preserved or not depending on the [iscobol.jdbc.kept_spaces](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#databasebridge-and-jdbcesql-configuration) configuration setting. The LEN data item will be adjusted accordingly by the runtime.

#### Implicit definition

Database VARCHAR fields can be mapped to a COBOL data item with a Format 3 [PICTURE clause](../../Data-Division/Data-Description/PICTURE-clause):

```cobol
01 ITEM-NAME PIC X(n) VARYING.
```

ITEM-NAME data item can be any name and size.

This kind of item is internally expanded by the Compiler as follows:

```cobol
01  ITEM-NAME.
    03  ITEM-NAME-arr PIC X(n).
    03  ITEM-NAME-len PIC S9(4) COMP-5.
```

When this kind of host variable is used as input (e.g. in an INSERT statement), the data item with "-arr" suffix specifies the text to be stored in the VARCHAR field and the data item with "-len" suffix specifies the length of the inserted value. If the value of the len item is less than the length of the value in the arr item, a truncation occurs. If the value of the len item is greater than the length of the value in the arr item, the exceeding part is filled with spaces.

When this kind of host variable is used as output (e.g. in a SELECT statement), the data item with "-arr" suffix receives the text stored in the VARCHAR field and the data item with "-len" suffix receives the length of the retrieved value.

**Note** - trailing spaces in the value may be preserved or not depending on the [iscobol.jdbc.kept_spaces](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#databasebridge-and-jdbcesql-configuration) configuration setting. The data item with "-len" suffix will be adjusted accordingly by the runtime.

##### Code example

Insert a value using a VARYING data item and read it back using a group data item:

```cobol
      *Table structure on the database:
      *      create table tbl (id numeric(1), vc varchar(10))
      *
       program-id. vchar.
       working-storage section.
       ...
       01 itm pic x(10) varying. 
       01 gr.
          49 ln pic s9(4) usage binary.
          49 txt pic x(10).
       ...
       procedure division.
       main.
           exec sql 
                connect :usr identified by :pwd using :dns
           end-exec.
           move "test" to itm-arr.
           move 4      to itm-len.
           exec sql 
                insert into tbl(id, vc) 
                       values (1, :itm)
           end-exec.
           exec sql 
                select vc into :gr 
                          from tbl
                          where id = 1
           end-exec.
           display "'" txt(1:ln) "'".  | it will display ‘test’
```
