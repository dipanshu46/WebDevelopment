console.log("This is tutorial for npm 1.0.0")
// What is npm?
// npm is a NodeJS package manager

// What is a package?
// A package is a collection of modules. Modules are nothing but files written by someone that we can use in our code to perform specific functions. Collection of these modules help us to fulfill a specific purpose.

// Some terminal terminologies :)

// 1) node --version 
// It returns the node version

// 2) npm --version
// It returns the npm version

// 3) npm init
// This command initializes a folder as a node package. It creates a json file (here package.json) containing details that were asked to the user. Whenever we install any packages inside this package they will be marked in the json file under the key dependencies and will be kept inside the node_modules folder that will be automatically created when installing modules. These dependencies will be installed whenever this package will be installed. If by chance we delete the node_modules folder, we can install back the dependencies using node install.

// 4) npm install <package_name>
// Installs the package mentioned.

// npm install <pacage_name>@<version>
// To install a package of a specific version. A version is written in the Major.Minor.Patch where the software starts from 1.0.0, if there is a bug in the software it will be solved in the version 1.0.1, that means a new patch was created since a bug was solved. If we add few functions to software it will become 1.1.0, now if we deprecated some features of the software and the software now is different from the one it used to be it will be major change so the version will be 2.0.0

// npm install <package_name> --save-dev
// To install a packages to devDependencies. Packages or dependencies which will only be required for development of the software and will not be used after deployment or in production are called devDependencies. It will also be reflected in the package.json file. 

// npm install <package_name> --global
// To install a package globally so that it is accessible from anywhere on your system.

// npm i <package_name>
// Shorthand to install a package innstead of writing install

// ^ this before a version in package.json means whenever the package will be installed, dependencies will be installed of the exact version mentioned. A ~ before a version will mark that the latest patch in the version should be downloaded and a > before a version will mark that the latest version should be downloaded.

// 5) npm uninstall <package_name>
// Uninstalls the package mentioned.