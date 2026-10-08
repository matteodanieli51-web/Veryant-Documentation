### Conceptual Characteristics of a File

The conceptual characteristics of a file are the explicit definition of each logical entity within the file itself. In a COBOL program, the input or output statements refer to one logical record.

It is important to distinguish between a physical record and a logical record. A COBOL logical record is a group of related information, uniquely identifiable, and treated as a unit.

A physical record is a physical unit of information whose size and recording mode is convenient to a particular computer for the storage of data on an input or output device. The size of a physical record is hardware dependent and bears no direct relationship to the size of the file of information contained on a device.

A logical record may be contained within a single physical unit; or several logical records may be contained within a single physical unit; or a logical record may require more than one physical unit to contain it. There are several source language methods available for describing the relationship of logical records and physical units.In this document, references to records means to logical records, unless the term "physical record" is specifically used.

The concept of a logical record is not restricted to file data but is carried over into the definition of WORKING-STORAGE Section, LOCAL-STORAGE Section and LINKAGE Section. Thus, WORKING-STORAGE Section, LOCAL-STORAGE Section and LINKAGE Section are grouped into logical records and defined by a series of record description entries.

When a logical record is transferred to or from a physical unit, none of the clauses used to describe the data in the logical record have any effect on this transfer.
