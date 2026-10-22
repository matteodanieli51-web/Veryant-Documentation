## Troubleshooting

The following table describes the most common errors you might encounter using isCOBOL UDBC.

| Error Code | SQL State | Description | Cause |
| --- | --- | --- | --- |
| 0 | 08005 | IIOP: Communication problem(s) [java.net.ConnectException: Connection refused: connect] | The UDBC Server is down or unreachable |
| 67 | S0002 | [Veryant][VeryantUDBC driver]Base table or view not found: <*tablename*> | The EFD dictionary of one or more tables listed in the SQL query has not been found by the UDBC Server |
| 81 | HY000 | [Veryant][VeryantUDBC driver]General errorS1000: Error writing table (errno =100) | Unique key violation |
| 84 | HY000 | [Veryant][VeryantUDBC driver]General errorS1000: Error processing table (errno =101) | The physical file has not been found by the isCOBOL File Server on the server |
| 144 | 08001 | [Veryant][VeryantUDBC driver]Unable to establish connection: Cannot connect to isCOBOL File Server: err #147. Error on connection 10061,10061 | The isCOBOL File Server is down or unreachable |
| 147 | S1000 | [Veryant][VeryantUDBC driver]Error processing table | Mismatch between physical file logical-info and the info included in the EFD dictionary |
