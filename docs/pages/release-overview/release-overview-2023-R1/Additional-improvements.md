## Additional improvements

isCOBOL 2023 R1 release improves the JUTIL and Stream2Wrk utilities.

### JUTIL

JUTIL is the ISAM utility for indexed files in JISAM format. In this release, two existing options have been enhanced providing additional parameters.

The -convert option supports two additional optional parameters:

- -d to delete the intermediate files after converting

- -s to strip the extension from the output file name

These options are useful to avoid double extensions in the migrated JISAM file, for example when running the following command:

```cobol
jutil -convert products.ext out-jisam -d -s
```

the MicroFocus indexed file named products.ext is converted to JISAM format. The JISAM file is created in the out-jisam folder, the physical file name is products.dat and products.idx, since the -s parameter has been passed. Without passing the -s parameter, the physical file name is products.ext.dat and products.ext.idx. The extension .dat and .idx are the defaults for JISAM, but they can be customized by configuring iscobol.file.index.data\_suffix and iscobol.file.index.index\_suffix. Temporary files are created in the user’s temporary directory unless the TMPDIR environment variable is set, and are deleted after the conversion as a result of specifying the -d parameter.

The –rebuild option supports an additional optional parameter:

- *-efd=efdfile.xml* to create a new idx file based on the xml information.

This is useful when the index file is corrupted in the header information or completely missing, and to correctly rebuild the JISAM file it’s important to create first the appropriate empty .idx file. This process is now transparent when passing the .xml file created by -efd compiler option. For example, the following command:

```cobol
jutil -rebuild products –efd=xml
```

will rebuild the JISAM file named products when only the .dat file is present, and the .idx is missing. The .idx file will be created using the file info from products.xml file stored in the xml folder.

### Stream2Wrk

Stream2Wrk is a utility that developers can use to generate copy files containing the data structures to be used in working-storage section when parsing a stream. In addition to the supported wsdl, xml and json format, now it’s possible to parse a .xsd file directly, without the need for an .xml file that implements the xsd structure. For example, the following command:

stream2wrk xsd order.xsd

parses the order.xsd file and creates an order.wrk copybook.

The xsd option supports the same parameters as xml parsing:

- [-o outputfile] to set a different output file
- [-p prefix] to set a prefix to be used in the generated data-names
- [-d] to activate the disambiguate rule in order to avoid ambiguous identifiers

In addition, new optional parameters have been implemented in both xml and xsd parsing:

- [-c] to generate 'count' data-items
- [-e] to generate 88 level representing 'enumeration' tags
- [-iu] to ignore unbounded, avoiding the generation of “occurs” when there is 'maxOccurs=unbounded'
- [-l[=len]] to generate data-items with fixed size instead of 'pic x any length'
- [-nc] to avoid the generation of commented lines
- [-sa attribute-suffix] to specify the suffix for 'attribute' data-items
- [-sc count-suffix] to specify the suffix for 'count' data-items
 [-scp capacity-suffix] to specify the suffix for 'capacity' data-items when an “occurs dynamic” is declared
- [-sd data-suffix] to specify the suffix for 'data' data-items
- [-se enumeration-suffix] to specify the suffix for enumeration data-items

These new options help COBOL developers to better customize the generated output, and some of them are necessary if the generated copybook needs to be used in an XD file definition, where pic x any length and occurs dynamic are not supported. Occurs dynamic and pic x any length are still preferable when using the XMLStream class.

For example, parsing the following xsd file:

```cobol
        <xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                      xmlns:tns="http://tempuri.org/PurchaseOrderSchema.xsd"
                      targetNamespace="http://tempuri.org/PurchaseOrderSchema.xsd"
                      elementFormDefault="qualified">
           <xsd:element name="PurchaseOrder" type="tns:PurchaseOrderType"/>
           <xsd:complexType name="PurchaseOrderType">
            <xsd:sequence>
             <xsd:element name="ShipTo" type="tns:USAddress" maxOccurs="2"/>
            </xsd:sequence>
            <xsd:attribute name="OrderDate" type="xsd:date"/>
           </xsd:complexType>
           <xsd:complexType name="USAddress">
            <xsd:sequence>
             <xsd:element name="name"   type="xsd:string"/>
             <xsd:element name="state"  type="xsd:string"/>
             <xsd:element name="zip"    type="xsd:integer"/>
             <xsd:element name="priority">
              <xsd:simpleType>
               <xsd:restriction base="xsd:string">
                <xsd:enumeration value="hign"/>
                <xsd:enumeration value="normal"/>
                <xsd:enumeration value="low"/>
               </xsd:restriction>
              </xsd:simpleType>
             </xsd:element>
            </xsd:sequence>
           </xsd:complexType>
          </xsd:schema>
```

with the following command:

```cobol
stream2wrk xsd order.xsd -o order1.wrk –p order- -d

```

the generated order1.wrk file will contain the following structure:

```cobol
       01 order-PurchaseOrder identified by 'PurchaseOrder' 
                               namespace 'http://tempuri.org/PurchaseOrderSchema.xsd'.
           03 order-OrderDate-attr identified by 'OrderDate' 
                                   is attribute pic x any length.
           03 order-ShipTo identified by 'ShipTo' occurs 2.
              05 order-name identified by 'name'.
                 07 order-name-data pic x any length.
              05 order-state identified by 'state'.
                 07 order-state-data pic x any length.
              05 order-zip identified by 'zip'.
                 07 order-zip-data pic s9(18).
              05 order-priority identified by 'priority'.
                 07 order-priority-data pic x any length.
```

while using the additional parameters with the following command:

```cobol
stream2wrk xsd order.xsd -o order2.wrk –p order- –d -e -c -iu -l=80 -sd -var -se -88
```

the generated order2.wrk file contains this structure:

```cobol
       01 order-PurchaseOrder identified by 'PurchaseOrder' 
                               namespace 'http://tempuri.org/PurchaseOrderSchema.xsd' 
                               count in order-PurchaseOrder-count.
           03 order-OrderDate-attr identified by 'OrderDate' 
                              is attribute pic x(80) count in order-OrderDate-attr-count.
           03 order-ShipTo identified by 'ShipTo' occurs 2 count in order-ShipTo-count.
              05 order-name identified by 'name' count in order-name-count.
                 07 order-name-var count in order-name-var-count pic x(80).
              05 order-state identified by 'state' count in order-state-count.
                 07 order-state-var count in order-state-var-count pic x(80).
              05 order-zip identified by 'zip' count in order-zip-count.
                 07 order-zip-var count in order-zip-var-count pic s9(18).
              05 order-priority identified by 'priority' count in order-priority-count.
                 88 order-priority-88-0 value 'hign'.
                 88 order-priority-88-1 value 'normal'.
                 88 order-priority-88-2 value 'low'.
                 07 order-priority-var count in order-priority-var-count pic x(80).
```
