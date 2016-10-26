@Maslosoft.Sugar.mixin = (parent, trait) ->
	parentName = parent.name
	for index, name of objectKeys trait.prototype
		parent.prototype[name] = trait.prototype[name]