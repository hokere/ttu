'''
The answer is Singleton design pattern.
This provides always one active instance of a class
When a new instance is created, it overwrites/changes/replaces existing one
'''

class ParentClass:
	SharedState = {}
	def __init__(self):
		self.__dict__ = self.SharedState

class MainClass(ParentClass):
	def __init__(self, arg):
		ParentClass.__init__(self)
		self.name = arg

	def __str__(self):
		return self.name

# Following is to show it works

instance_1 = MainClass('computer')
print(instance_1) # prints computer

instance_2 = MainClass('phone')
print(instance_2) # prints phone
print(instance_1) # also prints phone because instance_2 overrides instance_1

instance_3 = MainClass('iot')
print(instance_3) # prints iot
print(instance_1) # also prints phone because instance_3 overrides instance_1
print(instance_2) # also prints phone because instance_3 overrides instance_2
