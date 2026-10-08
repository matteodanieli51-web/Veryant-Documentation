## Configuration

- [iscobol.substring.zero_len_all (boolean) *](\) should be set to false since Micro Focus allowed reference modifiers with length = 0.
- [iscobol.file.index.check_all_keys (boolean)](\) should be set to true in the configuration in order to activate the check on keys structure.
- [iscobol.memory.alpha_edited (boolean)](\) should be set to true in the configuration for compatibility on alphabetic-edited and alphanumeric-edited items setting.
- [iscobol.terminal.autowrap (boolean)](\) should be set to true since Micro Focus automatically wraps text in the terminal.
- [iscobol.compiler.oop.trim_parameters](\) should be set to 0 at compile time, since Micro Focus doesn’t trim string parameters passed to a method.
- [iscobol.file.errors_ok](\) should be set to 3 in order to match the default behavior of Micro Focus on i-o errors.
- If you configured your Micro Focus runtime to have the maximum precision on calculations, then your programs should be compiled in isCOBOL with the option [-cfp36](\) in order to have the same maximum precision.
- isCOBOL provides a special class, the [CurrentDate Class (com.iscobol.rts.CurrentDate)](\), that allows to obtain the same effect of the following Micro Focus configuration entries:
  - current_day
  - current_hour
  - current_minute
  - current_month
  - current_second
  - current_year
  - datewarp_dynamic
