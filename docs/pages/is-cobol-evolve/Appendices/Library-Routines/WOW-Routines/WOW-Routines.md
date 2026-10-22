## WOW Routines

The WOW library routines allow customization and handling of the COBOL-WOW graphical user interfaces.

| Routine | Feature |
| --- | --- |
| [WOWDISPOSERESOURCE](./WOWDISPOSERESOURCE) | removes a bitmap from memory |
| [WOWLOADRESOURCE](./WOWLOADRESOURCE) | loads a bitmap into memory |
| [WOWSTARTBUFFERING](./WOWSTARTBUFFERING) | starts the buffering of video updates |
| [WOWSTOPBUFFERING](./WOWSTOPBUFFERING) | flushes the buffered video updates |

**Note -** the above routines are supported only by isCOBOL, they were not present in the RM/COBOL runtime. Refer to [Supported API functions](../../../../transitioning-to-is-cobol/Transitioning-from-RM-COBOL/Cobol-WOW/supported-API) for the list of WOW routines that are supported by both isCOBOL and RM/COBOL.

### Examples:

**Example -** Load 100 items in a ListBox with buffering

```cobol
...
WORKING-STORAGE SECTION.
   COPY "windows.cpy".
 01 LIST-ITEM.
    03 FILLER PIC X(5) VALUE "Item-".
    03 ITEM-I PIC 9(3).
...
PROCEDURE DIVISION.
...
   CALL WOWSTARTBUFFERING USING WIN-RETURN.
   CALL WOWSETPROP USING WIN-RETURN LIST1 "VISIBLE" 0.
   PERFORM VARYING ITEM-I FROM 1 BY 1 UNTIL ITEM-I > 100
       CALL WOWADDITEM USING WIN-RETURN LIST1 LIST-ITEM
   END-PERFORM.
   CALL WOWSETPROP USING WIN-RETURN LIST1 "VISIBLE" 1.
   CALL WOWSTOPBUFFERING USING WIN-RETURN.
```
