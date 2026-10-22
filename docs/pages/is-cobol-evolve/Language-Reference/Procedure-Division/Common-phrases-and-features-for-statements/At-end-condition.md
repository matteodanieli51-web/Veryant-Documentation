### At end condition

The at end condition is associated with a sort file or the I-O status for a file connector. For sort files, the at end condition is set to exist when the sort operation has returned all of the records that were sent to it and there are no more records to be sorted. It no longer exists when the execution of the SORT operation referencing the sort file terminates. For other files, the at end condition exists when the first character of the I-O status value for the associated file connector is a '1'.
