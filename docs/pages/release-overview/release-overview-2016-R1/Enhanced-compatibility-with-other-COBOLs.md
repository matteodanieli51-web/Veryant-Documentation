## Enhanced compatibility with other COBOLs

The isCOBOL 2016 R1 compiler introduces additional new options:

• -d1 to treats Binary data whose length is <= 2 to be stored in 1 byte. It could be useful during Micro Focus or other COBOL migrations when binary files are stored with this rule.

• -dcr to use Realia COBOL sign encoding. It could be useful when the sign encoding used in existing files must be maintained.

The library routine named C$XML was enhanced to support two new op-codes to simplify migration from ACUCOBOL-GT. This library should be used just for compatibility with ACUCOBOL-GT COBOL source code. isCOBOL users can take advantage of powerful and native way to support XML streams.

Two new library routines named CBL_WRITE_SCR_CHARS and CBL_READ_SCR_CHARS were added to simplify migration from Micro Focus COBOL.

DISPLAY POP-UP statement with CONTROL clause syntax has been enhanced to simplify migration from RM/COBOL.

Code example:

```cobol
          DISPLAY POP-UP WINDOW-CONTROL-BLOCK
                   LINE W-LINE POSITION W-POS
                   CONTROL W-CONTROL.
           ACCEPT W-STAT FROM EXCEPTION STATUS.
           CLOSE POP-UP WINDOW-CONTROL-BLOCK CONTROL "WINDOW-REMOVE".
```

Starting from isCOBOL 2016, BTRIEVE and Pervasive ISAM file are directly supported from a new interface class named com.iscobol.io.DynamicBtrieve. This native interface requires installation of BTRIEVE or Pervasive SQL native client library to work correctly.

ISMIGRATE data migration utility was enhanced to support direct BTRIEVE/Pervasive SQL data migration.
