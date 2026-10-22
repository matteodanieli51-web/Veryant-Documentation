# isCOBOL and JasperReports

## Interoperability with JasperReports

isCOBOL can communicate with the JasperReports runtime in order to populate, preview and print reports.

### Required software

The following software (not provided by Veryant) is required:

- **Jaspersoft Studio**: editing software for JasperReports. It will help you design and run report templates; build report queries; write complex expressions; layout visual components like over 50 types of charts, maps, tables, crosstabs, and custom visualizations; and much more. Setups available at [https://community.jaspersoft.com/project/jaspersoft-studio/releases.](https://community.jaspersoft.com/project/jaspersoft-studio/releases)

- **JasperReports Library**: the world's most popular open source business intelligence and reporting engine. It is entirely written in Java and it is able to use data coming from any kind of data source and produce pixel-perfect documents that can be viewed, printed or exported in a variety of document formats including HTML, PDF, Excel, OpenOffice and Word.
The isCOBOL examples discussed below are certified for version 6.2. You can download JasperReports Library 6.2 at [https://sourceforge.net/projects/jasperreports/files/jasperreports/JasperReports%206.2.0](https://sourceforge.net/projects/jasperreports/files/jasperreports/JasperReports%206.2.0). Look for a file whose name is like "jasperreports-6.2.0-project.zip".

### Examples

Along with isCOBOL Evolve and isCOBOL SDK are installed some examples that print reports via the JasperReports library after retrieving data from different data sources.

| Sample | Description |
| --- | --- |
| Sample | Description |
| CSV | Prints a report with the data read from a CSV file. |
| c-treeSQL | Prints a report with the data read from a c-treeSQL database via JDBC. The same logic is applicable also with other JDBC-compliant databases. |
| JSON | Prints a report with the data read from a JSON file. |
| XML | Prints a report with the data read from a XML file. |

In isCOBOL Evolve, these samples are installed under the folder ide/sample/jasper in the form of projects that you can import in your workspace.

In isCOBOL SDK, these samples are installed under the folder sample/jasper in the form or programs that you can compile and run from the command line.

Follow the instructions of the README file of each example in order to test it.
