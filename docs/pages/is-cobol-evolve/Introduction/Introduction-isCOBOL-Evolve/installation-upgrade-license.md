## Installation, Upgrade and License Activation

### Software

isCOBOL is distributed through graphical wizard setups on the Windows platform and tar.gz archives on other platforms. The tar.gz archive includes a interactive command line setup.

In order to install a new version of isCOBOL, just run the setup. The new version can exist along with previous versions because it’s installed in a different folder (e.g. isCOBOL 2025 R2 goes to a different folder than isCOBOL 2025 R1).

In order to upgrade the current version (e.g. moving from Beta to GA, or upgrading to the latest update build) it’s suggested to uninstall the product first, then run the setup.

### License

Most of the Veryant’s products require a license. The license is provided in the form of a configuration property that must be added to the configuration. Refer to [Licenses Configuration](\) for the list of license properties.

In order to activate a new version of isCOBOL, just add the the iscobol.license entries to the configuration. The new version license can exist along with previous licenses because it has a different name (e.g. iscobol.license.2025 is different than iscobol.license.2024).

In order to upgrade the current license (e.g. replacing a Beta license with a definitive license, or upgrade the current license to allow more users) replace the line in the configuration file. It’s suggested to keep licenses all together in the same configuration file instead of spreading them among different configuration files, otherwise the replacement of a license could be more difficult (e.g. you replace the license in a configuration file, but a different older license is loaded from another configuration file). In order to know which license is loaded by the runtime system, use the command:

```cobol
iscrun -license
```

Note - this command is available only for the runtime. This is another reason for keeping licenses all together in the same configuration file.

### Where to go next

Refer to the Getting Started guides for more details about product installation and license activation.
