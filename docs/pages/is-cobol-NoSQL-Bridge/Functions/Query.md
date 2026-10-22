## Query

The Query function returns a bunch of records starting from a specific key value and considering some filtering criteria.

### Request body

```cobol
{
   "tableName": <file-name>,
   "key": {
      "name": <key-logical-name>
      },
   "keyCondition": <condition>,
   "limit": <limit>,
   "descending": <ascending-descending>,
   "lastEvaluatedKey": <key-value>,
   "signature": <signature>
}
```

### Parameters in the request body

| | |
| --- | --- |
| file-name | The name of the file as it was configured in the catalog. <br> The catalog name must be used as a as prefix, unless you’re working on the default catalog (e.g. "DEFAULT.INVOICES" and "INVOICES" are equivalent) |
| key-logical-name | The logical name of the key. <br> Refer to the output of [DescribeTable](./DescribeTable) to retrieve the correct names |
| condition | Condition that must be true to confirm the extraction of the record. <br> Refer to [Condition syntaxes](./Functions#condition-syntaxes) for the syntax you can use for this parameter. <br> This parameter is optional |
| limit | The maximum number of records to return. <br> Setting this parameter to 0, null or negative values, all records are returned. <br> Setting this parameter to a value greater than 0, a partial result set is returned. <br> You can repeat the request with *lastEvaluatedKey* and *signature* properly set to obtain the next records. <br> This parameter is optional. By default, all records are returned |
| ascending-descending | This is a boolean value. <br> Set it to false to have records returned in ascending order. <br> Set it to true to have records returned in descending order. <br> This parameter is optional. By default, records are returned in ascending order |
| key-value and signature | This pair of parameters allows you to obtain the next bunch of records when not all records were returned due to the *limit* parameter. Set them to the values returned in the response of the previous Query invocation to continue reading the next bunch of records. <br> These parameters are optional. Set them to null or omit them to start from the first record.The request will fail with status 400 if you pass invalid or unmatching key and signature. |
| | |

### Response

On success, the function returns the list of read records followed by lastEvaluatedKey and signature that you can use in the next request to read the next bunch of records. On error, an exception is returned.

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
