## Compiler and Runtime Extension Points

- The isCOBOL Compiler provides the ability to modify source code on the fly through regular expressions, code injection, or custom preprocessors. For more details, see [Source code preprocessing](./pagina_in_creazione) and [iscobol.compiler.gui.```<control-type>```.defaults](./pagina_in_creazione).

- Several hook programs can be enabled in the runtime system to provide entry points for specific operations and customize their behavior. In particular:

| | |
| :--- | :--- |
| [iscobol.as.hook](./pagina_in_creazione) | Performs operations when a thin client session starts or terminates. |
| [iscobol.call_cancel.hook](./pagina_in_creazione) | Intercepts and modifies program names and parameters during CALL and CANCEL statements. |
| [iscobol.file.index.open_hook *](./pagina_in_creazione) | Intercepts and modifies the file handler or file path during the opening of indexed files. |
| [iscobol.gui.window.hook *](./pagina_in_creazione) | Intercepts and modifies window attributes during DISPLAY WINDOW statements. |
| [iscobol.ismigrate_hook](./pagina_in_creazione) | Intercepts and modifies record content during data migration performed with the ISMIGRATE utility. |
| | |
