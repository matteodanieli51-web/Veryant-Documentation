## Data access

- Fixed length sequential and relative files coming from IBM COBOL are fully supported by isCOBOL.
- Indexed files from IBM COBOL must be converted either to c-tree or JIsam with the following steps:
    1. unload file data to a raw binary file with IBM COBOL tools
    2. create an empty c-tree or JIsam indexed file by running a program that opens the file for output with isCOBOL
    3. load data from the raw binary file into the empty indexed file with [ctutil](\) or [JUTIL](\).
