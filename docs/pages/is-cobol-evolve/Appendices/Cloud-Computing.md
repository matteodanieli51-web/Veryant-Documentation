# Cloud Computing

## Introduction

Cloud computing is the use of various services, such as software development platforms, servers, storage and software, over the internet, often referred to as "the cloud".

The name cloud computing comes from the traditional usage of the cloud to represent the internet in network diagrams or flowcharts.

In general, there are three cloud computing characteristics that are common among all cloud service providers:

- The back-end of the application (especially hardware) is completely managed by the cloud vendor
- The user only pays for services used (ie. memory, processing time and bandwidth)
- Services are scalable

Cloud scalability in cloud computing refers to the ability to increase or decrease IT resources as needed to meet changing demand. Scalability is one of the hallmarks of the cloud and the primary driver of its exploding popularity with businesses.

## Compliance

Veryant products have been successfully tested with the major cloud service providers, in particular Amazon Web Services (AWS), Microsoft Azure and Google Cloud.

## Cloud scenarios

Not only web applications are intended to work on the cloud.

Every COBOL application from a character based to a thin client can potentially run on the cloud.

Basically every client-server application can run on the cloud when the server is hosted on a remote site instead of the local network.

Here are some examples:

### COBOL application with CUI

1. Install the isCOBOL Framework on the remote server on the cloud
2. Use PuTTY or another terminal emulator to connect to the remote server and run the command:

```shell
iscrun -t PROGRAM_NAME
```

If the COBOL application and its third party components don’t need to interact with the server console, then you may consider to provide a zero client solution via WebClient.

1. Install the isCOBOL Server and WebClient on the remote server on the cloud
2. Start the services:

```cobol
isserver start
webclient start
webclient-admin start
```

3. Connect to the WebClient Admin Console and configure your application
4. Browse to the application using any web-browser, i.e.

```
https://ec2-18-184-4-131.eu-central-1.compute.amazonaws.com:8080/my_chr_app
```

**Note** - The WebClient Admin Console can also be installed on a separate machine as long as this machine can communicate with the server on the cloud. See [Managing multiple WebClient servers from the same WebClient Admin Console](../../is-cobol-web-client/Managing-multiple-WebClient-servers-from-the-same-WebClient-Admin-Console) for more information.

### COBOL application with GUI

The best way to deploy a GUI application in a client-server environment is through the thin client technology. When the server is a remote machine on the Cloud, then WebClient is strongly suggested for two reasons:

- better performance than the standard thin client
- zero client installation

To install the GUI application on the Cloud

1. Install the isCOBOL Server and WebClient on the remote server on the Cloud
2. Start the services:

```cobol
isserver start
webclient start
webclient-admin start
```

3. Connect to the WebClient Admin Console and configure your application
4. Browse to the application using any web-browser, i.e.

```
https://ec2-18-184-4-131.eu-central-1.compute.amazonaws.com:8080/my_gui_app
```

**Note** - The WebClient Admin Console can also be installed on a separate machine as long as this machine can communicate with the server on the cloud. See [Managing multiple WebClient servers from the same WebClient Admin Console](../../is-cobol-web-client/Managing-multiple-WebClient-servers-from-the-same-WebClient-Admin-Console) for more information.

### COBOL web service or Jakarta/JEE application

When the COBOL application is a web application like a web service or a servlet, you just need to ensure that the remote server includes a Jakarta servlet container (i.e. Tomcat 10) or a JEE servlet container (i.e. Tomcat 9) and deploy your application to it.

Clients will reach your application using the web-browser, i.e.

```
https://ec2-18-184-4-131.eu-central-1.compute.amazonaws.com:8080/my_eis_app
```

### Docker setup

It’s good practice, though not mandatory, to take advantage of the Docker technology in order to deploy your application on a remote server on the Cloud. For more information about Docker, visit [www.docker.com](https://www.docker.com/).
