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
7. Now download Nodemon, nodemon is a tool that helps to develop Node.js based application automatically restarting the node application when the file changes in the directory is detected. Nodemon is for development purpose.

   1. npm install -D nodemon
8. To solve path alias issue install tsconfig paths

   1. npm install -D tsconfig-paths
   2. If you face path issue after running build then you must check tsconfig.json file and should install few packages
      1. npm install --save-dev tsc-alias
         1. This package configuration will solve your issue of compiled code and remember always set your rootdir to "src" because this where the build will be made if you put a dot then it will build every folder and file but for production we only need src folder.

### After setting up a project

After setting up project with typescript build the project to test the production version or build version the errors in build. to deal with build command please look package.json
