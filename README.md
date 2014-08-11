The Simple Singleton Pattern
---
> Created by [@denniscalazans](https://github.com/denniscalazans)


## What's it?


Comming 


## Available Methods

  * [init](#-init-)
  * [setUp](#-setup-)
  * [delegate](#-delegate-)
  * [readModule](#-readmodule-)
  * [getByNamespace](#-getbynamespace-)
  * [applyByNamespace](#-applybynamespace-)
  * [initModuleByNamespace](#-initmodulebynamespace-)
  

## Team

Dennis Calazans | Rodolfo Dias 
:------------:  | :-------------: |
<a href="#">![Mou icon](http://mouapp.com/Mou_128.png)</a> | <a href="#">![Mou icon](http://mouapp.com/Mou_128.png)</a>|
[@denniscalazans](https://github.com/denniscalazans)   | [@rmdias](https://github.com/rmdias)|


<br>

## Methods
  
### > .init( )
----

This method initialize all modules from your application. 

    SSP.init();
    
<br>
Also is possible initialize a module per time, or multiples using commas.

    SSP.init(SSP.MyModule());
    
    SSP.init(SSP.MyModule(), SSP.MyOtherModule());
    

### > .setUp( )
----

SetUp is a Main method. It run always when the father's module is called.


    var SSP = SSP || {};
    
    SSP.MyModule = {
      setUp: function() {
        console.debug("My SSP module is runing!");
      }
    }

### > .delegate( )
----

SetUp's a Main method, it run aways when the father module is called.

    var SSP = SSP || {};
    
    SSP.MyModule = {
      setUp: function() {
        console.debug("My SSP module is runing!");
      }
    }

### > .readModule( )
----

SetUp's a Main method, it run aways when the father module is called.

    var SSP = SSP || {};
    
    SSP.MyModule = {
      setUp: function() {
        console.debug("My SSP module is runing!");
      }
    }

### > .getByNamespace( )
----

SetUp's a Main method, it run aways when the father module is called.

    var SSP = SSP || {};
    
    SSP.MyModule = {
      setUp: function() {
        console.debug("My SSP module is runing!");
      }
    }


### > .applyByNamespace( )
----

SetUp's a Main method, it run aways when the father module is called.

    var SSP = SSP || {};
    
    SSP.MyModule = {
      setUp: function() {
        console.debug("My SSP module is runing!");
      }
    }
  
### > .initModuleByNamespace( )
----

SetUp's a Main method, it run aways when the father module is called.

    var SSP = SSP || {};
    
    SSP.MyModule = {
      setUp: function() {
        console.debug("My SSP module is runing!");
      }
    }
 
