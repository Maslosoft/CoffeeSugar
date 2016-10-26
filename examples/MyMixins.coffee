mixin = Maslosoft.Sugar.mixin
implement = Maslosoft.Sugar.implement
abstract = Maslosoft.Sugar.abstract

class MyMixin
	methodA: () ->
		

	methodB: () ->
		
class @MyMixedClass
	mixin this, MyMixin

class @MyDirectClass
	methodA: () ->
		

	methodB: () ->


makeTest = (name) ->
	run = () ->
		iterations = 100000
		console.time name
		i = 0
		while i < iterations
			o = new @[name]
			o.methodB()
			i++
		console.timeEnd name
	setTimeout run, 200

runTest = () ->
	console.log "Test one"
	makeTest 'MyDirectClass'
	makeTest 'MyMixedClass'

runTest2 = () ->
	console.log "Test two"
	makeTest 'MyMixedClass'
	makeTest 'MyDirectClass'

console.log 'Preparing tests...'
setTimeout runTest, 1000
setTimeout runTest2, 2000