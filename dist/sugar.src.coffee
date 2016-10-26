if not @Maslosoft
	@Maslosoft = {}
if not @Maslosoft.Sugar
	@Maslosoft.Sugar = {}
if Object.keys
  objectKeys = Object.keys
else
  objectKeys = do ->
    'use strict'
    hasOwnProperty = Object::hasOwnProperty
    hasDontEnumBug = !{ toString: null }.propertyIsEnumerable('toString')
    dontEnums = [
      'toString'
      'toLocaleString'
      'valueOf'
      'hasOwnProperty'
      'isPrototypeOf'
      'propertyIsEnumerable'
      'constructor'
    ]
    dontEnumsLength = dontEnums.length
    (obj) ->
      if typeof obj != 'object' and (typeof obj != 'function' or obj == null)
        throw new TypeError('Object.keys called on non-object')
      result = []
      prop = undefined
      i = undefined
      for prop of obj
        `prop = prop`
        if hasOwnProperty.call(obj, prop)
          result.push prop
      if hasDontEnumBug
        i = 0
        while i < dontEnumsLength
          if hasOwnProperty.call(obj, dontEnums[i])
            result.push dontEnums[i]
          i++
      result
@Maslosoft.Sugar.abstract = () ->
	throw new Error 'This method is abstract'
@Maslosoft.Sugar.implement = (parent, interfaceClass) ->
	check = () ->
		for index, name of objectKeys interfaceClass.prototype
			if typeof(interfaceClass.prototype[name]) is 'function'
				if typeof parent.prototype[name] isnt 'function'
					throw new Error "Class #{parent.name} implementing #{interfaceClass.name} must have #{name} method"
	# Need to check later, as prototype is not yet ready
	setTimeout check, 0
@Maslosoft.Sugar.mixin = (parent, trait) ->
	parentName = parent.name
	for index, name of objectKeys trait.prototype
		parent.prototype[name] = trait.prototype[name]