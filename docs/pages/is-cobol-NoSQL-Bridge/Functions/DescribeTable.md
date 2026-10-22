## DescribeTable

The DescribeTable function returns the file stucture and the keys definition.

### Request body

```cobol
{
   "tableName": <file-name>
}
```

### Parameters in the request body

| | |
| --- | --- |
| file-name | The name of the file as it was configured in the catalog.The catalog name must be used as a as prefix, unless you’re working on the default catalog (e.g. "DEFAULT.INVOICES" and "INVOICES" are equivalent) |
| | |

### Response

The function returns all the information it was able to retrieve from the EFD dictionary: field names, field types and keys definitions.

### Status

The function can return one of the following HTTP statuses:

| | |
| --- | --- |
| 200 | Operation successful |
| 400 | Operation failed. Refer to the response for details about the error that occurred |
| 401 | Not authenticated |
| 403 | Operation not permitted |
| 405 | The request was not sent using the POST method |
| 500 | Server error. Refer to the response for details about the error that occurred |
| | |
