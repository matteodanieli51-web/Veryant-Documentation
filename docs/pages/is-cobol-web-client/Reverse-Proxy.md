# Reverse Proxy

Providing access to WebClient through a HTTP reverse proxy is recommended.

In this chapter we provide an example for [Apache HTTPD](https://httpd.apache.org/).

This example expects that WebClient server is running at localhost port 8080. Replace 127.0.0.1 with actual IP or domain name if the HTTPD is running on a different server.

## httpd.conf:

```cobol
<VirtualHost *:80>
    ServerName demo.veryant.com
    Redirect permanent / https://demo.veryant.com/
</VirtualHost>
 
<VirtualHost *:443>
    ServerName demo.veryant.com
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/demo.veryant.com/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/demo.veryant.com/privkey.pem
 
    RewriteEngine on
    RewriteCond %{HTTP:Upgrade} =websocket
    RewriteRule /(.*) ws://127.0.0.1:8080/$1 [P,L]
    RewriteCond %{HTTP:Upgrade} !=websocket
    RewriteRule /(.*) http://127.0.0.1:8080/$1 [P,L]
 
    ProxyPass "/" "http://127.0.0.1:8080/"
    ProxyPassReverse "/" "http://127.0.0.1:8080/"
 
</VirtualHost>
```
