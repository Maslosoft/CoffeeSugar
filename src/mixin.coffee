if not @Maslosoft
	@Maslosoft = {}
	
if not @Maslosoft.Sugar
	@Maslosoft.Sugar = {}

@Maslosoft.Sugar.mixin = (parent, trait) ->
	proto = parent.prototype
	console.log parent.prototype['id']
	# console.log parent.prototype.vm
	# return
	# console.log Object.keys trait.prototype
	parentName = parent.name
	console.log parentName
	for index, name of Object.keys trait.prototype
		console.log  proto[name]
		if typeof(proto[name]) isnt 'undefined'
			throw new Error "Class #{parent.constructor.name} already defines #{name}"
		parent.prototype[name] = trait.prototype[name]
		console.log name