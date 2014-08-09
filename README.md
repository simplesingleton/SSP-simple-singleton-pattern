The Simple Singleton Pattern
---


## What's it?


Comming 


## Available Methods

  * [init]('https://github.com/simplesingleton/SSP-simple-singleton-pattern#team')
  * [setUp]('https://github.com/simplesingleton/SSP-simple-singleton-pattern#team')
  * [delegate]('https://github.com/simplesingleton/SSP-simple-singleton-pattern#team')
  * [readModule]('https://github.com/simplesingleton/SSP-simple-singleton-pattern#team')
  * [getByNamespace]('https://github.com/simplesingleton/SSP-simple-singleton-pattern#team')
  * [applyByNamespace]('https://github.com/simplesingleton/SSP-simple-singleton-pattern#team')
  * [initModuleByNamespace]('https://github.com/simplesingleton/SSP-simple-singleton-pattern#team')
  

## Team

A simple table looks like this:

Dennis Calazans | Rodolfo Dias 
------------  | ------------- |
<a href="#">![Mou icon](http://mouapp.com/Mou_128.png)</a> | <a href="#">![Mou icon](http://mouapp.com/Mou_128.png)</a>|
[@dennis]()   | [@rmdias]()|


<br>

## Methods
  
### > .init( )
----

This method initialize all modules from your application. 

    SSP.init();
    
<br>
Also is possible initialize a once module or multiples using comas.

    SSP.init(SSP.MyModule());
    
    SSP.init(SSP.MyModule(), SSP.MyOtherModule());
    

### > .setUp( )
----

SetUp's a Main method, it run aways when the father module is called.

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
 
