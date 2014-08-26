The Simple Singleton Pattern
---

![The Simple Singleton Pattern - A solution to many problems](https://raw.githubusercontent.com/simplesingleton/SSP-simple-singleton-pattern/master/images/simple-singleton-pattern-image.png)

## Team

Dennis Calazans | Rodolfo Dias 
:------------:  | :-------------: |
<a href="https://github.com/denniscalazans">![Dennis Calazans](https://avatars2.githubusercontent.com/u/28112?v=2&s=128)</a> | <a href="https://github.com/rmdias">![Rodolfo Dias](https://avatars2.githubusercontent.com/u/2057971?v=2&s=128)</a>|
[@denniscalazans](https://github.com/denniscalazans)   | [@rmdias](https://github.com/rmdias)|


## What's it?


`Comming`

## SSP Usage

### Call the SSP file
    
    <script src="js/SSP.js"></script>


### Creating a SSP Module

    // SSP.MyModule.js

    var SSP = SSP || {};
    
    SSP.MyModule = {
      setUp: function() {
        console.debug("My SSP module is runing!");
      }
    }

### Creating a SSP Child Module

    // SSP.MyModule.Child.js
    
    var SSP = SSP || {};
        SSP.MyModule = SSP.MyModule || {};

    SSP.MyModule.Child = {
      setUp: function() {
        console.debug("My SSP module is runing!");
      }
    }

## Incorporating Files

    <script src="js/SSP.js"></script>
    <script src="js/SSP.MyModule.js"></script>
    <script src="js/SSP.MyModule.Child.js"></script>


## Available Methods

  * [init](#-init-)
  * [setUp](#-setup-)
  * [delegate](#-delegate-)
  * [readModule](#-readmodule-)
  * [getByNamespace](#-getbynamespace-)
  * [applyByNamespace](#-applybynamespace-)
  * [initModuleByNamespace](#-initmodulebynamespace-)
  

## Properties and Methods

### > _namespace
----

All modules have a property called namespace that returning `string` the name of module.

  var SSP = SSP || {};
  
  SSP.MyModule = {
    setUp: function() {
      var self = this;
      
      console.debug(self._nameSpace);
      
    // return -> "SSP.MyModule"
       }
   }

  
### > .init( )
----

This method initialize all modules from your application. 

    SSP.init();
    
<br>
Also is possible initialize a module per time calling by module name, and multiples modules using commas.

    SSP.init(SSP.MyModule);
    
    SSP.init(SSP.MyModule, SSP.MyOtherModule);
    

### > .setUp( )
----

SetUp is a Main method. It run always when the father's module is called.

    SSP.MyModule.setUp();

### > .delegate( scope, method )
----

SetUp's a Main method, it run aways when the father module is called.

    SSP.delegate(scope, method);

### > .readModule( Module )
----

Using `SSP.readModule(Module);` you can run a module that's located in other module/part from your application. For example: 

    SSP.readModule(SSP.MyModule);
    
    SSP.readModule(SSP.MyOtherModule.Child);

### > .getByNamespace( "namespace" )
----

`SSP.getByNamespace( "namespace" )` is used to return a object module using your namespace in `string`. <br>
> Using this method you don't will run the module called, this module only return the object module and the features it.

    SSP.initModuleByNamespace("SSP.MyModule");
    
    // return - > Object {setUp: function, Child: function}



### > .applyByNamespace( "namespace" )
----

SetUp's a Main method, it run aways when the father module is called.

    SSP.getByNamespace("namespace");
    

### > .initModuleByNamespace( "nameSpace", params )
----

Using that method you will run the called module using `_namespace`.


    SSP.applyByNamespace("nameSpace", params);

    