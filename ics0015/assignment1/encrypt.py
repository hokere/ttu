from caesar import encrypt

shift = 5

with open('plaintext.txt', 'r') as myfile:
    filecontents = myfile.read()

print("caesar encrypt with key %d" % (shift))
print("Input")
print("--------------------")
print(filecontents)

print("\nEncrypted output")
print("--------------------")
print(encrypt(filecontents, shift))
