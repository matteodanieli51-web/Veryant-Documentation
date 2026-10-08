## National Items

National data items are the most pliant way to manage special characters.They don’t need any particular configuration and work the same way on every platform whatever is the current encoding set in the environment.

These items are defined by the N character in the picture. For example, in order to define a 10 digits national string, you would write:

```cobol
77 national-item PIC N(10).
```

If you take advantage of national data items, you don’t need to care about the current encoding set in the environment. The isCOBOL Framework handles national data items by encoding data in UTF-16 Big Endian. This is a fixed length encoding where each digit needs two bytes to be stored. The data item shown above, for example, uses 20 bytes of memory.

When national items are used within a group, the group should be defined as GROUP-USAGE NATIONAL:

```cobol
01 national-group GROUP-USAGE NATIONAL.
   03 national-item-1 PIC N(10).
   03 national-item-2 PIC N(20).
```

**Note**: a GROUP-USAGE NATIONAL field should contain only items whose picture is N(n) or numeric-edited.

National items can be used in the COBOL program as standard alphanumeric items. Every operation you can do on an alphanumeric item (for example: UNSTRING, INSPECT or reference an area) can be done also on national items in the same way.

This is the easiest and most reliable solution to handle special characters.

**Note**: national items cannot represent data written with a specific encoding (such as UTF-8 or BIG5) but just data written through national items.
