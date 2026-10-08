#### -partition

Converts an existing RTG file to a partitioned file. Partitioned files are great for bulk data purging or archiving. See [Partitioned Files](https://docs.faircom.com/doc/partitions/) for detailed information regarding this unique RTG feature.

Usage

```shell
ctutil -partition file rule index
```

- *file* - is the file name without extension.
- *rule* - is the partition expression rule string.
- *index* - is the partition index number where 0 is the primary index.

The index must already exist and the record schema must already exist in the file. The record schema can be stored in the file with a [-sqlinfo](./sqlinfo) or [-sqlize](./sqlize).

It is possible to display the partition rule of an existing partitioned file with the [-sqlinfo](./sqlinfo) command.
