## Users count

The Application Server allows multiple client connections depending on the license. The number of allowed concurrent clients is traced in the commentary area of the license file, after the license ID. The following snippet has been taken from a 15 users license that allows up to 4 connections per user:

```cobol
# Company: XXXXX
# License ID: 902368/15/04/10
# Expiration Date: none
```

**Note** - In the above snippet, the last number after the license ID is the maximum number of WebClient users. In this case the Application Server will allow up to 15 different users to connect, but among these 15 users, no more than 10 users can use WebClient. For more information on WebClient, see [isCOBOL Evolve: WebClient](../../is-cobol-web-client/Introduction).

The Application Server counts the different IP addresses that ask for connection. It’s possible to connect as many IP addresses as the number of users traced in the license. If a client machine launches up to 4 different sessions of the COBOL application, it’s counted as a single user.

Refer to the Application Server’s administration panel for accurate information about the active license, the number of used connections and the number of free connection slots.
