## Value

Modify this property to request an action to the embedding HTML page.

Inquire this property in the [NTF-IWC-EVENT](../Events/NTF-IWC-EVENT) event to retrieve the information sent by the embedding HTML page.

The value of this property should be stored in a data item defined as follows:

```cobol
01 iwcMessage.
   03 msgAction pic x(n).
   03 msgData   pic x(n).
   03 msgBytes  pic x(n).
```

Where:

|  |  |
| --- | --- |
| msgAction | specifies the action required |
| msgData | includes additional human-readable data |
| msgBytes | inclues additional binary data |

The *iwcMessage* items can be defined as X ANY LENGTH and can be given any name.

Some fields may be empty. Usually only *msgAction* is filled.

**Example** - Check what action was required by the HTML page in the NTF-IWC-EVENT event

```cobol
          if event-type = ntf-iwc-event
             inquire screen-1-ip-1 value in iwcMessage
             if msgAction = "pinClicked"
                |do something
             end-if
           end-if.
```
