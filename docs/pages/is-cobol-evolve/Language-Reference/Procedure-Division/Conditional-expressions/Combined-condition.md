### Combined condition

Two or more conditions can be logically connected to form a combined condition.

Syntax

```cobol
condition-1  {AND}  condition-2
             {OR }
```

The condition to be combined can be any of the following:

- A simple-condition
- A negated simple-condition
- A combined condition
- A negated combined condition (that is, the NOT logical operator followed by a combined condition enclosed in parentheses)

When relation-conditions are written consecutively, any relation-condition after the first can be abbreviated in one of two ways:

- Omission of the subject
- Omission of the subject and relational operator
