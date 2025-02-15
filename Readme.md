# MultiTenant Project with Typescript setup

### TypeScript Setup

To start with typescript project the setup will start with some installations

1. npm install -D typescript     ****`This will install typescript for you in devDependencies`***

   1. Now to confirm the installation go to node_modules/.bin folder and look for **tsc** binary file. The  Typescript compiler or tsc changes the whole typescript code writtern by user into regular javascript, and the reason we will be compiling typescript to javascript because browser understands javascript. Browser only understand javascript.
2. npm install express
3. npm install @types/express

   1. This package contains the type definitions for express which we will be using through out the project.
4. create a src folder and then create an index.ts under src/index.ts
5. npx tsc --init. This command will generate tsconfig.json. because whenever you will start the typescript server without this file or if you run node ./src/index.ts you will run into an error ERR_UNKNOWN_FILE_EXTENSION(ext,filepath);

   1. ```
      Created a new tsconfig.json with:   
                                                                                                    TS 
        target: es2016
        module: commonjs
        strict: true
        esModuleInterop: true
        skipLibCheck: true
        forceConsistentCasingInFileNames: true
      ```
6. Remember anytime you get error in all files on type declaration or every file is showing error. Then first try to Restart the TS server

   1. Press CTRL+SHIFT+P for windows
