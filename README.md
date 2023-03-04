# Install Typescript

npm i typescript -g

# Create Config File

tsc --init

# Run TypeScript File

tsc main.ts -w 

# Configure tsconfig.json file 

# Specify a file that bundles all outputs into one  

"outDir": "./build/js",

# For diresctory where all typscript files will compiled

 "rootDir": "./src",   

 # include ts file only from src folder for compile 

 "include": [
    "src"
  ]   

  # with this config change just compile with command 

  tsc -w 

  # if want to not comile ts file on any error, plz enable below attribute, in tsconfig.json file

 "noEmitOnError": true,

 # or you can write comand 

  tsc --noEmitOnError -w 

  # TypeScript - Strongly Typed Language, Statically Typed Language - Types Checked at Compile Time, Catch error in development phase
  # JavaScript - Loosely Typed Language, Dynamically Typed Language - Types Checked at Run Time 

  # Interface vs Type - A type defines the structure and behavior of an object, while an interface defines the behavior that an object must exhibit to be considered of a certain type.

