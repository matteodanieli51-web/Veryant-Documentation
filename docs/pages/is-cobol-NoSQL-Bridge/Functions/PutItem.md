## PutItem

The PutItem function adds new records to the file, or rewrites existing records on an unique key violation condition.

### Request body

```cobol
{
   "tableName": <file-name>,
   "item": {
       <record-logical-name> {
          <field-name>:<field-value>,
         ...
         }
      },
   ...,
   "condition": <condition>
 
}
```

**Note** - the *item* entry can be repeated to insert multiple records with a single request.

### Parameters in the request body

| | |
| --- | --- |
| file-name | The name of the file as it was configured in the catalog.The catalog name must be used as a as prefix, unless you’re working on the default catalog (e.g. "DEFAULT.INVOICES" and "INVOICES" are equivalent) |
| record-logical-name | The logical name of the record.Refer to the output of [DescribeTable](./DescribeTable) to retrieve the correct names |
| field-name | The logical name of the field.Refer to the output of [DescribeTable](./DescribeTable) to retrieve the correct names.You should specify all the fields; fields not included in the request will be written with an initialized value |
| condition | Condition that must be true to confirm the insertion of the record.Refer to [Condition syntaxes](./Functions#condition-syntaxes) for the syntax you can use for this parameter. <br> This parameter is optional |
| | |

### Response

The function returns an empty response on success or an exception on error.

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
