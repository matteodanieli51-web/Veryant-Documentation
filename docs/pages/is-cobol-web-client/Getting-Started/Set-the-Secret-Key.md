## Set the Secret Key

WebClient, WebClient Admin, WebClient Cluster and WebClient Session Pool come with a default secret key set to the text “change this in production” followed by a series of zeroes. The secret key is defined in the following configuration files:

- webclient/webclient.properties
- webclient/admin/webclient-admin.properties
- webclient/cluster/cluster-server/webclient.properties
- webclient/cluster/setssion-pool/webclient-sessionpool.properties

The default setting is:

```cobol
webclient.connection.secret = change_this_in_production_000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
```

You should change this value to a value of your choice. The value must be 128 characters long.

On Windows, if you install WebClient as a service, the setup will generate a random key for you.

It’s important that all WebClient tools use the same secret key, otherwise they will not be able to communicate.
