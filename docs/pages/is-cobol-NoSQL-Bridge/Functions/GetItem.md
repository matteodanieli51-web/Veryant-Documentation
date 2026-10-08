## GetItem

The GetItem function returns the record associated to the given key.

### Request body

```cobol
{
   "tableName": <file-name>,
   "key": {
      "name": <key-logical-name>,
      "fieldValues": {
         <record-name>: {
         <key-segment>: <value>, ...
         }
      }
   }
}
```

### Parameters in the request body

| | |
| --- | --- |
| file-name | The name of the file as it was configured in the catalog.The catalog name must be used as a as prefix, unless you’re working on the default catalog (e.g. "DEFAULT.INVOICES" and "INVOICES" are equivalent) |
| key-logical-name | The logical name of the key.Refer to the output of [DescribeTable](./DescribeTable) to retrieve the correct names |
| record-name | The parent fields of the key segment must be specified.Refer to the output of [DescribeTable](./DescribeTable) to retrieve the correct names |
| key-segment and value | For each key segment you must provide the name of the field and the value.Refer to the output of [DescribeTable](./DescribeTable) to retrieve the correct names |
| | |

### Response

The function returns the content of the requested record on success or an exception on error.

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
