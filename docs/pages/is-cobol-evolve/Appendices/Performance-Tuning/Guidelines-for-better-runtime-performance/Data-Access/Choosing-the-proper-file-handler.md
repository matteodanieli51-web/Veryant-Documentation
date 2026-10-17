#### Choosing the proper file handler

File connectors like vfc (Vision File Connector) and mfc (Micro Focus File Connector) are useful to test isCOBOL without converting your original data set as well as running isCOBOL along with either ACUCOBOL-GT or Micro Focus working on the same data set. However, file connectors don’t provide good performance. If you’re looking for good performance on data access, then you should consider to convert your original data set to either c-tree RTG or JIsam.

c-tree RTG should be used instead of JIsam when the i-o activity and the concurrency on indexed files are huge.

Installing the c-tree RTG Server on the server machine where data files are stored is more safe and faster than accessing data files via network drive or UNC paths, regardless of the amount of i-o activity and concurrency on these files.

c-tree RTG is rather fast with the default configuration, but it can be further optimized with some tuning. See [c-tree RTG](./c-tree-RTG) for some advice about how to optimize c-tree RTG.
