### cttctx

cttctx is a multi-threaded c-tree client test for comprehensive testing of c-tree server operations. This utility was designed specifically for profiling c-tree performance. Use this utility to simulate high load conditions against the c-tree server for verifying application performance.

Usage

```shell
cttctx <uid> <upw> <svn> [create [-t<trnmod>] | <nThrds> [-c<concurrency>] [-d<dist>] [-e] [-h] [-j] [-o<op>] [-p] [-r<msec>] [-n<niter>] ]
```

Arguments

- <uid\> User name
- <upw\> User password
- <svn\> c-tree Server name
- create Create new test data/index files
- -t<trnmod\> Transaction mode to use when creating the files
- trnmod is one of the following
  - t ctTRNLOG
  - p ctPREIMG
  - n no tran
- <nThrds\> Number of c-tree threads to spawn
- -c<concurrency\> Change thread concurrency to <concurrency\>
- -e Use the embedded c-treeSQL interface (otherwise use the ISAM interface)
- -h Hard exit, abrupt termination without thread cleanup
- -j Add to vlength files
- -o<op\> Operation to apply
- <op\> is one of the following:
  - a Add
  - r Read
  - d Delete
- -p track performance stats such as latency of operations
- -r<msec\> Number of milliseconds between performi

Refer to c-tree Server Administrator's Guide for additional information on this utility.
