(function() {
  var MyMixin, abstract, implement, makeTest, mixin, objectKeys, runTest, runTest2;

  if (!this.Maslosoft) {
    this.Maslosoft = {};
  }

  if (!this.Maslosoft.Sugar) {
    this.Maslosoft.Sugar = {};
  }

  if (Object.keys) {
    objectKeys = Object.keys;
  } else {
    objectKeys = (function() {
      'use strict';
      var dontEnums, dontEnumsLength, hasDontEnumBug, hasOwnProperty;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      hasDontEnumBug = !{
        toString: null
      }.propertyIsEnumerable('toString');
      dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];
      dontEnumsLength = dontEnums.length;
      return function(obj) {
        var i, prop, result;
        if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
          throw new TypeError('Object.keys called on non-object');
        }
        result = [];
        prop = void 0;
        i = void 0;
        for (prop in obj) {
          prop = prop;
          if (hasOwnProperty.call(obj, prop)) {
            result.push(prop);
          }
        }
        if (hasDontEnumBug) {
          i = 0;
          while (i < dontEnumsLength) {
            if (hasOwnProperty.call(obj, dontEnums[i])) {
              result.push(dontEnums[i]);
            }
            i++;
          }
        }
        return result;
      };
    })();
  }

  this.Maslosoft.Sugar.abstract = function() {
    throw new Error('This method is abstract');
  };

  this.Maslosoft.Sugar.implement = function(parent, interfaceClass) {
    var check;
    check = function() {
      var index, name, ref, results;
      ref = objectKeys(interfaceClass.prototype);
      results = [];
      for (index in ref) {
        name = ref[index];
        if (typeof interfaceClass.prototype[name] === 'function') {
          if (typeof parent.prototype[name] !== 'function') {
            throw new Error("Class " + parent.name + " implementing " + interfaceClass.name + " must have " + name + " method");
          } else {
            results.push(void 0);
          }
        } else {
          results.push(void 0);
        }
      }
      return results;
    };
    return setTimeout(check, 0);
  };

  this.Maslosoft.Sugar.mixin = function(parent, trait) {
    var index, name, parentName, ref, results;
    parentName = parent.name;
    ref = objectKeys(trait.prototype);
    results = [];
    for (index in ref) {
      name = ref[index];
      results.push(parent.prototype[name] = trait.prototype[name]);
    }
    return results;
  };

  mixin = Maslosoft.Sugar.mixin;

  implement = Maslosoft.Sugar.implement;

  abstract = Maslosoft.Sugar.abstract;

  MyMixin = (function() {
    function MyMixin() {}

    MyMixin.prototype.methodA = function() {};

    MyMixin.prototype.methodB = function() {};

    return MyMixin;

  })();

  this.MyMixedClass = (function() {
    function MyMixedClass() {}

    mixin(MyMixedClass, MyMixin);

    return MyMixedClass;

  })();

  this.MyDirectClass = (function() {
    function MyDirectClass() {}

    MyDirectClass.prototype.methodA = function() {};

    MyDirectClass.prototype.methodB = function() {};

    return MyDirectClass;

  })();

  makeTest = function(name) {
    var run;
    run = function() {
      var i, iterations, o;
      iterations = 100000;
      console.time(name);
      i = 0;
      while (i < iterations) {
        o = new this[name];
        o.methodB();
        i++;
      }
      return console.timeEnd(name);
    };
    return setTimeout(run, 200);
  };

  runTest = function() {
    console.log("Test one");
    makeTest('MyDirectClass');
    return makeTest('MyMixedClass');
  };

  runTest2 = function() {
    console.log("Test two");
    makeTest('MyMixedClass');
    return makeTest('MyDirectClass');
  };

  console.log('Preparing tests...');

  setTimeout(runTest, 1000);

  setTimeout(runTest2, 2000);

}).call(this);
