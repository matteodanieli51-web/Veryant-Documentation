#### Service configuration

Java options should be put in the *isbalancer.vmoptions* file, located in the isCOBOL bin directory, which is the default directory of the service. In this file comments are prefixed by a hash and each option is on a separate line.

Setting the Classpath in the *isbalancer.vmoptions* has no effect. Every occurrence of -cp and -classpath in that file is discarded. The isCOBOL LoadBalancer service inherits the Classpath from the system and adds all jar libraries from the isCOBOL lib directory to it.

**Note:** On some Windows distributions it’s necessary to reboot the system in order to make services aware of modifications to the system environment.
