### Download and install isCOBOL UDBC

#### Windows

1. If you haven't already done so, [Download and install the Java Runtime Environment (JRE)](./download-JRE).
2. Go to "[https://support.veryant.com](https://support.veryant.com)".
3. Sign in with your User ID and Password.
4. Click on the "Download Software" link.
5. Scroll down to the list of files for Windows x64 64-bit or Windows x86 32-bit. Select isCOBOL_UDBC_2025_R2_n_Windows.arc.msi, where *n* is the build number and *arc* is the system architecture.
6. Run the downloaded installer to install the files.
**Note** - If your Windows has the option "Run as Administrator", you should run the setup with that option, otherwise the setting of environment variables might silently fail.
7. Select the desired items from the list of products when prompted.
![](images/winsetup_udbc.png)
1. Select your JDK/JRE when prompted
![](images/winsetup_jdk.PNG)
1. Follow the wizard procedure to the end. In the process you will be asked to provide the installation path ("C:\\Veryant" by default) and license keys. You can skip license activation and perform it later, as explained in [Activate the License](./activate-license).

##### Quiet mode

The isCOBOL UDBC setup supports the msi quiet mode. Settings can be driven with a response file.

A response file is a text file with name-value pairs that represent installer variables.

A response file is generated automatically after an installation is finished. The generated response file is found in the *.install4j* directory of the isCOBOL UDBC and is named *response.varfile*.

When an installer is executed, it checks whether a file with the same name and the .varfile extension can be found in the same directory and loads that file as the response file. For example, if an installer is named *foo_setup.msi* on Windows, the response file next to it has to be named *foo_setup.varfile*.

For more information about msi setups and their command line options, see [Microsoft Standard Installer Command-Line Options](\).

#### Linux, FreeBSD, Mac OSX and SunOS

1. If you haven't already done so, [Download and install the Java Runtime Environment (JRE)](./download-JRE).
2. Go to "[https://support.veryant.com](https://support.veryant.com)".
3. Sign in with your User ID and Password.
4. Click on the "Download Software" link.
5. Scroll down, and select the appropriate .tar.gz file for the product and platform you require.
6. Extract all contents of the archive. For example,
on Linux 32 bit:

```cobol
gunzip isCOBOL_UDBC_2025_R2_*_Linux.32.i586.tar.gz
tar -xvf isCOBOL_UDBC_2025_R2_*_Linux.32.i586.tar
```

on Linux 64 bit:

```cobol
gunzip isCOBOL_UDBC_2025_R2_*_Linux.64.x86_64.tar.gz
tar -xvf isCOBOL_UDBC_2025_R2_*_Linux.64.x86_64.tar
```

on FreeBSD:

```cobol
gunzip isCOBOL_UDBC_20254_R2_*_FreeBSD.64.tar.gz
tar -xvf isCOBOL_UDBC_2025_R2_*_FreeBSD.64.tar
```

on Mac OSX:

```cobol
gunzip isCOBOL_UDBC_2025_R2_*_MacOSX.64.x86_64.tar.gz
tar -xvf isCOBOL_UDBC_2025_R2_*_MacOSX.64.x86_64.tar
```

on SunOS:

```cobol
gunzip isCOBOL_UDBC_2025_R2_*_SunOS.64.tar.gz
tar -xvf isCOBOL_UDBC_2025_R2_*_SunOS.64.tar
```

#### Other Unix

isCOBOL UDBC is available only for the following UNIX platforms:

- Linux 32 bit
- Linux 64 bit
- FreeBSD
- Mac OSX 64 bit
- SunOS

No other UNIX porting is available.

#### Distribution Files

For information on a specific distribution file, please see the README file installed with the product.
