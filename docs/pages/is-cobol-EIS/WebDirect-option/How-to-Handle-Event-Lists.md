## How to Handle Event Lists

EVENT-LIST and EXCLUDE-EVENT-LIST properties work differently in WebDirect environment.

if EXCLUDE-EVENT-LIST = 1:

- if EVENT-LIST is empty ALL EVENTS are NOT SENT to the program.
- if EVENT-LIST is not empty:
- the events in the EVENT-LIST are NOT SENT to the program.
- the events NOT in the EVENT-LIST are SENT to the program.

if EXCLUDE-EVENT-LIST = 0:

- if EVENT-LIST is empty ALL EVENTS are SENT to the program.
- if EVENT-LIST is not empty:
- the events in the EVENT-LIST are SENT to the program.
- the events NOT in the EVENT-LIST are NOT SENT to the program.
