### External File Description dictionaries

The isCOBOL Compiler is capable of generating data dictionaries that store a map of the COBOL record structures. These dictionaries are called External File Description (EFD) because they’re based on the standard COBOL file description (FD).

External File Description dictionaries are used by all the external tools that otherwise would not be aware of the COBOL record structure, including but not limited to the [DatabaseBridge generator (edbiis)](\), [DCI](\) and [GIFE (Index and Relative File Editor)](\).

By default External File Description dictionaries are given the same name of the COBOL file that they describe. If the file name is variable, the name of the variable is used. The name can be customized via the [FILE Directive](\).

External File Description dictionaries have XML content. Each dictionary is divided in three areas:

| | |
| --- | --- |
| key area | In this area, keys are described. You can find information such as the number of segments, the name of the fields included in each key and the offset and length of each segment. |
| conditions area | This area appears only if at least one WHEN Directive was used. It includes the details about the conditions specified by WHEN directives. |
| fields area | In this area, record descriptions are provided. For each field the following information is provided: name, type, size, length and offset. |
| | |

The main element of External File Description dictionaries is named "table" and provides the following information: name of the file, record size and number of keys.

The fields of the COBOL structure are renamed as follows in the dictionary:

- all names are made upper-case unless a diffrent case is specified by the [NAME Directive](\),
- all dashes are translated to underscore,
- if the field name begins with a number, an underscore is put before it to conform to database rules prohibiting columns that start with a number. If you don't want the underscore added, use the [NAME Directive](\).

All the fields of the COBOL structure are described in the dictionary, but some of them as marked as hidden, instructing the external tools to ignore them. The following fields are usually marked as hidden:

- fields that have no picture as they have children items, unless the [USE GROUP Directive](\) is specified above them,
- fields that are REDEFINES of other fields, unless these fields are part of a key, or a [WHEN Directive](\) is specified above them,
- fields of alternate record definitions, unless mapped to different tables via [WHEN Directive](\),
- fields that were hidden on purpose via the [HIDDEN Directive](\).

The isCOBOL Framework includes an internal object, the [efdParser Class (com.iscobol.lib.efdParser)](\), that can be used to easily retrieve information from External File Description dictionaries.
