The Simple Singleton Pattern
---


## What's it?


Comming 


## Available Methods

  * [init]('s')
  * [setUp]('')
  * [delegate]('')
  * [readModule]('')
  * [getByNamespace]('')
  * [applyByNamespace]('')
  * [initModuleByNamespace]('')
  
<br>

## Team

A simple table looks like this:

Dennis Calazans | Rodolfo Dias 
------------  | ------------- |
![Mou icon](http://mouapp.com/Mou_128.png) | ![Mou icon](http://mouapp.com/Mou_128.png)|
[@dennis]()   | [@rmdias]()|


<br>

## Methods
  
### > .init( )

<br>

This method initialize all modules from your application. 

    SSP.init();
    
<br>
Also is possible initialize a once module or multiples using comas.

    SSP.init(SSP.MyModule());
    
    SSP.init(SSP.MyModule(), SSP.MyOtherModule());
    

### > .setUp( )

<br>

SetUp's a Main method, it run aways when the father module is called.

  var SSP = SSP || {};
  
  SSP.MyModule = {
    setUp: function() {
      console.debug("My SSP module is runing!");
    }
  }

### > .delegate( )

<br>

SetUp's a Main method, it run aways when the father module is called.

  var SSP = SSP || {};
  
  SSP.MyModule = {
    setUp: function() {
      console.debug("My SSP module is runing!");
    }
  }

### > .readModule( )

<br>

SetUp's a Main method, it run aways when the father module is called.

  var SSP = SSP || {};
  
  SSP.MyModule = {
    setUp: function() {
      console.debug("My SSP module is runing!");
    }
  }

### > .getByNamespace( )

<br>

SetUp's a Main method, it run aways when the father module is called.

  var SSP = SSP || {};
  
  SSP.MyModule = {
    setUp: function() {
      console.debug("My SSP module is runing!");
    }
  }


### > .applyByNamespace( )

<br>

SetUp's a Main method, it run aways when the father module is called.

  var SSP = SSP || {};
  
  SSP.MyModule = {
    setUp: function() {
      console.debug("My SSP module is runing!");
    }
  }
  
### > .initModuleByNamespace( )

<br>

SetUp's a Main method, it run aways when the father module is called.

  var SSP = SSP || {};
  
  SSP.MyModule = {
    setUp: function() {
      console.debug("My SSP module is runing!");
    }
  }
 
