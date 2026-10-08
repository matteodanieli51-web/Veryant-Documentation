## UpdateItem

The UpdateItem function updates a record using an expression. Unlike PutItem, which requires you to provide values for all fields in the record, UpdateItem allows you to include only the fields you want to modify in the request.

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
   },
   "expression": <expression>,
   "condition": <condition>
}
```

### Parameters in the request body

| | |
| --- | --- |
| file-name | The name of the file as it was configured in the catalog. <br> The catalog name must be used as a as prefix, unless you’re working on the default catalog (e.g. "DEFAULT.INVOICES" and "INVOICES" are equivalent) |
| key-logical-name | The logical name of the key. <br> Refer to the output of [DescribeTable](./DescribeTable) to retrieve the correct names |
| record-name | The parent fields of the key segment must be specified. <br> Refer to the output of [DescribeTable](./DescribeTable) to retrieve the correct names |
| key-segment and value | For each key segment you must provide the name of the field and the value. <br> Refer to the output of [DescribeTable](./DescribeTable) to retrieve the correct names |
| expression | Expression that describes the requested change in the record. <br> Refer to [Expression syntax](./Functions#expression-syntax) for the syntax you can use for this parameter. |
| condition | Condition that must be true to confirm the deletion of the record. <br> Refer to [Condition syntaxes](./Functions#condition-syntaxes) for the syntax you can use for this parameter. <br> This parameter is optional |
| | |

### Response

The function returns the content of the deleted record on success or an exception on error.

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
