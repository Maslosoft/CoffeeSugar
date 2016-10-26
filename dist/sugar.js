(function() {
  var objectKeys;

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

}).call(this);

//# sourceMappingURL=sugar.js.map
