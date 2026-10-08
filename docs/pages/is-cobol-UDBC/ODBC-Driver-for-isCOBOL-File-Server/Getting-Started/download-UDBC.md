### Download and install isCOBOL UDBC

#### Windows

1. If you haven't already done so, [Download and install the Java Runtime Environment (JRE)](./download-JRE).
2. Go to "[https://support.veryant.com](https://support.veryant.com)".
3. Sign in with your User ID and Password.
4. Click on the "Download Software" link.
5. Scroll down to the list of files for Windows x64 64-bit or Windows x86 32-bit. Select isCOBOL_UDBCyyyyR_n_Windowsarc.msi, where yyyy is the year, *r* is the release number, *n* is the build number and *arc* is the system architecture.
6. Run the downloaded installer to install the files.
**Note** - If your Windows has the option "Run as Administrator", you should run the setup with that option, otherwise the setting of environment variables might silently fail.
7. Select the desired items from the list of products when prompted.
![](images/winsetup_odbc.png)

1. Select your JDK/JRE when prompted
![](images/winsetup_jdk.png)

1. Follow the wizard procedure to the end. In the process you will be asked to provide the installation path ("C:\\Veryant" by default) and license keys. You can skip license activation and perform it later, as explained in [Activate the License](./activate-license).

#### Quiet mode

The isCOBOL UDBC setup supports the msi quiet mode. Settings can be driven with a response file.

A response file is a text file with name-value pairs that represent installer variables.

A response file is generated automatically after an installation is finished. The generated response file is found in the *.install4j* directory of the isCOBOL UDBC and is named *response.varfile*.

When an installer is executed, it checks whether a file with the same name and the *.varfile* extension can be found in the same directory and loads that file as the response file. For example, if an installer is named *foo_setup.msi* on Windows, the response file next to it has to be named *foo_setup.varfile*.

For more information about msi setups and their command line options, see [Microsoft Standard Installer Command-Line Options](https://docs.microsoft.com/en-us/windows/win32/msi/standard-installer-command-line-options).

#### Distribution Files

For information on a specific distribution file, please see the README file installed with the product.
