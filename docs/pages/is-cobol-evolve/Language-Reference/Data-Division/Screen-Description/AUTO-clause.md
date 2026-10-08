### AUTO clause

The AUTO clause causes the cursor to be automatically moved to the next field declared for the screen item during execution of an [ACCEPT](../../Procedure-Division-Statements/ACCEPT) screen Statement.

#### General format

```cobol
{AUTO         }
{AUTO-SKIP    }
{AUTOTERMINATE}
{TAB          }
```

#### General rules

1. AUTO, AUTO-SKIP, AUTOTERMINATE and TAB are synonyms.
2. An AUTO clause specified at the group level applies to each input screen item in that group.
3. The AUTO clause is ignored for a field that is not an input field.
4. The AUTO clause takes effect during the execution of an [ACCEPT](../../Procedure-Division-Statements/ACCEPT) screen Statement that references the screen item for which the AUTO clause is specified.
5. The AUTO clause causes the cursor to be automatically moved to the next input field declared for the screen item when the last character of the input field whose definition contains this clause has data entered into it.
6. When the AUTO clause is specified for an input field that has no logical next field during input, then when that field is available for input during an [ACCEPT](../../Procedure-Division-Statements/ACCEPT) screen Statement and data is entered into the last character of the screen item, successful completion with normal termination of the [ACCEPT](../../Procedure-Division-Statements/ACCEPT) Statement results.
