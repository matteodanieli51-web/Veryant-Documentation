# Managing multi-record files

The COBOL language allows multiple records to be described in the same FD. These records appear as different level 01 items redefining each other.

DatabaseBridge allows you to manage this situation by redirecting each record definition to a different table.

Consider the following FD:

```cobol
       FD  filem.
       01  f-recM.
           03 f-key.
              05 f-cod         pic 9(3).
              05 f-type        pic x.
           03 american-person.
              05 a-first-name  pic x(32).
              05 a-second-name pic x(32).
              05 a-address     pic x(32).
              05 a-zip         pic x(5).
              05 add-field-1   pic x(10).
              05 add-field-2   pic x(10).
       01  f-recE.
           03 f-keyE.
              05 f-codE        pic 9(3).
              05 f-typeE       pic x.
           03 italian-person.
              05 E-nome        pic x(32).
              05 E-cognome     pic x(32).
              05 E-indirizzo   pic x(32).
              05 E-cap         pic x(5).
              05 new-field-A   pic x(5).
              05 filler        pic x(15).
       01  f-recS.
           03 f-keyS.
              05 f-codS         pic 9(3).
              05 f-typeS        pic x.
           03 ASIAN-FIELD       pic x(121).
       01  f-recF.
           03 f-keyF.
              05 f-codF         pic 9(3).
              05 f-typeF        pic x.
           03 AFRICAN-FIELD1    pic x(120).
           03 AFRICAN-FIELD2    pic x(1).
       01  f-recU.
           03 f-keyU.
              05 f-codU         pic 9(3).
              05 f-typeU        pic x.
           03 AUSTRALIAN-FIELD1    pic x(40).
           03 AUSTRALIAN-FIELD2    pic x(40).
           03 AUSTRALIAN-FIELD3    pic x(40).
           03 AUSTRALIAN-FIELD4    pic x(1).
```

By default, only the first record definition would be handled on the database. This behavior is transparent for the COBOL program because the runtime automatically sets redefined fields, but it doesn’t allow all of the fields on the database to be seen, so other client tools external to the COBOL program cannot manage them.

In order to bring all the fields on the database, it’s necessary to specify a condition and a destination table for every record definition thru the EFD [WHEN Directive](\). The above FD can be changed to:

```cobol
       FD  filem.
      $EFD WHEN F_TYPE = "M" TABLENAME = AMERICAN_PEOPLE
       01  f-recM.
           03 f-key.
              05 f-cod         pic 9(3).
              05 f-type        pic x.
           03 american-person.
              05 a-first-name  pic x(32).
              05 a-second-name pic x(32).
              05 a-address     pic x(32).
              05 a-zip         pic x(5).
              05 add-field-1   pic x(10).
              05 add-field-2   pic x(10).
      $EFD WHEN F_TYPE = "E" TABLENAME = EUROPEAN_PEOPLE
       01  f-recE.
           03 f-keyE.
              05 f-codE        pic 9(3).
              05 f-typeE       pic x.
           03 italian-person.
              05 E-nome        pic x(32).
              05 E-cognome     pic x(32).
              05 E-indirizzo   pic x(32).
              05 E-cap         pic x(5).
              05 new-field-A   pic x(5).
              05 filler        pic x(15).
      $EFD WHEN F_TYPE = "S" TABLENAME = ASIAN_PEOPLE
       01  f-recS.
           03 f-keyS.
              05 f-codS         pic 9(3).
              05 f-typeS        pic x.
           03 ASIAN-FIELD       pic x(121).
      $EFD WHEN F_TYPE = "F" TABLENAME = AFRICAN_PEOPLE
       01  f-recF.
           03 f-keyF.
              05 f-codF         pic 9(3).
              05 f-typeF        pic x.
           03 AFRICAN-FIELD1    pic x(120).
           03 AFRICAN-FIELD2    pic x(1).
      $EFD WHEN F_TYPE = "U" TABLENAME = AUSTRALIAN_PEOPLE
       01  f-recU.
           03 f-keyU.
              05 f-codU         pic 9(3).
              05 f-typeU        pic x.
           03 AUSTRALIAN-FIELD1    pic x(40).
           03 AUSTRALIAN-FIELD2    pic x(40).
           03 AUSTRALIAN-FIELD3    pic x(40).
           03 AUSTRALIAN-FIELD4    pic x(1).
```

This causes multiple EDBI routines to be generated.

The runtime will automatically call the proper EDBI routine depending on the condition validated on the current record.
