### <trxholdslocks\>

The trxholdslocks option indicates whether to hold or release locks during a transaction commit or rollback. This feature is turned off by default.

It is a global-only option and can be set only as a child of [<config\>](./config). It is not valid if specified as child of [<instance\>](./instance) or [<file\>](./file).

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| yes | Only the locks on records updated during the transaction are released at transaction commit while all other locks not specifically released are held. At transaction rollback instead records locks are held unconditionally. | y, true, on, 1 |
| no | All pending locks are released during a transaction commit or rollback. This is the default value. | n, false, off, 0 |

#### Example

```ini
<trxholdslocks>yes</trxholdslocks>
```
