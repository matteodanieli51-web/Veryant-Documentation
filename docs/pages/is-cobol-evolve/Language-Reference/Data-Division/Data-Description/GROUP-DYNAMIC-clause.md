### GROUP-DYNAMIC clause

The GROUP-DYNAMIC clause specifies that a group item includes items with dynamic length. These sub items can be either ANY LENGTH items or dynamic capacity tables.

#### General Format

```cobol
[ GROUP-DYNAMIC ]
```

#### Syntax Rules

1. The GROUP-DYNAMIC clause may be specified for group data items.

#### General Rules

1. Even if not explicitly specified, the GROUP-DYNAMIC clause is assumed for all the group items that include at least one sub item with dynamic length.
2. The dynamic length items are treated separately, as if they were not part of the group item.
3. When a group is moved to another group, the runtime moves the group stripped from the dynamic length items first. After it, it initializes the dynamic length items in the destination group and then it moves the dynamic length items of the source group following their ordinal position: the first dynamic length item in the source group is moved to the first dynamic length item in the destination group, the second dynamic length item in the source group is moved to the second dynamic length item in the destination group, and so on until the last dynamic length item in the source group has been moved. For a successful result the source group item and the destination group item should have the same structure.
4. When a group is compared with another group, the runtime compares the groups stripped from the dynamic length items first. After it, it compares the dynamic length items following their ordinal position: the first dynamic length item in the source group is compared with the first dynamic length item in the destination group, the second dynamic length item in the source group is compared with the second dynamic length item in the destination group, and so on until the last dynamic length item in the source group has been compared. For a successful comparison the source group item and the destination group item should have the same structure.

#### Example

The following source codes are equivalent. The second one demonstrates how the runtime internally manages the first one:

- a program that takes advantage of the GROUP-DYNAMIC feature

```cobol
       program-id. grdyn-test.
       working-storage section.
       01 group-1 group-dynamic.
          03 item-1 pic x.
          03 item-2 occurs dynamic capacity cap1.
             05 item-2-sub pic x.
          03 item-3 pic x.
          03 item-4 pic x any length.
      
       01 group-2 group-dynamic.
          03 item-1-b pic x.
          03 item-2-b occurs dynamic capacity cap2.
             05 item-2-b-sub pic x.
          03 item-3-b pic x.
          03 item-4-b pic x any length.
          
       procedure division.
       main-logic.
           move "A" to item-1.
           move "B" to item-2-sub(1).
           move "C" to item-2-sub(2).
           move "D" to item-3.
           move "E" to item-4.
           
           move group-1 to group-2.
           
           if group-1 = group-2
              display "Data moved correctly [ok]"
           else
              display "Unexpected result [fail]"
           end-if.
           goback.
```

- a program that doesn’t take advantage of the GROUP-DYNAMIC feature

```cobol
       program-id. grdyn-test.
       working-storage section.
       01 group-1.
          03 item-1 pic x.
          03 item-3 pic x.
       01 item-2.
          03 filler occurs dynamic capacity cap1.
             05 item-2-sub pic x.
       01 item-4 pic x any length.
      
       01 group-2.
          03 item-1-b pic x.
          03 item-3-b pic x.          
       01 item-2-b.
          03 filler occurs dynamic capacity cap2.
             05 item-2-b-sub pic x.
       01 item-4-b pic x any length.
       
       77 i              pic 9(3).
       77 flg-comp       pic 9 value 0.
          88 tables-equal value 1.
          88 tables-diff  value 0.
          
       procedure division.
       main-logic.
           move "A" to item-1.
           move "B" to item-2-sub(1).
           move "C" to item-2-sub(2).
           move "D" to item-3.
           move "E" to item-4.
           
           move group-1 to group-2.
           initialize item-2-b.
           perform varying i from 1 by 1 until i > cap1
              move item-2-sub(i) to item-2-b-sub(i)
           end-perform.
           move item-4 to item-4-b.
           
           
           set tables-equal to true.
           perform varying i from 1 by 1 until i > cap1
              if item-2-sub(i) not = item-2-b-sub(i)
                 set tables-diff to true
                 exit perform
              end-if
           end-perform.
           if group-1 = group-2 and
              tables-equal      and
              item-4 = item-4-b            
              display "Data moved correctly [ok]"
           else
              display "Unexpected result [fail]"
           end-if.
           goback.
```
