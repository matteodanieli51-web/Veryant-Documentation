#### -test

Checks the configuration and connections to servers.

Usage

```shell
ctutil -test [config | connect]
```

- Running *ctutil -test* with no option, or with the *config* option, checks the configuration.
- Running *ctutil -test connect* checks that all servers defined in the configuration (with the <instance server\> attribute) are reachable.
