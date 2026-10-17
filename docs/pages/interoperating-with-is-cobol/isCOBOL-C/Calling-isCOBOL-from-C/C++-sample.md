### C++ Sample

This chapter contains two snippets that work as a sample for calling a COBOL program from C++ on Windows.

To build a COBOL program into a DLL requires Microsoft Visual Studio or another suitable C compiler. To call COBOL from C++ on Windows you use the isCOBOL C API which is available in the following files in the isCOBOL installation directory:

- bin\iscobolc.dll
- native\lib\iscobolc.lib

- inlude\iscobolc.h

For example, here is a C++ class that can be built into a DLL to call COBOL:

```cobol
#include <cstdio>
#include <cstdlib>
#include <cstring>
#include "TestIsCobolDoc.h"
 
extern "C" {
#include "iscobolc.h"
}
 
CTestIsCobolDoc::CTestIsCobolDoc(void)
{
}
 
CTestIsCobolDoc::~CTestIsCobolDoc(void)
{
}
 
#define MAX_MSG_LEN 1024


void
CTestIsCobolDoc::CallCobolProgram(void)
{  
  long crc;
  char errmsg[MAX_MSG_LEN + 1];
  char **cobargv;
  int *cobargl;
 
  int retval;
  int jvmoptnum = 2;
  static char *jvmopts[2] = { "-Djava.class.path=C:\\Veryant\\isCOBOL_SDK2025R2\\lib\\iscobol.jar;C:\\Users\\dlubin\\Documents\\Visual Studio 2008\\Projects\\CallCOBOL\\debug",
      "-Discobol.display_message=3" };
  retval = isCobolInit(jvmoptnum, jvmopts, 0);
  if(retval != ISCOBOLC_SUCCESS)
  {
    fprintf(stderr,"Error calling isCobolInit\n");
    exit(1);
  }
  errmsg[MAX_MSG_LEN] = '\0';
  int cobargc = 4;
 
  cobargv = (char **)malloc(sizeof(char*) * cobargc);
  cobargl = (int *)malloc (sizeof(int) * cobargc);
 
  int error_val = 12345678;
 
  cobargv[0] = char *)&error_val;
  cobargl[0] = sizeof(int);
 
  cobargv[1] = _strdup("DB Service   ");
  cobargl[1] = strlen(cobargv[1]);
 
  cobargv[2] = strdup("Username    ");
  cobargl[2] = strlen(cobargv[2]);
 
  cobargv[3] = strdup("Password    ");
  cobargl[3] = strlen(cobargv[2]);
 
 if (isCobolCall("TESTPROG", cobargc, cobargv, cobargl, &crc) !=
              ISCOBOLC_SUCCESS)
  {
    fprintf(stderr, "Error calling isCobolCall\n");
    if ( isCobolError(errmsg, MAX_MSG_LEN) != ISCOBOLC_ERROR )
    {
      fprintf(stderr,"errmsg = %s\n", errmsg);
    }
}


  free(cobargv);
  free(cobargl);
  
  fprintf(stderr, "COBOL returned return-code = %ld, error-val = %d\n", crc, error_val);
  fprintf(stderr, "Exit = %ld\n", isCobolTidy());
}
```

In this example, the called COBOL program is defined as follows:

```cobol
id division.
program-id. testprog.
data division.
linkage section.
01 error-val        pic s9(8) comp-5.
01 db-service       pic x(16).
01 username        pic x(16).
01 passwd         pic x(16).
procedure division using error-val, db-service, username, passwd.
  display "Hello from COBOL".
  display "Received ERROR-VAL : " error-val.
  display "Received DB-SERVICE: " db-service.
  display "Received USERNAME : " username.
  display "Received PASSWD  : " passwd.
  move 87654321 to error-val.
  display "MOVE " error-val " TO ERROR-VAL".
  goback.
```
