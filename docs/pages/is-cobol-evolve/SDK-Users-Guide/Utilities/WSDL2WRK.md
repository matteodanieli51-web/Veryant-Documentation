## WSDL2WRK

This utility is deprecated and supported only for backward compatibility. [STREAM2WRK](./STREAM2WRK) should be used instead.

The WSDL2WRK utility takes a WSDL file and generates a COBOL description of the 'SOAP Envelopes' used by the service. Two envelopes are generated for each service: an envelope for date request and an envelope for data response.

### Usage:

```cobol
iscrun -utility wsdl2wrk [-v1.1] [-o outputFile] [-amn] wsdlFile
```

Where:

- *-v.1.1* should be used to process WSDL files of version 1.1. By default the utility expects WSDL files of version 2.0
- *outputFile* is the name of the file that will contain the record definition corresponding to *wsdlFile*.
- *-amn* instructs the utility to append the method name rather than a progressive number to each generated copy file.
- *wsdlFile* is the name of the WSDL file to parse. It can be either a disk file name or a URL. Note that the utility is not able to read a file over the HTTPS protocol. In such case, the file should be downloaded to disc using third party utilities (e.g. a web browser) and then processed as a disc file.
If there is more than one schema, then more copyfiles are created with the following criteria:
- if there is no suffix on the *outputFile* name, the first is created with the same name as *outputFile* and the others with the name *outputFile<n\>*, where *n* is a progressive number.
- if there is a suffix on the *outputFile* name, the first is created with the same name as *outputFile* and the others with the name *outputFile<n\>.<suffix\>*, where *outputFile* is the output file name without extension, *n* is a progressive number and *suffix* is the output file name extension.

### Thin Client

WSDL2WRK can’t be launched directly by the isCOBOL Client.
