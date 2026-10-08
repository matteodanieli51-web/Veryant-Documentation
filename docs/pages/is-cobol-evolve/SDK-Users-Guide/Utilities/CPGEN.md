## CPGEN

The CPGEN utility generates definition files for JavaBean events and properties.

An isCOBOL program must contain appropriate definition files to access JavaBean events and properties. CPGEN allows you to automatically create these definition files. A separate definition file will be created for each class to which the JavaBean extends, directly or indirectly.

### Usage:

```cobol
cpgen [-p package] cls1 [ cls2 ... clsN] [-d outputDir]
```

### Example:

To use the JCalendar bean (com.toedter.calendar.JCalendar in jcalendar.jar), you must create the definition files with one of the following commands:

```cobol
cpgen -p com.toedter.calendar JCalendar
```

or

```cobol
cpgen com.toedter.calendar.JCalendar
```

Since the sructure of JCalendar is

```cobol
java.lang.Object
byjava.awt.Component
byjava.awt.Container
byjavax.swing.JComponent
byjavax.swing.JPanel
bycom.toedter.calendar.JCalendar
```

the following definition files will be created:

- object.def
- component.def
- container.def
- jcomponent.def
- jpanel.def
- jcalendar.def

The resulting definition files will contain event definitions

```cobol
*> KEY event definitions, Class: java.awt.event.KeyEvent.
78 COMPONENT-KEYPRESSED VALUE 1024581858.
78 COMPONENT-KEYRELEASED VALUE 274742396.
78 COMPONENT-KEYTYPED VALUE 1303301483.
```

and the list of the available properties

```cobol
*> Control Properties.
*> NAME: BACKGROUND , TYPE: OBJECT REFERENCE (java.awt.Color) W
*> NAME: CALENDAR , TYPE: OBJECT REFERENCE (java.util.Calendar) R/W
*> NAME: DATE , TYPE: OBJECT REFERENCE (java.util.Date) R/W
*> NAME: DAYCHOOSER , TYPE: OBJECT REFERENCE (com.toedter.calendar.JDayChooser) R
*> NAME: DECORATIONBACKGROUNDCOLOR , TYPE: OBJECT REFERENCE (java.awt.Color) R/W
*> NAME: DECORATIONBACKGROUNDVISIBLE , TYPE: NUMERIC INTEGER [VALUES 0/1] (boolean) R/W
*> NAME: DECORATIONBORDERSVISIBLE , TYPE: NUMERIC INTEGER [VALUES 0/1] (boolean) R/W
*> NAME: ENABLED , TYPE: NUMERIC INTEGER [VALUES 0/1] (boolean) R/W
*> NAME: FONT , TYPE: OBJECT REFERENCE (java.awt.Font) W
*> NAME: FOREGROUND , TYPE: OBJECT REFERENCE (java.awt.Color) W
*> NAME: LOCALE , TYPE: OBJECT REFERENCE (java.util.Locale) R/W
*> NAME: MAXDAYCHARACTERS , TYPE: NUMERIC INTEGER (int) R/W
*> NAME: MAXSELECTABLEDATE , TYPE: OBJECT REFERENCE (java.util.Date) R/W
*> NAME: MINSELECTABLEDATE , TYPE: OBJECT REFERENCE (java.util.Date) R/W
*> NAME: MONTHCHOOSER , TYPE: OBJECT REFERENCE (com.toedter.calendar.JMonthChooser) R
*> NAME: SUNDAYFOREGROUND , TYPE: OBJECT REFERENCE (java.awt.Color) R/W
*> NAME: WEEKOFYEARVISIBLE , TYPE: NUMERIC INTEGER [VALUES 0/1] (boolean) R/W
*> NAME: WEEKDAYFOREGROUND , TYPE: OBJECT REFERENCE (java.awt.Color) R/W
*> NAME: YEARCHOOSER , TYPE: OBJECT REFERENCE (com.toedter.calendar.JYearChooser) R
```

### Thin Client

CPGEN can’t be launched directly by the isCOBOL Client.
