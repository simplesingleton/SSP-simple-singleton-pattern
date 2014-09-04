The Simple Singleton Pattern
---

![The Simple Singleton Pattern - A solution to many problems](https://raw.githubusercontent.com/simplesingleton/SSP-simple-singleton-pattern/master/images/simple-singleton-pattern-image.png)

## Team

Dennis Calazans | Leonardo Paiva | Rodolfo Dias | Thulio Philipe
:------------:  | :-------------: | :-------------: |  :-------------: |
<a href="https://github.com/denniscalazans">![Dennis Calazans](https://avatars2.githubusercontent.com/u/28112?v=2&s=128)</a> | <a href="https://github.com/leonardopaiva">![Leonardo Paiva](https://avatars2.githubusercontent.com/u/6975831?v=2&s=128)| <a href="https://github.com/rmdias">![Rodolfo Dias](https://avatars2.githubusercontent.com/u/2057971?v=2&s=128)</a> | <a href="https://github.com/thulioph">![Thulio Philipe](https://avatars2.githubusercontent.com/u/2343288?v=2&s=128)</a>|
[@denniscalazans](https://github.com/denniscalazans)  | [@leonardopaiva](https://github.com/leonardopaiva)|[@rmdias](https://github.com/rmdias)| [@thulioph](https://github.com/thulioph)



## What's it?


`Development > Organization > Good practices > Standards... ` <br><br>
SSP is a easy way of modularize and organize your projetc. Bringing the idea of OOP to JS, but of simple way.<br><br>
Using that you win:<br>

+ readability  <br>
+ Understanding of the parties  <br>
+ modularization <br>
+ reuse <br>
+ adaptability



## Examples

`Coming soon`


## SSP Usage

### Call the SSP file
```html
  <script src="js/SSP.js"></script>
```

### Creating a SSP Module
```javascript

// SSP.MyModule.js

var SSP = SSP || {};

SSP.MyModule = {
  setUp: function() {
    console.debug('My SSP module is runing!');
  }
}
```

### Creating a SSP Child Module
```javascript

// SSP.MyModule.Child.js

var SSP = SSP || {};
    SSP.MyModule = SSP.MyModule || {};

SSP.MyModule.Child = {
  setUp: function() {
    console.debug('My SSP module is runing!');
  }
}
```
## Incorporating Files
```html
<script src="js/SSP.js"></script>
<script src="js/SSP.MyModule.js"></script>
<script src="js/SSP.MyModule.Child.js"></script>
<script>SSP.init();</script>

```

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
```javascript

var SSP = SSP || {};

SSP.MyModule = {
  setUp: function() {
    var self = this;
  
    console.debug(self._nameSpace);
  
    // return -> 'SSP.MyModule'
  }
}
```

### > .init( )
----

This method initialize all modules from your application. 
```javascript

SSP.init();
```   
<br>
Also is possible initialize a module per time calling by module name, and multiples modules using commas.
```javascript

SSP.init(SSP.MyModule);

SSP.init(SSP.MyModule, SSP.MyOtherModule);
   
```
### > .setUp( )
----

SetUp is a Main method. It run always when the father's module is called.
```javascript

SSP.MyModule.setUp();
```
### > .delegate( scope, method )
----

Using this method, you can create an anonymous function able to invoke a method inside an determined scope.
```javascript

SSP.delegate(scope, method);
```

### > .readModule( Module )
----

Using `SSP.readModule(Module);` you can run a module that's located in other module/part from your application. For example: 
```javascript

SSP.readModule(SSP.MyModule);

```

### > .getByNamespace( 'namespace' )
----

`SSP.getByNamespace('namespace')` is used to return a object module using your namespace in `string`. <br>
Using this method you don't will run the module called, this module only return the object module and the features it.
    
```javascript
SSP.getByNamespace('SSP.MyModule');

return - > Object {setUp: function, Child: function}
```

### > .applyByNamespace( 'namespace' )
----

Using `SSP.applyByNamespace('namespace');` you can run a module that's located in other module/part from your application, but using `_namespace`. For example: 


```javascript
SSP.applyByNamespace('SSP.MyModule');
```

### > .initModuleByNamespace( 'nameSpace' )
----

Using that method you will run the called module using `_namespace`.

```javascript
SSP.initModuleByNamespace('SSP.MyModule');
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
    
