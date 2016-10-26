@Maslosoft.Sugar.implement = (parent, interfaceClass) ->
	check = () ->
		for index, name of objectKeys interfaceClass.prototype
			if typeof(interfaceClass.prototype[name]) is 'function'
				if typeof parent.prototype[name] isnt 'function'
					throw new Error "Class #{parent.name} implementing #{interfaceClass.name} must have #{name} method"
	# Need to check later, as prototype is not yet ready
	setTimeout check, 0