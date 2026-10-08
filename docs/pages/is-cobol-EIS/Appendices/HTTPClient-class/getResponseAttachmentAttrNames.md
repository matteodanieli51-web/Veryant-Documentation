### getResponseAttachmentAttrNames

Returns the list of the attribute names of the parts in a multipart response.

#### General format

```cobol
void getResponseAttachmentAttrNames( id, attrNames )
```

#### Syntax rules

1. *id* and *attrNames* are alphanumeric data items.

#### General rules

1. *id* can be extracted from the list returned by [getResponseAttachmentIDs](./getResponseAttachmentIDs).
2. *attrNames* is filled with the list of attribute names. Names are separated by comma.

#### Example

3. Retrieve attribute names of the first attachment.

#### Example

Retrieve response attachments and parse them:

```cobol
...
 configuration section.
 repository.
    class http-client as "com.iscobol.rts.HTTPClient"
 ...
 working-storage section.
 77 http object reference http-client.
 77 aids      pic x any length.
 77 anames    pic x any length.
 77 curr-id   pic x any length.
 77 curr-name pic x any length.
 77 curr-val  pic x any length.
 77 curr-body pic x any length.
 77 ptr-id    pic 9(3).
 77 ptr-name  pic 9(3).
 ...
 procedure division.
 ...
    http:>getResponseAttachmentIDs(aids).
    move 1 to ptr-id.
    perform until exit
       unstring aids delimited by ","
                     into curr-id
                     pointer ptr-id
       perform GET-ATTRS
       perform GET-BODY
       if ptr-id > function length(aids)
          exit perform
       end-if
    end-perform.
 ...          
 GET-ATTRS.
    http:>getResponseAttachmentAttrNames(curr-id, anames)
    move 1 to ptr-name
    perform until exit
       unstring aids delimited by ","
                     into curr-name
                     pointer ptr-name
       http:>getResponseAttachmentAttr(curr-id, curr-name, curr-val)
       if ptr-name > function length(anames)
           exit perform
       end-if
    end-perform.
 ...      
 GET-BODY.
    http:>getResponseAttachmentBody (curr-id, curr-body).
```
