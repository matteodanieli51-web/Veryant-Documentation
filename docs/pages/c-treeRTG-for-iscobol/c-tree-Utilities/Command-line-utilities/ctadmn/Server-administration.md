#### Server administration

- To show server statics, type 6 and press ENTER.
- To show server-side i/o performance, type 5 and press ENTER.
- To list connected clients, type 4, press ENTER, type 1 and press ENTER.

  In this list you find an entry for each client connection. A new client connection is created

  - at the first OPEN performed by the main program of a stand-alone runtime session,
  - at the first OPEN performed by the main program of a client session in thin client environment, and
  - at the first OPEN performed by a program called through CALL RUN statement.
- To kill a client, type 4, press ENTER, type 2, press ENTER, provide client ID and press ENTER.
- To monitor the server activity, type 9 and press ENTER. The following options will appear:

  ```shell
  Monitor Server Activity:

   1. List all files open by the c-tree Server
   2. List all files open by a particular connection
   3. List connections that have a particular file open
   4. List locks held on a particular file
  ```

  - Type the number of the desired option and press ENTER. You will be prompted for additional information depending on the chosen option.
- To stop the c-tree Server, type 7 and press ENTER. You will be prompted for a confirmation and for the number of seconds of delay before the shutdown.
