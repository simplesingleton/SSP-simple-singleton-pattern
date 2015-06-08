 /**
 * SSP - The Simple Singleton Pattern | A solution to many problems
 * @author Dennis Calazans
 * @maintainer Rodolfo Dias
 * @version v0.1.0
 * @link http://simplesingletonpattern.com
 * @license BSD
 */
var SSP = SSP || {};

/**
 * SSP's Module Namespace
 * @type {String}
 */
SSP._nameSpace = "SSP";

/**
 * Method delegation
 *
 * Using this method,
 * you can create an anonymous function able to invoke a method
 * inside an determined scope
 *
 * @param  {Object} scope  Scope Object
 * @param  {function} method The method that will be invoked
 * @return {function}        Delegated method
 */
SSP.delegate = function(scope, method) {
  var argumentsLength = arguments.length, methodArguments, i;

  if(argumentsLength > 2) {
    methodArguments = [];

    for(i = 2; i < argumentsLength; i++) {
      methodArguments.push(arguments[i]);
    }

    return function() {
      method.apply(scope, methodArguments);
    }
  } else {
    return function() {
      method.apply(scope,arguments);
    };
  }
};

/**
 * Initialize all (arguments.length == 0) or several modules under SSP
 * @param  object [Module,[...]]
 * @return void
 */
SSP.init = function(Module) {
  var modulesLength = arguments.length;

  if(Module !== undefined && Module !== SSP) {
    SSP.setUp();
  }

  if(modulesLength === 0 || modulesLength === 1) {
    this.readModule(Module || SSP);
  } else if(modulesLength > 1) {
    SSP.readModule.apply(this, arguments);
  }
};

//Main method
SSP.setUp = function() {};

/**
 * Look for child Modules
 */
SSP.readModule = function(Module) {
  var node, i=0;

  if(arguments.length > 1) {
    for(;i<arguments.length;i++)
      SSP.readModule(arguments[i]);
    return;
  }

  if(typeof Module != "object")
    return false;

  if(Module.hasOwnProperty('setUp') && typeof Module.setUp == "function")
    Module.setUp();
  else
    return false;

  for(node in Module) {
    if(Module.hasOwnProperty(node) === true) {
      if(Module[node] !== null && typeof Module[node] == "object") {

        //Auxiliar function to recover parent Module
        Module[node]['parent'] = function() {
          return Module;
        };

        //Mudule nameSpace definition
        Module[node]['_nameSpace'] = (Module['_nameSpace'] || "SSP") + '.'+node;

        SSP.readModule(Module[node]);
      }
    }
  }
  return false;
};

/**
 * Call SSP.init method through a given namespace string
 * @param  {String} namespace Module's namespace
 * @return {Object}           null
 */
SSP.initModuleByNamespace = function(namespace) {
  var argumentsLength, iArguments, argumentsArray;

  argumentsArray = [];

  for(iArguments = 0; iArguments < argumentsLength; iArguments++)
    argumentsArray.push(SSP.getByNamespace(arguments[iArguments]));

  SSP.init.apply(this, argumentsArray);
}

/**
 * Return an object by a given namespace
 * @param  {String} namespace Target's namespace. Example: SSP.Audio._url
 * @return {Object}           Namespace's Target
 */
SSP.getByNamespace = function(namespace) {
  var spaces, spacesLength, iSpace, space, target;

  spaces = namespace.split(".");

  if(spaces.shift() != "SSP")
    return null;

  spacesLength = spaces.length;

  target = this;

  for(iSpace = 0; iSpace < spacesLength; iSpace++) {
    space = spaces[iSpace];
    if(target.hasOwnProperty(space))
      target = target[space];
  }
  return target;
}

/**
 * Invoke a method by it's namespace
 * @param  String nameSpace Method's namespace
 * @param  Array params   Array of parameters
 * @return object       Returned value of the method
 */
SSP.applyByNamespace = function(nameSpace, params) {
  var node, nodes, scopes, target, i;

  if(params !== undefined && params instanceof Array === false)
    params = [params];

  scopes = [window];
  nodes = nameSpace.split('.');

  for(i=0;i<nodes.length;i++) {
    node = nodes[i];

    if(scopes[i].hasOwnProperty(node))
      scopes.push(scopes[i][node]);
  }

  target = scopes.pop();

  if(typeof target === 'function') {
    return target.apply(scopes.pop(), params || []);
  } else {
    return target;
  }
}
