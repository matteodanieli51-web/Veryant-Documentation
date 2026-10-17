### ctrdmp

The ctrdmp utility is used to restore dumps created with [ctdump](./ctdump).

Usage

```shell
ctrdmp [ dumpscript ]
```

A successful ctrdmp completion always writes the following message to CTSTATUS.FCS:

```shell
DR: Successful Dump Restore Termination
```

A failed ctrdmp writes the following message to CTSTATUS.FCS when ctrdmp terminates normally:

```shell
DR: Dump Restore Error Termination...: <cterr>
```

where <cterr\> is the error code.
